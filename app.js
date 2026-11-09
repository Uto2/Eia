/**
 * APP ENGINE: Pagtatanong at Pagmumungkahi Review Website
 */

class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem('sound_enabled') !== 'false';
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('sound_enabled', this.enabled);
    return this.enabled;
  }

  playPop() {
    if (!this.enabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {
      // Audio fallback silent
    }
  }

  playFlip() {
    if (!this.enabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(560, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch (e) {}
  }

  playCorrect() {
    if (!this.enabled) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc2.frequency.setValueAtTime(659.25, now + 0.08); // E5

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc1.stop(now + 0.1);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.25);
    } catch (e) {}
  }

  playIncorrect() {
    if (!this.enabled) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(190, now + 0.1);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.22);
    } catch (e) {}
  }
}

// Global App State
const AppState = {
  activeTab: 'notes',
  sound: new SoundEffects(),
  theme: localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  
  // Progress tracking
  readSections: new Set(JSON.parse(localStorage.getItem('read_sections') || '[]')),
  masteredCards: new Set(JSON.parse(localStorage.getItem('mastered_cards') || '[]')),
  bestQuizScore: parseInt(localStorage.getItem('best_quiz_score') || '0', 10),

  // Flashcards state
  flashcardsList: [...FLASHCARDS_DATA],
  currentCardIndex: 0,
  isCardFlipped: false,

  // Quiz state
  quizMode: 'practice', // 'practice' | 'exam'
  quizCategory: 'all',  // 'all' | 'mc' | 'id' | 'tf' | 'Sitwasyonal'
  quizUserAnswers: {},  // { [id]: answer }
  quizSubmitted: false,
  showOnlyMistakes: false,

  saveProgress() {
    localStorage.setItem('read_sections', JSON.stringify([...this.readSections]));
    localStorage.setItem('mastered_cards', JSON.stringify([...this.masteredCards]));
    localStorage.setItem('best_quiz_score', this.bestQuizScore.toString());
    this.updateOverallProgress();
  },

  updateOverallProgress() {
    const totalNotes = STUDY_NOTES_DATA.length;
    const notesPercent = totalNotes > 0 ? (this.readSections.size / totalNotes) * 100 : 0;

    const totalCards = FLASHCARDS_DATA.length;
    const cardsPercent = totalCards > 0 ? (this.masteredCards.size / totalCards) * 100 : 0;

    const totalQuiz = QUIZ_QUESTIONS.length;
    const quizPercent = (this.bestQuizScore / totalQuiz) * 100;

    // Weighted progress: 25% notes, 35% flashcards, 40% quiz
    const overall = Math.round((notesPercent * 0.25) + (cardsPercent * 0.35) + (quizPercent * 0.40));

    const bar = document.getElementById('overall-progress-bar');
    const text = document.getElementById('overall-progress-text');
    if (bar) bar.style.width = `${Math.min(overall, 100)}%`;
    if (text) text.innerText = `${Math.min(overall, 100)}%`;
  }
};

/* ==========================================================
   UI CONTROLLERS & INITIALIZATION
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSoundToggle();
  initNavigationTabs();
  renderStudyNotes();
  initFlashcards();
  initBuilder();
  initQuiz();
  AppState.updateOverallProgress();

  // Keyboard navigation for flashcards
  document.addEventListener('keydown', (e) => {
    if (AppState.activeTab !== 'flashcards') return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      flipFlashcard();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextFlashcard();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevFlashcard();
    } else if (e.key.toLowerCase() === 'm') {
      e.preventDefault();
      toggleMasterCurrentCard();
    }
  });
});

/* ==========================================================
   THEME & SOUND TOGGLES
   ========================================================== */

function initTheme() {
  const html = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');

  function applyTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
      if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-amber-400';
    } else {
      html.classList.remove('dark');
      if (themeIcon) themeIcon.className = 'fa-solid fa-moon text-slate-600';
    }
    localStorage.setItem('theme', theme);
    AppState.theme = theme;
  }

  applyTheme(AppState.theme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      AppState.sound.playPop();
      const newTheme = AppState.theme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }
}

function initSoundToggle() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');

  function updateIcon() {
    if (!soundIcon) return;
    if (AppState.sound.enabled) {
      soundIcon.className = 'fa-solid fa-volume-high text-emerald-500';
    } else {
      soundIcon.className = 'fa-solid fa-volume-xmark text-slate-400';
    }
  }

  updateIcon();

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const isEnabled = AppState.sound.toggle();
      updateIcon();
      showToast(isEnabled ? 'Pinarinig ang mga tunog 🔊' : 'Pinatahimik ang tunog 🔇');
    });
  }
}

