@echo off
echo ===========================================
echo     Vercel Auto Deployment for Boardgames
echo ===========================================
echo.
echo Note: Please make sure you have registered and logged in to Vercel.
echo If not, this script will guide you to log in in your browser.
echo.
echo Starting Vercel deployment...
node "%~dp0deploy_vercel.js"
echo.
echo ===========================================
echo   Deployment complete!
echo ===========================================
pause
