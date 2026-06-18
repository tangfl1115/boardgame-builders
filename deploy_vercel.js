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
    // === 原有的桌遊 ===
    'love-letter-builder',          // 1. 情書
    'star-rebels-builder',          // 2. 星際反叛軍（改編自政變）
    'frontier-sectors-builder',     // 3. 星際邊境戰（改編自空陸海）
    'wizard-duel-builder',          // 4. 魔法學徒的對決（改編自雙雄對決）
    'pharaohs-gold-builder',        // 5. 古墓探秘（改編自失落的遺產）
    'pudding-kingdom-builder',      // 6. 豆腐王國
    'eco-city-tomorrow-builder',    // 7. 明日綠色都市（改編自擴建都市）
    // === 新增 13 款桌遊 ===
    'agropolis-builder',            // 8. 農場奇境（改編自農業都市）
    'food-chain-island-builder',    // 9. 叢林食物鏈（改編自食物鏈島）
    'orchard-builder',              // 10. 銀河果園（改編自果園）
    'grove-builder',                // 11. 星際果林（改編自果林）
    'forage-builder',               // 12. 宇宙採集（改編自採集）
    'rove-robot-builder',           // 13. 太空機器人（改編自 ROVE）
    'gryphon-inn-builder',          // 14. 糗客棧（改編自醜獅鷲旅店）
    'flower-language-builder',      // 15. 花語密語（改編自花之語）
    'circle-wagons-builder',        // 16. 星際拓荒（改編自環形馬車）
    'avignon-builder',              // 17. 三國謀士（改編自阿維尼翁）
    'pentaquark-builder',           // 18. 粒子獵人（改編自五夸克）
    'mini-rogue-builder',           // 19. 寶箱勇者（改編自迷你地城）
    'pocket-zombie-builder',        // 20. 殭屍逃生（改編自口袋殭屍）
    // === 額外桌遊（非 20 款清單） ===
    'binary-hackers-builder',       // 駭客密碼戰
    'criminal-dance-builder',       // 校園搗蛋鬼
    'potion-master-builder',        // 魔藥大師
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