function showToast(message) {
  const existing = document.getElementById('app-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'app-toast';
  toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-semibold shadow-2xl flex items-center gap-2 border border-slate-700 dark:border-slate-300 animate-toast';
  toast.innerHTML = `<span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}

/* ==========================================================
   TAB NAVIGATION
   ========================================================== */

function initNavigationTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      AppState.sound.playPop();
      const target = tab.dataset.tab;
      AppState.activeTab = target;

      tabs.forEach(t => {
        const isActive = t.dataset.tab === target;
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
        if (isActive) {
          t.className = 'nav-tab flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-white text-blue-700 shadow-sm dark:bg-slate-800 dark:text-blue-400 border border-slate-200/70 dark:border-slate-700 transition-all';
        } else {
          t.className = 'nav-tab flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/50 transition-all';
        }
      });

      tabPanes.forEach(pane => {
        if (pane.id === `${target}-tab`) {
          pane.classList.remove('hidden');
        } else {
          pane.classList.add('hidden');
        }
      });

      // Scroll smoothly to top of view
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

/* ==========================================================
   MODULE 1: STUDY NOTES
   ========================================================== */

function renderStudyNotes() {
  const container = document.getElementById('study-notes-container');
  const searchInput = document.getElementById('notes-search-input');
  const expandAllBtn = document.getElementById('notes-expand-all');
  const collapseAllBtn = document.getElementById('notes-collapse-all');

  function render(query = '') {
    if (!container) return;
    const filter = query.trim().toLowerCase();

    const filtered = STUDY_NOTES_DATA.filter(item => {
      if (!filter) return true;
      return item.title.toLowerCase().includes(filter) ||
             item.subtitle.toLowerCase().includes(filter) ||
             item.content.toLowerCase().includes(filter);
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
          <i class="fa-solid fa-magnifying-glass text-4xl text-slate-400 mb-3 block"></i>
          <h4 class="text-base font-bold text-slate-700 dark:text-slate-300">Walang nahanap na paksa para sa "${query}"</h4>
          <p class="text-sm text-slate-500 mt-1">Subukang maghanap gamit ang mga salitang tulad ng "Modals", "Barrelled", "3 E's", o "Analytical".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((item, index) => {
      const isRead = AppState.readSections.has(item.id);
      return `
        <div class="accordion-item bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm overflow-hidden transition-all duration-200 hover:border-blue-400 dark:hover:border-blue-600 mb-4" data-id="${item.id}">
          <button type="button" class="accordion-header w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            <div class="flex items-center gap-4">
              <div class="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-lg font-bold shadow-sm shrink-0">
                <i class="fa-solid ${item.icon}"></i>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${item.badgeColor}">${item.badge}</span>
                  ${isRead ? '<span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1"><i class="fa-solid fa-check-circle"></i> Nabasa na</span>' : ''}
                </div>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">${item.title}</h3>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">${item.subtitle}</p>
              </div>
            </div>
            <div class="accordion-chevron w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 flex items-center justify-center transition-transform duration-300 shrink-0 ml-2">
              <i class="fa-solid fa-chevron-down text-xs"></i>
            </div>
          </button>
          <div class="accordion-content hidden px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/60">
            ${item.content}
          </div>
        </div>
      `;
    }).join('');

    // Attach listeners
    container.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        AppState.sound.playPop();
        const item = header.closest('.accordion-item');
        const content = item.querySelector('.accordion-content');
        const chevron = item.querySelector('.accordion-chevron');
        const itemId = item.dataset.id;

        const isCurrentlyHidden = content.classList.contains('hidden');

        if (isCurrentlyHidden) {
          content.classList.remove('hidden');
          chevron.style.transform = 'rotate(180deg)';
          // Mark as read
          if (!AppState.readSections.has(itemId)) {
            AppState.readSections.add(itemId);
            AppState.saveProgress();
            // Re-render subtly or update badge
            const badgeSpan = header.querySelector('.text-emerald-600');
            if (!badgeSpan) {
              const badgeContainer = header.querySelector('.flex.items-center.gap-2');
              const readTag = document.createElement('span');
              readTag.className = 'text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1';
              readTag.innerHTML = '<i class="fa-solid fa-check-circle"></i> Nabasa na';
              badgeContainer.appendChild(readTag);
            }
          }
        } else {
          content.classList.add('hidden');
          chevron.style.transform = 'rotate(0deg)';
        }
      });
    });
  }

  render();

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      render(e.target.value);
    });
  }

  if (expandAllBtn) {
    expandAllBtn.addEventListener('click', () => {
      AppState.sound.playPop();
      container.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('hidden'));
      container.querySelectorAll('.accordion-chevron').forEach(ch => ch.style.transform = 'rotate(180deg)');
      STUDY_NOTES_DATA.forEach(n => AppState.readSections.add(n.id));
      AppState.saveProgress();
      render(searchInput ? searchInput.value : '');
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener('click', () => {
      AppState.sound.playPop();
      container.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));
      container.querySelectorAll('.accordion-chevron').forEach(ch => ch.style.transform = 'rotate(0deg)');
    });
  }
}

/* ==========================================================
   MODULE 2: FLASHCARDS (Active Recall)
   ========================================================== */

function initFlashcards() {
  updateFlashcardView();

  const cardElement = document.getElementById('flashcard-card');
  const prevBtn = document.getElementById('fc-prev-btn');
  const nextBtn = document.getElementById('fc-next-btn');
  const shuffleBtn = document.getElementById('fc-shuffle-btn');
  const masterBtn = document.getElementById('fc-master-btn');
  const resetMasteredBtn = document.getElementById('fc-reset-mastered-btn');

  if (cardElement) {
    cardElement.addEventListener('click', (e) => {
      // Don't flip if user clicked a button inside
      if (e.target.closest('button')) return;
      flipFlashcard();
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', prevFlashcard);
  if (nextBtn) nextBtn.addEventListener('click', nextFlashcard);
  if (shuffleBtn) shuffleBtn.addEventListener('click', shuffleFlashcards);
  if (masterBtn) masterBtn.addEventListener('click', toggleMasterCurrentCard);
  if (resetMasteredBtn) resetMasteredBtn.addEventListener('click', resetMasteredCards);
}

function flipFlashcard() {
  AppState.sound.playFlip();
  const inner = document.getElementById('flashcard-inner');
  if (!inner) return;
  AppState.isCardFlipped = !AppState.isCardFlipped;
  if (AppState.isCardFlipped) {
    inner.classList.add('flipped');
  } else {
    inner.classList.remove('flipped');
  }
}

function updateFlashcardView() {
  const card = AppState.flashcardsList[AppState.currentCardIndex];
  if (!card) return;

  const inner = document.getElementById('flashcard-inner');
  if (inner) {
    inner.classList.remove('flipped');
    AppState.isCardFlipped = false;
  }

  // Update card elements
  const topicBadge = document.getElementById('fc-topic-badge');
  const term = document.getElementById('fc-term');
  const definition = document.getElementById('fc-definition');
  const hint = document.getElementById('fc-hint');
  const countText = document.getElementById('fc-count-text');
  const masteredBadge = document.getElementById('fc-mastered-badge');
  const masterBtn = document.getElementById('fc-master-btn');
  const masteredBar = document.getElementById('fc-mastered-bar');
  const masteredCountText = document.getElementById('fc-mastered-count');

  if (topicBadge) topicBadge.innerText = card.topic;
  if (term) term.innerText = card.term;
  if (definition) definition.innerText = card.definition;
  if (hint) hint.innerText = card.hint;
  if (countText) countText.innerText = `Kard ${AppState.currentCardIndex + 1} sa ${AppState.flashcardsList.length}`;

  const isMastered = AppState.masteredCards.has(card.id);
  if (masteredBadge) {
    if (isMastered) {
      masteredBadge.classList.remove('hidden');
    } else {
      masteredBadge.classList.add('hidden');
    }
  }

  if (masterBtn) {
    if (isMastered) {
      masterBtn.className = 'px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 text-white hover:bg-amber-600 transition flex items-center gap-2 shadow-sm';
      masterBtn.innerHTML = '<i class="fa-solid fa-star"></i> Mastered Na!';
    } else {
      masterBtn.className = 'px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-amber-100 hover:text-amber-700 dark:hover:bg-slate-600 transition flex items-center gap-2';
      masterBtn.innerHTML = '<i class="fa-regular fa-star"></i> Mark As Mastered';
    }
  }

  const masteredTotal = AppState.masteredCards.size;
  const totalDeck = FLASHCARDS_DATA.length;
  if (masteredCountText) masteredCountText.innerText = `${masteredTotal} / ${totalDeck} Mastered`;
  if (masteredBar) masteredBar.style.width = `${(masteredTotal / totalDeck) * 100}%`;
}

function nextFlashcard() {
  AppState.sound.playPop();
  if (AppState.currentCardIndex < AppState.flashcardsList.length - 1) {
    AppState.currentCardIndex++;
  } else {
    AppState.currentCardIndex = 0; // loop back
  }
  updateFlashcardView();
}

function prevFlashcard() {
  AppState.sound.playPop();
  if (AppState.currentCardIndex > 0) {
    AppState.currentCardIndex--;
  } else {
    AppState.currentCardIndex = AppState.flashcardsList.length - 1; // loop to last
  }
  updateFlashcardView();
}

function shuffleFlashcards() {
  AppState.sound.playPop();
  for (let i = AppState.flashcardsList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [AppState.flashcardsList[i], AppState.flashcardsList[j]] = [AppState.flashcardsList[j], AppState.flashcardsList[i]];
  }
  AppState.currentCardIndex = 0;
  updateFlashcardView();
  showToast('Nabalasa na ang mga flashcard! 🔀');
}

function toggleMasterCurrentCard() {
  const card = AppState.flashcardsList[AppState.currentCardIndex];
  if (!card) return;

  if (AppState.masteredCards.has(card.id)) {
    AppState.masteredCards.delete(card.id);
    showToast('Inalis sa listahan ng Mastered.');
  } else {
    AppState.sound.playCorrect();
    AppState.masteredCards.add(card.id);
    showToast('Magaling! Minarkahan bilang Mastered ⭐');
  }

  AppState.saveProgress();
  updateFlashcardView();
}

function resetMasteredCards() {
  if (confirm('Nais mo bang i-reset ang lahat ng minarkahang Mastered cards?')) {
    AppState.sound.playPop();
    AppState.masteredCards.clear();
    AppState.saveProgress();
    updateFlashcardView();
    showToast('Na-reset na ang mga minarkahang kard.');
  }
}

/* ==========================================================
   MODULE 3: INTERACTIVE BUILDER (3-Pillar & Fix-It)
   ========================================================== */

function initBuilder() {
  const expressionSelect = document.getElementById('builder-expression-select');
  const ideyaInput = document.getElementById('builder-ideya-input');
  const paliwanagInput = document.getElementById('builder-paliwanag-input');
  const batayanInput = document.getElementById('builder-batayan-input');

  const previewOutput = document.getElementById('builder-preview-output');
  const copyBtn = document.getElementById('builder-copy-btn');
  const clearBtn = document.getElementById('builder-clear-btn');
  const presetsContainer = document.getElementById('builder-presets-container');

  function updatePreview() {
    const expr = expressionSelect ? expressionSelect.value : '';
    const ideya = ideyaInput ? ideyaInput.value.trim() : '';
    const paliwanag = paliwanagInput ? paliwanagInput.value.trim() : '';
    const batayan = batayanInput ? batayanInput.value.trim() : '';

    // Update Checklist badges
    const chkExpr = document.getElementById('chk-expr');
    const chkIdeya = document.getElementById('chk-ideya');
    const chkPaliwanag = document.getElementById('chk-paliwanag');
    const chkBatayan = document.getElementById('chk-batayan');
    const qualityScore = document.getElementById('builder-quality-badge');

    let completedPillars = 0;
    if (expr) { completedPillars++; setCheckState(chkExpr, true); } else { setCheckState(chkExpr, false); }
    if (ideya) { completedPillars++; setCheckState(chkIdeya, true); } else { setCheckState(chkIdeya, false); }
    if (paliwanag) { completedPillars++; setCheckState(chkPaliwanag, true); } else { setCheckState(chkPaliwanag, false); }
    if (batayan) { completedPillars++; setCheckState(chkBatayan, true); } else { setCheckState(chkBatayan, false); }

    if (qualityScore) {
      if (completedPillars === 4) {
        qualityScore.className = 'px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 flex items-center gap-1.5';
        qualityScore.innerHTML = '<i class="fa-solid fa-award"></i> Antas A+: Kumpleto at Mabisang Mungkahi';
      } else if (completedPillars >= 2) {
        qualityScore.className = 'px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 flex items-center gap-1.5';
        qualityScore.innerHTML = `<i class="fa-solid fa-hourglass-half"></i> Bahagyang Buo (${completedPillars}/4 Haligi)`;
      } else {
        qualityScore.className = 'px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 flex items-center gap-1.5';
        qualityScore.innerHTML = '<i class="fa-solid fa-pen-ruler"></i> Nagsisimula Pa Lamang';
      }
    }

    if (!expr && !ideya && !paliwanag && !batayan) {
      if (previewOutput) {
        previewOutput.innerHTML = `
          <div class="text-center py-8 text-slate-400 dark:text-slate-500 italic">
            <i class="fa-regular fa-comment-dots text-3xl mb-2 block"></i>
            Pumili ng panimulang ekspresyon at punan ang Ideya, Paliwanag, at Batayan sa kaliwa upang makita ang real-time na mungkahi rito...
          </div>
        `;
      }
      return;
    }

    const styledExpr = expr ? `<span class="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 font-bold px-1.5 py-0.5 rounded cursor-help" title="Ekspresyong Gramatikal / Panimula">${expr}</span> ` : '';
    const styledIdeya = ideya ? `<span class="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 font-medium px-1.5 py-0.5 rounded cursor-help" title="Unang Haligi: Ideya / Proposal">${ideya}</span> ` : '<span class="text-slate-400 italic">[Ideya]</span> ';
    const styledPaliwanag = paliwanag ? `<span class="bg-violet-100 dark:bg-violet-900/50 text-violet-800 dark:text-violet-300 font-medium px-1.5 py-0.5 rounded cursor-help" title="Ikalawang Haligi: Paliwanag / Rationale">${paliwanag}</span>, ` : '<span class="text-slate-400 italic">[Paliwanag]</span>, ';
    const styledBatayan = batayan ? `<span class="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 font-medium px-1.5 py-0.5 rounded cursor-help" title="Ikatlong Haligi: Batayan / Evidence">${batayan}</span>.` : '<span class="text-slate-400 italic">[Batayan]</span>.';

    if (previewOutput) {
      previewOutput.innerHTML = `
        <div class="text-base sm:text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          "${styledExpr}${styledIdeya}${styledPaliwanag}${styledBatayan}"
        </div>
      `;
    }
  }

  function setCheckState(el, active) {
    if (!el) return;
    if (active) {
      el.className = 'w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs';
      el.innerHTML = '<i class="fa-solid fa-check"></i>';
    } else {
      el.className = 'w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-400 flex items-center justify-center text-xs';
      el.innerHTML = '<i class="fa-solid fa-minus"></i>';
    }
  }

  // Attach input events
  [expressionSelect, ideyaInput, paliwanagInput, batayanInput].forEach(inp => {
    if (inp) inp.addEventListener('input', updatePreview);
    if (inp) inp.addEventListener('change', updatePreview);
  });

  // Render presets
  if (presetsContainer) {
    presetsContainer.innerHTML = BUILDER_PRESETS.map((preset, idx) => `
      <button type="button" class="preset-btn text-left p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all group" data-idx="${idx}">
        <span class="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
          <i class="fa-solid fa-sparkles"></i> Halimbawa ${idx + 1}
        </span>
        <h5 class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">${preset.title}</h5>
      </button>
    `).join('');

    presetsContainer.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        AppState.sound.playPop();
        const preset = BUILDER_PRESETS[parseInt(btn.dataset.idx, 10)];
        if (preset) {
          if (expressionSelect) expressionSelect.value = preset.expression;
          if (ideyaInput) ideyaInput.value = preset.ideya;
          if (paliwanagInput) paliwanagInput.value = preset.paliwanag;
          if (batayanInput) batayanInput.value = preset.batayan;
          updatePreview();
          showToast(`Nai-load ang halimbawa para sa: ${preset.title}!`);
        }
      });
    });
  }

  // Copy button
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      AppState.sound.playPop();
      const expr = expressionSelect ? expressionSelect.value : '';
      const ideya = ideyaInput ? ideyaInput.value.trim() : '';
      const paliwanag = paliwanagInput ? paliwanagInput.value.trim() : '';
      const batayan = batayanInput ? batayanInput.value.trim() : '';

      if (!ideya && !paliwanag && !batayan) {
        showToast('Mangyaring punan muna ang mga patlang!');
        return;
      }

      const fullText = `"${expr} ${ideya} ${paliwanag}, ${batayan}."`;
      navigator.clipboard.writeText(fullText).then(() => {
        showToast('Matagumpay na nakopya sa clipboard! 📋');
      }).catch(() => {
        showToast('Hindi makopya sa clipboard.');
      });
    });
  }

  // Clear button
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      AppState.sound.playPop();
      if (expressionSelect) expressionSelect.selectedIndex = 0;
      if (ideyaInput) ideyaInput.value = '';
      if (paliwanagInput) paliwanagInput.value = '';
      if (batayanInput) batayanInput.value = '';
      updatePreview();
      showToast('Nalinis na ang form.');
    });
  }

  // Render Fix-It Scenario Challenges
  renderFixItScenarios();
  updatePreview();
}

function renderFixItScenarios() {
  const container = document.getElementById('fixit-scenarios-container');
  if (!container) return;

  container.innerHTML = FIX_IT_SCENARIOS.map((sc) => `
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
      <div class="flex items-start justify-between gap-3">
        <div>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300">
            Maling Pahayag na Dapat Iwasto
          </span>
          <h4 class="text-base font-bold text-slate-900 dark:text-white mt-1">${sc.title}</h4>
        </div>
        <div class="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
          <i class="fa-solid fa-wrench"></i>
        </div>
      </div>

      <div class="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60">
        <span class="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wide block mb-1">Maling Halimbawa:</span>
        <p class="text-sm font-semibold italic text-slate-800 dark:text-slate-200">"${sc.problemText}"</p>
        <p class="text-xs text-rose-600 dark:text-rose-400 mt-2 font-medium">⚠️ <strong>Bakit Mali:</strong> ${sc.errorType}</p>
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mb-1.5">
          Ang Iyong Pagwawasto (Subukang Isulat ang Mas Pormal at Mabisang Bersyon):
        </label>
        <textarea rows="2" class="w-full text-sm p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="I-type rito ang iyong rephrased na tanong o mungkahi..."></textarea>
      </div>

      <div class="flex items-center justify-between pt-2">
        <button type="button" class="fixit-reveal-btn text-xs font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1.5">
          <i class="fa-solid fa-eye"></i> Ipakita ang Huwarang Sagot (Model Answer)
        </button>
      </div>

      <div class="fixit-answer-box hidden p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-2">
        <span class="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide block">
          ✓ Huwarang Sagot (Model Answer):
        </span>
        <p class="text-sm text-slate-800 dark:text-slate-100 font-medium whitespace-pre-line">${sc.modelAnswer}</p>
        <div class="pt-2 border-t border-emerald-200 dark:border-emerald-800/40 text-xs text-emerald-800 dark:text-emerald-300">
          <strong>Tip sa Rubrik:</strong> ${sc.rubricTip}
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.fixit-reveal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.sound.playPop();
      const parent = btn.closest('.p-5');
      const box = parent.querySelector('.fixit-answer-box');
      if (box.classList.contains('hidden')) {
        box.classList.remove('hidden');
        btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Itago ang Huwarang Sagot';
      } else {
        box.classList.add('hidden');
        btn.innerHTML = '<i class="fa-solid fa-eye"></i> Ipakita ang Huwarang Sagot (Model Answer)';
      }
    });
  });
}

