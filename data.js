/**
 * DATA REPOSITORY: Pagtatanong at Pagmumungkahi
 * Sining, Etika, at Ekspresyong Gramatikal
 */

const STUDY_NOTES_DATA = [
  {
    id: "pundasyon",
    icon: "fa-compass",
    badge: "Batayang Konsepto",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200",
    title: "1. Pundasyon ng Mabisang Pahayag",
    subtitle: "Kahalagahan, Layunin, at ang 3 E's ng Komunikasyon",
    content: `
      <div class="space-y-6">
        <div>
          <h4 class="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-2">
            <span class="w-2 h-6 bg-blue-600 rounded-full inline-block"></span>
            Layunin ng Pagtatanong at Pagmumungkahi
          </h4>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Sa akademikong diskurso at propesyonal na pakikipagtalastasan, ang pagtatanong at pagmumungkahi ay hindi lamang ordinaryong gawaing pangwika; ito ay <strong class="text-blue-600 dark:text-blue-400">sining ng pakikipagkapwa</strong> at <strong class="text-blue-600 dark:text-blue-400">kasangkapan sa pagpapaunlad ng kaisipan</strong>.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-4 rounded-xl border border-blue-200 dark:border-blue-800/60 bg-blue-50/50 dark:bg-blue-950/30">
              <div class="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold mb-3 shadow">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <h5 class="font-bold text-slate-800 dark:text-slate-100 mb-1">Naglilinaw</h5>
              <p class="text-sm text-slate-600 dark:text-slate-300">Tinitiyak na wasto at walang kalabuan ang impormasyong natanggap upang maiwasan ang mga maling hinuha (misconceptions).</p>
            </div>
            <div class="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50/50 dark:bg-indigo-950/30">
              <div class="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold mb-3 shadow">
                <i class="fa-solid fa-bullhorn"></i>
              </div>
              <h5 class="font-bold text-slate-800 dark:text-slate-100 mb-1">Nagpapaalam / Nagbabahagi</h5>
              <p class="text-sm text-slate-600 dark:text-slate-300">Nagsisilbing tulay sa pagbabahagi ng sariwang ideya, plano, at alternatibong solusyon sa isang pangkat o komunidad.</p>
            </div>
            <div class="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/50 dark:bg-emerald-950/30">
              <div class="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold mb-3 shadow">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <h5 class="font-bold text-slate-800 dark:text-slate-100 mb-1">Nagsusuri</h5>
              <p class="text-sm text-slate-600 dark:text-slate-300">Sinusubok ang katatagan ng argumento, kredibilidad ng datos, at lalim ng implikasyon bago gumawa ng desisyon.</p>
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-200 dark:border-slate-800">
          <h4 class="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-3">
            <span class="w-2 h-6 bg-indigo-600 rounded-full inline-block"></span>
            Ang 3 E's ng Mabisang Pahayag
          </h4>
          <p class="text-slate-600 dark:text-slate-300 mb-4">
            Upang maging mabisa, katanggap-tanggap, at kagalang-galang ang anumang tanong o mungkahi, kailangan nitong taglayin ang tatlong saligang haligi:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="relative p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/30 dark:bg-slate-800/70">
              <span class="text-xs font-black tracking-widest text-amber-600 dark:text-amber-400 uppercase">UNANG E</span>
              <h5 class="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2">ESTRATEHIYA</h5>
              <p class="text-sm text-slate-600 dark:text-slate-300">
                <strong>Tamang Paraan at Balangkas:</strong> Ang pagpili ng wastong estruktura ng pangungusap, timing o tiyempo ng pagsasalita, at layunin kung kailan at paano ibabato ang pahayag.
              </p>
            </div>
            <div class="relative p-5 rounded-2xl bg-gradient-to-br from-rose-500/10 to-transparent border border-rose-500/30 dark:bg-slate-800/70">
              <span class="text-xs font-black tracking-widest text-rose-600 dark:text-rose-400 uppercase">IKALAWANG E</span>
              <h5 class="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2">ETIKETA</h5>
              <p class="text-sm text-slate-600 dark:text-slate-300">
                <strong>Paggalang at Tamang Tono:</strong> Pagpapakita ng respeto sa damdamin, posisyon, at dignidad ng kausap. Paggamit ng magagalang na pananalita tulad ng "po/opo" at mga pampalambot na modals.
              </p>
            </div>
            <div class="relative p-5 rounded-2xl bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/30 dark:bg-slate-800/70">
              <span class="text-xs font-black tracking-widest text-teal-600 dark:text-teal-400 uppercase">IKATLONG E</span>
              <h5 class="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2">EBIDENSYA</h5>
              <p class="text-sm text-slate-600 dark:text-slate-300">
                <strong>Konkretong Datos at Batayan:</strong> Pagkakaroon ng siyentipiko, obserbasyonal, o dokumentadong basehan. Hindi haka-haka o tsismis, kundi may matibay na katotohanang pinaghahawakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "uri-ng-tanong",
    icon: "fa-circle-question",
    badge: "Klasipikasyon",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200",
    title: "2. Tatlong Pangunahing Uri ng Pagtatanong",
    subtitle: "Clarifying, Probing, at Analytical Questions",
    content: `
      <div class="space-y-6">
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
          Hindi lahat ng tanong ay pare-pareho ang bigat at antas ng kognitibong layunin. Narito ang tatlong antas ng pormal na pagtatanong sa Filipino:
        </p>

        <!-- 1. Clarifying -->
        <div class="p-5 rounded-2xl border border-sky-200 dark:border-sky-800 bg-sky-50/40 dark:bg-sky-950/20">
          <div class="flex items-start justify-between gap-4">
            <div>
              <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-sky-200 text-sky-800 dark:bg-sky-900 dark:text-sky-300">Antas 1: Pag-unawa</span>
              <h4 class="text-lg font-bold text-slate-900 dark:text-white mt-1">Pagtatanong na Naglilinaw (Clarifying Question)</h4>
            </div>
            <span class="text-2xl text-sky-600 dark:text-sky-400 font-bold">01</span>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-2 mb-3">
            <strong>Layunin:</strong> Tiyakin ang mensahe at iwasan ang misconception o maling pagpapalagay. Nilalayon nitong alamin kung tama ang literal o tiyak na impormasyong narinig.
          </p>
          <div class="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-sky-100 dark:border-sky-900/50">
            <span class="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide block mb-1">Ehemplo / Halimbawa:</span>
            <p class="text-sm font-medium italic text-slate-800 dark:text-slate-200">
              "Nais ko lang pong linawin kung ang datos ba na binanggit ay mula sa nakaraang taon (2025) o para sa kasalukuyang semestre?"
            </p>
          </div>
        </div>

        <!-- 2. Probing -->
        <div class="p-5 rounded-2xl border border-violet-200 dark:border-violet-800 bg-violet-50/40 dark:bg-violet-950/20">
          <div class="flex items-start justify-between gap-4">
            <div>
              <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-violet-200 text-violet-800 dark:bg-violet-900 dark:text-violet-300">Antas 2: Pagpapalawak</span>
              <h4 class="text-lg font-bold text-slate-900 dark:text-white mt-1">Pagtatanong na Nagpapalalim (Probing Question)</h4>
            </div>
            <span class="text-2xl text-violet-600 dark:text-violet-400 font-bold">02</span>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-2 mb-3">
            <strong>Layunin:</strong> Humukay ng karagdagang detalye, konteksto, at <strong class="text-violet-600 dark:text-violet-400">implicit (di-lantad)</strong> na kahulugan o epekto ng pahayag.
          </p>
          <div class="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-violet-100 dark:border-violet-900/50">
            <span class="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wide block mb-1">Ehemplo / Halimbawa:</span>
            <p class="text-sm font-medium italic text-slate-800 dark:text-slate-200">
              "Paano po nakaapekto ang kakulangan sa badyet sa pangmatagalang resulta at operasyon ng proyekto?"
            </p>
          </div>
        </div>

        <!-- 3. Analytical -->
        <div class="p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/20">
          <div class="flex items-start justify-between gap-4">
            <div>
              <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-200 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">Antas 3: Pagsusuri at Ebalwasyon</span>
              <h4 class="text-lg font-bold text-slate-900 dark:text-white mt-1">Pagtatanong na Sumusuri (Analytical Question)</h4>
            </div>
            <span class="text-2xl text-emerald-600 dark:text-emerald-400 font-bold">03</span>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-2 mb-3">
            <strong>Layunin:</strong> Suriin ang kredibilidad ng datos, lohika ng pangangatwiran, metodolohiya, at mga posibleng malalaking implikasyon o limitasyon.
          </p>
          <div class="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
            <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide block mb-1">Ehemplo / Halimbawa:</span>
            <p class="text-sm font-medium italic text-slate-800 dark:text-slate-200">
              "Gaano po kalaki ang sample size ng sarbey at paano ninyo natiyak na walang sampling bias ang naging resulta ng inyong pananaliksik?"
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "mga-dapat-iwasan",
    icon: "fa-triangle-exclamation",
    badge: "Kritikal na Pagiingat",
    badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-200",
    title: "3. Mga Tanong na Dapat Iwasan",
    subtitle: "Barrelled, Leading, at Loaded Questions",
    content: `
      <div class="space-y-6">
        <p class="text-slate-600 dark:text-slate-300">
          May mga anyo ng tanong na sumisira sa daloy ng talakayan, lumilikha ng pagkailang, at nagdudulot ng hindi patas o malabong tugon:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <!-- Barrelled Question -->
          <div class="p-5 rounded-2xl border-2 border-dashed border-rose-300 dark:border-rose-900/80 bg-rose-50/50 dark:bg-rose-950/20 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-base mb-2">
                <i class="fa-solid fa-burst"></i>
                <h5>Barrelled / Double-Barreled</h5>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-300 mb-3">
                <strong>Katangian:</strong> Paligoy-ligoy, pinagsasama ang dalawa o higit pang magkaibang tanong sa iisang pahayag gamit ang "at", at nakapapagod o <em>overwhelming</em> sa sasagot.
              </p>
              <div class="bg-white dark:bg-slate-900 p-2.5 rounded-lg text-xs italic text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-900 mb-3">
                "Nagawa mo ba ang takdang-aralin at nakipagkita ka ba sa lider at naintindihan mo ba ang aralin?"
              </div>
            </div>
            <div class="text-xs bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 p-2 rounded border border-emerald-300 dark:border-emerald-800">
              <strong>Solusyon:</strong> Paghiwalayin sa tig-isang malinaw at payak na tanong.
            </div>
          </div>

          <!-- Leading Question -->
          <div class="p-5 rounded-2xl border-2 border-dashed border-amber-300 dark:border-amber-900/80 bg-amber-50/50 dark:bg-amber-950/20 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-base mb-2">
                <i class="fa-solid fa-arrows-turn-right"></i>
                <h5>Leading Question</h5>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-300 mb-3">
                <strong>Katangian:</strong> Nagdidikta o humihikayat sa kausap na sumang-ayon sa partikular na sagot na nais marinig ng nagtatanong. Walang kalayaan ang sasagot.
              </p>
              <div class="bg-white dark:bg-slate-900 p-2.5 rounded-lg text-xs italic text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900 mb-3">
                "Hindi ba't napakaganda at walang kapintasan ang disenyo ng ating presentasyon?"
              </div>
            </div>
            <div class="text-xs bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 p-2 rounded border border-emerald-300 dark:border-emerald-800">
              <strong>Solusyon:</strong> Gamitin ang neutral na tono (Hal. "Ano ang inyong pagsusuri sa disenyo?").
            </div>
          </div>

          <!-- Loaded Question -->
          <div class="p-5 rounded-2xl border-2 border-dashed border-red-300 dark:border-red-900/80 bg-red-50/50 dark:bg-red-950/20 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-base mb-2">
                <i class="fa-solid fa-bomb"></i>
                <h5>Loaded Question</h5>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-300 mb-3">
                <strong>Katangian:</strong> May nakapaloob nang mapanghusga, kontrobersyal, o mapanirang paratang na naglalagay agad sa kausap sa posisyong may kasalanan.
              </p>
              <div class="bg-white dark:bg-slate-900 p-2.5 rounded-lg text-xs italic text-red-800 dark:text-red-300 border border-red-200 dark:border-red-900 mb-3">
                "Kailan mo balak aminin na ikaw ang dahilan kung bakit naantala ang buong proyekto?"
              </div>
            </div>
            <div class="text-xs bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 p-2 rounded border border-emerald-300 dark:border-emerald-800">
              <strong>Solusyon:</strong> Magtanong batay sa kaganapan at iwasan ang personal na akusasyon.
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "etika-at-haligi",
    icon: "fa-scale-balanced",
    badge: "Etika at Estruktura",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200",
    title: "4. Sining, Etika, at 3 Haligi ng Pagmumungkahi",
    subtitle: "Panukalang May Dahilan (Hindi Pag-uutos, Hindi Pagpuna)",
    content: `
      <div class="space-y-6">
        <div>
          <h4 class="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Ano ang Mabisang Pagmumungkahi?</h4>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Ang pagmumungkahi ay ang maingat na <strong>paglalahad ng opinyon, plano, o alternatibong solusyon</strong>. Sa larangan ng etika sa komunikasyon, laging tatandaan ang ginintuang panuntunan:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-center my-4">
            <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800">
              <span class="text-2xl text-rose-500 font-bold block mb-1">✗ HINDI</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">Pag-uutos (Imperative)</span>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Hindi nagdidikta ng kapangyarihan o pamimilit.</p>
            </div>
            <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800">
              <span class="text-2xl text-amber-500 font-bold block mb-1">✗ HINDI</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">Mapanirang Pagpuna</span>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Hindi paghahanap ng kapintasan para mamahiya.</p>
            </div>
            <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-400 dark:border-emerald-700 shadow-sm">
              <span class="text-2xl text-emerald-500 font-bold block mb-1">✓ KUNDI</span>
              <span class="font-bold text-slate-800 dark:text-slate-100">Panukalang May Dahilan</span>
              <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">Solusyong may katuwiran, respeto, at basehan.</p>
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-200 dark:border-slate-800">
          <h4 class="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-3">
            <span class="w-2 h-6 bg-emerald-600 rounded-full inline-block"></span>
            Ang 3 Haligi ng Mabisang Mungkahi
          </h4>
          <p class="text-slate-600 dark:text-slate-300 mb-4">
            Upang maging matatag at pormal ang mungkahi sa talakayan, dapat kumpleto ang sumusunod na tatlong elemento:
          </p>

          <div class="space-y-4">
            <div class="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-lg flex items-center justify-center shrink-0">1</div>
              <div>
                <h5 class="text-base font-bold text-slate-900 dark:text-white">Ideya (Proposal)</h5>
                <p class="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Ang mismong <strong>konkretong suhestiyon, plano, o alternatibong aksiyon</strong> na nais isagawa. Sinasagot nito ang tanong na: <em>"Ano ang balak nating gawin?"</em>
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="w-12 h-12 rounded-xl bg-indigo-600 text-white font-bold text-lg flex items-center justify-center shrink-0">2</div>
              <div>
                <h5 class="text-base font-bold text-slate-900 dark:text-white">Paliwanag (Rationale)</h5>
                <p class="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Ang <strong>dahilan, pakinabang, o lohikal na rason</strong> kung bakit ito makatutulong sa grupo o suliranin. Sinasagot nito ang tanong na: <em>"Bakit ito makabubuti at ano ang benepisyo?"</em>
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="w-12 h-12 rounded-xl bg-emerald-600 text-white font-bold text-lg flex items-center justify-center shrink-0">3</div>
              <div>
                <h5 class="text-base font-bold text-slate-900 dark:text-white">Batayan (Evidence)</h5>
                <p class="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Ang <strong>konkretong datos, napatunayang tala, obserbasyon, o karanasan</strong> na pinaghugutan ng suhestiyon. Sinasagot nito ang tanong na: <em>"Saan nanggaling ang patunay na kailangan ito?"</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "ekspresyong-gramatikal",
    icon: "fa-pen-nib",
    badge: "Gramatika at Retorika",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200",
    title: "5. Mga Ekspresyong Gramatikal sa Pagmumungkahi",
    subtitle: "Pormal na Panimula, Modals, Kondisyonal, at Anyong Patanong",
    content: `
      <div class="space-y-6">
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
          Ang antas ng propesyonalismo ng isang mungkahi ay makikita sa mga piniling kataga. Narito ang mga kategorya ng ekspresyong gramatikal:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Pormal na Panimula -->
          <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">Kategorya A</span>
            <h5 class="font-bold text-slate-900 dark:text-white mb-2">Pormal na Panimula</h5>
            <ul class="text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
              <li>"Iminumungkahi ko / naming..."</li>
              <li>"Inirerekomenda ng aming pangkat na..."</li>
              <li>"Isang magandang alternatibo ang..."</li>
            </ul>
          </div>

          <!-- Modals / Pagpapalambot -->
          <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">Kategorya B</span>
            <h5 class="font-bold text-slate-900 dark:text-white mb-2">Modals (Pampalambot ng Tono)</h5>
            <ul class="text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
              <li>"Maaari po nating subukan na..."</li>
              <li>"Makabubuti siguro kung..."</li>
              <li>"Baka sakaling makatulong kung..."</li>
            </ul>
            <p class="text-xs text-indigo-500 dark:text-indigo-400 mt-2 italic">*Nag-aalis ng tonong nag-uutos o agresibo.</p>
          </div>

          <!-- Kondisyonal na Pahayag -->
          <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span class="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider block mb-1">Kategorya C</span>
            <h5 class="font-bold text-slate-900 dark:text-white mb-2">Kondisyonal na Pahayag</h5>
            <ul class="text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
              <li>"Kung idaragdag natin ang [Ideya], mas mapapabilis ang [Paliwanag]..."</li>
              <li>"Sakaling piliin natin ang [Opsiyon A], maiiwasan natin ang [Banta]..."</li>
            </ul>
          </div>

          <!-- Anyong Patanong -->
          <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">Kategorya D</span>
            <h5 class="font-bold text-slate-900 dark:text-white mb-2">Anyong Patanong</h5>
            <ul class="text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
              <li>"Ano kaya kung subukan nating...?"</li>
              <li>"Paano kung maglaan tayo ng karagdagang araw para sa...?"</li>
            </ul>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700">
          <span class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">Kategorya E: Paglalatag ng Batayan</span>
          <p class="text-sm text-slate-600 dark:text-slate-300">
            Mga pariralang nagpapakilala ng ebidensya: <strong class="text-slate-900 dark:text-white">"Batay sa nakalap na datos...", "Ayon sa resulta ng nakaraang pagsusuri...", "Ipinapakita sa ulat na..."</strong>
          </p>
        </div>
      </div>
    `
  }
];

