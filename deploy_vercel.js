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
    'love-letter-builder (情書)',          // 1. 情書
    'star-rebels-builder (政變)',          // 2. 星際反叛軍（改編自政變）
    'frontier-sectors-builder (空陸海)',     // 3. 星際邊境戰（改編自空陸海）
    'wizard-duel-builder (雙雄對決)',          // 4. 魔法學徒的對決（改編自雙雄對決）
    'pharaohs-gold-builder (失落的遺產)',        // 5. 古墓探秘（改編自失落的遺產）
    'pudding-kingdom-builder (豆腐王國)',      // 6. 豆腐王國
    'eco-city-tomorrow-builder (擴建都市)',    // 7. 明日綠色都市（改編自擴建都市）
    // === 新增 13 款桌遊 ===
    'agropolis-builder (農業都市)',            // 8. 農場奇境（改編自農業都市）
    'food-chain-island-builder (食物鏈島)',    // 9. 叢林食物鏈（改編自食物鏈島）
    'orchard-builder (果園)',              // 10. 銀河果園（改編自果園）
    'grove-builder (果林)',                // 11. 星際果林（改編自果林）
    'forage-builder (採集)',               // 12. 宇宙採集（改編自採集）
    'rove-robot-builder (ROVE)',           // 13. 太空機器人（改編自 ROVE）
    'gryphon-inn-builder (醜獅鷲旅店)',          // 14. 糗客棧（改編自醜獅鷲旅店）
    'flower-language-builder (花之語)',      // 15. 花語密語（改編自花之語）
    'circle-wagons-builder (環形馬車)',        // 16. 星際拓荒（改編自環形馬車）
    'avignon-builder (阿維尼翁)',              // 17. 三國謀士（改編自阿維尼翁）
    'pentaquark-builder (五夸克)',           // 18. 粒子獵人（改編自五夸克）
    'mini-rogue-builder (迷你地城)',           // 19. 寶箱勇者（改編自迷你地城）
    'school-hide-seek-builder (口袋殭屍)',        // 20. 校園躲貓貓大王（改編自口袋殭屍）
    // === 額外桌遊（非 20 款清單） ===
    'binary-hackers-builder (駭客密碼戰)',       // 駭客密碼戰
    'criminal-dance-builder (校園搗蛋鬼)',       // 校園搗蛋鬼
    'potion-master-builder (魔藥大師)',        // 魔藥大師
];

targetDirs.forEach(dir => {
    const projectPath = path.join(baseDir, dir);
    console.log(`\n========================================`);
    console.log(`正在部署 ${dir} 至 Vercel...`);
    try {
        const cleanName = dir.split(' (')[0];
        console.log(`[執行] 上傳原始碼並在 Vercel 雲端進行編譯與部署 (專案名稱: ${cleanName})...`);
        const deployOutput = execSync(`npx.cmd vercel --name "${cleanName}" --yes --prod`, { cwd: projectPath, encoding: 'utf8' });
        console.log(deployOutput);
        console.log(`[成功] ${dir} 已成功部署至 Vercel。`);
    } catch (e) {
        console.error(`[失敗] 部署 ${dir} 時發生錯誤:`, e.message);
    }
});
