// v1.0.0 - 2026-07-09
// Changelog:
// - 國中一年級數學簡化版（七上數與式、七下幾何比例）
// - 採用極簡算式與觀念（1-2秒可心算答題的難度），完美契合桌遊搶答節奏。
// - 每學期包含 12 類別 × 4 圖案/單字 (2個觀念卡 + 2個計算卡)

export const versions = {
    "anomia-math-7a-read": {
        id: "anomia-math-7a-read",
        name: "七上數與式 - 觀念運算朗讀版",
        themeName: "七年級上學期數學朗讀",
        description: "國中一年級上學期基礎級。包含整數、分數、因數倍數、科學記號與一元一次方程式。對決時需迅速唸出對方卡片上的數學名詞，或快速算出極簡數學題答案！",
        referenceGame: "字字轉機 (Anomia)",
        backColor: "#1e3a8a",
        backBorder: "#172554",
        pattern: "bg-grid",
        cards: [
            // ==================== Circle (整數運算) ====================
            { id: "card-m1-1", name: "相反數", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的運算 (Integer Operations)", effect: "與原點等距且方向相反的數" },
            { id: "card-m1-2", name: "絕對值", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的運算 (Integer Operations)", effect: "數線上點到原點的距離" },
            { id: "card-m1-3", name: "-2 + 5 = ?", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的運算 (Integer Operations)", effect: "3" },
            { id: "card-m1-4", name: "4 - 6 = ?", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的運算 (Integer Operations)", effect: "-2" },
            { id: "card-m1-5", name: "-3 * 2 = ?", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的乘除 (Multiplication/Division)", effect: "-6" },
            { id: "card-m1-6", name: "-10 / (-2) = ?", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的乘除 (Multiplication/Division)", effect: "5" },

            // ==================== Square (指數與科學) ====================
            { id: "card-m1-7", name: "科學記號", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "指數與科學記號 (Exponents)", effect: "a * 10^n 形式的記法" },
            { id: "card-m1-8", name: "2^3 = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "指數與科學記號 (Exponents)", effect: "8" },
            { id: "card-m1-9", name: "10^3 = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "指數與科學記號 (Exponents)", effect: "1000" },
            { id: "card-m1-10", name: "5^0 = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "指數與科學記號 (Exponents)", effect: "1" },
            { id: "card-m1-11", name: "0 * (-7) = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "整數相乘 (Integer Mult)", effect: "0" },
            { id: "card-m1-12", name: "-8 / 4 = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "整數相除 (Integer Div)", effect: "-2" },

            // ==================== Triangle (因數與倍數) ====================
            { id: "card-m1-13", name: "質數", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "因數與倍數 (Factors & Multiples)", effect: "大於1且因數只有1與本身的數" },
            { id: "card-m1-14", name: "最接近10的質數", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "因數與倍數 (Factors & Multiples)", effect: "11 (或 7)" },
            { id: "card-m1-15", name: "(4, 6) = ?", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "因數與倍數 (Factors & Multiples)", effect: "2 (最大公因數)" },
            { id: "card-m1-16", name: "[3, 4] = ?", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "因數與倍數 (Factors & Multiples)", effect: "12 (最小公倍數)" },
            { id: "card-m1-17", name: "短除法", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "質因數分解 (Factorization)", effect: "求公因數與公倍數的除法方式" },
            { id: "card-m1-18", name: "12的質因數", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "質因數分解 (Factorization)", effect: "2 和 3" },

            // ==================== Rectangle (分數運算) ====================
            { id: "card-m1-19", name: "最簡分數", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的運算 (Fraction Operations)", effect: "分子與分母互質的分數" },
            { id: "card-m1-20", name: "2/3的倒數", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的運算 (Fraction Operations)", effect: "3/2" },
            { id: "card-m1-21", name: "1/2 + 1/2 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的運算 (Fraction Operations)", effect: "1" },
            { id: "card-m1-22", name: "3/4 - 1/4 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的運算 (Fraction Operations)", effect: "1/2" },
            { id: "card-m1-23", name: "1/2 * 4 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的乘法 (Fraction Mult)", effect: "2" },
            { id: "card-m1-24", name: "1/2 / 2 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的除法 (Fraction Div)", effect: "1/4" },

            // ==================== Rhombus (代數式與化簡) ====================
            { id: "card-m1-25", name: "未知數", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數式與簡記 (Algebraic Expressions)", effect: "常以 x, y 等英文字母表示" },
            { id: "card-m1-26", name: "2x + 3x = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數式與簡記 (Algebraic Expressions)", effect: "5x" },
            { id: "card-m1-27", name: "x + x = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數式與簡記 (Algebraic Expressions)", effect: "2x" },
            { id: "card-m1-28", name: "3(x + 2) = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數式與簡記 (Algebraic Expressions)", effect: "3x + 6" },
            { id: "card-m1-29", name: "常數項", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數化簡題 (Simplification)", effect: "代數式中不含未知數的項" },
            { id: "card-m1-30", name: "5x - x = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數化簡題 (Simplification)", effect: "4x" },

            // ==================== Trapezoid (方程式與求解) ====================
            { id: "card-m1-31", name: "等量公理", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次方程式 (Linear Equations)", effect: "等式兩邊同加減乘除仍相等" },
            { id: "card-m1-32", name: "移項法則", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次方程式 (Linear Equations)", effect: "跨越等號時，加減乘除互換的規律" },
            { id: "card-m1-33", name: "x + 3 = 10", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次方程式 (Linear Equations)", effect: "x = 7" },
            { id: "card-m1-34", name: "2x = 8", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次方程式 (Linear Equations)", effect: "x = 4" },
            { id: "card-m1-35", name: "3x = -9", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "方程式求解題 (Equation Solving)", effect: "x = -3" },
            { id: "card-m1-36", name: "x - 4 = 2", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "方程式求解題 (Equation Solving)", effect: "x = 6" },

            // ==================== Ellipse (數線與絕對值) ====================
            { id: "card-m1-37", name: "原點", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "數線與絕對值 (Number Lines)", effect: "數線上表示0的點" },
            { id: "card-m1-38", name: "|-5| = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "數線與絕對值 (Number Lines)", effect: "5" },
            { id: "card-m1-39", name: "-(-3) = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "數線與絕對值 (Number Lines)", effect: "3" },
            { id: "card-m1-40", name: "0的絕對值", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "數線與絕對值 (Number Lines)", effect: "0" },
            { id: "card-m1-41", name: "先乘除後加減", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "四則運算規則 (Arithmetic Rules)", effect: "基本運算優先順序" },
            { id: "card-m1-42", name: "2 * 3 + 4 = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "四則運算規則 (Arithmetic Rules)", effect: "10" },

            // ==================== Pentagon (四則與分數性質) ====================
            { id: "card-m1-43", name: "10 - 2 * 3 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "四則運算題 (Arithmetic Calculation)", effect: "4" },
            { id: "card-m1-44", name: "(-1)^2 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "指數乘方題 (Exponent Power)", effect: "1" },
            { id: "card-m1-45", name: "2^2 * 3 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "質因數分解 (Factorization)", effect: "12" },
            { id: "card-m1-46", name: "2 * 5 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "質因數分解 (Factorization)", effect: "10" },
            { id: "card-m1-47", name: "2/3 * 3/2 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "分數乘除四則 (Fraction Operations)", effect: "1" },
            { id: "card-m1-48", name: "2x + 1 = 5", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "方程式求解題 (Equation Solving)", effect: "x = 2" },

            // ==================== Wild Cards ====================
            { id: "wild-1", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "square", color2: "#3b82f6", number2: "square", hex: "#475569", summary: "Circle & Square", effect: "當此牌翻出時，持有這兩個圖形（circle / square）的玩家即可觸發對決！" },
            { id: "wild-2", name: "Wild Card", count: 1, isWild: true, shape1: "triangle", color1: "#22c55e", number1: "triangle", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Triangle & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（triangle / rectangle）的玩家即可觸發對決！" },
            { id: "wild-3", name: "Wild Card", count: 1, isWild: true, shape1: "rhombus", color1: "#a855f7", number1: "rhombus", shape2: "trapezoid", color2: "#f97316", number2: "trapezoid", hex: "#475569", summary: "Rhombus & Trapezoid", effect: "當此牌翻出時，持有這兩個圖形（rhombus / trapezoid）的玩家即可觸發對決！" },
            { id: "wild-4", name: "Wild Card", count: 1, isWild: true, shape1: "ellipse", color1: "#ec4899", number1: "ellipse", shape2: "pentagon", color2: "#06b6d4", number2: "pentagon", hex: "#475569", summary: "Ellipse & Pentagon", effect: "當此牌翻出時，持有這兩個圖形（ellipse / pentagon）的玩家即可觸發對決！" },
            { id: "wild-5", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "triangle", color2: "#22c55e", number2: "triangle", hex: "#475569", summary: "Circle & Triangle", effect: "當此牌翻出時，持有這兩個圖形（circle / triangle）的玩家即可觸發對決！" },
            { id: "wild-6", name: "Wild Card", count: 1, isWild: true, shape1: "square", color1: "#3b82f6", number1: "square", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Square & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（square / rectangle）的玩家即可觸發對決！" }
        ],
        rules: [
            { title: "🎯 遊戲目標", desc: "當翻出相同幾何圖形（或符合萬能牌）時，比對手搶先唸出對方卡牌上的數學名詞定義，或算出數學題答案！" },
            { title: "📦 遊戲準備", desc: "將 48 張數學牌與 6 張萬能牌混合洗勻，面朝下放置中央作為牌堆。玩家輪流翻開一張牌，置於自己面前。" },
            { title: "⚔️ 觸發對決", desc: "當有兩位玩家面前翻開的卡牌上，幾何圖形（顏色與標記）完全相同時，立即觸發「對決」！" },
            { title: "🗣️ 對決運算", desc: "對決雙方必須看著「對方的卡牌」，迅速唸出定義或算出算式答案（小括號內為正確解答）。先喊出正確答案者獲勝！" },
            { title: "⛓️ 連鎖匹配", desc: "當贏家移走輸家的卡牌後，輸家面前可能會露出下一張舊卡牌。如果該圖案又與場上其他人相同，會立即觸發新的連鎖對決！" },
            { title: "🌟 萬能牌 (Wild)", desc: "若翻出萬能牌，置於場中央。當有玩家卡牌的圖形符合萬能牌上顯示的兩個圖案之一時，兩位玩家即使圖案不同也會觸發對決。" }
        ]
    },
    "anomia-math-7a-duel": {
        id: "anomia-math-7a-duel",
        name: "七上數與式 - 類別概念對決版",
        themeName: "七年級上學期類別對決",
        description: "國中一年級上學期基礎級。對決時玩家需要唸出符合對方卡片「數學主題類別」的「另一個」數學名詞或公式！",
        referenceGame: "字字轉機 (Anomia)",
        backColor: "#1e3a8a",
        backBorder: "#172554",
        pattern: "bg-grid",
        cards: [
            // 共享相同的七上牌卡定義
            { id: "card-m1-1", name: "相反數", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的運算 (Integer Operations)", effect: "與原點等距且方向相反的數" },
            { id: "card-m1-2", name: "絕對值", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的運算 (Integer Operations)", effect: "數線上點到原點的距離" },
            { id: "card-m1-3", name: "-2 + 5 = ?", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的運算 (Integer Operations)", effect: "3" },
            { id: "card-m1-4", name: "4 - 6 = ?", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的運算 (Integer Operations)", effect: "-2" },
            { id: "card-m1-5", name: "-3 * 2 = ?", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的乘除 (Multiplication/Division)", effect: "-6" },
            { id: "card-m1-6", name: "-10 / (-2) = ?", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的乘除 (Multiplication/Division)", effect: "5" },
            { id: "card-m1-7", name: "科學記號", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "指數與科學記號 (Exponents)", effect: "a * 10^n 形式的記法" },
            { id: "card-m1-8", name: "2^3 = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "指數與科學記號 (Exponents)", effect: "8" },
            { id: "card-m1-9", name: "10^3 = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "指數與科學記號 (Exponents)", effect: "1000" },
            { id: "card-m1-10", name: "5^0 = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "指數與科學記號 (Exponents)", effect: "1" },
            { id: "card-m1-11", name: "0 * (-7) = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "整數相乘 (Integer Mult)", effect: "0" },
            { id: "card-m1-12", name: "-8 / 4 = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "整數相除 (Integer Div)", effect: "-2" },
            { id: "card-m1-13", name: "質數", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "因數與倍數 (Factors & Multiples)", effect: "大於1且因數只有1與本身的數" },
            { id: "card-m1-14", name: "最接近10的質數", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "因數與倍數 (Factors & Multiples)", effect: "11 (或 7)" },
            { id: "card-m1-15", name: "(4, 6) = ?", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "因數與倍數 (Factors & Multiples)", effect: "2 (最大公因數)" },
            { id: "card-m1-16", name: "[3, 4] = ?", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "因數與倍數 (Factors & Multiples)", effect: "12 (最小公倍數)" },
            { id: "card-m1-17", name: "短除法", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "質因數分解 (Factorization)", effect: "求公因數與公倍數的除法方式" },
            { id: "card-m1-18", name: "12的質因數", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "質因數分解 (Factorization)", effect: "2 和 3" },
            { id: "card-m1-19", name: "最簡分數", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的運算 (Fraction Operations)", effect: "分子與分母互質的分數" },
            { id: "card-m1-20", name: "2/3的倒數", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的運算 (Fraction Operations)", effect: "3/2" },
            { id: "card-m1-21", name: "1/2 + 1/2 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的運算 (Fraction Operations)", effect: "1" },
            { id: "card-m1-22", name: "3/4 - 1/4 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的運算 (Fraction Operations)", effect: "1/2" },
            { id: "card-m1-23", name: "1/2 * 4 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的乘法 (Fraction Mult)", effect: "2" },
            { id: "card-m1-24", name: "1/2 / 2 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的除法 (Fraction Div)", effect: "1/4" },
            { id: "card-m1-25", name: "未知數", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數式與簡記 (Algebraic Expressions)", effect: "常以 x, y 等英文字母表示" },
            { id: "card-m1-26", name: "2x + 3x = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數式與簡記 (Algebraic Expressions)", effect: "5x" },
            { id: "card-m1-27", name: "x + x = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數式與簡記 (Algebraic Expressions)", effect: "2x" },
            { id: "card-m1-28", name: "3(x + 2) = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數式與簡記 (Algebraic Expressions)", effect: "3x + 6" },
            { id: "card-m1-29", name: "常數項", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數化簡題 (Simplification)", effect: "代數式中不含未知數的項" },
            { id: "card-m1-30", name: "5x - x = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數化簡題 (Simplification)", effect: "4x" },
            { id: "card-m1-31", name: "等量公理", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次方程式 (Linear Equations)", effect: "等式兩邊同加減乘除仍相等" },
            { id: "card-m1-32", name: "移項法則", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次方程式 (Linear Equations)", effect: "跨越等號時，加減乘除互換的規律" },
            { id: "card-m1-33", name: "x + 3 = 10", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次方程式 (Linear Equations)", effect: "x = 7" },
            { id: "card-m1-34", name: "2x = 8", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次方程式 (Linear Equations)", effect: "x = 4" },
            { id: "card-m1-35", name: "3x = -9", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "方程式求解題 (Equation Solving)", effect: "x = -3" },
            { id: "card-m1-36", name: "x - 4 = 2", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "方程式求解題 (Equation Solving)", effect: "x = 6" },
            { id: "card-m1-37", name: "原點", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "數線與絕對值 (Number Lines)", effect: "數線上表示0的點" },
            { id: "card-m1-38", name: "|-5| = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "數線與絕對值 (Number Lines)", effect: "5" },
            { id: "card-m1-39", name: "-(-3) = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "數線與絕對值 (Number Lines)", effect: "3" },
            { id: "card-m1-40", name: "0的絕對值", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "數線與絕對值 (Number Lines)", effect: "0" },
            { id: "card-m1-41", name: "先乘除後加減", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "四則運算規則 (Arithmetic Rules)", effect: "基本運算優先順序" },
            { id: "card-m1-42", name: "2 * 3 + 4 = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "四則運算規則 (Arithmetic Rules)", effect: "10" },
            { id: "card-m1-43", name: "10 - 2 * 3 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "四則運算題 (Arithmetic Calculation)", effect: "4" },
            { id: "card-m1-44", name: "(-1)^2 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "指數乘方題 (Exponent Power)", effect: "1" },
            { id: "card-m1-45", name: "2^2 * 3 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "質因數分解 (Factorization)", effect: "12" },
            { id: "card-m1-46", name: "2 * 5 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "質因數分解 (Factorization)", effect: "10" },
            { id: "card-m1-47", name: "2/3 * 3/2 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "分數乘除四則 (Fraction Operations)", effect: "1" },
            { id: "card-m1-48", name: "2x + 1 = 5", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "方程式求解題 (Equation Solving)", effect: "x = 2" },
            // ==================== Wild Cards ====================
            { id: "wild-1", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "square", color2: "#3b82f6", number2: "square", hex: "#475569", summary: "Circle & Square", effect: "當此牌翻出時，持有這兩個圖形（circle / square）的玩家即可觸發對決！" },
            { id: "wild-2", name: "Wild Card", count: 1, isWild: true, shape1: "triangle", color1: "#22c55e", number1: "triangle", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Triangle & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（triangle / rectangle）的玩家即可觸發對決！" },
            { id: "wild-3", name: "Wild Card", count: 1, isWild: true, shape1: "rhombus", color1: "#a855f7", number1: "rhombus", shape2: "trapezoid", color2: "#f97316", number2: "trapezoid", hex: "#475569", summary: "Rhombus & Trapezoid", effect: "當此牌翻出時，持有這兩個圖形（rhombus / trapezoid）的玩家即可觸發對決！" },
            { id: "wild-4", name: "Wild Card", count: 1, isWild: true, shape1: "ellipse", color1: "#ec4899", number1: "ellipse", shape2: "pentagon", color2: "#06b6d4", number2: "pentagon", hex: "#475569", summary: "Ellipse & Pentagon", effect: "當此牌翻出時，持有這兩個圖形（ellipse / pentagon）的玩家即可觸發對決！" },
            { id: "wild-5", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "triangle", color2: "#22c55e", number2: "triangle", hex: "#475569", summary: "Circle & Triangle", effect: "當此牌翻出時，持有這兩個圖形（circle / triangle）的玩家即可觸發對決！" },
            { id: "wild-6", name: "Wild Card", count: 1, isWild: true, shape1: "square", color1: "#3b82f6", number1: "square", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Square & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（square / rectangle）的玩家即可觸發對決！" }
        ],
        rules: [
            { title: "🎯 遊戲目標", desc: "當翻出相同幾何圖形（或符合萬能牌）時，比對手更快喊出對手卡片「數學主題類別」的另一個數學概念！" },
            { title: "📦 遊戲準備", desc: "將 48 張數學牌與 6 張萬能牌混合洗勻，面朝下放置中央作為牌堆。玩家輪流翻開一張牌，置於自己面前。" },
            { title: "⚔️ 觸發對決", desc: "當有雙方玩家面前翻開的卡牌上，幾何圖形（顏色與標記）完全相同時，立即觸發「對決」！" },
            { title: "🗣️ 類別對決", desc: "對決的兩人必須看對方的卡牌主題（如對手是 整數運算），迅速喊出符合該主題的另一個數學概念或算式。先喊出者獲勝！" },
            { title: "⛓️ 連鎖匹配", desc: "當贏家移走輸家的卡牌後，輸家面前可能會露出下一張舊卡牌。如果該圖案又與場上其他人相同，會立即觸發新的連鎖對決！" },
            { title: "🌟 萬能牌 (Wild)", desc: "若翻出萬能牌，置於場中央。當有玩家卡牌的圖形符合萬能牌上顯示的兩個圖案之一時，兩位玩家即使圖案不同也會觸發對決。" }
        ]
    },
    "anomia-math-7b-read": {
        id: "anomia-math-7b-read",
        name: "七下幾何比例 - 觀念運算朗讀版",
        themeName: "七年級下學期數學朗讀",
        description: "國中一年級下學期基礎級。包含二元一次聯立方程式、直角坐標平面、比例（正反比）、一元一次不等式。對決時需迅速唸出對方卡片上的數學概念，或快速算出極簡坐標或未知數答案！",
        referenceGame: "字字轉機 (Anomia)",
        backColor: "#581c87",
        backBorder: "#3b0764",
        pattern: "bg-grid",
        cards: [
            // ==================== Circle (聯立方程式) ====================
            { id: "card-m2-1", name: "二元一次式", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "二元一次方程式 (Systems of Equations)", effect: "含有兩個未知數且次數為一的式子" },
            { id: "card-m2-2", name: "x=1, y=2 時 x+y=?", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "二元一次方程式 (Systems of Equations)", effect: "3" },
            { id: "card-m2-3", name: "x=3, y=1 時 2x-y=?", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "二元一次方程式 (Systems of Equations)", effect: "5" },
            { id: "card-m2-4", name: "x=2, y=5 的聯立方程式解", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "二元一次方程式 (Systems of Equations)", effect: "x=2, y=5" },
            { id: "card-m2-5", name: "代入消去法", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "聯立方程組求解 (Equation Solving)", effect: "將一式代入另一式以消元" },
            { id: "card-m2-6", name: "x = 2y, x + y = 6", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "聯立方程組求解 (Equation Solving)", effect: "x = 4, y = 2" },

            // ==================== Square (直角坐標系) ====================
            { id: "card-m2-7", name: "直角坐標平面", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "直角坐標系 (Coordinate Plane)", effect: "由x軸與y軸垂直相交構成的平面" },
            { id: "card-m2-8", name: "原點坐標", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "直角坐標系 (Coordinate Plane)", effect: "(0, 0)" },
            { id: "card-m2-9", name: "(2, 3) 在第幾象限", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "直角坐標系 (Coordinate Plane)", effect: "第一象限" },
            { id: "card-m2-10", name: "(-1, -5) 在第幾象限", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "直角坐標系 (Coordinate Plane)", effect: "第三象限" },
            { id: "card-m2-11", name: "(4, -2) 在第幾象限", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "象限與坐標軸 (Quadrants & Axes)", effect: "第四象限" },
            { id: "card-m2-12", name: "(-3, 1) 在第幾象限", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "象限與坐標軸 (Quadrants & Axes)", effect: "第二象限" },

            // ==================== Triangle (函數與圖形) ====================
            { id: "card-m2-13", name: "水平線", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "方程式的圖形 (Graphs of Equations)", effect: "方程式為 y = k 形式的直線" },
            { id: "card-m2-14", name: "鉛垂線", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "方程式的圖形 (Graphs of Equations)", effect: "方程式為 x = h 形式的直線" },
            { id: "card-m2-15", name: "y = 3 的圖形是什麼線", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "方程式的圖形 (Graphs of Equations)", effect: "水平線" },
            { id: "card-m2-16", name: "x = -2 的圖形是什麼線", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "方程式的圖形 (Graphs of Equations)", effect: "鉛垂線" },
            { id: "card-m2-17", name: "y = x 與 y = 2 的交點", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "圖形的交點 (Intersection of Graphs)", effect: "(2, 2)" },
            { id: "card-m2-18", name: "x = 3 與 y = -1 的交點", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "圖形的交點 (Intersection of Graphs)", effect: "(3, -1)" },

            // ==================== Rectangle (比例關係) ====================
            { id: "card-m2-19", name: "3 : 5 的比值", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比與比例式 (Ratios & Proportions)", effect: "3/5 (或 0.6)" },
            { id: "card-m2-20", name: "1 : 2 = 3 : x", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比與比例式 (Ratios & Proportions)", effect: "x = 6" },
            { id: "card-m2-21", name: "x : 4 = 2 : 1", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比與比例式 (Ratios & Proportions)", effect: "x = 8" },
            { id: "card-m2-22", name: "3 : x = 9 : 12", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比與比例式 (Ratios & Proportions)", effect: "x = 4" },
            { id: "card-m2-23", name: "最簡整數比", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比例的性質 (Properties of Ratios)", effect: "前後項為互質整數的比" },
            { id: "card-m2-24", name: "4 : 6 的最簡整數比", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比例的性質 (Properties of Ratios)", effect: "2 : 3" },

            // ==================== Rhombus (正比與反比) ====================
            { id: "card-m2-25", name: "正比關係", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正比與反比 (Direct & Inverse)", effect: "滿足 y = kx (k不為0) 的變動關係" },
            { id: "card-m2-26", name: "反比關係", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正比與反比 (Direct & Inverse)", effect: "滿足 xy = k (k不為0) 的變動關係" },
            { id: "card-m2-27", name: "y = 2x 是什麼關係", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正比與反比 (Direct & Inverse)", effect: "正比" },
            { id: "card-m2-28", name: "xy = 12 是什麼關係", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正比與反比 (Direct & Inverse)", effect: "反比" },
            { id: "card-m2-29", name: "y與x正比，x=2時y=6，常數k=?", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正反比常數 (Proportion Constants)", effect: "k = 3" },
            { id: "card-m2-30", name: "y與x反比，x=2時y=4，常數k=?", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正反比常數 (Proportion Constants)", effect: "k = 8" },

            // ==================== Trapezoid (不等式) ====================
            { id: "card-m2-31", name: "不等號", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次不等式 (Linear Inequalities)", effect: "表示大小關係的符號 (如 >, <)" },
            { id: "card-m2-32", name: "不小於在不等式中用什麼符號", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次不等式 (Linear Inequalities)", effect: "大於等於 (>=)" },
            { id: "card-m2-33", name: "不大於在不等式中用什麼符號", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次不等式 (Linear Inequalities)", effect: "小於等於 (<=)" },
            { id: "card-m2-34", name: "x - 1 > 3", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次不等式 (Linear Inequalities)", effect: "x > 4" },
            { id: "card-m2-35", name: "2x > 6", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "不等式的解 (Inequality Solutions)", effect: "x > 3" },
            { id: "card-m2-36", name: "-x > 2", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "不等式的解 (Inequality Solutions)", effect: "x < -2" },

            // ==================== Ellipse (坐標軸與方程解) ====================
            { id: "card-m2-37", name: "x - y = 0, x + y = 10", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "聯立方程求解 (Equation Solving)", effect: "x = 5, y = 5" },
            { id: "card-m2-38", name: "y = 2, x + y = 5", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "聯立方程求解 (Equation Solving)", effect: "x = 3" },
            { id: "card-m2-39", name: "(0, 5) 在哪一個軸上", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "坐標軸與點位置 (Axes & Points)", effect: "y軸" },
            { id: "card-m2-40", name: "(-3, 0) 在哪一個軸上", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "坐標軸與點位置 (Axes & Points)", effect: "x軸" },
            { id: "card-m2-41", name: "y = 2x 與 y軸 的交點", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "交點計算題 (Intersection Calculation)", effect: "(0, 0)" },
            { id: "card-m2-42", name: "兩直線平行時有幾個交點", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "交點計算題 (Intersection Calculation)", effect: "0個 (或無解)" },

            // ==================== Pentagon (比例與不等式解) ====================
            { id: "card-m2-43", name: "1/2 : 1/3 的最簡整數比", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "最簡整數比 (Simplest Ratio)", effect: "3 : 2" },
            { id: "card-m2-44", name: "x : y = 2 : 3 則 3x = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "最簡整數比 (Simplest Ratio)", effect: "2y" },
            { id: "card-m2-45", name: "y = 5x 的正比常數", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "比例常數題 (Proportion Constants)", effect: "5" },
            { id: "card-m2-46", name: "xy = 10 的反比常數", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "比例常數題 (Proportion Constants)", effect: "10" },
            { id: "card-m2-47", name: "x < 5 的最大整數解", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "不等式求解題 (Inequality Solutions)", effect: "4" },
            { id: "card-m2-48", name: "x >= -3 的最小整數解", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "不等式求解題 (Inequality Solutions)", effect: "-3" },

            // ==================== Wild Cards ====================
            { id: "wild-1", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#f43f5e", number1: "circle", shape2: "square", color2: "#0ea5e9", number2: "square", hex: "#475569", summary: "Circle & Square", effect: "當此牌翻出時，持有這兩個圖形（circle / square）的玩家即可觸發對決！" },
            { id: "wild-2", name: "Wild Card", count: 1, isWild: true, shape1: "triangle", color1: "#10b981", number1: "triangle", shape2: "rectangle", color2: "#f59e0b", number2: "rectangle", hex: "#475569", summary: "Triangle & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（triangle / rectangle）的玩家即可觸發對決！" },
            { id: "wild-3", name: "Wild Card", count: 1, isWild: true, shape1: "rhombus", color1: "#8b5cf6", number1: "rhombus", shape2: "trapezoid", color2: "#f97316", number2: "trapezoid", hex: "#475569", summary: "Rhombus & Trapezoid", effect: "當此牌翻出時，持有這兩個圖形（rhombus / trapezoid）的玩家即可觸發對決！" },
            { id: "wild-4", name: "Wild Card", count: 1, isWild: true, shape1: "ellipse", color1: "#d946ef", number1: "ellipse", shape2: "pentagon", color2: "#14b8a6", number2: "pentagon", hex: "#475569", summary: "Ellipse & Pentagon", effect: "當此牌翻出時，持有這兩個圖形（ellipse / pentagon）的玩家即可觸發對決！" },
            { id: "wild-5", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#f43f5e", number1: "circle", shape2: "triangle", color2: "#10b981", number2: "triangle", hex: "#475569", summary: "Circle & Triangle", effect: "當此牌翻出時，持有這兩個圖形（circle / triangle）的玩家即可觸發對決！" },
            { id: "wild-6", name: "Wild Card", count: 1, isWild: true, shape1: "square", color1: "#0ea5e9", number1: "square", shape2: "rectangle", color2: "#f59e0b", number2: "rectangle", hex: "#475569", summary: "Square & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（square / rectangle）的玩家即可觸發對決！" }
        ],
        rules: [
            { title: "🎯 遊戲目標", desc: "當翻出相同幾何圖形（或符合萬能牌）時，比對手搶先唸出對方卡牌上的數學概念，或算出算式/坐標答案！" },
            { title: "📦 遊戲準備", desc: "將 48 張數學牌與 6 張萬能牌混合洗勻，面朝下放置中央作為牌堆。玩家輪流翻開一張牌，置於自己面前。" },
            { title: "⚔️ 觸發對決", desc: "當有兩位玩家面前翻開的卡牌上，幾何圖形（顏色與標記）完全相同時，立即觸發「對決」！" },
            { title: "🗣️ 對決運算", desc: "對決雙方必須看著「對方的卡牌」，迅速唸出定義或算出算式/坐標答案（小括號內為解答）。先喊出正確答案者獲勝！" },
            { title: "⛓️ 連鎖匹配", desc: "當贏家移走輸家的卡牌後，輸家面前可能會露出下一張舊卡牌。如果該圖案又與場上其他人相同，會立即觸發新的連鎖對決！" },
            { title: "🌟 萬能牌 (Wild)", desc: "若翻出萬能牌，置於場中央。當有玩家卡牌的圖形符合萬能牌上顯示的兩個圖案之一時，兩位玩家即使圖案不同也會觸發對決。" }
        ]
    },
    "anomia-math-7b-duel": {
        id: "anomia-math-7b-duel",
        name: "七下幾何比例 - 類別圖形對決版",
        themeName: "七年級下學期類別對決",
        description: "國中一年級下學期基礎級。對決時玩家需要唸出符合對方卡片「數學主題類別」的「另一個」數學公式或幾何坐標概念！",
        referenceGame: "字字轉機 (Anomia)",
        backColor: "#581c87",
        backBorder: "#3b0764",
        pattern: "bg-grid",
        cards: [
            // 共享相同的七下牌卡定義
            { id: "card-m2-1", name: "二元一次式", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "二元一次方程式 (Systems of Equations)", effect: "含有兩個未知數且次數為一的式子" },
            { id: "card-m2-2", name: "x=1, y=2 時 x+y=?", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "二元一次方程式 (Systems of Equations)", effect: "3" },
            { id: "card-m2-3", name: "x=3, y=1 時 2x-y=?", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "二元一次方程式 (Systems of Equations)", effect: "5" },
            { id: "card-m2-4", name: "x=2, y=5 的聯立方程式解", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "二元一次方程式 (Systems of Equations)", effect: "x=2, y=5" },
            { id: "card-m2-5", name: "代入消去法", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "聯立方程組求解 (Equation Solving)", effect: "將一式代入另一式以消元" },
            { id: "card-m2-6", name: "x = 2y, x + y = 6", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "聯立方程組求解 (Equation Solving)", effect: "x = 4, y = 2" },
            { id: "card-m2-7", name: "直角坐標平面", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "直角坐標系 (Coordinate Plane)", effect: "由x軸與y軸垂直相交構成的平面" },
            { id: "card-m2-8", name: "原點坐標", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "直角坐標系 (Coordinate Plane)", effect: "(0, 0)" },
            { id: "card-m2-9", name: "(2, 3) 在第幾象限", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "直角坐標系 (Coordinate Plane)", effect: "第一象限" },
            { id: "card-m2-10", name: "(-1, -5) 在第幾象限", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "直角坐標系 (Coordinate Plane)", effect: "第三象限" },
            { id: "card-m2-11", name: "(4, -2) 在第幾象限", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "象限與坐標軸 (Quadrants & Axes)", effect: "第四象限" },
            { id: "card-m2-12", name: "(-3, 1) 在第幾象限", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "象限與坐標軸 (Quadrants & Axes)", effect: "第二象限" },
            { id: "card-m2-13", name: "水平線", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "方程式的圖形 (Graphs of Equations)", effect: "方程式為 y = k 形式的直線" },
            { id: "card-m2-14", name: "鉛垂線", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "方程式的圖形 (Graphs of Equations)", effect: "方程式為 x = h 形式的直線" },
            { id: "card-m2-15", name: "y = 3 的圖形是什麼線", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "方程式的圖形 (Graphs of Equations)", effect: "水平線" },
            { id: "card-m2-16", name: "x = -2 的圖形是什麼線", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "方程式的圖形 (Graphs of Equations)", effect: "鉛垂線" },
            { id: "card-m2-17", name: "y = x 與 y = 2 的交點", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "圖形的交點 (Intersection of Graphs)", effect: "(2, 2)" },
            { id: "card-m2-18", name: "x = 3 與 y = -1 的交點", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "圖形的交點 (Intersection of Graphs)", effect: "(3, -1)" },
            { id: "card-m2-19", name: "3 : 5 的比值", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比與比例式 (Ratios & Proportions)", effect: "3/5 (或 0.6)" },
            { id: "card-m2-20", name: "1 : 2 = 3 : x", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比與比例式 (Ratios & Proportions)", effect: "x = 6" },
            { id: "card-m2-21", name: "x : 4 = 2 : 1", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比與比例式 (Ratios & Proportions)", effect: "x = 8" },
            { id: "card-m2-22", name: "3 : x = 9 : 12", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比與比例式 (Ratios & Proportions)", effect: "x = 4" },
            { id: "card-m2-23", name: "最簡整數比", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比例的性質 (Properties of Ratios)", effect: "前後項為互質整數的比" },
            { id: "card-m2-24", name: "4 : 6 的最簡整數比", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比例的性質 (Properties of Ratios)", effect: "2 : 3" },
            { id: "card-m2-25", name: "正比關係", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正比與反比 (Direct & Inverse)", effect: "滿足 y = kx (k不為0) 的變動關係" },
            { id: "card-m2-26", name: "反比關係", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正比與反比 (Direct & Inverse)", effect: "滿足 xy = k (k不為0) 的變動關係" },
            { id: "card-m2-27", name: "y = 2x 是什麼關係", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正比與反比 (Direct & Inverse)", effect: "正比" },
            { id: "card-m2-28", name: "xy = 12 是什麼關係", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正比與反比 (Direct & Inverse)", effect: "反比" },
            { id: "card-m2-29", name: "y與x正比，x=2時y=6，常數k=?", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正反比常數 (Proportion Constants)", effect: "k = 3" },
            { id: "card-m2-30", name: "y與x反比，x=2時y=4，常數k=?", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正反比常數 (Proportion Constants)", effect: "k = 8" },
            { id: "card-m2-31", name: "不等號", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次不等式 (Linear Inequalities)", effect: "表示大小關係的符號 (如 >, <)" },
            { id: "card-m2-32", name: "不小於在不等式中用什麼符號", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次不等式 (Linear Inequalities)", effect: "大於等於 (>=)" },
            { id: "card-m2-33", name: "不大於在不等式中用什麼符號", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次不等式 (Linear Inequalities)", effect: "小於等於 (<=)" },
            { id: "card-m2-34", name: "x - 1 > 3", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次不等式 (Linear Inequalities)", effect: "x > 4" },
            { id: "card-m2-35", name: "2x > 6", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "不等式的解 (Inequality Solutions)", effect: "x > 3" },
            { id: "card-m2-36", name: "-x > 2", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "不等式的解 (Inequality Solutions)", effect: "x < -2" },
            { id: "card-m2-37", name: "x - y = 0, x + y = 10", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "聯立方程求解 (Equation Solving)", effect: "x = 5, y = 5" },
            { id: "card-m2-38", name: "y = 2, x + y = 5", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "聯立方程求解 (Equation Solving)", effect: "x = 3" },
            { id: "card-m2-39", name: "(0, 5) 在哪一個軸上", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "坐標軸與點位置 (Axes & Points)", effect: "y軸" },
            { id: "card-m2-40", name: "(-3, 0) 在哪一個軸上", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "坐標軸與點位置 (Axes & Points)", effect: "x軸" },
            { id: "card-m2-41", name: "y = 2x 與 y軸 的交點", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "交點計算題 (Intersection Calculation)", effect: "(0, 0)" },
            { id: "card-m2-42", name: "兩直線平行時有幾個交點", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "交點計算題 (Intersection Calculation)", effect: "0個 (或無解)" },
            { id: "card-m2-43", name: "1/2 : 1/3 的最簡整數比", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "最簡整數比 (Simplest Ratio)", effect: "3 : 2" },
            { id: "card-m2-44", name: "x : y = 2 : 3 則 3x = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "最簡整數比 (Simplest Ratio)", effect: "2y" },
            { id: "card-m2-45", name: "y = 5x 的正比常數", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "比例常數題 (Proportion Constants)", effect: "5" },
            { id: "card-m2-46", name: "xy = 10 的反比常數", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "比例常數題 (Proportion Constants)", effect: "10" },
            { id: "card-m2-47", name: "x < 5 的最大整數解", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "不等式求解題 (Inequality Solutions)", effect: "4" },
            { id: "card-m2-48", name: "x >= -3 的最小整數解", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "不等式求解題 (Inequality Solutions)", effect: "-3" },
            // ==================== Wild Cards ====================
            { id: "wild-1", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#f43f5e", number1: "circle", shape2: "square", color2: "#0ea5e9", number2: "square", hex: "#475569", summary: "Circle & Square", effect: "當此牌翻出時，持有這兩個圖形（circle / square）的玩家即可觸發對決！" },
            { id: "wild-2", name: "Wild Card", count: 1, isWild: true, shape1: "triangle", color1: "#10b981", number1: "triangle", shape2: "rectangle", color2: "#f59e0b", number2: "rectangle", hex: "#475569", summary: "Triangle & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（triangle / rectangle）的玩家即可觸發對決！" },
            { id: "wild-3", name: "Wild Card", count: 1, isWild: true, shape1: "rhombus", color1: "#8b5cf6", number1: "rhombus", shape2: "trapezoid", color2: "#f97316", number2: "trapezoid", hex: "#475569", summary: "Rhombus & Trapezoid", effect: "當此牌翻出時，持有這兩個圖形（rhombus / trapezoid）的玩家即可觸發對決！" },
            { id: "wild-4", name: "Wild Card", count: 1, isWild: true, shape1: "ellipse", color1: "#d946ef", number1: "ellipse", shape2: "pentagon", color2: "#14b8a6", number2: "pentagon", hex: "#475569", summary: "Ellipse & Pentagon", effect: "當此牌翻出時，持有這兩個圖形（ellipse / pentagon）的玩家即可觸發對決！" },
            { id: "wild-5", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#f43f5e", number1: "circle", shape2: "triangle", color2: "#10b981", number2: "triangle", hex: "#475569", summary: "Circle & Triangle", effect: "當此牌翻出時，持有這兩個圖形（circle / triangle）的玩家即可觸發對決！" },
            { id: "wild-6", name: "Wild Card", count: 1, isWild: true, shape1: "square", color1: "#0ea5e9", number1: "square", shape2: "rectangle", color2: "#f59e0b", number2: "rectangle", hex: "#475569", summary: "Square & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（square / rectangle）的玩家即可觸發對決！" }
        ],
        rules: [
            { title: "🎯 遊戲目標", desc: "當翻出相同幾何圖形（或符合萬能牌）時，比對手更快喊出對手卡片「數學主題類別」的另一個數學概念！" },
            { title: "📦 遊戲準備", desc: "將 48 張數學牌與 6 張萬能牌混合洗勻，面朝下放置中央作為牌堆。玩家輪流翻開一張牌，置於自己面前。" },
            { title: "⚔️ 觸發對決", desc: "當有雙方玩家面前翻開的卡牌上，幾何圖形（顏色與標記）完全相同時，立即觸發「對決」！" },
            { title: "🗣️ 類別對決", desc: "對決的兩人必須看對方的卡牌主題（如對手是 比例關係），迅速喊出符合該主題的另一個數學公式或幾何點概念。先喊出者獲勝！" },
            { title: "⛓️ 連鎖匹配", desc: "當贏家移走輸家的卡牌後，輸家面前可能會露出下一張舊卡牌。如果該圖案又與場上其他人相同，會立即觸發新的連鎖對決！" },
            { title: "🌟 萬能牌 (Wild)", desc: "若翻出萬能牌，置於場中央。當有玩家卡牌的圖形符合萬能牌上顯示的兩個圖案之一時，兩位玩家即使圖案不同也會觸發對決。" }
        ]
    }
};