/* ==========================================================
   MODULE 4: PRACTICE QUIZ (40 Items Engine)
   ========================================================== */

function initQuiz() {
  const categoryFilters = document.querySelectorAll('.quiz-cat-filter');
  const modeToggles = document.querySelectorAll('.quiz-mode-toggle');
  const submitExamBtn = document.getElementById('quiz-submit-exam-btn');
  const retakeBtn = document.getElementById('quiz-retake-btn');
  const mistakesOnlyBtn = document.getElementById('quiz-mistakes-only-btn');

  categoryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.sound.playPop();
      categoryFilters.forEach(b => {
        b.className = 'quiz-cat-filter px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition';
      });
      btn.className = 'quiz-cat-filter px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 text-white shadow-sm transition';
      AppState.quizCategory = btn.dataset.category;
      renderQuizQuestions();
    });
  });

  modeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      AppState.sound.playPop();
      const newMode = toggle.dataset.mode;
      if (newMode === AppState.quizMode) return;
      AppState.quizMode = newMode;

      modeToggles.forEach(t => {
        if (t.dataset.mode === newMode) {
          t.className = 'quiz-mode-toggle px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-sm';
        } else {
          t.className = 'quiz-mode-toggle px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 dark:text-slate-400';
        }
      });

      // Reset state for clean switch
      AppState.quizSubmitted = false;
      renderQuizQuestions();
      updateQuizProgressHeader();
      showToast(newMode === 'practice' ? 'Pumasok sa Practice Mode (Agad na Feedback)' : 'Pumasok sa Exam Mode (Sabay-sabay na Pagpasa)');
    });
  });

  if (submitExamBtn) {
    submitExamBtn.addEventListener('click', submitExamQuiz);
  }

  if (retakeBtn) {
    retakeBtn.addEventListener('click', retakeQuiz);
  }

  if (mistakesOnlyBtn) {
    mistakesOnlyBtn.addEventListener('click', () => {
      AppState.sound.playPop();
      AppState.showOnlyMistakes = !AppState.showOnlyMistakes;
      if (AppState.showOnlyMistakes) {
        mistakesOnlyBtn.classList.add('bg-rose-600', 'text-white');
        mistakesOnlyBtn.classList.remove('bg-slate-100', 'dark:bg-slate-800');
        showToast('Ipinapakita lamang ang mga aytem na may kamalian 🔍');
      } else {
        mistakesOnlyBtn.classList.remove('bg-rose-600', 'text-white');
        mistakesOnlyBtn.classList.add('bg-slate-100', 'dark:bg-slate-800');
        showToast('Ipinapakita ang lahat ng aytem.');
      }
      renderQuizQuestions();
    });
  }

  renderQuizQuestions();
  updateQuizProgressHeader();
}

