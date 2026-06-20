// Version: 1.1.0
// Changelog:
// - Renamed Tofu Kingdom to Pudding Kingdom (布丁王國).
// - Corrected referenceGame to 豆腐王國 (Tofu Kingdom).
// - Renamed characters (豆腐公主 -> 布丁公主, 麻糬王子 -> 布丁王子, etc.).
// - Updated image paths and IDs to match.
// - Replaced Yellow Beans (黃豆) with Caramel (焦糖) for point scoring.

export const versions = {
    'pudding-kingdom': {
        id: 'pudding-kingdom',
        name: '布丁王國 (8張)',
        referenceGame: '豆腐王國 (Tofu Kingdom)',
        description: '支援 3-8 人遊玩。目標：布丁王子找出布丁公主，各陣營爭取焦糖積分！',
        backColor: '#fef08a',
        backBorder: '#eab308',
        pattern: 'circuit-board',
        cards: [
            {
                id: 'pudding-princess',
                name: '布丁公主',
                count: 1,
                value: 'T',
                faction: 'princess',
                factionSymbol: '❤️',
                factionColor: '#ef4444',
                effect: '【公主陣營】布丁王子選中此卡時，布丁公主與布丁廚師獲勝。此卡持有者獲得 2 分焦糖。',
                summary: '2分 / 誠實(T)',
                imagePath: '/images/pudding_princess.png',
                hex: '#fda4af'
            },
            {
                id: 'pudding-chef',
                name: '布丁廚師',
                count: 1,
                value: 'T',
                faction: 'princess',
                factionSymbol: '❤️',
                factionColor: '#ef4444',
                effect: '【公主陣營】布丁王子選中布丁公主時，布丁公主與布丁廚師獲勝。此卡持有者可搶奪任一玩家 1 分焦糖。',
                summary: '搶1分 / 誠實(T)',
                imagePath: '/images/pudding_chef.png',
                hex: '#fecdd3'
            },
            {
                id: 'pudding-queen',
                name: '布丁女王',
                count: 1,
                value: 'F',
                faction: 'queen',
                factionSymbol: '👑',
                factionColor: '#a855f7',
                effect: '【女王陣營】布丁王子選中布丁女王、布丁大臣或布丁侍衛時，女王陣營獲勝。此卡持有者獲得 1 分焦糖。',
                summary: '1分 / 說謊(F)',
                imagePath: '/images/pudding_queen.png',
                hex: '#e9d5ff'
            },
            {
                id: 'pudding-minister',
                name: '布丁大臣',
                count: 1,
                value: 'F',
                faction: 'queen',
                factionSymbol: '👑',
                factionColor: '#a855f7',
                effect: '【女王陣營】布丁王子選中布丁女王、布丁大臣或布丁侍衛時，女王陣營獲勝。此卡持有者可搶奪任一玩家 1 分焦糖。',
                summary: '搶1分 / 說謊(F)',
                imagePath: '/images/pudding_minister.png',
                hex: '#f3e8ff'
            },
            {
                id: 'pudding-guard',
                name: '布丁侍衛',
                count: 1,
                value: 'F',
                faction: 'queen',
                factionSymbol: '👑',
                factionColor: '#a855f7',
                effect: '【女王陣營】布丁王子選中布丁女王、布丁大臣或布丁侍衛時，女王陣營獲勝。此卡持有者獲得 1 分焦糖。',
                summary: '1分 / 說謊(F)',
                imagePath: '/images/pudding_guard.png',
                hex: '#fae8ff'
            },
            {
                id: 'pudding-maid',
                name: '布丁女僕',
                count: 1,
                value: '?',
                faction: 'spy',
                factionSymbol: '🎭',
                factionColor: '#06b6d4',
                effect: '【間諜陣營】布丁王子選中布丁女僕或布丁間諜時，間諜陣營獲勝。此卡持有者獲得 1 分焦糖。',
                summary: '1分 / 自由(?)',
                imagePath: '/images/pudding_maid.png',
                hex: '#cffafe'
            },
            {
                id: 'pudding-spy',
                name: '布丁間諜',
                count: 1,
                value: '?',
                faction: 'spy',
                factionSymbol: '🎭',
                factionColor: '#06b6d4',
                effect: '【間諜陣營】布丁王子選中布丁女僕或布丁間諜時，間諜陣營獲勝。此卡持有者可搶奪任一玩家 1 分焦糖。',
                summary: '搶1分 / 自由(?)',
                imagePath: '/images/pudding_spy.png',
                hex: '#ecfeff'
            },
            {
                id: 'pudding-prince',
                name: '布丁王子',
                count: 1,
                value: '王子',
                faction: 'princess',
                factionSymbol: '❤️',
                factionColor: '#ef4444',
                effect: '【提問者】每回合負責向其他玩家詢問問題，並猜測誰是布丁公主。若猜對布丁公主位置，獲得 2 分焦糖。',
                summary: '答對2分 / 提問者',
                imagePath: '/images/pudding_prince.png',
                hex: '#fef9c3'
            }
        ],
        rules: [
            {
                title: "遊戲目標",
                desc: "率先獲得 7 分以上焦糖的玩家贏得遊戲勝利！"
            },
            {
                title: "提問流程",
                desc: "布丁王子閉眼，其他人互看角色確認布丁公主位置。布丁王子睜眼，每回合對每位玩家提問 1 個指定問題。"
            },
            {
                title: "合法問題",
                desc: "布丁王子限問三種問題之一：\n1. 布丁公主在哪裡？\n2. 你是誰？\n3. 某玩家的角色是誰？"
            },
            {
                title: "回答限制",
                desc: "回答時依據自身角色右上角回答規則回覆：\n- T (實話)：必須誠實回答\n- F (說謊)：回答必須與事實相反\n- ? (自由)：自由選擇說實話或謊話"
            }
        ]
    }
};
