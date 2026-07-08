// v1.6.0 - 2026-07-08
// Changelog:
// - 初級改名為初級1；新增初級2（12類 x 4字，與初級1、中級完全不重複）
// - 中間幾何圖形放大 10%
// - STORAGE_KEY 升級至 v6

export const versions = {
    "anomia-read": {
        id: "anomia-read",
        name: "初級1 - 文字朗讀版",
        themeName: "英文初級1單字朗讀",
        description: "專為低年級或初學者設計（字彙量為國小一、二年級），對決時直接唸出卡牌上的英文單字即可過關。",
        referenceGame: "字字轉機 (Anomia)",
        backColor: "#1e293b",
        backBorder: "#0f172a",
        pattern: "bg-grid",
        cards: [
            // ==================== Circle ====================
            { id: "card-1", name: "dog", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Animal (動物)", effect: "狗" },
            { id: "card-2", name: "apple", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Fruit (水果)", effect: "蘋果" },
            { id: "card-3", name: "red", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Color (顏色)", effect: "紅色" },
            { id: "card-4", name: "pen", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "School Supply (文具)", effect: "原子筆" },
            { id: "card-5", name: "cake", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Food (食物)", effect: "蛋糕" },
            { id: "card-6", name: "eye", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Body Part (身體部位)", effect: "眼睛" },

            // ==================== Square ====================
            { id: "card-7", name: "hat", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Clothing (衣物)", effect: "帽子" },
            { id: "card-8", name: "car", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Transportation (交通)", effect: "汽車" },
            { id: "card-9", name: "father", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Family (家人)", effect: "父親" },
            { id: "card-10", name: "sun", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Nature (自然)", effect: "太陽" },
            { id: "card-11", name: "one", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Number (數字)", effect: "一" },
            { id: "card-12", name: "home", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Place (地點)", effect: "家" },

            // ==================== Triangle ====================
            { id: "card-13", name: "cat", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Animal (動物)", effect: "貓" },
            { id: "card-14", name: "banana", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Fruit (水果)", effect: "香蕉" },
            { id: "card-15", name: "blue", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Color (顏色)", effect: "藍色" },
            { id: "card-16", name: "coat", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Clothing (衣物)", effect: "外套" },
            { id: "card-17", name: "bus", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Transportation (交通)", effect: "公車" },
            { id: "card-18", name: "mother", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Family (家人)", effect: "母親" },

            // ==================== Rectangle ====================
            { id: "card-19", name: "pencil", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "School Supply (文具)", effect: "鉛筆" },
            { id: "card-20", name: "bread", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Food (食物)", effect: "麵包" },
            { id: "card-21", name: "nose", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Body Part (身體部位)", effect: "鼻子" },
            { id: "card-22", name: "moon", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Nature (自然)", effect: "月亮" },
            { id: "card-23", name: "two", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Number (數字)", effect: "二" },
            { id: "card-24", name: "school", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Place (地點)", effect: "學校" },

            // ==================== Rhombus ====================
            { id: "card-25", name: "pig", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Animal (動物)", effect: "豬" },
            { id: "card-26", name: "grape", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Fruit (水果)", effect: "葡萄" },
            { id: "card-27", name: "ruler", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "School Supply (文具)", effect: "尺" },
            { id: "card-28", name: "shoes", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Clothing (衣物)", effect: "鞋子" },
            { id: "card-29", name: "star", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Nature (自然)", effect: "星星" },
            { id: "card-30", name: "three", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Number (數字)", effect: "三" },

            // ==================== Trapezoid ====================
            { id: "card-31", name: "green", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Color (顏色)", effect: "綠色" },
            { id: "card-32", name: "egg", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Food (食物)", effect: "蛋" },
            { id: "card-33", name: "mouth", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Body Part (身體部位)", effect: "嘴巴" },
            { id: "card-34", name: "bike", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Transportation (交通)", effect: "自行車" },
            { id: "card-35", name: "brother", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Family (家人)", effect: "兄弟" },
            { id: "card-36", name: "park", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Place (地點)", effect: "公園" },

            // ==================== Ellipse ====================
            { id: "card-37", name: "bird", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Animal (動物)", effect: "鳥" },
            { id: "card-38", name: "yellow", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Color (顏色)", effect: "黃色" },
            { id: "card-39", name: "milk", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Food (食物)", effect: "牛奶" },
            { id: "card-40", name: "train", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Transportation (交通)", effect: "火車" },
            { id: "card-41", name: "tree", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Nature (自然)", effect: "樹木" },
            { id: "card-42", name: "zoo", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Place (地點)", effect: "動物園" },

            // ==================== Pentagon ====================
            { id: "card-43", name: "orange", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Fruit (水果)", effect: "柳橙" },
            { id: "card-44", name: "book", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "School Supply (文具)", effect: "書本" },
            { id: "card-45", name: "ear", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Body Part (身體部位)", effect: "耳朵" },
            { id: "card-46", name: "socks", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Clothing (衣物)", effect: "襪子" },
            { id: "card-47", name: "sister", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Family (家人)", effect: "姊妹" },
            { id: "card-48", name: "four", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Number (數字)", effect: "四" },

            // ==================== Wild Cards ====================
            { id: "wild-1", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "square", color2: "#3b82f6", number2: "square", hex: "#475569", summary: "Circle & Square", effect: "當此牌翻出時，持有這兩個圖形（circle / square）的玩家即可觸發對決！" },
            { id: "wild-2", name: "Wild Card", count: 1, isWild: true, shape1: "triangle", color1: "#22c55e", number1: "triangle", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Triangle & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（triangle / rectangle）的玩家即可觸發對決！" },
            { id: "wild-3", name: "Wild Card", count: 1, isWild: true, shape1: "rhombus", color1: "#a855f7", number1: "rhombus", shape2: "trapezoid", color2: "#f97316", number2: "trapezoid", hex: "#475569", summary: "Rhombus & Trapezoid", effect: "當此牌翻出時，持有這兩個圖形（rhombus / trapezoid）的玩家即可觸發對決！" },
            { id: "wild-4", name: "Wild Card", count: 1, isWild: true, shape1: "ellipse", color1: "#ec4899", number1: "ellipse", shape2: "pentagon", color2: "#06b6d4", number2: "pentagon", hex: "#475569", summary: "Ellipse & Pentagon", effect: "當此牌翻出時，持有這兩個圖形（ellipse / pentagon）的玩家即可觸發對決！" },
            { id: "wild-5", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "triangle", color2: "#22c55e", number2: "triangle", hex: "#475569", summary: "Circle & Triangle", effect: "當此牌翻出時，持有這兩個圖形（circle / triangle）的玩家即可觸發對決！" },
            { id: "wild-6", name: "Wild Card", count: 1, isWild: true, shape1: "square", color1: "#3b82f6", number1: "square", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Square & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（square / rectangle）的玩家即可觸發對決！" }
        ],
        rules: [
            { title: "🎯 遊戲目標", desc: "當翻出相同幾何圖形（或符合萬能牌）時，比對手搶先唸出對方卡牌上的英文單字即可過關！" },
            { title: "📦 遊戲準備", desc: "將 48 張單字牌與 6 張萬能牌混合洗勻，面朝下放置中央作為牌堆。玩家輪流翻開一張牌，置於自己面前。" },
            { title: "⚔️ 觸發對決", desc: "當有兩位玩家面前翻開的卡牌上，幾何圖形（顏色與標記）完全相同時，立即觸發「對決」！" },
            { title: "🗣️ 對決朗讀", desc: "對決雙方必須看著「對方的卡牌」，迅速唸出對方卡牌上標示的英文單字。先正確唸出單字的人獲勝！" },
            { title: "⛓️ 連鎖匹配", desc: "當贏家移走輸家的卡牌後，輸家面前可能會露出下一張舊卡牌。如果該圖案又與場上其他人相同，會立即觸發新的連鎖對決！" },
            { title: "🌟 萬能牌 (Wild)", desc: "若翻出萬能牌，置於場中央。當有玩家卡牌的圖形符合萬能牌上顯示的兩個圖案之一時，兩位玩家即使圖案不同也會觸發對決。" }
        ]
    },
    "anomia-duel": {
        id: "anomia-duel",
        name: "初級1 - 類別對決版",
        themeName: "英文初級1類別對決",
        description: "符合字字轉機原始的設計邏輯（字彙量為國小一、二年級），對決時需唸出符合對方卡牌類別的「另一個」英文單字。",
        referenceGame: "字字轉機 (Anomia)",
        backColor: "#1e293b",
        backBorder: "#0f172a",
        pattern: "bg-grid",
        cards: [
            // 共享相同的初級1牌卡定義
            { id: "card-1", name: "dog", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Animal (動物)", effect: "狗" },
            { id: "card-2", name: "apple", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Fruit (水果)", effect: "蘋果" },
            { id: "card-3", name: "red", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Color (顏色)", effect: "紅色" },
            { id: "card-4", name: "pen", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "School Supply (文具)", effect: "原子筆" },
            { id: "card-5", name: "cake", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Food (食物)", effect: "蛋糕" },
            { id: "card-6", name: "eye", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Body Part (身體部位)", effect: "眼睛" },
            { id: "card-7", name: "hat", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Clothing (衣物)", effect: "帽子" },
            { id: "card-8", name: "car", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Transportation (交通)", effect: "汽車" },
            { id: "card-9", name: "father", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Family (家人)", effect: "父親" },
            { id: "card-10", name: "sun", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Nature (自然)", effect: "太陽" },
            { id: "card-11", name: "one", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Number (數字)", effect: "一" },
            { id: "card-12", name: "home", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Place (地點)", effect: "家" },
            { id: "card-13", name: "cat", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Animal (動物)", effect: "貓" },
            { id: "card-14", name: "banana", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Fruit (水果)", effect: "香蕉" },
            { id: "card-15", name: "blue", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Color (顏色)", effect: "藍色" },
            { id: "card-16", name: "coat", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Clothing (衣物)", effect: "外套" },
            { id: "card-17", name: "bus", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Transportation (交通)", effect: "公車" },
            { id: "card-18", name: "mother", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Family (家人)", effect: "母親" },
            { id: "card-19", name: "pencil", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "School Supply (文具)", effect: "鉛筆" },
            { id: "card-20", name: "bread", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Food (食物)", effect: "麵包" },
            { id: "card-21", name: "nose", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Body Part (身體部位)", effect: "鼻子" },
            { id: "card-22", name: "moon", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Nature (自然)", effect: "月亮" },
            { id: "card-23", name: "two", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Number (數字)", effect: "二" },
            { id: "card-24", name: "school", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Place (地點)", effect: "學校" },
            { id: "card-25", name: "pig", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Animal (動物)", effect: "豬" },
            { id: "card-26", name: "grape", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Fruit (水果)", effect: "葡萄" },
            { id: "card-27", name: "ruler", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "School Supply (文具)", effect: "尺" },
            { id: "card-28", name: "shoes", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Clothing (衣物)", effect: "鞋子" },
            { id: "card-29", name: "star", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Nature (自然)", effect: "星星" },
            { id: "card-30", name: "three", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Number (數字)", effect: "三" },
            { id: "card-31", name: "green", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Color (顏色)", effect: "綠色" },
            { id: "card-32", name: "egg", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Food (食物)", effect: "蛋" },
            { id: "card-33", name: "mouth", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Body Part (身體部位)", effect: "嘴巴" },
            { id: "card-34", name: "bike", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Transportation (交通)", effect: "自行車" },
            { id: "card-35", name: "brother", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Family (家人)", effect: "兄弟" },
            { id: "card-36", name: "park", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Place (地點)", effect: "公園" },
            { id: "card-37", name: "bird", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Animal (動物)", effect: "鳥" },
            { id: "card-38", name: "yellow", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Color (顏色)", effect: "黃色" },
            { id: "card-39", name: "milk", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Food (食物)", effect: "牛奶" },
            { id: "card-40", name: "train", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Transportation (交通)", effect: "火車" },
            { id: "card-41", name: "tree", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Nature (自然)", effect: "樹木" },
            { id: "card-42", name: "zoo", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Place (地點)", effect: "動物園" },
            { id: "card-43", name: "orange", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Fruit (水果)", effect: "柳橙" },
            { id: "card-44", name: "book", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "School Supply (文具)", effect: "書本" },
            { id: "card-45", name: "ear", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Body Part (身體部位)", effect: "耳朵" },
            { id: "card-46", name: "socks", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Clothing (衣物)", effect: "襪子" },
            { id: "card-47", name: "sister", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Family (家人)", effect: "姊妹" },
            { id: "card-48", name: "four", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Number (數字)", effect: "四" },
            // ==================== Wild Cards ====================
            { id: "wild-1", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "square", color2: "#3b82f6", number2: "square", hex: "#475569", summary: "Circle & Square", effect: "當此牌翻出時，持有這兩個圖形（circle / square）的玩家即可觸發對決！" },
            { id: "wild-2", name: "Wild Card", count: 1, isWild: true, shape1: "triangle", color1: "#22c55e", number1: "triangle", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Triangle & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（triangle / rectangle）的玩家即可觸發對決！" },
            { id: "wild-3", name: "Wild Card", count: 1, isWild: true, shape1: "rhombus", color1: "#a855f7", number1: "rhombus", shape2: "trapezoid", color2: "#f97316", number2: "trapezoid", hex: "#475569", summary: "Rhombus & Trapezoid", effect: "當此牌翻出時，持有這兩個圖形（rhombus / trapezoid）的玩家即可觸發對決！" },
            { id: "wild-4", name: "Wild Card", count: 1, isWild: true, shape1: "ellipse", color1: "#ec4899", number1: "ellipse", shape2: "pentagon", color2: "#06b6d4", number2: "pentagon", hex: "#475569", summary: "Ellipse & Pentagon", effect: "當此牌翻出時，持有這兩個圖形（ellipse / pentagon）的玩家即可觸發對決！" },
            { id: "wild-5", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "triangle", color2: "#22c55e", number2: "triangle", hex: "#475569", summary: "Circle & Triangle", effect: "當此牌翻出時，持有這兩個圖形（circle / triangle）的玩家即可觸發對決！" },
            { id: "wild-6", name: "Wild Card", count: 1, isWild: true, shape1: "square", color1: "#3b82f6", number1: "square", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Square & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（square / rectangle）的玩家即可觸發對決！" }
        ],
        rules: [
            { title: "🎯 遊戲目標", desc: "當翻出相同幾何圖形（或符合萬能牌）時，比對手更快喊出對手卡牌「單字主題類別」的另一個英文單字！" },
            { title: "📦 遊戲準備", desc: "將 48 張主題牌與 6 張萬能牌混合洗勻，面朝下放置中央作為牌堆。玩家輪流翻開一張牌，置於自己面前。" },
            { title: "⚔️ 觸發對決", desc: "當有雙方玩家面前翻開的卡牌上，幾何圖形（顏色與標記）完全相同時，立即觸發「對決」！" },
            { title: "🗣️ 類別對決", desc: "對決的兩人必須看對方的卡牌主題（如對手是 Food 食物），迅速喊出符合該主題的另一個英文單字（如喊出 bread）。先喊出者獲勝！" },
            { title: "⛓️ 連鎖匹配", desc: "當贏家移走輸家的卡牌後，輸家面前可能會露出下一張舊卡牌。如果該圖案又與場上其他人相同，會立即觸發新的連鎖對決！" },
            { title: "🌟 萬能牌 (Wild)", desc: "若翻出萬能牌，置於場中央。當有玩家卡牌的圖形符合萬能牌上顯示的兩個圖案之一時，兩位玩家即使圖案不同也會觸發對決。" }
        ]
    },
    "anomia-read-2": {
        id: "anomia-read-2",
        name: "初級2 - 文字朗讀版",
        themeName: "英文初級2單字朗讀",
        description: "國小三年級適用第二套單字（與初級1完全不重複），對決時直接唸出卡牌上的英文單字即可過關。",
        referenceGame: "字字轉機 (Anomia)",
        backColor: "#164e63",
        backBorder: "#083344",
        pattern: "bg-grid",
        cards: [
            // ==================== Circle ====================
            // Animal(fish), Fruit(lemon), Color(brown), School Supply(scissors), Food(rice), Body Part(arm)
            { id: "card-l2-1", name: "fish", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Animal (動物)", effect: "魚" },
            { id: "card-l2-2", name: "lemon", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Fruit (水果)", effect: "檸檬" },
            { id: "card-l2-3", name: "brown", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Color (顏色)", effect: "棕色" },
            { id: "card-l2-4", name: "scissors", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "School Supply (文具)", effect: "剪刀" },
            { id: "card-l2-5", name: "rice", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Food (食物)", effect: "飯" },
            { id: "card-l2-6", name: "arm", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Body Part (身體部位)", effect: "手臂" },

            // ==================== Square ====================
            // Clothing(shirt), Transportation(plane), Family(son), Nature(rain), Number(nine), Place(beach)
            { id: "card-l2-7", name: "shirt", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Clothing (衣物)", effect: "上衣" },
            { id: "card-l2-8", name: "plane", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Transportation (交通)", effect: "飛機" },
            { id: "card-l2-9", name: "son", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Family (家人)", effect: "兒子" },
            { id: "card-l2-10", name: "rain", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Nature (自然)", effect: "雨" },
            { id: "card-l2-11", name: "nine", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Number (數字)", effect: "九" },
            { id: "card-l2-12", name: "beach", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Place (地點)", effect: "海灘" },

            // ==================== Triangle ====================
            // Animal(sheep), Fruit(pear), Color(gray), Clothing(pants), Transportation(boat), Family(daughter)
            { id: "card-l2-13", name: "sheep", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Animal (動物)", effect: "羊" },
            { id: "card-l2-14", name: "pear", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Fruit (水果)", effect: "梨子" },
            { id: "card-l2-15", name: "gray", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Color (顏色)", effect: "灰色" },
            { id: "card-l2-16", name: "pants", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Clothing (衣物)", effect: "褲子" },
            { id: "card-l2-17", name: "boat", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Transportation (交通)", effect: "船" },
            { id: "card-l2-18", name: "daughter", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Family (家人)", effect: "女兒" },

            // ==================== Rectangle ====================
            // School Supply(glue), Food(soup), Body Part(leg), Nature(snow), Number(ten), Place(market)
            { id: "card-l2-19", name: "glue", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "School Supply (文具)", effect: "膠水" },
            { id: "card-l2-20", name: "soup", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Food (食物)", effect: "湯" },
            { id: "card-l2-21", name: "leg", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Body Part (身體部位)", effect: "腿" },
            { id: "card-l2-22", name: "snow", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Nature (自然)", effect: "雪" },
            { id: "card-l2-23", name: "ten", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Number (數字)", effect: "十" },
            { id: "card-l2-24", name: "market", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Place (地點)", effect: "市場" },

            // ==================== Rhombus ====================
            // Animal(duck), Fruit(peach), School Supply(crayon), Clothing(skirt), Nature(lake), Number(eleven)
            { id: "card-l2-25", name: "duck", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Animal (動物)", effect: "鴨子" },
            { id: "card-l2-26", name: "peach", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Fruit (水果)", effect: "水蜜桃" },
            { id: "card-l2-27", name: "crayon", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "School Supply (文具)", effect: "蠟筆" },
            { id: "card-l2-28", name: "skirt", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Clothing (衣物)", effect: "裙子" },
            { id: "card-l2-29", name: "lake", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Nature (自然)", effect: "湖" },
            { id: "card-l2-30", name: "eleven", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Number (數字)", effect: "十一" },

            // ==================== Trapezoid ====================
            // Color(orange), Food(noodle), Body Part(head), Transportation(van), Family(cousin), Place(farm)
            { id: "card-l2-31", name: "orange", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Color (顏色)", effect: "橘色" },
            { id: "card-l2-32", name: "noodle", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Food (食物)", effect: "麵條" },
            { id: "card-l2-33", name: "head", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Body Part (身體部位)", effect: "頭" },
            { id: "card-l2-34", name: "van", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Transportation (交通)", effect: "廂型車" },
            { id: "card-l2-35", name: "cousin", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Family (家人)", effect: "表兄弟姊妹" },
            { id: "card-l2-36", name: "farm", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Place (地點)", effect: "農場" },

            // ==================== Ellipse ====================
            // Animal(horse), Color(gold), Food(sandwich), Transportation(ambulance), Nature(mountain), Place(restaurant)
            { id: "card-l2-37", name: "horse", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Animal (動物)", effect: "馬" },
            { id: "card-l2-38", name: "gold", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Color (顏色)", effect: "金色" },
            { id: "card-l2-39", name: "sandwich", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Food (食物)", effect: "三明治" },
            { id: "card-l2-40", name: "ambulance", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Transportation (交通)", effect: "救護車" },
            { id: "card-l2-41", name: "mountain", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Nature (自然)", effect: "山" },
            { id: "card-l2-42", name: "restaurant", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Place (地點)", effect: "餐廳" },

            // ==================== Pentagon ====================
            // Fruit(cherry), School Supply(tape), Body Part(neck), Clothing(jeans), Family(baby), Number(twelve)
            { id: "card-l2-43", name: "cherry", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Fruit (水果)", effect: "櫻桃" },
            { id: "card-l2-44", name: "tape", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "School Supply (文具)", effect: "膠帶" },
            { id: "card-l2-45", name: "neck", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Body Part (身體部位)", effect: "脖子" },
            { id: "card-l2-46", name: "jeans", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Clothing (衣物)", effect: "牛仔褲" },
            { id: "card-l2-47", name: "baby", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Family (家人)", effect: "嬰兒" },
            { id: "card-l2-48", name: "twelve", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Number (數字)", effect: "十二" },

            // ==================== Wild Cards ====================
            { id: "wild-1", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "square", color2: "#3b82f6", number2: "square", hex: "#475569", summary: "Circle & Square", effect: "當此牌翻出時，持有這兩個圖形（circle / square）的玩家即可觸發對決！" },
            { id: "wild-2", name: "Wild Card", count: 1, isWild: true, shape1: "triangle", color1: "#22c55e", number1: "triangle", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Triangle & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（triangle / rectangle）的玩家即可觸發對決！" },
            { id: "wild-3", name: "Wild Card", count: 1, isWild: true, shape1: "rhombus", color1: "#a855f7", number1: "rhombus", shape2: "trapezoid", color2: "#f97316", number2: "trapezoid", hex: "#475569", summary: "Rhombus & Trapezoid", effect: "當此牌翻出時，持有這兩個圖形（rhombus / trapezoid）的玩家即可觸發對決！" },
            { id: "wild-4", name: "Wild Card", count: 1, isWild: true, shape1: "ellipse", color1: "#ec4899", number1: "ellipse", shape2: "pentagon", color2: "#06b6d4", number2: "pentagon", hex: "#475569", summary: "Ellipse & Pentagon", effect: "當此牌翻出時，持有這兩個圖形（ellipse / pentagon）的玩家即可觸發對決！" },
            { id: "wild-5", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "triangle", color2: "#22c55e", number2: "triangle", hex: "#475569", summary: "Circle & Triangle", effect: "當此牌翻出時，持有這兩個圖形（circle / triangle）的玩家即可觸發對決！" },
            { id: "wild-6", name: "Wild Card", count: 1, isWild: true, shape1: "square", color1: "#3b82f6", number1: "square", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Square & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（square / rectangle）的玩家即可觸發對決！" }
        ],
        rules: [
            { title: "🎯 遊戲目標", desc: "當翻出相同幾何圖形（或符合萬能牌）時，比對手搶先唸出對方卡牌上的英文單字即可過關！" },
            { title: "📦 遊戲準備", desc: "將 48 張單字牌與 6 張萬能牌混合洗勻，面朝下放置中央作為牌堆。玩家輪流翻開一張牌，置於自己面前。" },
            { title: "⚔️ 觸發對決", desc: "當有兩位玩家面前翻開的卡牌上，幾何圖形（顏色與標記）完全相同時，立即觸發「對決」！" },
            { title: "🗣️ 對決朗讀", desc: "對決雙方必須看著「對方的卡牌」，迅速唸出對方卡牌上標示的英文單字。先正確唸出單字的人獲勝！" },
            { title: "⛓️ 連鎖匹配", desc: "當贏家移走輸家的卡牌後，輸家面前可能會露出下一張舊卡牌。如果該圖案又與場上其他人相同，會立即觸發新的連鎖對決！" },
            { title: "🌟 萬能牌 (Wild)", desc: "若翻出萬能牌，置於場中央。當有玩家卡牌的圖形符合萬能牌上顯示的兩個圖案之一時，兩位玩家即使圖案不同也會觸發對決。" }
        ]
    },
    "anomia-duel-2": {
        id: "anomia-duel-2",
        name: "初級2 - 類別對決版",
        themeName: "英文初級2類別對決",
        description: "國小三年級適用第二套單字（與初級1完全不重複），對決時需唸出符合對方卡牌類別的「另一個」英文單字。",
        referenceGame: "字字轉機 (Anomia)",
        backColor: "#164e63",
        backBorder: "#083344",
        pattern: "bg-grid",
        cards: [
            // 共享相同的初級2牌卡定義
            { id: "card-l2-1", name: "fish", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Animal (動物)", effect: "魚" },
            { id: "card-l2-2", name: "lemon", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Fruit (水果)", effect: "檸檬" },
            { id: "card-l2-3", name: "brown", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Color (顏色)", effect: "棕色" },
            { id: "card-l2-4", name: "scissors", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "School Supply (文具)", effect: "剪刀" },
            { id: "card-l2-5", name: "rice", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Food (食物)", effect: "飯" },
            { id: "card-l2-6", name: "arm", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Body Part (身體部位)", effect: "手臂" },
            { id: "card-l2-7", name: "shirt", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Clothing (衣物)", effect: "上衣" },
            { id: "card-l2-8", name: "plane", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Transportation (交通)", effect: "飛機" },
            { id: "card-l2-9", name: "son", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Family (家人)", effect: "兒子" },
            { id: "card-l2-10", name: "rain", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Nature (自然)", effect: "雨" },
            { id: "card-l2-11", name: "nine", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Number (數字)", effect: "九" },
            { id: "card-l2-12", name: "beach", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Place (地點)", effect: "海灘" },
            { id: "card-l2-13", name: "sheep", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Animal (動物)", effect: "羊" },
            { id: "card-l2-14", name: "pear", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Fruit (水果)", effect: "梨子" },
            { id: "card-l2-15", name: "gray", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Color (顏色)", effect: "灰色" },
            { id: "card-l2-16", name: "pants", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Clothing (衣物)", effect: "褲子" },
            { id: "card-l2-17", name: "boat", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Transportation (交通)", effect: "船" },
            { id: "card-l2-18", name: "daughter", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Family (家人)", effect: "女兒" },
            { id: "card-l2-19", name: "glue", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "School Supply (文具)", effect: "膠水" },
            { id: "card-l2-20", name: "soup", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Food (食物)", effect: "湯" },
            { id: "card-l2-21", name: "leg", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Body Part (身體部位)", effect: "腿" },
            { id: "card-l2-22", name: "snow", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Nature (自然)", effect: "雪" },
            { id: "card-l2-23", name: "ten", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Number (數字)", effect: "十" },
            { id: "card-l2-24", name: "market", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Place (地點)", effect: "市場" },
            { id: "card-l2-25", name: "duck", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Animal (動物)", effect: "鴨子" },
            { id: "card-l2-26", name: "peach", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Fruit (水果)", effect: "水蜜桃" },
            { id: "card-l2-27", name: "crayon", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "School Supply (文具)", effect: "蠟筆" },
            { id: "card-l2-28", name: "skirt", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Clothing (衣物)", effect: "裙子" },
            { id: "card-l2-29", name: "lake", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Nature (自然)", effect: "湖" },
            { id: "card-l2-30", name: "eleven", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Number (數字)", effect: "十一" },
            { id: "card-l2-31", name: "orange", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Color (顏色)", effect: "橘色" },
            { id: "card-l2-32", name: "noodle", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Food (食物)", effect: "麵條" },
            { id: "card-l2-33", name: "head", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Body Part (身體部位)", effect: "頭" },
            { id: "card-l2-34", name: "van", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Transportation (交通)", effect: "廂型車" },
            { id: "card-l2-35", name: "cousin", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Family (家人)", effect: "表兄弟姊妹" },
            { id: "card-l2-36", name: "farm", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Place (地點)", effect: "農場" },
            { id: "card-l2-37", name: "horse", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Animal (動物)", effect: "馬" },
            { id: "card-l2-38", name: "gold", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Color (顏色)", effect: "金色" },
            { id: "card-l2-39", name: "sandwich", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Food (食物)", effect: "三明治" },
            { id: "card-l2-40", name: "ambulance", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Transportation (交通)", effect: "救護車" },
            { id: "card-l2-41", name: "mountain", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Nature (自然)", effect: "山" },
            { id: "card-l2-42", name: "restaurant", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Place (地點)", effect: "餐廳" },
            { id: "card-l2-43", name: "cherry", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Fruit (水果)", effect: "櫻桃" },
            { id: "card-l2-44", name: "tape", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "School Supply (文具)", effect: "膠帶" },
            { id: "card-l2-45", name: "neck", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Body Part (身體部位)", effect: "脖子" },
            { id: "card-l2-46", name: "jeans", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Clothing (衣物)", effect: "牛仔褲" },
            { id: "card-l2-47", name: "baby", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Family (家人)", effect: "嬰兒" },
            { id: "card-l2-48", name: "twelve", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Number (數字)", effect: "十二" },
            // ==================== Wild Cards ====================
            { id: "wild-1", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "square", color2: "#3b82f6", number2: "square", hex: "#475569", summary: "Circle & Square", effect: "當此牌翻出時，持有這兩個圖形（circle / square）的玩家即可觸發對決！" },
            { id: "wild-2", name: "Wild Card", count: 1, isWild: true, shape1: "triangle", color1: "#22c55e", number1: "triangle", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Triangle & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（triangle / rectangle）的玩家即可觸發對決！" },
            { id: "wild-3", name: "Wild Card", count: 1, isWild: true, shape1: "rhombus", color1: "#a855f7", number1: "rhombus", shape2: "trapezoid", color2: "#f97316", number2: "trapezoid", hex: "#475569", summary: "Rhombus & Trapezoid", effect: "當此牌翻出時，持有這兩個圖形（rhombus / trapezoid）的玩家即可觸發對決！" },
            { id: "wild-4", name: "Wild Card", count: 1, isWild: true, shape1: "ellipse", color1: "#ec4899", number1: "ellipse", shape2: "pentagon", color2: "#06b6d4", number2: "pentagon", hex: "#475569", summary: "Ellipse & Pentagon", effect: "當此牌翻出時，持有這兩個圖形（ellipse / pentagon）的玩家即可觸發對決！" },
            { id: "wild-5", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "triangle", color2: "#22c55e", number2: "triangle", hex: "#475569", summary: "Circle & Triangle", effect: "當此牌翻出時，持有這兩個圖形（circle / triangle）的玩家即可觸發對決！" },
            { id: "wild-6", name: "Wild Card", count: 1, isWild: true, shape1: "square", color1: "#3b82f6", number1: "square", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Square & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（square / rectangle）的玩家即可觸發對決！" }
        ],
        rules: [
            { title: "🎯 遊戲目標", desc: "當翻出相同幾何圖形（或符合萬能牌）時，比對手更快喊出對手卡牌「單字主題類別」的另一個英文單字！" },
            { title: "📦 遊戲準備", desc: "將 48 張主題牌與 6 張萬能牌混合洗勻，面朝下放置中央作為牌堆。玩家輪流翻開一張牌，置於自己面前。" },
            { title: "⚔️ 觸發對決", desc: "當有雙方玩家面前翻開的卡牌上，幾何圖形（顏色與標記）完全相同時，立即觸發「對決」！" },
            { title: "🗣️ 類別對決", desc: "對決的兩人必須看對方的卡牌主題（如對手是 Food 食物），迅速喊出符合該主題的另一個英文單字（如喊出 soup）。先喊出者獲勝！" },
            { title: "⛓️ 連鎖匹配", desc: "當贏家移走輸家的卡牌後，輸家面前可能會露出下一張舊卡牌。如果該圖案又與場上其他人相同，會立即觸發新的連鎖對決！" },
            { title: "🌟 萬能牌 (Wild)", desc: "若翻出萬能牌，置於場中央。當有玩家卡牌的圖形符合萬能牌上顯示的兩個圖案之一時，兩位玩家即使圖案不同也會觸發對決。" }
        ]
    },
    "anomia-read-int": {
        id: "anomia-read-int",
        name: "中級 - 文字朗讀版",
        themeName: "英文中級單字朗讀",
        description: "專為中低年級學童設計（字彙量為國小三、四年級），字彙與初級完全不重複。對決時直接唸出卡牌上的中級英文單字即可過關。",
        referenceGame: "字字轉機 (Anomia)",
        backColor: "#1e293b",
        backBorder: "#0f172a",
        pattern: "bg-grid",
        cards: [
            // ==================== Circle ====================
            { id: "card-int-1", name: "lion", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Animal (動物)", effect: "獅子" },
            { id: "card-int-2", name: "strawberry", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Fruit (水果)", effect: "草莓" },
            { id: "card-int-3", name: "pink", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Color (顏色)", effect: "粉紅色" },
            { id: "card-int-4", name: "notebook", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "School Supply (文具)", effect: "筆記本" },
            { id: "card-int-5", name: "pizza", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Food (食物)", effect: "披薩" },
            { id: "card-int-6", name: "hand", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Body Part (身體部位)", effect: "手" },

            // ==================== Square ====================
            { id: "card-int-7", name: "dress", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Clothing (衣物)", effect: "洋裝" },
            { id: "card-int-8", name: "truck", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Transportation (交通)", effect: "卡車" },
            { id: "card-int-9", name: "grandfather", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Family (家人)", effect: "祖父" },
            { id: "card-int-10", name: "sky", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Nature (自然)", effect: "天空" },
            { id: "card-int-11", name: "five", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Number (數字)", effect: "五" },
            { id: "card-int-12", name: "shop", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Place (地點)", effect: "商店" },

            // ==================== Triangle ====================
            { id: "card-int-13", name: "bear", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Animal (動物)", effect: "熊" },
            { id: "card-int-14", name: "watermelon", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Fruit (水果)", effect: "西瓜" },
            { id: "card-int-15", name: "white", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Color (顏色)", effect: "白色" },
            { id: "card-int-16", name: "shorts", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Clothing (衣物)", effect: "短褲" },
            { id: "card-int-17", name: "taxi", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Transportation (交通)", effect: "計程車" },
            { id: "card-int-18", name: "grandmother", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Family (家人)", effect: "祖母" },

            // ==================== Rectangle ====================
            { id: "card-int-19", name: "pencil case", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "School Supply (文具)", effect: "鉛筆盒" },
            { id: "card-int-20", name: "cookie", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Food (食物)", effect: "餅乾" },
            { id: "card-int-21", name: "foot", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Body Part (身體部位)", effect: "腳" },
            { id: "card-int-22", name: "cloud", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Nature (自然)", effect: "雲朵" },
            { id: "card-int-23", name: "six", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Number (數字)", effect: "六" },
            { id: "card-int-24", name: "hospital", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Place (地點)", effect: "醫院" },

            // ==================== Rhombus ====================
            { id: "card-int-25", name: "tiger", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Animal (動物)", effect: "老虎" },
            { id: "card-int-26", name: "pineapple", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Fruit (水果)", effect: "鳳梨" },
            { id: "card-int-27", name: "marker", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "School Supply (文具)", effect: "彩色筆" },
            { id: "card-int-28", name: "jacket", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Clothing (衣物)", effect: "夾克" },
            { id: "card-int-29", name: "wind", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Nature (自然)", effect: "風" },
            { id: "card-int-30", name: "seven", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Number (數字)", effect: "七" },

            // ==================== Trapezoid ====================
            { id: "card-int-31", name: "black", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Color (顏色)", effect: "黑色" },
            { id: "card-int-32", name: "juice", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Food (食物)", effect: "果汁" },
            { id: "card-int-33", name: "face", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Body Part (身體部位)", effect: "臉部" },
            { id: "card-int-34", name: "metro", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Transportation (交通)", effect: "捷運" },
            { id: "card-int-35", name: "uncle", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Family (家人)", effect: "叔叔" },
            { id: "card-int-36", name: "library", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Place (地點)", effect: "圖書館" },

            // ==================== Ellipse ====================
            { id: "card-int-37", name: "elephant", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Animal (動物)", effect: "大象" },
            { id: "card-int-38", name: "purple", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Color (顏色)", effect: "紫色" },
            { id: "card-int-39", name: "burger", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Food (食物)", effect: "漢堡" },
            { id: "card-int-40", name: "ship", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Transportation (交通)", effect: "大船" },
            { id: "card-int-41", name: "flower", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Nature (自然)", effect: "花朵" },
            { id: "card-int-42", name: "classroom", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Place (地點)", effect: "教室" },

            // ==================== Pentagon ====================
            { id: "card-int-43", name: "mango", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Fruit (水果)", effect: "芒果" },
            { id: "card-int-44", name: "eraser", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "School Supply (文具)", effect: "橡皮擦" },
            { id: "card-int-45", name: "hair", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Body Part (身體部位)", effect: "頭髮" },
            { id: "card-int-46", name: "sweater", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Clothing (衣物)", effect: "毛衣" },
            { id: "card-int-47", name: "aunt", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Family (家人)", effect: "阿姨姑姑" },
            { id: "card-int-48", name: "eight", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Number (數字)", effect: "八" },

            // ==================== Wild Cards ====================
            { id: "wild-1", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "square", color2: "#3b82f6", number2: "square", hex: "#475569", summary: "Circle & Square", effect: "當此牌翻出時，持有這兩個圖形（circle / square）的玩家即可觸發對決！" },
            { id: "wild-2", name: "Wild Card", count: 1, isWild: true, shape1: "triangle", color1: "#22c55e", number1: "triangle", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Triangle & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（triangle / rectangle）的玩家即可觸發對決！" },
            { id: "wild-3", name: "Wild Card", count: 1, isWild: true, shape1: "rhombus", color1: "#a855f7", number1: "rhombus", shape2: "trapezoid", color2: "#f97316", number2: "trapezoid", hex: "#475569", summary: "Rhombus & Trapezoid", effect: "當此牌翻出時，持有這兩個圖形（rhombus / trapezoid）的玩家即可觸發對決！" },
            { id: "wild-4", name: "Wild Card", count: 1, isWild: true, shape1: "ellipse", color1: "#ec4899", number1: "ellipse", shape2: "pentagon", color2: "#06b6d4", number2: "pentagon", hex: "#475569", summary: "Ellipse & Pentagon", effect: "當此牌翻出時，持有這兩個圖形（ellipse / pentagon）的玩家即可觸發對決！" },
            { id: "wild-5", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "triangle", color2: "#22c55e", number2: "triangle", hex: "#475569", summary: "Circle & Triangle", effect: "當此牌翻出時，持有這兩個圖形（circle / triangle）的玩家即可觸發對決！" },
            { id: "wild-6", name: "Wild Card", count: 1, isWild: true, shape1: "square", color1: "#3b82f6", number1: "square", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Square & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（square / rectangle）的玩家即可觸發對決！" }
        ],
        rules: [
            { title: "🎯 遊戲目標", desc: "當翻出相同幾何圖形（或符合萬能牌）時，比對手搶先唸出對方卡牌上的英文單字即可過關！" },
            { title: "📦 遊戲準備", desc: "將 48 張單字牌與 6 張萬能牌混合洗勻，面朝下放置中央作為牌堆。玩家輪流翻開一張牌，置於自己面前。" },
            { title: "⚔️ 觸發對決", desc: "當有兩位玩家面前翻開的卡牌上，幾何圖形（顏色與標記）完全相同時，立即觸發「對決」！" },
            { title: "🗣️ 對決朗讀", desc: "對決雙方必須看著「對方的卡牌」，迅速唸出對方卡牌上標示的英文單字。先正確唸出單字的人獲勝！" },
            { title: "⛓️ 連鎖匹配", desc: "當贏家移走輸家的卡牌後，輸家面前可能會露出下一張舊卡牌。如果該圖案又與場上其他人相同，會立即觸發新的連鎖對決！" },
            { title: "🌟 萬能牌 (Wild)", desc: "若翻出萬能牌，置於場中央。當有玩家卡牌的圖形符合萬能牌上顯示的兩個圖案之一時，兩位玩家即使圖案不同也會觸發對決。" }
        ]
    },
    "anomia-duel-int": {
        id: "anomia-duel-int",
        name: "中級 - 類別對決版",
        themeName: "英文中級類別對決",
        description: "符合字字轉機原始的設計邏輯（字彙量為國小三、四年級），字彙與初級完全不重複。對決時需唸出符合對方卡牌類別的「另一個」英文單字。",
        referenceGame: "字字轉機 (Anomia)",
        backColor: "#1e293b",
        backBorder: "#0f172a",
        pattern: "bg-grid",
        cards: [
            // 共享相同的中級牌卡定義
            { id: "card-int-1", name: "lion", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Animal (動物)", effect: "獅子" },
            { id: "card-int-2", name: "strawberry", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Fruit (水果)", effect: "草莓" },
            { id: "card-int-3", name: "pink", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Color (顏色)", effect: "粉紅色" },
            { id: "card-int-4", name: "notebook", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "School Supply (文具)", effect: "筆記本" },
            { id: "card-int-5", name: "pizza", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Food (食物)", effect: "披薩" },
            { id: "card-int-6", name: "hand", count: 1, value: "circle", shape: "circle", hex: "#ef4444", summary: "Body Part (身體部位)", effect: "手" },
            { id: "card-int-7", name: "dress", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Clothing (衣物)", effect: "洋裝" },
            { id: "card-int-8", name: "truck", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Transportation (交通)", effect: "卡車" },
            { id: "card-int-9", name: "grandfather", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Family (家人)", effect: "祖父" },
            { id: "card-int-10", name: "sky", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Nature (自然)", effect: "天空" },
            { id: "card-int-11", name: "five", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Number (數字)", effect: "五" },
            { id: "card-int-12", name: "shop", count: 1, value: "square", shape: "square", hex: "#3b82f6", summary: "Place (地點)", effect: "商店" },
            { id: "card-int-13", name: "bear", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Animal (動物)", effect: "熊" },
            { id: "card-int-14", name: "watermelon", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Fruit (水果)", effect: "西瓜" },
            { id: "card-int-15", name: "white", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Color (顏色)", effect: "白色" },
            { id: "card-int-16", name: "shorts", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Clothing (衣物)", effect: "短褲" },
            { id: "card-int-17", name: "taxi", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Transportation (交通)", effect: "計程車" },
            { id: "card-int-18", name: "grandmother", count: 1, value: "triangle", shape: "triangle", hex: "#22c55e", summary: "Family (家人)", effect: "祖母" },
            { id: "card-int-19", name: "pencil case", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "School Supply (文具)", effect: "鉛筆盒" },
            { id: "card-int-20", name: "cookie", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Food (食物)", effect: "餅乾" },
            { id: "card-int-21", name: "foot", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Body Part (身體部位)", effect: "腳" },
            { id: "card-int-22", name: "cloud", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Nature (自然)", effect: "雲朵" },
            { id: "card-int-23", name: "six", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Number (數字)", effect: "六" },
            { id: "card-int-24", name: "hospital", count: 1, value: "rectangle", shape: "rectangle", hex: "#eab308", summary: "Place (地點)", effect: "醫院" },
            { id: "card-int-25", name: "tiger", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Animal (動物)", effect: "老虎" },
            { id: "card-int-26", name: "pineapple", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Fruit (水果)", effect: "鳳梨" },
            { id: "card-int-27", name: "marker", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "School Supply (文具)", effect: "彩色筆" },
            { id: "card-int-28", name: "jacket", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Clothing (衣物)", effect: "夾克" },
            { id: "card-int-29", name: "wind", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Nature (自然)", effect: "風" },
            { id: "card-int-30", name: "seven", count: 1, value: "rhombus", shape: "rhombus", hex: "#a855f7", summary: "Number (數字)", effect: "七" },
            { id: "card-int-31", name: "black", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Color (顏色)", effect: "黑色" },
            { id: "card-int-32", name: "juice", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Food (食物)", effect: "果汁" },
            { id: "card-int-33", name: "face", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Body Part (身體部位)", effect: "臉部" },
            { id: "card-int-34", name: "metro", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Transportation (交通)", effect: "捷運" },
            { id: "card-int-35", name: "uncle", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Family (家人)", effect: "叔叔" },
            { id: "card-int-36", name: "library", count: 1, value: "trapezoid", shape: "trapezoid", hex: "#f97316", summary: "Place (地點)", effect: "圖書館" },
            { id: "card-int-37", name: "elephant", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Animal (動物)", effect: "大象" },
            { id: "card-int-38", name: "purple", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Color (顏色)", effect: "紫色" },
            { id: "card-int-39", name: "burger", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Food (食物)", effect: "漢堡" },
            { id: "card-int-40", name: "ship", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Transportation (交通)", effect: "大船" },
            { id: "card-int-41", name: "flower", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Nature (自然)", effect: "花朵" },
            { id: "card-int-42", name: "classroom", count: 1, value: "ellipse", shape: "ellipse", hex: "#ec4899", summary: "Place (地點)", effect: "教室" },
            { id: "card-int-43", name: "mango", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Fruit (水果)", effect: "芒果" },
            { id: "card-int-44", name: "eraser", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "School Supply (文具)", effect: "橡皮擦" },
            { id: "card-int-45", name: "hair", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Body Part (身體部位)", effect: "頭髮" },
            { id: "card-int-46", name: "sweater", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Clothing (衣物)", effect: "毛衣" },
            { id: "card-int-47", name: "aunt", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Family (家人)", effect: "阿姨姑姑" },
            { id: "card-int-48", name: "eight", count: 1, value: "pentagon", shape: "pentagon", hex: "#06b6d4", summary: "Number (數字)", effect: "八" },
            // ==================== Wild Cards ====================
            { id: "wild-1", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "square", color2: "#3b82f6", number2: "square", hex: "#475569", summary: "Circle & Square", effect: "當此牌翻出時，持有這兩個圖形（circle / square）的玩家即可觸發對決！" },
            { id: "wild-2", name: "Wild Card", count: 1, isWild: true, shape1: "triangle", color1: "#22c55e", number1: "triangle", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Triangle & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（triangle / rectangle）的玩家即可觸發對決！" },
            { id: "wild-3", name: "Wild Card", count: 1, isWild: true, shape1: "rhombus", color1: "#a855f7", number1: "rhombus", shape2: "trapezoid", color2: "#f97316", number2: "trapezoid", hex: "#475569", summary: "Rhombus & Trapezoid", effect: "當此牌翻出時，持有這兩個圖形（rhombus / trapezoid）的玩家即可觸發對決！" },
            { id: "wild-4", name: "Wild Card", count: 1, isWild: true, shape1: "ellipse", color1: "#ec4899", number1: "ellipse", shape2: "pentagon", color2: "#06b6d4", number2: "pentagon", hex: "#475569", summary: "Ellipse & Pentagon", effect: "當此牌翻出時，持有這兩個圖形（ellipse / pentagon）的玩家即可觸發對決！" },
            { id: "wild-5", name: "Wild Card", count: 1, isWild: true, shape1: "circle", color1: "#ef4444", number1: "circle", shape2: "triangle", color2: "#22c55e", number2: "triangle", hex: "#475569", summary: "Circle & Triangle", effect: "當此牌翻出時，持有這兩個圖形（circle / triangle）的玩家即可觸發對決！" },
            { id: "wild-6", name: "Wild Card", count: 1, isWild: true, shape1: "square", color1: "#3b82f6", number1: "square", shape2: "rectangle", color2: "#eab308", number2: "rectangle", hex: "#475569", summary: "Square & Rectangle", effect: "當此牌翻出時，持有這兩個圖形（square / rectangle）的玩家即可觸發對決！" }
        ],
        rules: [
            { title: "🎯 遊戲目標", desc: "當翻出相同幾何圖形（或符合萬能牌）時，比對手更快喊出對手卡牌「單字主題類別」的另一個英文單字！" },
            { title: "📦 遊戲準備", desc: "將 48 張主題牌與 6 張萬能牌混合洗勻，面朝下放置中央作為牌堆。玩家輪流翻開一張牌，置於自己面前。" },
            { title: "⚔️ 觸發對決", desc: "當有雙方玩家面前翻開的卡牌上，幾何圖形（顏色與標記）完全相同時，立即觸發「對決」！" },
            { title: "🗣️ 類別對決", desc: "對決的兩人必須看對方的卡牌主題（如對手是 Food 食物），迅速喊出符合該主題的另一個英文單字（如喊出 bread）。先喊出者獲勝！" },
            { title: "⛓️ 連鎖匹配", desc: "當贏家移走輸家的卡牌後，輸家面前可能會露出下一張舊卡牌。如果該圖案又與場上其他人相同，會立即觸發新的連鎖對決！" },
            { title: "🌟 萬能牌 (Wild)", desc: "若翻出萬能牌，置於場中央。當有玩家卡牌的圖形符合萬能牌上顯示的兩個圖案之一時，兩位玩家即使圖案不同也會觸發對決。" }
        ]
    }
};