function getFilteredQuestions() {
  return QUIZ_QUESTIONS.filter(q => {
    if (AppState.showOnlyMistakes && AppState.quizSubmitted) {
      const isCorrect = isUserAnswerCorrect(q);
      if (isCorrect) return false;
    }

    if (AppState.quizCategory === 'all') return true;
    if (AppState.quizCategory === 'mc') return q.type === 'mc' && q.category !== 'Sitwasyonal';
    if (AppState.quizCategory === 'id') return q.type === 'id';
    if (AppState.quizCategory === 'tf') return q.type === 'tf';
    if (AppState.quizCategory === 'Sitwasyonal') return q.category === 'Sitwasyonal';
    return true;
  });
}

function isUserAnswerCorrect(q) {
  const ans = AppState.quizUserAnswers[q.id];
  if (ans === undefined || ans === null || ans === '') return false;

  if (q.type === 'mc') {
    return ans === q.correctAnswer;
  } else if (q.type === 'tf') {
    return ans === q.correctAnswer;
  } else if (q.type === 'id') {
    const cleanUser = ans.toString().trim().toLowerCase();
    return q.acceptableAnswers.some(a => a.toLowerCase() === cleanUser);
  }
  return false;
}

function renderQuizQuestions() {
  const container = document.getElementById('quiz-questions-container');
  if (!container) return;

  const questions = getFilteredQuestions();

  if (questions.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
        <i class="fa-solid fa-circle-check text-4xl text-emerald-500 mb-3 block"></i>
        <h4 class="text-lg font-bold text-slate-800 dark:text-slate-100">Walang mga tanong sa kategoryang ito!</h4>
        <p class="text-sm text-slate-500 mt-1">Kung naka-filter ka sa mga mali, maaaring tama ang lahat ng iyong sagot!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = questions.map((q) => {
    const userAnswer = AppState.quizUserAnswers[q.id];
    const isAnswered = userAnswer !== undefined && userAnswer !== null && userAnswer !== '';
    const isCorrect = isAnswered && isUserAnswerCorrect(q);
    const shouldShowFeedback = AppState.quizMode === 'practice' ? isAnswered : AppState.quizSubmitted;

    return `
      <div class="quiz-item-card p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border transition-all ${
        shouldShowFeedback
          ? (isCorrect ? 'border-emerald-500/80 bg-emerald-50/20 dark:bg-emerald-950/10' : 'border-rose-500/80 bg-rose-50/20 dark:bg-rose-950/10')
          : 'border-slate-200 dark:border-slate-800 shadow-sm'
      }" data-qid="${q.id}">
        <!-- Header -->
        <div class="flex items-center justify-between gap-3 mb-3">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-black text-xs flex items-center justify-center">
              ${q.id}
            </span>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              ${q.category}
            </span>
            <span class="text-xs font-medium text-slate-400">
              ${q.type === 'mc' ? 'Multiple Choice' : (q.type === 'tf' ? 'Tama o Mali' : 'Identification')}
            </span>
          </div>
          ${
            shouldShowFeedback
              ? (isCorrect
                  ? '<span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Wasto</span>'
                  : '<span class="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1"><i class="fa-solid fa-circle-xmark"></i> Mali</span>')
              : ''
          }
        </div>

        <!-- Question Text -->
        <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-4">
          ${q.question}
        </h4>

        <!-- Answers Area -->
        <div class="answers-area mb-4">
          ${renderAnswersForQuestion(q, userAnswer, shouldShowFeedback)}
        </div>

        <!-- Explanation / Feedback Box -->
        ${
          shouldShowFeedback
            ? `
            <div class="p-4 rounded-xl border ${isCorrect ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200' : 'bg-rose-50/80 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'} text-xs sm:text-sm space-y-1">
              <div class="font-bold flex items-center gap-1.5">
                <i class="fa-solid fa-lightbulb"></i> Paliwanag at Batayan:
              </div>
              <p class="leading-relaxed">${q.explanation}</p>
            </div>
            `
            : ''
        }
      </div>
    `;
  }).join('');

  attachQuizEventListeners();
}

function renderAnswersForQuestion(q, userAnswer, shouldShowFeedback) {
  if (q.type === 'mc') {
    return `
      <div class="grid grid-cols-1 gap-2.5">
        ${q.options.map((opt, optIdx) => {
          const isSelected = userAnswer === optIdx;
          let btnStyle = 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 hover:border-blue-400 hover:bg-blue-50/40 dark:hover:bg-slate-800';

          if (shouldShowFeedback) {
            if (optIdx === q.correctAnswer) {
              btnStyle = 'border-emerald-500 bg-emerald-100/70 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-bold';
            } else if (isSelected && optIdx !== q.correctAnswer) {
              btnStyle = 'border-rose-500 bg-rose-100/70 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 line-through';
            }
          } else if (isSelected) {
            btnStyle = 'border-blue-600 bg-blue-100/60 dark:bg-blue-950/50 text-blue-900 dark:text-blue-200 font-bold';
          }

          return `
            <button type="button" class="mc-option-btn w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition flex items-center justify-between gap-3 ${btnStyle}" data-qid="${q.id}" data-opt="${optIdx}">
              <span>${opt}</span>
              ${
                shouldShowFeedback && optIdx === q.correctAnswer
                  ? '<i class="fa-solid fa-check text-emerald-600 dark:text-emerald-400 shrink-0"></i>'
                  : (shouldShowFeedback && isSelected && optIdx !== q.correctAnswer
                      ? '<i class="fa-solid fa-xmark text-rose-600 dark:text-rose-400 shrink-0"></i>'
                      : '')
              }
            </button>
          `;
        }).join('')}
      </div>
    `;
  } else if (q.type === 'tf') {
    const isTrueSelected = userAnswer === 'Tama';
    const isFalseSelected = userAnswer === 'Mali';

    let trueStyle = 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200';
    let falseStyle = 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200';

    if (shouldShowFeedback) {
      if (q.correctAnswer === 'Tama') {
        trueStyle = 'border-emerald-500 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-bold';
        if (isFalseSelected) falseStyle = 'border-rose-500 bg-rose-100 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 line-through';
      } else {
        falseStyle = 'border-emerald-500 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-bold';
        if (isTrueSelected) trueStyle = 'border-rose-500 bg-rose-100 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 line-through';
      }
    } else {
      if (isTrueSelected) trueStyle = 'border-blue-600 bg-blue-100/60 dark:bg-blue-950 text-blue-900 dark:text-blue-200 font-bold';
      if (isFalseSelected) falseStyle = 'border-blue-600 bg-blue-100/60 dark:bg-blue-950 text-blue-900 dark:text-blue-200 font-bold';
    }

    return `
      <div class="grid grid-cols-2 gap-3 max-w-sm">
        <button type="button" class="tf-btn py-3 px-4 rounded-xl border text-sm font-bold transition flex items-center justify-center gap-2 ${trueStyle}" data-qid="${q.id}" data-val="Tama">
          <i class="fa-solid fa-circle-check text-emerald-500"></i> TAMA
        </button>
        <button type="button" class="tf-btn py-3 px-4 rounded-xl border text-sm font-bold transition flex items-center justify-center gap-2 ${falseStyle}" data-qid="${q.id}" data-val="Mali">
          <i class="fa-solid fa-circle-xmark text-rose-500"></i> MALI
        </button>
      </div>
    `;
  } else if (q.type === 'id') {
    const isCorrect = isUserAnswerCorrect(q);
    return `
      <div class="space-y-2">
        <div class="flex items-center gap-2 max-w-lg">
          <input type="text" class="id-input flex-1 p-3 rounded-xl border ${shouldShowFeedback ? (isCorrect ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30' : 'border-rose-500 bg-rose-50 dark:bg-rose-950/30') : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'} text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="I-type ang iyong sagot..." value="${userAnswer || ''}" data-qid="${q.id}">
          <button type="button" class="id-submit-btn px-4 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 transition" data-qid="${q.id}">
            Subukan
          </button>
        </div>
        ${
          shouldShowFeedback && !isCorrect
            ? `<div class="text-xs text-rose-600 dark:text-rose-400 font-semibold">Inaasahang sagot: <span class="underline font-bold">${q.acceptableAnswers[0]}</span></div>`
            : ''
        }
      </div>
    `;
  }
}

function attachQuizEventListeners() {
  const container = document.getElementById('quiz-questions-container');
  if (!container) return;

  // Multiple Choice Clicks
  container.querySelectorAll('.mc-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const qid = parseInt(btn.dataset.qid, 10);
      const optIdx = parseInt(btn.dataset.opt, 10);

      AppState.quizUserAnswers[qid] = optIdx;

      const q = QUIZ_QUESTIONS.find(item => item.id === qid);
      if (q && AppState.quizMode === 'practice') {
        if (optIdx === q.correctAnswer) {
          AppState.sound.playCorrect();
        } else {
          AppState.sound.playIncorrect();
        }
      } else {
        AppState.sound.playPop();
      }

      renderQuizQuestions();
      updateQuizProgressHeader();
    });
  });

  // True/False Clicks
  container.querySelectorAll('.tf-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const qid = parseInt(btn.dataset.qid, 10);
      const val = btn.dataset.val;

      AppState.quizUserAnswers[qid] = val;

      const q = QUIZ_QUESTIONS.find(item => item.id === qid);
      if (q && AppState.quizMode === 'practice') {
        if (val === q.correctAnswer) {
          AppState.sound.playCorrect();
        } else {
          AppState.sound.playIncorrect();
        }
      } else {
        AppState.sound.playPop();
      }

      renderQuizQuestions();
      updateQuizProgressHeader();
    });
  });

  // Identification Inputs & Buttons
  container.querySelectorAll('.id-submit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const qid = parseInt(btn.dataset.qid, 10);
      const input = container.querySelector(`.id-input[data-qid="${qid}"]`);
      if (!input) return;

      const val = input.value.trim();
      if (!val) {
        showToast('Mangyaring maglagay ng sagot bago sumubok.');
        return;
      }

      AppState.quizUserAnswers[qid] = val;
      const q = QUIZ_QUESTIONS.find(item => item.id === qid);

      if (q && AppState.quizMode === 'practice') {
        if (isUserAnswerCorrect(q)) {
          AppState.sound.playCorrect();
          showToast('Tumpak ang iyong sagot! 🎉');
        } else {
          AppState.sound.playIncorrect();
          showToast('Mali ang sagot. Tingnan ang paliwanag.');
        }
      } else {
        AppState.sound.playPop();
      }

      renderQuizQuestions();
      updateQuizProgressHeader();
    });
  });

  container.querySelectorAll('.id-input').forEach(input => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const qid = parseInt(input.dataset.qid, 10);
        const submitBtn = container.querySelector(`.id-submit-btn[data-qid="${qid}"]`);
        if (submitBtn) submitBtn.click();
      }
    });
  });
}

