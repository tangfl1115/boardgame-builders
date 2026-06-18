export const versions = {
    'pharaohs-gold': {
        id: 'pharaohs-gold',
        name: "古墓探秘 (16張)",
        title: "古墓探秘：法老密寶 (Pharaoh's Gold)",
        themeName: "金字塔探險",
        referenceGame: "失落的遺產 (Lost Legacy)",
        description: "探險隊深入法老金字塔，尋找傳說中能帶來無盡財富的「法老金棺」。在重重陷阱與對手干擾中找出密寶！",
        cardBorder: "#d97706", // Amber 600
        backBorder: "#78350f", // Amber 900
        cards: [
            {
                id: 'pl-1',
                value: 1,
                name: "法老金棺",
                count: 1,
                summary: "終極寶藏 / 搜尋階段被猜中獲勝",
                effect: "【搜尋】此卡無打出效果。在搜尋階段被玩家猜中其位置（無論在玩家手中或廢墟中），猜對的玩家立刻獲勝！",
                flavorText: "「塵封千年的黃金金棺，散發著致命的誘惑力。」",
                imagePath: '/images/coffin.png',
                hex: '#d97706' // amber-600
            },
            {
                id: 'pl-2',
                value: 2,
                name: "探險日記",
                count: 2,
                summary: "查看牌庫底的牌",
                effect: "【行動】秘密查看牌庫底的第一張卡牌，然後放回原處。",
                flavorText: "「前人探險隊留下的破舊筆記，記載著金字塔內部的隱密結構。」",
                imagePath: '/images/journal.png',
                hex: '#65a30d' // lime-600
            },
            {
                id: 'pl-3',
                value: 3,
                name: "黃金鑰匙",
                count: 2,
                summary: "搜尋階段第一順位進行搜尋",
                effect: "【行動】秘密查看牌庫頂第一張牌，可選擇與手牌交換。\n【搜尋】手牌若有此卡，搜尋階段享有第一優先權。",
                flavorText: "「由純金打造的精緻鑰匙，能打開通往密室的大門。」",
                imagePath: '/images/key.png',
                hex: '#eab308' // yellow-500
            },
            {
                id: 'pl-4',
                value: 4,
                name: "古老地圖",
                count: 2,
                summary: "查看其他玩家的手牌",
                effect: "【行動】指定一名玩家，秘密查看他的手牌。",
                flavorText: "「用羊皮紙繪製的斑駁地圖，隱約指出了寶藏的大致方位。」",
                imagePath: '/images/map.png',
                hex: '#0d9488' // teal-600
            },
            {
                id: 'pl-5',
                value: 5,
                name: "崩塌廢墟",
                count: 3,
                summary: "棄置手牌並與廢墟牌堆交換",
                effect: "【行動】將此卡棄置於「廢墟牌堆」。若你在搜尋階段搜尋廢墟中的金棺，你獲得點數優勢判定。",
                flavorText: "「古老石柱崩塌形成的廢墟，將許多秘密埋藏在石堆之下。」",
                imagePath: '/images/ruins.png',
                hex: '#57534e' // stone-600
            },
            {
                id: 'pl-6',
                value: 6,
                name: "盜墓賊",
                count: 2,
                summary: "與一名玩家交換手牌",
                effect: "【行動】指定一名玩家，秘密且強制地與他交換手牌。",
                flavorText: "「潛伏在金字塔暗處的投機者，隨時準備偷走別人的勞動成果。」",
                imagePath: '/images/robber.png',
                hex: '#7c3aed' // violet-600
            },
            {
                id: 'pl-7',
                value: 7,
                name: "守墓巨石",
                count: 2,
                summary: "迫使一名玩家棄牌重抽",
                effect: "【行動】指定一名玩家。他必須將手牌棄置於廢墟牌堆中，並重新從牌庫抽取 1 張牌。",
                flavorText: "「防範盜墓者的致命機關，一旦觸發就會砸碎入侵者。」",
                imagePath: '/images/guardian.png',
                hex: '#2563eb' // blue-600
            },
            {
                id: 'pl-8',
                value: 8,
                name: "詛咒陷阱",
                count: 2,
                summary: "被猜中手牌直接死亡",
                effect: "【行動】此卡無打出效果。\n【被動】若你在搜尋階段手中持有此卡且被其他玩家指名搜尋，你立刻出局，且該玩家直接失敗。",
                flavorText: "「法老的古老詛咒，任何貪婪的觸碰都將付出生命的代價。」",
                imagePath: '/images/trap.png',
                hex: '#dc2626' // red-600
            }
        ],
        rules: [
            {
                title: "遊戲目標",
                desc: "在探險中存活，並在最後的搜尋階段成功找出「法老金棺」的藏匿位置以奪得勝利！"
            },
            {
                title: "探索階段",
                desc: "每人起手 1 張牌，旁置 3 張「廢墟牌堆」。輪到你時從牌庫抽 1 張，從手牌 2 張中挑選 1 張打出並執行其效果。"
            },
            {
                title: "搜尋階段",
                desc: "當牌庫抽完，進入搜尋。依手牌點數從小到大（1至8）輪流宣稱金棺位置（某人手中、自己手中、或廢墟牌堆）。"
            },
            {
                title: "獲勝判定",
                desc: "第一個指名猜中「法老金棺」位置的玩家立刻獲勝！若所有人都猜錯，則本輪無人獲勝，法老詛咒吞噬金字塔。"
            }
        ]
    }
};
