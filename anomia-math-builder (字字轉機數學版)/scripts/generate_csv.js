import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { versions } from '../src/data/gameData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, '../對照表');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const exportVersionToCSV = (versionId, fileName) => {
    const version = versions[versionId];
    if (!version) {
        console.error(`Version ${versionId} not found`);
        return;
    }
    
    const headers = ["卡牌序號", "圖案名稱", "主題類別", "卡牌題目", "卡牌答案", "張數"];
    const rows = version.cards.map(card => [
        card.id,
        card.value,
        card.summary,
        card.name,
        card.effect,
        card.count
    ]);
    
    const csvContent = [
        headers.join(","),
        ...rows.map(row => row.map(val => {
            const str = String(val === undefined || val === null ? '' : val);
            if (str.includes(',') || str.includes('"') || str.includes('\n')) {
                return `"${str.replace(/"/g, '""')}"`;
            }
            return str;
        }).join(","))
    ].join("\n");
    
    // Write with UTF-8 BOM so Excel opens it with correct Chinese characters
    fs.writeFileSync(path.join(outputDir, fileName), "\uFEFF" + csvContent, 'utf-8');
    console.log(`Generated: ${fileName}`);
};

exportVersionToCSV('anomia-math-7a-read', '字字轉機數學版_七年級上學期_題目答案對照表.csv');
exportVersionToCSV('anomia-math-7b-read', '字字轉機數學版_七年級下學期_題目答案對照表.csv');