function updateQuizProgressHeader() {
  const answeredCount = Object.keys(AppState.quizUserAnswers).length;
  const total = QUIZ_QUESTIONS.length;

  let currentScore = 0;
  QUIZ_QUESTIONS.forEach(q => {
    if (isUserAnswerCorrect(q)) currentScore++;
  });

  if (currentScore > AppState.bestQuizScore) {
    AppState.bestQuizScore = currentScore;
    AppState.saveProgress();
  }

  const answeredText = document.getElementById('quiz-answered-count');
  const scoreText = document.getElementById('quiz-live-score');
  const examControls = document.getElementById('quiz-exam-submit-wrapper');

  if (answeredText) answeredText.innerText = `${answeredCount} / ${total} Nasagutan`;
  if (scoreText) scoreText.innerText = `${currentScore} / ${total} (${Math.round((currentScore / total) * 100)}%)`;

  if (examControls) {
    if (AppState.quizMode === 'exam' && !AppState.quizSubmitted) {
      examControls.classList.remove('hidden');
    } else {
      examControls.classList.add('hidden');
    }
  }
}

function submitExamQuiz() {
  const total = QUIZ_QUESTIONS.length;
  const answered = Object.keys(AppState.quizUserAnswers).length;

  if (answered < total) {
    if (!confirm(`Mayroon ka pang ${total - answered} tanong na hindi nasasagutan. Sigurado ka bang nais mo nang ipasa ang pagsusulit?`)) {
      return;
    }
  }

  AppState.sound.playCorrect();
  AppState.quizSubmitted = true;

  let score = 0;
  QUIZ_QUESTIONS.forEach(q => {
    if (isUserAnswerCorrect(q)) score++;
  });

  if (score > AppState.bestQuizScore) {
    AppState.bestQuizScore = score;
    AppState.saveProgress();
  }

  renderQuizQuestions();
  updateQuizProgressHeader();
  showExamResultsModal(score, total);
}

