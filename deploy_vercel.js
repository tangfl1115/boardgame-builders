const { execSync } = require('child_process');
const path = require('path');

const baseDir = __dirname;

// 檢查 Vercel 登入狀態與 Token 是否有效，若無效則主動引導登入
console.log('正在檢查 Vercel 登入狀態...');
try {
    const whoami = execSync('npx vercel whoami', { stdio: 'pipe', encoding: 'utf8' });
    console.log(`已登入 Vercel 帳號: ${whoami.trim()}`);
} catch (e) {
    console.log('\n[提示] 偵測到您尚未登入 Vercel 或登入 Token 已失效。');
    console.log('正在為您啟動登入流程，請在接下來開啟的瀏覽器視窗中完成驗證...\n');
    try {
        execSync('npx vercel login', { stdio: 'inherit' });
    } catch (loginError) {
        console.error('登入失敗，請確認登入流程已完成。');
        process.exit(1);
    }
}

const targetDirs = [
    'binary-hackers-builder',
    'criminal-dance-builder',
    'potion-master-builder',
    'love-letter-builder',
    'pudding-kingdom-builder'
];

targetDirs.forEach(dir => {
    const projectPath = path.join(baseDir, dir);
    console.log(`\n========================================`);
    console.log(`正在部署 ${dir} 至 Vercel...`);
    try {
        console.log(`[執行] 上傳原始碼並在 Vercel 雲端進行編譯與部署...`);
        const deployOutput = execSync('npx vercel --yes --prod', { cwd: projectPath, encoding: 'utf8' });
        console.log(deployOutput);
        console.log(`[成功] ${dir} 已成功部署至 Vercel。`);
    } catch (e) {
        console.error(`[失敗] 部署 ${dir} 時發生錯誤:`, e.message);
    }
});