const FLASHCARDS_DATA = [
  {
    id: 1,
    topic: "Pundasyon",
    term: "Layunin ng Pagtatanong at Pagmumungkahi",
    definition: "Naglilinaw (upang maiwasan ang maling hinuha), Nagpapaalam (pagbabahagi ng plano at solusyon), at Nagsusuri (pagtasa sa kredibilidad at lohika).",
    hint: "Tatlong pangunahing gampanin sa diskurso."
  },
  {
    id: 2,
    topic: "3 E's",
    term: "Ang 3 E's ng Mabisang Pahayag",
    definition: "ESTRATEHIYA (tamang paraan at balangkas), ETIKETA (paggalang at tamang tono), at EBIDENSYA (konkretong datos at batayan).",
    hint: "Tatlong salitang nagsisimula sa titik 'E'."
  },
  {
    id: 3,
    topic: "3 E's",
    term: "Estratehiya (Strategy)",
    definition: "Ang pagpili ng wastong pamamaraan, tiyempo, estruktura ng pangungusap, at layunin upang makamit ang ninanais na tugon.",
    hint: "Unang E na tumutukoy sa pamamaraan at balangkas."
  },
  {
    id: 4,
    topic: "3 E's",
    term: "Etiketa (Etiquette)",
    definition: "Ang paggamit ng magalang na tono, pagkilala sa katayuan at damdamin ng kausap, at pagsunod sa mga panlipunang pamantayan ng pagrespeto.",
    hint: "Ikalawang E na tumutukoy sa respeto at tono."
  },
  {
    id: 5,
    topic: "3 E's",
    term: "Ebidensya (Evidence)",
    definition: "Ang mga konkretong datos, dokumento, pananaliksik, at obserbasyong sumusuporta sa ipinapahayag na tanong o mungkahi.",
    hint: "Ikatlong E na tumutukoy sa mga katunayan at datos."
  },
  {
    id: 6,
    topic: "Uri ng Tanong",
    term: "Pagtatanong na Naglilinaw (Clarifying)",
    definition: "Tanong na naglalayong tiyakin ang mensahe at iwasan ang misconception sa pamamagitan ng pagpapatunay sa narinig na impormasyon.",
    hint: "Hal: 'Nais ko lang pong linawin kung...'"
  },
  {
    id: 7,
    topic: "Uri ng Tanong",
    term: "Pagtatanong na Nagpapalalim (Probing)",
    definition: "Tanong na humuhukay ng karagdagang detalye, konteksto, at implicit o di-hayagang kahulugan at implikasyon.",
    hint: "Hal: 'Paano po nakaapekto ang badyet sa pangmatagalang resulta...?'"
  },
  {
    id: 8,
    topic: "Uri ng Tanong",
    term: "Pagtatanong na Sumusuri (Analytical)",
    definition: "Tanong na sumusuri sa kredibilidad ng datos, lohika ng argumento, pamamaraan, at mga posibleng bias o limitasyon.",
    hint: "Hal: 'Gaano po kalaki ang sample size at paano natiyak na walang bias?'"
  },
  {
    id: 9,
    topic: "Dapat Iwasan",
    term: "Barrelled / Double-Barreled Question",
    definition: "Tanong na paligoy-ligoy at pinagsasama ang dalawa o higit pang katanungan gamit ang 'at', na nagiging overwhelming at nakalilito sa sasagot.",
    hint: "Tanong na may dalawang kargada nang sabay."
  },
  {
    id: 10,
    topic: "Dapat Iwasan",
    term: "Leading Question",
    definition: "Tanong na nagdidikta o humihimok na tanggapin ang isang partikular na sagot sa halip na maging neutral.",
    hint: "Hal: 'Hindi ba't napakaganda ng aking ginawa?'"
  },
  {
    id: 11,
    topic: "Dapat Iwasan",
    term: "Loaded Question",
    definition: "Tanong na naglalaman na ng mapanghusgang paratang o asumptibong akusasyon bago pa man makapagsalita ang kausap.",
    hint: "Hal: 'Kailan mo aaminin ang pagkakamali mo?'"
  },
  {
    id: 12,
    topic: "Etika ng Mungkahi",
    term: "Sining at Etika ng Pagmumungkahi",
    definition: "Paglalahad ng opinyon o plano na HINDI pag-uutos (✗), HINDI pagpuna (✗), kundi PANUKALANG MAY DAHILAN (✓).",
    hint: "Ang ginintuang pamantayan sa suhestiyon."
  },
  {
    id: 13,
    topic: "3 Haligi",
    term: "Ideya (Proposal)",
    definition: "Ang pinakapuso ng mungkahi—ang konkretong suhestiyon, aksiyon, o alternatibong inilalapit sa pangkat.",
    hint: "Unang haligi: 'Ano ang gagawin?'"
  },
  {
    id: 14,
    topic: "3 Haligi",
    term: "Paliwanag (Rationale)",
    definition: "Ang lohikal na katuwiran at benepisyo kung bakit makatutulong o kailangan ang iminumungkahing ideya.",
    hint: "Ikalawang haligi: 'Bakit ito makabubuti?'"
  },
  {
    id: 15,
    topic: "3 Haligi",
    term: "Batayan (Evidence)",
    definition: "Ang mga nakalap na datos, obserbasyon, istatistika, o nakaraang karanasan na nagpapatunay sa pangangailangan ng mungkahi.",
    hint: "Ikatlong haligi: 'Saan nanggaling ang patunay?'"
  },
  {
    id: 16,
    topic: "Gramatika",
    term: "Modals sa Pagmumungkahi",
    definition: "Mga katagang tulad ng 'maaari po nating...', 'makabubuti kung...', at 'baka sakaling...' na nagpapalambot ng tono upang hindi magmukhang utos.",
    hint: "Mga pantulong na pandiwang nagbibigay-galang."
  },
  {
    id: 17,
    topic: "Gramatika",
    term: "Kondisyonal na Pahayag",
    definition: "Pormat ng mungkahi na nagpapakita ng sanhi at magiging bunga (Hal. 'Kung idaragdag natin ang X, mas mapapabilis ang Y').",
    hint: "Estrukturang 'Kung... mas...'"
  },
  {
    id: 18,
    topic: "Gramatika",
    term: "Anyong Patanong sa Pagmumungkahi",
    definition: "Paraan ng paglalahad ng ideya sa pamamagitan ng tanong upang maging mas bukas sa talakayan (Hal. 'Ano kaya kung...', 'Paano kung...').",
    hint: "Paglalatag ng suhestiyon na may tono ng pagkonsulta."
  }
];

