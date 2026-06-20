// Version: 1.0.0
// Changelog:
// - Initial creation: 寶箱勇者 (Treasure Dungeon)，改編自迷你地城 (Mini Rogue - P&P版)
export const versions = {
    'treasure-dungeon': {
        id: 'treasure-dungeon',
        name: '寶箱勇者 (9張)',
        title: '寶箱勇者 (Treasure Dungeon)',
        themeName: 'RPG 地牢探險',
        referenceGame: '迷你地城 (Mini Rogue)',
        description: '一款 1 人的 RPG 極簡地牢冒險遊戲！僅用 9 張卡牌完整重現地城探險體驗。打怪、升裝、管血量，征服最深的地城！',
        cardBorder: '#7c3aed', // violet-600
        backBorder: '#4c1d95', // violet-900
        cards: [
            {
                id: 'dungeon-hero',
                value: 1,
                name: '勇者角色卡',
                count: 1,
                summary: '你的勇者狀態追蹤卡',
                effect: '【角色卡】\n記錄你的勇者狀態：\n生命值（HP）：10\n攻擊力（ATK）：2\n防禦力（DEF）：0\n金幣（Gold）：0',
                flavorText: '「傳說中被選中的勇者，踏上了前往地城深處的旅途。」',
                imagePath: '/images/hero_card.png',
                hex: '#ca8a04'
            },
            {
                id: 'dungeon-room1',
                value: 2,
                name: '第一層：入口大廳',
                count: 1,
                summary: '地城第 1 層（弱）',
                effect: '【地城牌】翻開此牌：\n遭遇哥布林！\nATK 1 / HP 3\n若勝利，獲得 1 金幣，\n失敗扣 2 HP。',
                flavorText: '「地城入口的燭光雖昏暗，但仍能看見前方的通道。」',
                imagePath: '/images/dungeon_room1.png',
                hex: '#059669'
            },
            {
                id: 'dungeon-room2',
                value: 3,
                name: '第二層：寶物室',
                count: 1,
                summary: '地城第 2 層（補給）',
                effect: '【地城牌】翻開此牌：\n發現寶箱！\n擲骰選擇：\n1-3 = 獲得 +3 HP\n4-6 = 獲得 +1 ATK\n（擲一枚硬幣決定）',
                flavorText: '「寶箱在黑暗中閃閃發光，不知道裡面是什麼好東西？」',
                imagePath: '/images/dungeon_room2.png',
                hex: '#b45309'
            },
            {
                id: 'dungeon-room3',
                value: 4,
                name: '第三層：蜘蛛巢',
                count: 1,
                summary: '地城第 3 層（中等）',
                effect: '【地城牌】翻開此牌：\n遭遇巨型蜘蛛！\nATK 2 / HP 5\n若勝利，獲得 2 金幣\n+1 DEF，\n失敗扣 3 HP。',
                flavorText: '「到處都是蛛網，讓行走變得困難，空氣中充滿危機感。」',
                imagePath: '/images/dungeon_room3.png',
                hex: '#374151'
            },
            {
                id: 'dungeon-room4',
                value: 5,
                name: '第四層：商人據點',
                count: 1,
                summary: '地城第 4 層（買賣）',
                effect: '【地城牌】翻開此牌：\n遇到旅行商人！\n可以選擇購買：\n3 金幣 = +5 HP\n5 金幣 = +2 ATK\n8 金幣 = 神器（ATK+3）',
                flavorText: '「在地城深處，一個奇怪的商人笑著向你展示商品。」',
                imagePath: '/images/dungeon_room4.png',
                hex: '#0891b2'
            },
            {
                id: 'dungeon-room5',
                value: 6,
                name: '第五層：龍騎士',
                count: 1,
                summary: '地城第 5 層（強敵）',
                effect: '【地城牌】翻開此牌：\n遭遇龍騎士！\nATK 4 / HP 8\n若勝利，獲得 4 金幣\n+2 ATK，\n失敗扣 5 HP。',
                flavorText: '「身著龍鱗鎧甲的可怕騎士，散發著令人窒息的威壓。」',
                imagePath: '/images/dungeon_room5.png',
                hex: '#9333ea'
            },
            {
                id: 'dungeon-trap',
                value: 7,
                name: '陷阱：毒霧迷宮',
                count: 1,
                summary: '地城陷阱（危機）',
                effect: '【陷阱牌】翻開此牌：\n觸發毒霧陷阱！\n連續 3 回合，\n每回合開始扣 1 HP。\n擁有 DEF 1+ 可免疫。',
                flavorText: '「空氣突然變得渾濁，腳步一軟才發現踩到了地板機關。」',
                imagePath: '/images/dungeon_trap.png',
                hex: '#65a30d'
            },
            {
                id: 'dungeon-boss',
                value: 8,
                name: '最終魔王',
                count: 1,
                summary: '地城 BOSS（終局決戰）',
                effect: '【BOSS 牌】\n召喚黑暗魔王！\nATK 6 / HP 15\n若勝利：\n★★★ 完美通關！\n獲得傳說寶物。\n若失敗：遊戲結束。',
                flavorText: '「黑暗的深處，魔王的眼睛在黑暗中如火焰般燃燒著。」',
                imagePath: '/images/dungeon_boss.png',
                hex: '#991b1b'
            },
            {
                id: 'dungeon-victory',
                value: 9,
                name: '勝利計分卡',
                count: 1,
                summary: '記錄你的最終成就',
                effect: '【計分卡】\n通關後計算最終分數：\n剩餘 HP × 1 分\n剩餘金幣 × 2 分\nATK 值 × 3 分\nDEF 值 × 5 分\n擊敗 BOSS：+20 分',
                flavorText: '「勇者的傳說將在歷史上留下不朽的印記！」',
                imagePath: '/images/dungeon_victory.png',
                hex: '#f59e0b'
            }
        ],
        rules: [
            {
                title: '準備',
                desc: '翻出「勇者角色卡」，記錄初始狀態：HP=10, ATK=2, DEF=0, Gold=0。將其餘 8 張地城牌洗勻後依序排成 2×4 的地城格。'
            },
            {
                title: '探索流程',
                desc: '從左上角開始，依序翻開每張地城牌並立即執行效果。翻開戰鬥牌時：HP對比，ATK較高的勝利（同ATK則各扣 1 HP）。'
            },
            {
                title: '戰鬥計算',
                desc: '戰鬥每回合：雙方互相扣去對方 ATK 的 HP。持續到一方 HP 歸零。DEF 每點可抵銷 1 點敵方 ATK。'
            },
            {
                title: '勝利條件',
                desc: '成功翻到並擊敗「最終魔王」，且 HP > 0，即完成地城探索！\n若 HP 歸零則遊戲結束，記錄到達幾層。'
            }
        ]
    }
};
