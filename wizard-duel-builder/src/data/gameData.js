export const versions = {
    'wizard-duel': {
        id: 'wizard-duel',
        name: "魔法學徒的對決 (16張)",
        title: "魔法學徒的對決 (Wizard Duel)",
        themeName: "魔法對決",
        referenceGame: "雙雄對決 (BraveRats)",
        description: "兩位魔法學院的學徒在畢業典禮上進行魔法決鬥，用 8 種不同的法術一決勝負。",
        cardBorder: "#7c3aed", // Violet 600
        backBorder: "#4c1d95", // Violet 900
        cards: [
            {
                id: 'spell-0',
                value: 0,
                name: "冰凍術",
                count: 2,
                summary: "平手則勝出 / 下局無能力",
                effect: "【即時】若本局平手，此卡勝出。\n【持續】取消下一局雙方卡牌的所有能力。",
                flavorText: "「將戰場溫度降至絕對零度，一切喧囂終歸於沉寂。」",
                imagePath: '/images/freeze.png',
                hex: '#06b6d4' // cyan-500
            },
            {
                id: 'spell-1',
                value: 1,
                name: "護盾術",
                count: 2,
                summary: "若對手出 7 則直接贏得遊戲",
                effect: "【即時】若對手本局出的是火球術（值 7），你立刻贏得整場對決的勝利！",
                flavorText: "「最強大的攻擊，往往伴隨著最致命的反噬。」",
                imagePath: '/images/shield.png',
                hex: '#3b82f6' // blue-500
            },
            {
                id: 'spell-2',
                value: 2,
                name: "窺視術",
                count: 2,
                summary: "下局對手必須先出牌",
                effect: "【持續】在下一局中，對手必須先出牌（正面朝上打出），你隨後再出牌。",
                flavorText: "「在命運之輪轉動前，未來已在我掌中呈現。」",
                imagePath: '/images/insight.png',
                hex: '#a855f7' // purple-500
            },
            {
                id: 'spell-3',
                value: 3,
                name: "劇毒術",
                count: 2,
                summary: "此局數值低者勝出",
                effect: "【即時】在本局判定中，由卡牌數值較小的一方贏得此局。",
                flavorText: "「有毒的迷霧擴散，讓強壯的戰士反而最先倒下。」",
                imagePath: '/images/poison.png',
                hex: '#10b981' // emerald-500
            },
            {
                id: 'spell-4',
                value: 4,
                name: "增幅術",
                count: 2,
                summary: "此局勝出時計為 2 個勝場",
                effect: "【即時】如果此卡贏得本局，本局計為 2 個勝場（而非通常的 1 個）。",
                flavorText: "「注入純粹的奧術能量，將法術的威力放大雙倍。」",
                imagePath: '/images/amplify.png',
                hex: '#eab308' // yellow-500
            },
            {
                id: 'spell-5',
                value: 5,
                name: "法力無效",
                count: 2,
                summary: "無視對手卡牌的能力",
                effect: "【即時】無視對手本局卡牌的任何特殊能力（純比點數大小，除了冰凍術的平手判定效果）。",
                flavorText: "「所有的魔法在絕對的規則面前，都不過是虛妄的煙火。」",
                imagePath: '/images/dispel.png',
                hex: '#64748b' // slate-500
            },
            {
                id: 'spell-6',
                value: 6,
                name: "狂暴術",
                count: 2,
                summary: "下一局你的數值 +2",
                effect: "【持續】在下一局判定中，你的卡牌數值額外 +2 戰力點數。",
                flavorText: "「燃燒體內的魔力，換取短暫而狂暴的戰力噴發。」",
                imagePath: '/images/rage.png',
                hex: '#f97316' // orange-500
            },
            {
                id: 'spell-7',
                value: 7,
                name: "火球術",
                count: 2,
                summary: "沒有特殊能力",
                effect: "（此卡沒有任何特殊能力，僅提供最高強度的 7 點原始魔力。）",
                flavorText: "「最簡單的熾熱高溫，往往就是最無法阻擋的毀滅。」",
                imagePath: '/images/fireball.png',
                hex: '#ef4444' // red-500
            }
        ],
        rules: [
            {
                title: "遊戲目標",
                desc: "兩位玩家各持一組 0~7 的魔法卡。先贏得 4 個勝場者獲得對決勝利！"
            },
            {
                title: "回合決鬥",
                desc: "每回合雙方同時挑選一張手牌，暗蓋於桌上，接著同時翻開。比對雙方數值並結算特殊能力判定勝負。"
            },
            {
                title: "勝負判定",
                desc: "一般情況下，卡牌數值高者勝出。但卡牌能力會改變判定法則（例如：值 3 的劇毒術會讓小者勝出）。"
            },
            {
                title: "平手狀況",
                desc: "如果結算後雙方平手（且無冰凍術能力），本局無人勝出，累積的勝場會併入下一局（下一局贏的人會額外多得先前平手的勝場）。"
            }
        ]
    }
};