function retakeQuiz() {
  if (confirm('Nais mo bang linisin ang iyong mga sagot at magsimula muli?')) {
    AppState.sound.playPop();
    AppState.quizUserAnswers = {};
    AppState.quizSubmitted = false;
    AppState.showOnlyMistakes = false;

    const mistakesBtn = document.getElementById('quiz-mistakes-only-btn');
    if (mistakesBtn) {
      mistakesBtn.classList.remove('bg-rose-600', 'text-white');
      mistakesBtn.classList.add('bg-slate-100', 'dark:bg-slate-800');
    }

    renderQuizQuestions();
    updateQuizProgressHeader();
    showToast('Nalinis na ang pagsusulit! Handa na para sa bagong pagsubok.');
  }
}

function showExamResultsModal(score, total) {
  const modal = document.getElementById('exam-results-modal');
  if (!modal) return;

  const scoreEl = document.getElementById('exam-score-num');
  const percentEl = document.getElementById('exam-score-pct');
  const feedbackEl = document.getElementById('exam-feedback-message');
  const pct = Math.round((score / total) * 100);

  if (scoreEl) scoreEl.innerText = `${score} / ${total}`;
  if (percentEl) percentEl.innerText = `${pct}%`;

  let message = '';
  if (pct >= 90) {
    message = '🌟 <strong>Summa Cum Laude / Dalubhasa sa Retorika!</strong> Napakahusay ng iyong pagkaunawa sa sining at etika ng pagtatanong at pagmumungkahi.';
  } else if (pct >= 75) {
    message = '🎉 <strong>Magaling! Pumasang may Dangal.</strong> Malawak na ang iyong kaalaman, ngunit magandang repasuhin ang ilang maselan na anyo ng tanong.';
  } else if (pct >= 50) {
    message = '📚 <strong>Katamtaman ang Resulta.</strong> Pamilyar ka sa batayan, ngunit inirerekomendang balikan ang Flashcards at Study Notes bago ang pinal na pagsusulit.';
  } else {
    message = '💪 <strong>Kailangan Pang Magrepaso.</strong> Huwag panghinaan ng loob! Gamitin ang Interactive Builder at Flashcards upang mapatibay ang 3 Haligi at 3 E\'s.';
  }

  if (feedbackEl) feedbackEl.innerHTML = message;
  modal.classList.remove('hidden');

  const closeBtn = document.getElementById('close-exam-modal');
  if (closeBtn) {
    closeBtn.onclick = () => {
      AppState.sound.playPop();
      modal.classList.add('hidden');
    };
  }
}
