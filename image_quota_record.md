# AntiGravity 生圖額度限制與規則紀錄

本文件用於記錄與追蹤 AntiGravity Agent 內建生圖工具 (`generate_image`) 的額度限制，以便未來專案開發時的資源調配。

## 📊 額度統計與測試數據

*   **單次週期額度上限**：約 **25 ~ 30 張圖片**。
*   **測試實測數據**：
    1.  `eco-city-tomorrow` (明日綠色都市)：成功生成 **4 張**。
    2.  `agropolis` (農場/阿格羅波利斯)：成功生成 **4 張**。
    3.  `food-chain-island` (食物鏈島)：成功生成 **18 張**。
    *   **累計成功生成**：**26 張** 圖片後即觸發額度用罄限制。
*   **額度重置週期**：約為 **24 小時**。
    *   實測重置時間點為：**台灣時間每日上午 06:16** 左右。

---

## 💡 額度最佳化與應對策略

當需要進行大規模卡牌生圖（如後續十幾款桌遊、上百張卡牌）時，建議採用以下混合方案：

### 方案 A：內建生圖 (優先消耗 Agent 額度)
*   **適用情境**：小型桌遊（卡牌數 $\le 10$ 張）、零星補圖。
*   **優點**：由 Agent 自動生成、命名並直接寫入專案目錄，完全自動化。
*   **缺點**：每日有 26 張左右的上限。

### 方案 B：網頁版 Gemini Advanced 生圖 (無限額度，手動搬移)
*   **適用情境**：大型桌遊、批次大量生圖、人物一致性要求極高的角色卡。
*   **優點**：付費版網頁額度無上限，且可透過對話持續微調細節。
*   **自動化流程**：
    1.  開啟並複製 [image_generation_guide.md](file:///C:/Users/tangf/.gemini/antigravity/brain/4fa2ddf7-703f-4507-a544-dde1b6534819/image_generation_guide.md) 中的 Prompt。
    2.  於網頁生成並下載，檔名改為建議檔名。
    3.  存入 [user_generated_images](file:///d:/2026antigravity/桌遊創建/user_generated_images/)。
    4.  由 Agent 執行 `node distribute_images.js` 一鍵分發。
