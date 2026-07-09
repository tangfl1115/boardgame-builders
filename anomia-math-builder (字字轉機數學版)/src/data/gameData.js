// v1.3.0 - 2026-07-09
// Changelog:
// - 將 7A 和 7B 的卡片清單抽離成全域變數，徹底避免版本不同步的 Bug。
// - 將所有乘號由米字號 * 改為正式的乘法打叉符號 ×，版面更符合教科書規範。

const cards7a = [
    // ==================== Circle (整數運算) ====================
    { id: "card-m1-1", name: "-(-5) = ?", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的運算 (Integer Operations)", effect: "5" },
    { id: "card-m1-2", name: "|-3| = ?", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的運算 (Integer Operations)", effect: "3" },
    { id: "card-m1-3", name: "-2 + 5 = ?", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的運算 (Integer Operations)", effect: "3" },
    { id: "card-m1-4", name: "4 - 6 = ?", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的運算 (Integer Operations)", effect: "-2" },
    { id: "card-m1-5", name: "-3 × 2 = ?", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的乘除 (Multiplication/Division)", effect: "-6" },
    { id: "card-m1-6", name: "-10 ÷ (-2) = ?", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "整數的乘除 (Multiplication/Division)", effect: "5" },

    // ==================== Square (指數與科學) ====================
    { id: "card-m1-7", name: "100 = 10^?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "指數與科學記號 (Exponents)", effect: "2" },
    { id: "card-m1-8", name: "2^3 = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "指數與科學記號 (Exponents)", effect: "8" },
    { id: "card-m1-9", name: "10^3 = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "指數與科學記號 (Exponents)", effect: "1000" },
    { id: "card-m1-10", name: "5^0 = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "指數與科學記號 (Exponents)", effect: "1" },
    { id: "card-m1-11", name: "0 × (-7) = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "整數相乘 (Integer Mult)", effect: "0" },
    { id: "card-m1-12", name: "-8 ÷ 4 = ?", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "整數相除 (Integer Div)", effect: "-2" },

    // ==================== Triangle (因數與倍數) ====================
    { id: "card-m1-13", name: "1是質數嗎？", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "因數與倍數 (Factors & Multiples)", effect: "不是" },
    { id: "card-m1-14", name: "2是最小的質數嗎？", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "因數與倍數 (Factors & Multiples)", effect: "是" },
    { id: "card-m1-15", name: "(4, 6) = ?", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "因數與倍數 (Factors & Multiples)", effect: "2 (最大公因數)" },
    { id: "card-m1-16", name: "[3, 4] = ?", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "因數與倍數 (Factors & Multiples)", effect: "12 (最小公倍數)" },
    { id: "card-m1-17", name: "12和18的最大公因數 = ?", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "最大公因數 (GCD)", effect: "6" },
    { id: "card-m1-18", name: "12的質因數 = ?", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "質因數分解 (Factorization)", effect: "2, 3" },

    // ==================== Rectangle (分數運算) ====================
    { id: "card-m1-19", name: "2/4的最簡分數 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的運算 (Fraction Operations)", effect: "1/2" },
    { id: "card-m1-20", name: "2/3的倒數 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的運算 (Fraction Operations)", effect: "3/2" },
    { id: "card-m1-21", name: "1/2 + 1/2 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的運算 (Fraction Operations)", effect: "1" },
    { id: "card-m1-22", name: "3/4 - 1/4 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的運算 (Fraction Operations)", effect: "1/2" },
    { id: "card-m1-23", name: "1/2 × 4 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的乘法 (Fraction Mult)", effect: "2" },
    { id: "card-m1-24", name: "1/2 ÷ 2 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "分數的除法 (Fraction Div)", effect: "1/4" },

    // ==================== Rhombus (代數式與化簡) ====================
    { id: "card-m1-25", name: "3x的未知數是誰？", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數式與簡記 (Algebraic Expressions)", effect: "x" },
    { id: "card-m1-26", name: "2x + 3x = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數式與簡記 (Algebraic Expressions)", effect: "5x" },
    { id: "card-m1-27", name: "x + x = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數式與簡記 (Algebraic Expressions)", effect: "2x" },
    { id: "card-m1-28", name: "3(x + 2) = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數式與簡記 (Algebraic Expressions)", effect: "3x + 6" },
    { id: "card-m1-29", name: "3x + 5的常數項 = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數化簡題 (Simplification)", effect: "5" },
    { id: "card-m1-30", name: "5x - x = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "代數化簡題 (Simplification)", effect: "4x" },

    // ==================== Trapezoid (方程式與求解) ====================
    { id: "card-m1-31", name: "x + 3 = 10, x = ?", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次方程式 (Linear Equations)", effect: "7" },
    { id: "card-m1-32", name: "2x = 8, x = ?", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次方程式 (Linear Equations)", effect: "4" },
    { id: "card-m1-33", name: "3x = -9, x = ?", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次方程式 (Linear Equations)", effect: "-3" },
    { id: "card-m1-34", name: "x - 4 = 2, x = ?", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次方程式 (Linear Equations)", effect: "6" },
    { id: "card-m1-35", name: "2x + 1 = 5, x = ?", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "方程式求解題 (Equation Solving)", effect: "2" },
    { id: "card-m1-36", name: "2 - x = 5, x = ?", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "方程式求解題 (Equation Solving)", effect: "-3" },

    // ==================== Ellipse (數線與絕對值) ====================
    { id: "card-m1-37", name: "原點的坐標 = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "數線與絕對值 (Number Lines)", effect: "0" },
    { id: "card-m1-38", name: "|-5| = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "數線與絕對值 (Number Lines)", effect: "5" },
    { id: "card-m1-39", name: "-(-3) = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "數線與絕對值 (Number Lines)", effect: "3" },
    { id: "card-m1-40", name: "0的絕對值 = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "數線與絕對值 (Number Lines)", effect: "0" },
    { id: "card-m1-41", name: "3(2+x) = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "代數簡記題 (Algebraic Simplification)", effect: "6 + 3x" },
    { id: "card-m1-42", name: "2 × 3 + 4 = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "四則運算規則 (Arithmetic Rules)", effect: "10" },

    // ==================== Pentagon (四則與分數性質) ====================
    { id: "card-m1-43", name: "10 - 2 × 3 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "四則運算題 (Arithmetic Calculation)", effect: "4" },
    { id: "card-m1-44", name: "(-1)^2 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "指數乘方題 (Exponent Power)", effect: "1" },
    { id: "card-m1-45", name: "2^2 × 3 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "質因數分解 (Factorization)", effect: "12" },
    { id: "card-m1-46", name: "2 × 5 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "質因數分解 (Factorization)", effect: "10" },
    { id: "card-m1-47", name: "1/2和1/3通分後分母 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "分數通分題 (Fraction Denominator)", effect: "6" },
    { id: "card-m1-48", name: "1/2 = ? / 4", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "分數擴分題 (Fraction Expansion)", effect: "2" },

    // ==================== Wild Cards ====================
    { id: "wild-1", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "square", color2: "#3b82f6", number2: "square", hex: "#475569", summary: "Circle & Square", effect: "當此牌翻出時，持有這兩個圖形（circle / square）的玩家即可觸發對決！" },
    { id: "wild-2", name: "Wild Card", count: 1, isWild: true, shape1: "triangle", color1: "#22c55e", number1: "triangle", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Triangle & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（triangle / rectangle）的玩家即可觸發對決！" },
    { id: "wild-3", name: "Wild Card", count: 1, isWild: true, shape1: "rhombus", color1: "#a855f7", number1: "rhombus", shape2: "trapezoid", color2: "#f97316", number2: "trapezoid", hex: "#475569", summary: "Rhombus & Trapezoid", effect: "當此牌翻出時，持有這兩個圖形（rhombus / trapezoid）的玩家即可觸發對決！" },
    { id: "wild-4", name: "Wild Card", count: 1, isWild: true, shape1: "ellipse", color1: "#ec4899", number1: "ellipse", shape2: "pentagon", color2: "#06b6d4", number2: "pentagon", hex: "#475569", summary: "Ellipse & Pentagon", effect: "當此牌翻出時，持有這兩個圖形（ellipse / pentagon）的玩家即可觸發對決！" },
    { id: "wild-5", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "triangle", color2: "#22c55e", number2: "triangle", hex: "#475569", summary: "Circle & Triangle", effect: "當此牌翻出時，持有這兩個圖形（circle / triangle）的玩家即可觸發對決！" },
    { id: "wild-6", name: "Wild Card", count: 1, isWild: true, shape1: "square", color1: "#3b82f6", number1: "square", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Square & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（square / rectangle）的玩家即可觸發對決！" }
];

const cards7b = [
    // ==================== Circle (聯立方程式) ====================
    { id: "card-m2-1", name: "2x+3y有幾個未知數？", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "二元一次方程式 (Systems of Equations)", effect: "2" },
    { id: "card-m2-2", name: "x=1, y=2時，x+y=?", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "二元一次方程式 (Systems of Equations)", effect: "3" },
    { id: "card-m2-3", name: "x=3, y=1時，2x-y=?", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "二元一次方程式 (Systems of Equations)", effect: "5" },
    { id: "card-m2-4", name: "x=2, y=5時，是x+y=7的解嗎？", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "二元一次方程式 (Systems of Equations)", effect: "是" },
    { id: "card-m2-5", name: "x = 2y, x + y = 6, x = ?", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "聯立方程組求解 (Equation Solving)", effect: "4" },
    { id: "card-m2-6", name: "x - y = 0, x + y = 10, x = ?", count: 1, value: "circle", shape: "circle", hex: "#f43f5e", summary: "聯立方程組求解 (Equation Solving)", effect: "5" },

    // ==================== Square (直角坐標系) ====================
    { id: "card-m2-7", name: "平面原點的坐標 = ?", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "直角坐標系 (Coordinate Plane)", effect: "(0, 0)" },
    { id: "card-m2-8", name: "(3, -4)在第幾象限？", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "直角坐標系 (Coordinate Plane)", effect: "第四象限" },
    { id: "card-m2-9", name: "(2, 3) 在第幾象限？", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "直角坐標系 (Coordinate Plane)", effect: "第一象限" },
    { id: "card-m2-10", name: "(-1, -5)在第幾象限？", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "直角坐標系 (Coordinate Plane)", effect: "第三象限" },
    { id: "card-m2-11", name: "(3, 0)在x軸上嗎？", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "象限與坐標軸 (Quadrants & Axes)", effect: "是" },
    { id: "card-m2-12", name: "(0, 5)在y軸上嗎？", count: 1, value: "square", shape: "square", hex: "#0ea5e9", summary: "象限與坐標軸 (Quadrants & Axes)", effect: "是" },

    // ==================== Triangle (函數與圖形) ====================
    { id: "card-m2-13", name: "y = 3的圖形是水平線嗎？", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "方程式的圖形 (Graphs of Equations)", effect: "是" },
    { id: "card-m2-14", name: "x = -2的圖形是鉛垂線嗎？", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "方程式的圖形 (Graphs of Equations)", effect: "是" },
    { id: "card-m2-15", name: "y = x 的圖形通過原點嗎？", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "方程式的圖形 (Graphs of Equations)", effect: "是" },
    { id: "card-m2-16", name: "x = 0的圖形是y軸嗎？", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "方程式的圖形 (Graphs of Equations)", effect: "是" },
    { id: "card-m2-17", name: "y = x 與 y = 2 的交點 = ?", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "圖形的交點 (Intersection of Graphs)", effect: "(2, 2)" },
    { id: "card-m2-18", name: "x = 3 與 y = -1 的交點 = ?", count: 1, value: "triangle", shape: "triangle", hex: "#10b981", summary: "圖形的交點 (Intersection of Graphs)", effect: "(3, -1)" },

    // ==================== Rectangle (比例關係) ====================
    { id: "card-m2-19", name: "3 : 5 的比值 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比與比例式 (Ratios & Proportions)", effect: "3/5 (或 0.6)" },
    { id: "card-m2-20", name: "1 : 2 = 3 : x, x = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比與比例式 (Ratios & Proportions)", effect: "6" },
    { id: "card-m2-21", name: "x : 4 = 2 : 1, x = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比與比例式 (Ratios & Proportions)", effect: "8" },
    { id: "card-m2-22", name: "3 : x = 9 : 12, x = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比與比例式 (Ratios & Proportions)", effect: "4" },
    { id: "card-m2-23", name: "2:4是最簡整數比嗎？", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比例的性質 (Properties of Ratios)", effect: "不是" },
    { id: "card-m2-24", name: "4 : 6 的最簡整數比 = ?", count: 1, value: "rectangle", shape: "rectangle", hex: "#f59e0b", summary: "比例的性質 (Properties of Ratios)", effect: "2 : 3" },

    // ==================== Rhombus (正比與反比) ====================
    { id: "card-m2-25", name: "y = 2x 是正比關係嗎？", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正比與反比 (Direct & Inverse)", effect: "是" },
    { id: "card-m2-26", name: "xy = 12 是反比關係嗎？", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正比與反比 (Direct & Inverse)", effect: "是" },
    { id: "card-m2-27", name: "y = -3x 是正比關係嗎？", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正比與反比 (Direct & Inverse)", effect: "是" },
    { id: "card-m2-28", name: "x × y = 8 是反比關係嗎？", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正比與反比 (Direct & Inverse)", effect: "是" },
    { id: "card-m2-29", name: "y = 5x 的正比常數 = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正反比常數 (Proportion Constants)", effect: "5" },
    { id: "card-m2-30", name: "xy = 10 的反比常數 = ?", count: 1, value: "rhombus", shape: "rhombus", hex: "#8b5cf6", summary: "正反比常數 (Proportion Constants)", effect: "10" },

    // ==================== Trapezoid (不等式) ====================
    { id: "card-m2-31", name: "x > 3的 > 是不等號嗎？", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次不等式 (Linear Inequalities)", effect: "是" },
    { id: "card-m2-32", name: "不小於代表大於等於對嗎？", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次不等式 (Linear Inequalities)", effect: "對" },
    { id: "card-m2-33", name: "不大於代表小於等於對嗎？", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次不等式 (Linear Inequalities)", effect: "對" },
    { id: "card-m2-34", name: "x - 1 > 3, x > ?", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "一元一次不等式 (Linear Inequalities)", effect: "4" },
    { id: "card-m2-35", name: "2x > 6, x > ?", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "不等式的解 (Inequality Solutions)", effect: "3" },
    { id: "card-m2-36", name: "-x > 2, x < ?", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "不等式的解 (Inequality Solutions)", effect: "-2" },

    // ==================== Ellipse (坐標軸與點距離) ====================
    { id: "card-m2-37", name: "y = 2, x + y = 5, x = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "聯立方程求解 (Equation Solving)", effect: "3" },
    { id: "card-m2-38", name: "(-3, 0)在x軸上嗎？", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "坐標軸與點位置 (Axes & Points)", effect: "是" },
    { id: "card-m2-39", name: "y軸上的點x坐標都是0嗎？", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "坐標軸與點位置 (Axes & Points)", effect: "是" },
    { id: "card-m2-40", name: "(3, 4)到x軸的距離 = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "坐標與軸距離 (Axes & Distances)", effect: "4" },
    { id: "card-m2-41", name: "y = 2x 與 y軸 的交點 = ?", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "交點計算題 (Intersection Calculation)", effect: "(0, 0)" },
    { id: "card-m2-42", name: "兩平行直線有幾個交點？", count: 1, value: "ellipse", shape: "ellipse", hex: "#d946ef", summary: "交點計算題 (Intersection Calculation)", effect: "0" },

    // ==================== Pentagon (比例與不等式解) ====================
    { id: "card-m2-43", name: "1/2 : 1/3的最簡比 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "最簡整數比 (Simplest Ratio)", effect: "3 : 2" },
    { id: "card-m2-44", name: "x:y=2:3, 則 3x = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "最簡整數比 (Simplest Ratio)", effect: "2y" },
    { id: "card-m2-45", name: "y與x正比，x=2時y=6，常數k=?", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "比例常數題 (Proportion Constants)", effect: "3" },
    { id: "card-m2-46", name: "y與x反比，x=2時y=4，常數k=?", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "比例常數題 (Proportion Constants)", effect: "8" },
    { id: "card-m2-47", name: "x < 5 的最大整數解 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "不等式求解題 (Inequality Solutions)", effect: "4" },
    { id: "card-m2-48", name: "x >= -3 的最小整數解 = ?", count: 1, value: "pentagon", shape: "pentagon", hex: "#14b8a6", summary: "不等式求解題 (Inequality Solutions)", effect: "-3" },

    // ==================== Wild Cards ====================
    { id: "wild-1", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#f43f5e", number1: "circle", shape2: "square", color2: "#0ea5e9", number2: "square", hex: "#475569", summary: "Circle & Square", effect: "當此牌翻出時，持有這兩個圖形（circle / square）的玩家即可觸發對決！" },
    { id: "wild-2", name: "Wild Card", count: 1, isWild: true, shape1: "triangle", color1: "#10b981", number1: "triangle", shape2: "rectangle", color2: "#f59e0b", number2: "rectangle", hex: "#475569", summary: "Triangle & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（triangle / rectangle）的玩家即可觸發對決！" },
    { id: "wild-3", name: "Wild Card", count: 1, isWild: true, shape1: "rhombus", color1: "#8b5cf6", number1: "rhombus", shape2: "trapezoid", color2: "#f97316", number2: "trapezoid", hex: "#475569", summary: "Rhombus & Trapezoid", effect: "當此牌翻出時，持有這兩個圖形（rhombus / trapezoid）的玩家即可觸發對決！" },
    { id: "wild-4", name: "Wild Card", count: 1, isWild: true, shape1: "ellipse", color1: "#d946ef", number1: "ellipse", shape2: "pentagon", color2: "#14b8a6", number2: "pentagon", hex: "#475569", summary: "Ellipse & Pentagon", effect: "當此牌翻出時，持有這兩個圖形（ellipse / pentagon）的玩家即可觸發對決！" },
    { id: "wild-5", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#f43f5e", number1: "circle", shape2: "triangle", color2: "#10b981", number2: "triangle", hex: "#475569", summary: "Circle & Triangle", effect: "當此牌翻出時，持有這兩個圖形（circle / triangle）的玩家即可觸發對決！" },
    { id: "wild-6", name: "Wild Card", count: 1, isWild: true, shape1: "square", color1: "#0ea5e9", number1: "square", shape2: "rectangle", color2: "#f59e0b", number2: "rectangle", hex: "#475569", summary: "Square & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（square / rectangle）的玩家即可觸發對決！" }
];

export const versions = {
    "anomia-math-7a-read": {
        id: "anomia-math-7a-read",
        name: "七上數與式 - 觀念運算朗讀版",
        themeName: "七年級上學期數學朗讀",
        description: "國中一年級上學期。包含整數、分數、因數倍數、科學記號與一元一次方程式。對決時需迅速算出極簡數學題答案（無須朗讀中文名詞定義）！",
        referenceGame: "字字轉機 (Anomia)",
        backColor: "#1e3a8a",
        backBorder: "#172554",
        pattern: "bg-grid",
        cards: cards7a,
        rules: [
            { title: "🎯 遊戲目標", desc: "當翻出相同幾何圖形（或符合萬能牌）時，比對手搶先算出對方卡牌上的數學題答案！" },
            { title: "📦 遊戲準備", desc: "將 48 張數學牌與 6 張萬能牌混合洗勻，面朝下放置中央作為牌堆。玩家輪流翻開一張牌，置於自己面前。" },
            { title: "⚔️ 觸發對決", desc: "當有兩位玩家面前翻開的卡牌上，幾何圖形（顏色與標記）完全相同時，立即觸發「對決」！" },
            { title: "🗣️ 對決運算", desc: "對決雙方必須看著「對方的卡牌」，迅速算出算式答案（網頁對照表有正確解答）。先喊出正確答案者獲勝！" }
        ]
    },
    "anomia-math-7a-duel": {
        id: "anomia-math-7a-duel",
        name: "七上數與式 - 類別概念對決版",
        themeName: "七年級上學期類別對決",
        description: "國中一年級上學期。對決時玩家需要唸出符合對方卡片「數學主題類別」的「另一個」數學公式或幾何常識！",
        referenceGame: "字字轉機 (Anomia)",
        backColor: "#1e3a8a",
        backBorder: "#172554",
        pattern: "bg-grid",
        cards: cards7a,
        rules: [
            { title: "🎯 遊戲目標", desc: "當翻出相同幾何圖形（或符合萬能牌）時，比對手更快喊出對手卡片「數學主題類別」的另一個數學概念！" },
            { title: "📦 遊戲準備", desc: "將 48 張數學牌與 6 張萬能牌混合洗勻，面朝下放置中央作為牌堆。玩家輪流翻開一張牌，置於自己面前。" },
            { title: "⚔️ 觸發對決", desc: "當有雙方玩家面前翻開的卡牌上，幾何圖形（顏色與標記）完全相同時，立即觸發「對決」！" },
            { title: "🗣️ 類別對決", desc: "對決的兩人必須看對方的卡牌主題（如對手是 整數運算），迅速喊出符合該主題的另一個數學概念或算式。先喊出者獲勝！" }
        ]
    },
    "anomia-math-7b-read": {
        id: "anomia-math-7b-read",
        name: "七下幾何比例 - 觀念運算朗讀版",
        themeName: "七年級下學期數學朗讀",
        description: "國中一年級下學期。包含二元一次聯立方程式、直角坐標平面、比例（正反比）、一元一次不等式。對決時需迅速算出極簡坐標或未知數答案（無須朗讀中文名詞定義）！",
        referenceGame: "字字轉機 (Anomia)",
        backColor: "#581c87",
        backBorder: "#3b0764",
        pattern: "bg-grid",
        cards: cards7b,
        rules: [
            { title: "🎯 遊戲目標", desc: "當翻出相同幾何圖形（或符合萬能牌）時，比對手搶先算出對方卡牌上的數學題答案！" },
            { title: "📦 遊戲準備", desc: "將 48 張數學牌與 6 張萬能牌混合洗勻，面朝下放置中央作為牌堆。玩家輪流翻開一張牌，置於自己面前。" },
            { title: "⚔️ 觸發對決", desc: "當有兩位玩家面前翻開的卡牌上，幾何圖形（顏色與標記）完全相同時，立即觸發「對決」！" },
            { title: "🗣️ 對決運算", desc: "對決雙方必須看著「對方的卡牌」，迅速算出算式答案（網頁對照表有正確解答）。先喊出正確答案者獲勝！" }
        ]
    },
    "anomia-math-7b-duel": {
        id: "anomia-math-7b-duel",
        name: "七下幾何比例 - 類別圖形對決版",
        themeName: "七年級下學期類別對決",
        description: "國中一年級下學期。對決時玩家需要唸出符合對方卡片「數學主題類別」的「另一個」數學公式或幾何坐標概念！",
        referenceGame: "字字轉機 (Anomia)",
        backColor: "#581c87",
        backBorder: "#3b0764",
        pattern: "bg-grid",
        cards: cards7b,
        rules: [
            { title: "🎯 遊戲目標", desc: "當翻出相同幾何圖形（或符合萬能牌）時，比對手更快喊出對手卡片「數學主題類別」的另一個數學概念！" },
            { title: "📦 遊戲準備", desc: "將 48 張數學牌與 6 張萬能牌混合洗勻，面朝下放置中央作為牌堆。玩家輪流翻開一張牌，置於自己面前。" },
            { title: "⚔️ 觸發對決", desc: "當有雙方玩家面前翻開的卡牌上，幾何圖形（顏色與標記）完全相同時，立即觸發「對決」！" },
            { title: "🗣️ 類別對決", desc: "對決的兩人必須看對方的卡牌主題（如對手是 比例關係），迅速喊出符合該主題的另一個數學公式或幾何點概念。先喊出者獲勝！" }
        ]
    }
};