const BUILDER_PRESETS = [
  {
    title: "Akademikong Pananaliksik (Consultation)",
    expression: "Iminumungkahi po naming",
    ideya: "magtakda ng lingguhang asynchronous peer-consultation tuwing Miyerkules",
    paliwanag: "upang mabigyan ng sapat na oras ang mga miyembrong magrebisa ng kanilang literatura",
    batayan: "batay sa 65% na naantalang pagsusumite ng burador noong nakaraang buwan"
  },
  {
    title: "Pangkatang Proyekto (Gawain)",
    expression: "Makabubuti po siguro kung",
    ideya: "hahatiin natin ang paggawa ng slide deck sa tatlong magkahiwalay na pangkat",
    paliwanag: "upang maiwasan ang pagsisiksikan sa iisang file at mas mapabilis ang layout bago ang deadline",
    batayan: "ayon sa naging karanasan natin noong nakaraang presentasyon na nagkaroon ng technical lag"
  },
  {
    title: "Organisasyon sa Paaralan (Kalinisan)",
    expression: "Maaari po nating subukan na",
    ideya: "maglagay ng color-coded recycling bins sa bawat palapag ng gusali",
    paliwanag: "nang sa gayon ay maging madali at kaaya-aya ang paghihiwalay ng mga nabubulok at di-nabubulok na basura",
    batayan: "ipinapakita sa sarbey ng student council na 80% ng mag-aaral ang nalilito sa kasalukuyang basurahan"
  }
];

