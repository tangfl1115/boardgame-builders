@echo off
chcp 65001 >nul
echo ===========================================
echo         Love Letter 自動部署小幫手
echo ===========================================
echo.
echo [1/2] 正在把最新的程式碼編譯成網頁檔案...
call npm run build
if %errorlevel% neq 0 (
    echo [錯誤] 編譯失敗，請檢查程式碼。
    pause
    exit /b %errorlevel%
)
echo.
echo [2/2] 準備將網頁上傳到 Netlify...
echo (如果是第一次執行，會跳出瀏覽器請你登入 Netlify)
echo.
call npx netlify-cli deploy --prod
echo.
echo ===========================================
echo   部署結束！你可以點擊上面的網址查看成果
echo ===========================================
pause
