@echo off
echo ========================================================
echo Pushing Pagtatanong at Pagmumungkahi Review Hub to GitHub
echo Repository: https://github.com/Uto2/Eia
echo ========================================================
echo.

cd /d "E:\Review"
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================================
    echo [SUCCESS] Code successfully pushed to https://github.com/Uto2/Eia
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo [NOTE] If prompted, sign in via browser or enter your
    echo GitHub Personal Access Token (PAT).
    echo ========================================================
)

echo.
pause