const FIX_IT_SCENARIOS = [
  {
    id: 1,
    title: "Sitwasyon 1: Pagsasaayos ng Double-Barreled Question",
    problemText: "Bakit hindi mo pa natatapos ang report at nagpunta ka ba kahapon sa seminar at naintindihan mo ba ang sinabi ng tagapagsalita?",
    errorType: "Barrelled Question (May tatlong magkakaibang tanong na pinagsama gamit ang 'at').",
    modelAnswer: "1. (Clarifying): \"Nais ko lang pong linawin kung nakadalo ka sa seminar kahapon?\"\n2. (Probing): \"Maaari mo bang ibahagi kung paano makatutulong ang natutuhan mo sa pagbuo ng ating report?\"",
    rubricTip: "Paghiwalayin ang magkakaugnay na tanong. Unahin ang paglilinaw sa pagdalo bago magtanong tungkol sa report."
  },
  {
    id: 2,
    title: "Sitwasyon 2: Pagbabago ng Bastos / Mapang-utos na Pahayag",
    problemText: "Gawin mo 'yang slides ngayon din dahil pangit ang font at layout na ginawa mo kahapon!",
    errorType: "Bastos na Pag-uutos at Mapanirang Pagpuna (Walang modals, walang respeto, agresibong tono).",
    modelAnswer: "\"Makabubuti po siguro kung aayusin natin ang laki ng font at layout ng slides (Ideya) upang mas maging madaling basahin ng mga tagapakinig sa likod (Paliwanag), batay sa feedback ng propesor sa nakaraang pagsasanay (Batayan).\"",
    rubricTip: "Gumamit ng modal ('Makabubuti siguro'), ilatag ang kapakinabangan, at banggitin ang ebidensya sa halip na manisi."
  },
  {
    id: 3,
    title: "Sitwasyon 3: Pagwawasto sa Loaded at Leading Question",
    problemText: "Hindi ba't ikaw ang may kasalanan kung bakit mababa ang score ng grupo natin noong nakaraang linggo?",
    errorType: "Loaded Question (May nakalakip nang akusasyon at paghuhusga bago pa sumagot ang kausap).",
    modelAnswer: "\"Maaari po ba nating suriin kung aling mga bahagi ng rubrik ang hindi natin naabot (Analytical) upang maging mas handa tayo sa susunod na gawain (Rationale)?\"",
    rubricTip: "Iwasan ang 'ikaw ang may kasalanan'. Ituon ang tanong sa obhetibong pamantayan at datos (rubrik) at sa solusyon."
  }
];

