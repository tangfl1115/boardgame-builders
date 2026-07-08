import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as XLSX from 'xlsx';
import { versions } from '../src/data/gameData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, '../對照表');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const exportVersionToExcel = (versionId, baseName) => {
    const version = versions[versionId];
    if (!version) {
        console.error(`Version ${versionId} not found`);
        return;
    }
    
    // ------------------ 1. 產生 Excel (.xlsx) ------------------
    const data = [
        ["卡牌序號", "圖案名稱", "主題類別", "卡牌題目", "卡牌答案", "張數"]
    ];
    
    version.cards.forEach(card => {
        data.push([
            card.id,
            card.value,
            card.summary,
            card.name,
            card.effect,
            card.count
        ]);
    });
    
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    worksheet['!cols'] = [
        { wch: 12 }, // 卡牌序號
        { wch: 12 }, // 圖案名稱
        { wch: 25 }, // 主題類別
        { wch: 22 }, // 卡牌題目
        { wch: 15 }, // 卡牌答案
        { wch: 8 }   // 張數
    ];
    
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "對照表");
    XLSX.writeFile(workbook, path.join(outputDir, `${baseName}.xlsx`));
    console.log(`Generated XLSX: ${baseName}.xlsx`);

    // ------------------ 2. 產生 CSV (.csv) ------------------
    const csvContent = [
        data[0].join(","),
        ...data.slice(1).map(row => row.map(val => {
            const str = String(val === undefined || val === null ? '' : val);
            if (str.includes(',') || str.includes('"') || str.includes('\n')) {
                return `"${str.replace(/"/g, '""')}"`;
            }
            return str;
        }).join(","))
    ].join("\n");
    
    fs.writeFileSync(path.join(outputDir, `${baseName}.csv`), "\uFEFF" + csvContent, 'utf-8');
    console.log(`Generated CSV: ${baseName}.csv`);
};

exportVersionToExcel('anomia-math-7a-read', '字字轉機數學版_七年級上學期_題目答案對照表');
exportVersionToExcel('anomia-math-7b-read', '字字轉機數學版_七年級下學期_題目答案對照表');