/**
 * 40-ITEM PRACTICE QUIZ
 * 15 Multiple Choice + 10 Identification + 10 Tama o Mali + 5 Sitwasyonal = 40 ITEMS
 */
const QUIZ_QUESTIONS = [
  // --- MULTIPLE CHOICE (1-15) ---
  {
    id: 1,
    type: "mc",
    category: "Pundasyon",
    question: "Ano ang tawag sa tatlong saligang pundasyon ng mabisang pagpapahayag sa komunikasyon?",
    options: [
      "A. Estratehiya, Etiketa, at Ebidensya",
      "B. Estilo, Ebalwasyon, at Emosyon",
      "C. Estruktura, Eksperimento, at Epekto",
      "D. Edukasyon, Etika, at Ekonomiya"
    ],
    correctAnswer: 0,
    explanation: "Ang 3 E's ng mabisang pahayag ay Estratehiya (tamang balangkas/paraan), Etiketa (paggalang/tono), at Ebidensya (konkretong datos/batayan)."
  },
  {
    id: 2,
    type: "mc",
    category: "Uri ng Tanong",
    question: "Alin sa sumusunod ang tumutukoy sa tanong na paligoy-ligoy, pinagsasama ang dalawa o higit pang katanungan gamit ang 'at', at nakalilito sa sasagot?",
    options: [
      "A. Probing Question",
      "B. Barrelled / Double-Barreled Question",
      "C. Analytical Question",
      "D. Clarifying Question"
    ],
    correctAnswer: 1,
    explanation: "Ang Barrelled o Double-Barreled Question ay nagtataglay ng maraming katanungan nang sabay-sabay na nagiging dahilan upang maging 'overwhelming' at malabo ang magiging sagot."
  },
  {
    id: 3,
    type: "mc",
    category: "Uri ng Tanong",
    question: "Ano ang pangunahing layunin ng isang 'Pagtatanong na Naglilinaw' (Clarifying Question)?",
    options: [
      "A. Pilitin ang kausap na umamin sa kaniyang kamalian",
      "B. Tiyakin ang mensahe at maiwasan ang anumang misconception o maling hinuha",
      "C. Mangalap ng impormasyon na lihim sa publiko",
      "D. Hamunin ang kredibilidad at awtoridad ng nagsasalita"
    ],
    correctAnswer: 1,
    explanation: "Ang Clarifying Question ay ginagamit upang kumpirmahin kung tama ang narinig o naunawaang mensahe nang maiwasan ang hindi pagkakaunawaan."
  },
  {
    id: 4,
    type: "mc",
    category: "Uri ng Tanong",
    question: "Anong uri ng pagtatanong ang humuhukay ng karagdagang detalye at naglalayong alamin ang 'implicit' (di-hayagang) kahulugan at pangmatagalang epekto?",
    options: [
      "A. Pagtatanong na Nagpapalalim (Probing Question)",
      "B. Pagtatanong na Naglilinaw (Clarifying Question)",
      "C. Loaded Question",
      "D. Leading Question"
    ],
    correctAnswer: 0,
    explanation: "Ang Pagtatanong na Nagpapalalim (Probing) ay ginagamit upang lumampas sa mababaw na sagot at tuklasin ang mas malalim na konteksto o mga implicit na detalye."
  },
  {
    id: 5,
    type: "mc",
    category: "Uri ng Tanong",
    question: "Sa isang akademikong pagpupulong, anong uri ng tanong ang sumusuri sa kredibilidad ng metodolohiya, lohika ng argumento, at kawalan ng bias?",
    options: [
      "A. Barrelled Question",
      "B. Pagtatanong na Sumusuri (Analytical Question)",
      "C. Leading Question",
      "D. Loaded Question"
    ],
    correctAnswer: 1,
    explanation: "Ang Analytical Question ay naglalayong mag-ebalwa sa katumpakan ng datos, metodolohikal na tibay, at lohikal na daloy ng katwiran."
  },
  {
    id: 6,
    type: "mc",
    category: "Etika ng Mungkahi",
    question: "Alin ang naglalarawan sa tamang etika at sining ng pagmumungkahi sa isang grupong propesyonal?",
    options: [
      "A. Pagbibigay ng utos nang may mariing tono upang sundin agad",
      "B. Hayagang pagpuna sa kahinaan ng ibang miyembro upang magtanda",
      "C. Paglalahad ng panukalang may katuwiran at dahilan (hindi pag-uutos at hindi pagpuna)",
      "D. Pagtahimik na lamang upang hindi magkaroon ng anumang alitan"
    ],
    correctAnswer: 2,
    explanation: "Ang etika ng pagmumungkahi ay nakasalalay sa pagiging panukalang may dahilan—hindi nagdidikta tulad ng utos at hindi nagpapahiya tulad ng mapanirang puna."
  },
  {
    id: 7,
    type: "mc",
    category: "3 Haligi",
    question: "Ano-ano ang tatlong haligi na bumubuo sa isang buo at mabisang mungkahi?",
    options: [
      "A. Introduksiyon, Katawan, at Konklusyon",
      "B. Ideya (Proposal), Paliwanag (Rationale), at Batayan (Evidence)",
      "C. Emosyon, Etika, at Eksperto",
      "D. Simula, Tunggalian, at Kasukdulan"
    ],
    correctAnswer: 1,
    explanation: "Ang tatlong haligi ng mabisang mungkahi ay: Ideya (ang aksiyon), Paliwanag (ang katuwiran/pakinabang), at Batayan (ang datos/obserbasyong pinagbatayan)."
  },
  {
    id: 8,
    type: "mc",
    category: "3 Haligi",
    question: "Suriin ang pahayag: 'Makabubuti sigurong magtakda tayo ng 15-minutong pahinga tuwing sesyon upang mapanatiling alerto ang isip ng bawat isa, ayon sa resulta ng pagsusuri sa fatigue.' Aling bahagi ang 'Ideya (Proposal)'?",
    options: [
      "A. 'upang mapanatiling alerto ang isip ng bawat isa'",
      "B. 'magtakda tayo ng 15-minutong pahinga tuwing sesyon'",
      "C. 'ayon sa resulta ng pagsusuri sa fatigue'",
      "D. 'Makabubuti sigurong'"
    ],
    correctAnswer: 1,
    explanation: "Ang 'magtakda tayo ng 15-minutong pahinga tuwing sesyon' ang mismong aksiyon o suhestiyong inihahapag (Ideya/Proposal)."
  },
  {
    id: 9,
    type: "mc",
    category: "3 Haligi",
    question: "Sa parehong pahayag sa itaas, aling bahagi ang kumakatawan sa 'Paliwanag (Rationale)'?",
    options: [
      "A. 'magtakda tayo ng 15-minutong pahinga'",
      "B. 'upang mapanatiling alerto ang isip ng bawat isa'",
      "C. 'ayon sa resulta ng pagsusuri sa fatigue'",
      "D. 'tuwing sesyon'"
    ],
    correctAnswer: 1,
    explanation: "Ang 'upang mapanatiling alerto ang isip ng bawat isa' ang naglalahad ng dahilan at benepisyo kung bakit makatutulong ang suhestiyon (Paliwanag/Rationale)."
  },
  {
    id: 10,
    type: "mc",
    category: "3 Haligi",
    question: "Sa parehong pahayag, aling bahagi naman ang itinuturing na 'Batayan (Evidence)'?",
    options: [
      "A. 'ayon sa resulta ng pagsusuri sa fatigue'",
      "B. 'Makabubuti sigurong'",
      "C. 'magtakda tayo ng pahinga'",
      "D. 'upang mapanatiling alerto'"
    ],
    correctAnswer: 0,
    explanation: "Ang 'ayon sa resulta ng pagsusuri sa fatigue' ang siyentipiko o dokumentadong patunay na pinaghuhugutan ng mungkahi (Batayan/Evidence)."
  },
  {
    id: 11,
    type: "mc",
    category: "Gramatika",
    question: "Alin sa sumusunod ang pinakaangkop na pormal na panimula sa pagmumungkahi sa isang akademikong pulong?",
    options: [
      "A. 'Gawin ninyo ang ganito...'",
      "B. 'Makinig kayo dahil ito ang tama...'",
      "C. 'Inirerekomenda ng aming pangkat na...'",
      "D. 'Dapat lang na palitan agad ang plano dahil...'"
    ],
    correctAnswer: 2,
    explanation: "Ang 'Inirerekomenda ng aming pangkat na...' ay pormal, may paggalang, at gumagamit ng tamang rehistro ng wikang Filipino sa akademikong konteksto."
  },
  {
    id: 12,
    type: "mc",
    category: "Gramatika",
    question: "Bakit mahalagang gumamit ng modals tulad ng 'maaari po nating subukan' o 'makabubuti siguro' sa pagmumungkahi?",
    options: [
      "A. Upang itago ang katotohanang wala kang tiwala sa iyong sinasabi",
      "B. Upang mapalambot ang tono at maiwasan ang tunog na nagdidikta o nag-uutos",
      "C. Upang pahabain ang pangungusap at magmukhang matalino",
      "D. Upang malito ang mga nakikinig"
    ],
    correctAnswer: 1,
    explanation: "Ang mga modals ay naglilingkod bilang pampalambot ng tono (hedges/mitigators) upang ang suhestiyon ay maging magalang at hindi magmukhang mapagmataas o nag-uutos."
  },
  {
    id: 13,
    type: "mc",
    category: "Dapat Iwasan",
    question: "Suriin ang tanong: 'Pumunta ka ba sa meeting kahapon at nagustuhan mo ba ang mga bagong opisyal at handa ka na bang magbayad ng ambagan?' Anong uri ito ng tanong?",
    options: [
      "A. Analytical Question",
      "B. Probing Question",
      "C. Barrelled Question",
      "D. Clarifying Question"
    ],
    correctAnswer: 2,
    explanation: "Ito ay isang Barrelled Question dahil pinagkabit-kabit ang tatlong magkakaibang paksa sa iisang hininga gamit ang 'at', na magpapahirap sa pagsagot nang diretso."
  },
  {
    id: 14,
    type: "mc",
    category: "Uri ng Tanong",
    question: "Alin sa mga sumusunod ang pinakamahusay na halimbawa ng isang 'Pagtatanong na Sumusuri' (Analytical)?",
    options: [
      "A. 'Puwede po bang ulitin ang petsa ng submission?'",
      "B. 'Gaano po kalaki ang naging statistical significance ng resulta at paano natiyak na walang bias sa sampling?'",
      "C. 'Hindi ba't mas magaling sumayaw ang grupo namin?'",
      "D. 'Kailan ninyo matatapos ang proyekto at sino ang gagawa?'"
    ],
    correctAnswer: 1,
    explanation: "Ang opsiyon B ay sumusuri sa statistical validity, metodolohiya, at sampling bias, na mga katangian ng Analytical Question."
  },
  {
    id: 15,
    type: "mc",
    category: "3 Haligi",
    question: "Ano ang posibleng negatibong epekto kung magbibigay ng mungkahi na may Ideya lamang ngunit WALANG Paliwanag at Batayan?",
    options: [
      "A. Mas mabilis itong aaprobahan ng mga pinuno",
      "B. Maituturing itong arbitraryo, mahina ang suporta, at madaling tatanggihan dahil walang ebidensya",
      "C. Mas tatangkilikin ito dahil maikli at simple",
      "D. Walang magiging anumang epekto sa desisyon"
    ],
    correctAnswer: 1,
    explanation: "Ang mungkahing walang paliwanag (rationale) at walang batayan (evidence) ay nagmumukhang walang saligang opinyon o kapritso lamang, kaya't madali itong mabasura sa akademikong diskurso."
  },

  // --- IDENTIFICATION (16-25) ---
  {
    id: 16,
    type: "id",
    category: "Dapat Iwasan",
    question: "Tukuyin ang termino: Tawag sa uri ng tanong na pinagsasama ang dalawa o higit pang magkakahiwalay na tanong sa iisang pahayag gamit ang salitang 'at'.",
    acceptableAnswers: ["barrelled question", "double-barreled question", "double barreled", "barrelled", "double-barrelled question"],
    explanation: "Ang Barrelled o Double-Barreled Question ay naglalaman ng higit sa isang tanong na lumilikha ng kalituhan sa kausap."
  },
  {
    id: 17,
    type: "id",
    category: "3 E's",
    question: "Tukuyin ang termino: Ang elemento ng 3 E's na tumutukoy sa paggalang, tamang tono, at konsiderasyon sa kapwa kapag nagpapahayag.",
    acceptableAnswers: ["etiketa", "etiquette"],
    explanation: "Etiketa (Etiquette) ang pundasyong nagtitiyak ng respeto at tamang kaasalan sa pakikipagtalastasan."
  },
  {
    id: 18,
    type: "id",
    category: "Uri ng Tanong",
    question: "Tukuyin ang termino: Uri ng pormal na pagtatanong na naglalayong tiyakin na tama ang pagkakaintindi sa impormasyon at maiwasan ang misconception.",
    acceptableAnswers: ["clarifying question", "clarifying", "pagtatanong na naglilinaw", "naglilinaw"],
    explanation: "Ang Clarifying Question (Pagtatanong na Naglilinaw) ay sumasagot sa pangangailangang tiyakin ang katumpakan ng natanggap na mensahe."
  },
  {
    id: 19,
    type: "id",
    category: "Uri ng Tanong",
    question: "Tukuyin ang termino: Uri ng pagtatanong na humuhukay ng mas malalim na konteksto at implicit o di-hayagang detalye ng isang pahayag.",
    acceptableAnswers: ["probing question", "probing", "pagtatanong na nagpapalalim", "nagpapalalim"],
    explanation: "Ang Probing Question (Pagtatanong na Nagpapalalim) ang ginagamit sa pagsisid sa implicit na implikasyon at detalye."
  },
  {
    id: 20,
    type: "id",
    category: "Uri ng Tanong",
    question: "Tukuyin ang termino: Uri ng tanong na sumusuri sa kredibilidad ng datos, metodolohiya, at lohika ng pangangatwiran.",
    acceptableAnswers: ["analytical question", "analytical", "pagtatanong na sumusuri", "sumusuri"],
    explanation: "Ang Analytical Question (Pagtatanong na Sumusuri) ay nakatuon sa pagsusuri ng ebidensya, lohika, at metodolohiya."
  },
  {
    id: 21,
    type: "id",
    category: "3 Haligi",
    question: "Tukuyin ang termino: Ang haligi ng mungkahi na naglalahad ng datos, obserbasyon, sarbey, o istatistikang pinagbabatayan ng mungkahi.",
    acceptableAnswers: ["batayan", "evidence", "ebidensya"],
    explanation: "Ang Batayan (Evidence) ang kongkretong patunay na nagbibigay-tibay sa iminumungkahing ideya."
  },
  {
    id: 22,
    type: "id",
    category: "3 Haligi",
    question: "Tukuyin ang termino: Ang haligi ng mungkahi na sumasagot kung bakit makatutulong o mahalaga ang iminumungkahing ideya.",
    acceptableAnswers: ["paliwanag", "rationale", "dahilan"],
    explanation: "Ang Paliwanag (Rationale) ang nagpapaliwanag sa benepisyo at kapakinabangan ng solusyon."
  },
  {
    id: 23,
    type: "id",
    category: "Gramatika",
    question: "Tukuyin ang termino: Mga salita tulad ng 'maaari', 'makabubuti', at 'baka sakali' na ginagamit upang palambutin ang tono ng pagmumungkahi.",
    acceptableAnswers: ["modals", "modal", "modal expressions", "mga modal"],
    explanation: "Ang mga modals ay nagpapalambot ng pahayag upang maging kagalang-galang at maiwasan ang tonong nag-uutos."
  },
  {
    id: 24,
    type: "id",
    category: "Dapat Iwasan",
    question: "Tukuyin ang termino: Isang uri ng tanong na nagdidikta o humihimok na tanggapin ang isang partikular na sagot (Hal. 'Hindi ba't maganda ang ideya ko?').",
    acceptableAnswers: ["leading question", "leading", "tanong na leading"],
    explanation: "Ang Leading Question ay kumikiling at humihikayat sa kausap na umayon sa nais marinig ng nagtatanong."
  },
  {
    id: 25,
    type: "id",
    category: "Dapat Iwasan",
    question: "Tukuyin ang termino: Isang tanong na nagtataglay na ng nakapaloob na mapanghusgang paratang o akusasyon bago pa man makasagot ang kausap.",
    acceptableAnswers: ["loaded question", "loaded", "tanong na loaded"],
    explanation: "Ang Loaded Question ay mapanganib dahil may kasamang negatibong akusasyon o pagpapalagay na sumisira sa patas na usapan."
  },

  // --- TAMA O MALI (26-35) ---
  {
    id: 26,
    type: "tf",
    category: "Etika ng Mungkahi",
    question: "Ang pagmumungkahi ay katumbas lamang ng pag-uutos dahil pareho silang naglalayong magpasimula ng bagong gawi.",
    correctAnswer: "Mali",
    explanation: "Mali. Ang pagmumungkahi ay panukalang may dahilan na humihingi ng pagsang-ayon at konsiderasyon; ang pag-uutos naman ay pagpataw ng awtoridad nang walang pagpipilian."
  },
  {
    id: 27,
    type: "tf",
    category: "3 E's",
    question: "Ang Etiketa sa 3 E's ay nangangahulugang paggamit ng magagalang na pananalita at angkop na tono batay sa katayuan at damdamin ng kausap.",
    correctAnswer: "Tama",
    explanation: "Tama. Tinitiyak ng etiketa na pinahahalagahan ang dignidad at damdamin ng kausap sa pamamagitan ng tamang tono at respeto."
  },
  {
    id: 28,
    type: "tf",
    category: "3 Haligi",
    question: "Ang isang mabisang mungkahi ay kailangang magtaglay ng tatlong haligi: Ideya, Paliwanag, at Batayan.",
    correctAnswer: "Tama",
    explanation: "Tama. Kapag kulang ang alinman sa tatlong ito, humihina ang bisa at kredibilidad ng mungkahi."
  },
  {
    id: 29,
    type: "tf",
    category: "Dapat Iwasan",
    question: "Ang tanong na 'Naiintindihan mo ba ang aralin at nagawa mo ba ang takdang-aralin at sasama ka ba bukas?' ay isang magandang halimbawa ng Clarifying Question.",
    correctAnswer: "Mali",
    explanation: "Mali. Ito ay isang Barrelled Question dahil tatlong magkakahiwalay na katanungan ang pinagsiksikan sa iisang pahayag."
  },
  {
    id: 30,
    type: "tf",
    category: "Gramatika",
    question: "Ang paggamit ng modal tulad ng 'Maaari po nating subukan...' ay nagpapakita ng kahinaan ng loob at kawalan ng tiwala sa sarili ng nagsasalita.",
    correctAnswer: "Mali",
    explanation: "Mali. Ito ay tanda ng kahusayan sa etiketa at gramatika upang palambutin ang tono at mag-imbita ng kolaborasyon nang hindi nagdidikta."
  },
  {
    id: 31,
    type: "tf",
    category: "Uri ng Tanong",
    question: "Ang pangunahing layunin ng Pagtatanong na Sumusuri (Analytical Question) ay ipahiya ang tagapagsalita sa pamamagitan ng paglalantad sa kaniyang kamalian.",
    correctAnswer: "Mali",
    explanation: "Mali. Ang layunin nito ay obhetibong suriin ang kredibilidad ng metodolohiya, datos, at lohikal na implikasyon para sa ikatatatag ng diskurso."
  },
  {
    id: 32,
    type: "tf",
    category: "Gramatika",
    question: "Ang estrukturang kondisyonal tulad ng 'Kung idaragdag natin ang X, mas mapapabilis ang Y' ay isang mabisang anyo ng pagmumungkahi.",
    correctAnswer: "Tama",
    explanation: "Tama. Malinaw nitong ipinapakita ang ugnayan ng sanhi (Ideya) at positibong bunga (Paliwanag/Rationale)."
  },
  {
    id: 33,
    type: "tf",
    category: "3 Haligi",
    question: "Maituturing pa ring panukalang may dahilan ang isang suhestiyon kahit walang inilalatag na anumang ebidensya o batayan.",
    correctAnswer: "Mali",
    explanation: "Mali. Kung walang batayan o ebidensya, ito ay nagiging walang basehang kuro-kuro o personal na opinyon lamang."
  },
  {
    id: 34,
    type: "tf",
    category: "Uri ng Tanong",
    question: "Sa Pagtatanong na Nagpapalalim (Probing), nais nating alamin ang implicit o 'di lantad na epekto at karagdagang konteksto ng pahayag.",
    correctAnswer: "Tama",
    explanation: "Tama. Layunin ng probing question na magpalalim lampas sa mababaw o litaw na impormasyon."
  },
  {
    id: 35,
    type: "tf",
    category: "Dapat Iwasan",
    question: "Ang Loaded Question ay naglalaman ng paunang paghuhusga o akusasyon na naglalagay sa tinatanong sa alanganing sitwasyon kahit ano pa ang isagot niya.",
    correctAnswer: "Tama",
    explanation: "Tama. Ang loaded question ay mapandaya dahil nakapaloob na ang konklusyong may sala o negatibo ang tinatanong."
  },

  // --- SITWASYONAL NA PAGSUSURI (36-40) ---
  {
    id: 36,
    type: "mc",
    category: "Sitwasyonal",
    question: "Sa isang thesis defense, tinanong ng panel: 'Paano po ninyo natiyak na ang 30 kalahok ay sapat na upang kumatawan sa kabuuang populasyon ng mga mag-aaral sa lungsod?' Anong uri ito ng tanong?",
    options: [
      "A. Pagtatanong na Naglilinaw (Clarifying)",
      "B. Pagtatanong na Sumusuri (Analytical)",
      "C. Double-Barreled Question",
      "D. Loaded Question"
    ],
    correctAnswer: 1,
    explanation: "Analytical Question ito dahil sinusuri nito ang representasyon ng sample size at metodolohikal na baliditi ng pananaliksik."
  },
  {
    id: 37,
    type: "mc",
    category: "Sitwasyonal",
    question: "Nais mong magmungkahi sa iyong lider na ilipat ang oras ng group study. Alin sa sumusunod ang nagpapakita ng kumpletong 3 Haligi (Ideya + Paliwanag + Batayan) at may tamang Etiketa?",
    options: [
      "A. 'Ilipat natin ang oras sa Sabado nang gabi dahil ayaw ko sa Biyernes.'",
      "B. 'Makabubuti po siguro kung ililipat natin ang pagpupulong sa Sabado nang umaga (Ideya) upang mas makapagpokus ang lahat at walang kasabay na klase (Paliwanag), batay sa resulta ng ating sarbey sa availability ng grupo (Batayan).'",
      "C. 'Bakit ba laging Biyernes ang miting natin? Hindi ba ninyo naisip na pagod na ang lahat?'",
      "D. 'Maaari bang ilipat na lang ang oras?'"
    ],
    correctAnswer: 1,
    explanation: "Ang opsiyon B ay nagtataglay ng modal ('Makabubuti po siguro'), Ideya (ilipat sa Sabado ng umaga), Paliwanag (makapagpokus/walang kasabay na klase), at Batayan (sarbey sa availability)."
  },
  {
    id: 38,
    type: "mc",
    category: "Sitwasyonal",
    question: "Sinabi ng isang tagapagsalita: 'Batay sa datos ng Registrar noong unang semestre, 45% ng mga transferee ay nahirapang makakuha ng kanilang crediting forms.' Anong haligi ito sa mabisang pahayag?",
    options: [
      "A. Ideya (Proposal)",
      "B. Paliwanag (Rationale)",
      "C. Batayan (Evidence)",
      "D. Modal"
    ],
    correctAnswer: 2,
    explanation: "Ito ay Batayan (Evidence) sapagkat naglalahad ito ng opisyal na datos mula sa Registrar na may tiyak na porsyento (45%)."
  },
  {
    id: 39,
    type: "mc",
    category: "Sitwasyonal",
    question: "Napansin mo sa sarbey ng iyong pananaliksik na may tanong na: 'Nasiyahan ka ba sa serbisyo ng kantina at masarap ba ang pagkain at mura ba ang presyo?' Paano ito dapat iayos upang maging maayos ang datos?",
    options: [
      "A. Panatilihin ito dahil nakakatipid sa espasyo ng papel",
      "B. Hatiin ito sa tatlong magkakahiwalay na payak na tanong: isa para sa serbisyo, isa sa lasa, at isa sa presyo",
      "C. Palitan ng Loaded Question upang mas maging emosyonal ang tugon",
      "D. Alisin na lamang ang buong tanong sa sarbey"
    ],
    correctAnswer: 1,
    explanation: "Dapat itong hatiin sa tatlong magkahiwalay na katanungan upang maiwasan ang double-barreled error at masukat nang tiyak ang bawat baryabol."
  },
  {
    id: 40,
    type: "mc",
    category: "Sitwasyonal",
    question: "Kung sa gitna ng isang debate ay napansin mong naging 'Leading' o 'Loaded' ang tanong ng iyong kakampi ('Bakit ba hindi matanggap ng kabilang panig na palpak ang kanilang plano?'), ano ang pinakawastong paraan upang itama ang direksyon ayon sa Etika at Estratehiya?",
    options: [
      "A. Hayaan na lamang upang mas mapahiya ang kalaban",
      "B. I-rephrase ang tanong sa isang neutral at obhetibong paraan: 'Maaari po bang linawin ng kabilang panig kung ano ang kanilang mitigating measures sakaling magkaroon ng aberya sa plano?'",
      "C. Sumigaw at mag-utos sa kabilang panig na sumagot agad",
      "D. Bawiin ang tanong at huwag nang magsalita pa"
    ],
    correctAnswer: 1,
    explanation: "Ang pag-rephrase sa neutral, pormal, at analytical na anyo ay nagpapanatili ng propesyonalismo at etika ng akademikong diskurso nang hindi lumalabag sa pamantayan."
  }
];
