// Version: 1.0.0
// Changelog:
// - Initial creation: 殭屍逃生 (Zombie Escape)，改編自口袋殭屍 (Zombie in My Pocket)
export const versions = {
    'zombie-escape': {
        id: 'zombie-escape',
        name: '殭屍逃生 (18張)',
        title: '殭屍逃生 (Zombie Escape)',
        themeName: '隨機地圖拼接',
        referenceGame: '口袋殭屍 (Zombie in My Pocket)',
        description: '一款 1 人的生存冒險遊戲！用 9 張地圖卡拼出房屋格局，翻開 9 張事件卡應對威脅。找到出口，活著逃離殭屍！',
        cardBorder: '#14532d', // green-900
        backBorder: '#052e16', // green-950
        cards: [
            {
                id: 'map-entrance',
                value: 1,
                name: '入口玄關',
                count: 1,
                summary: '起始位置（固定）',
                effect: '【地圖牌】起始位置。\n你從這裡開始探索。\n有 2 條通道：\n北 → 客廳\n東 → 廚房',
                flavorText: '「你推開了久無人居的老屋大門，空氣中充滿了腐臭。」',
                imagePath: '/images/map_entrance.png',
                hex: '#6b7280'
            },
            {
                id: 'map-living',
                value: 2,
                name: '客廳',
                count: 1,
                summary: '地圖牌（北區）',
                effect: '【地圖牌】客廳\n有 3 條通道：\n北 → 書房\n東 → 走廊\n西 → 車庫\n翻開後放置。',
                flavorText: '「翻倒的沙發上有乾涸的血漬，電視機屏幕依然閃爍。」',
                imagePath: '/images/map_living.png',
                hex: '#78350f'
            },
            {
                id: 'map-kitchen',
                value: 3,
                name: '廚房',
                count: 1,
                summary: '地圖牌（東區）',
                effect: '【地圖牌】廚房\n有 2 條通道：\n北 → 走廊\n東 → 後院\n翻開後放置。',
                flavorText: '「廚房裡還有沒吃完的食物，但已經發臭腐爛了。」',
                imagePath: '/images/map_kitchen.png',
                hex: '#92400e'
            },
            {
                id: 'map-study',
                value: 4,
                name: '書房',
                count: 1,
                summary: '地圖牌（含物品）',
                effect: '【地圖牌 + 物品】書房\n進入時：獲得「圓鍬」\n（攻擊力 +1）\n唯一出口：南 → 客廳',
                flavorText: '「書架上擺著許多書，桌上還放著一把可以用的圓鍬。」',
                imagePath: '/images/map_study.png',
                hex: '#1e40af'
            },
            {
                id: 'map-garage',
                value: 5,
                name: '車庫',
                count: 1,
                summary: '地圖牌（含物品）',
                effect: '【地圖牌 + 物品】車庫\n進入時：獲得「汽油桶」\n（可引爆，殺死所有\n相鄰房間殭屍）\n出口：東 → 客廳',
                flavorText: '「車庫裡有輛舊車，引擎蓋下有個沒用完的汽油桶。」',
                imagePath: '/images/map_garage.png',
                hex: '#374151'
            },
            {
                id: 'map-corridor',
                value: 6,
                name: '走廊',
                count: 1,
                summary: '地圖牌（中轉）',
                effect: '【地圖牌】走廊\n四通八達！\n連接客廳、廚房、\n書房、主臥室。\n翻開後放置。',
                flavorText: '「昏暗的走廊，牆壁上有血手印……有什麼在前方移動？」',
                imagePath: '/images/map_corridor.png',
                hex: '#1c1917'
            },
            {
                id: 'map-backyard',
                value: 7,
                name: '後院',
                count: 1,
                summary: '地圖牌（放置殭屍）',
                effect: '【地圖牌 + 危機】後院\n翻開時立即放置\n2 隻殭屍！\n有出口：西 → 廚房\n注意：殭屍不可移動。',
                flavorText: '「後院的草叢裡傳來沙沙聲，接著是低沉的呻吟……」',
                imagePath: '/images/map_backyard.png',
                hex: '#166534'
            },
            {
                id: 'map-bedroom',
                value: 8,
                name: '主臥室',
                count: 1,
                summary: '地圖牌（補血）',
                effect: '【地圖牌 + 回覆】主臥室\n翻開時恢復 2 HP。\n連接：南 → 走廊\n注意：無殭屍威脅。',
                flavorText: '「床上的棉被還有人的溫度痕跡，這裡曾有人躲避過。」',
                imagePath: '/images/map_bedroom.png',
                hex: '#831843'
            },
            {
                id: 'map-exit',
                value: 9,
                name: '緊急出口',
                count: 1,
                summary: '勝利條件！找到這裡即逃生',
                effect: '【出口牌】緊急出口\n抵達此格且 HP > 0，\n立即宣布勝利逃生！\n☆ 記錄你的 HP 作為\n最終評分。',
                flavorText: '「出口的指示燈還亮著！自由就在眼前！」',
                imagePath: '/images/map_exit.png',
                hex: '#15803d'
            },
            {
                id: 'event-zombie1',
                value: 10,
                name: '殭屍出沒！',
                count: 3,
                summary: '事件牌（戰鬥）',
                effect: '【事件牌】殭屍出沒！\n普通殭屍 ATK 1\n需要戰鬥或逃跑。\n戰鬥：扣 1 HP，消滅殭屍。\n逃跑：扣 1 HP，回到上個房間。\n共 3 張。',
                flavorText: '「一隻搖搖晃晃的殭屍轉過牆角，伸出了枯瘦的手臂。」',
                imagePath: '/images/event_zombie.png',
                hex: '#166534'
            },
            {
                id: 'event-zombie2',
                value: 11,
                name: '殭屍群！',
                count: 2,
                summary: '事件牌（強力戰鬥）',
                effect: '【事件牌】殭屍群！\n3 隻殭屍同時出現！\n戰鬥扣 3 HP（或用汽油桶）。\n逃跑扣 2 HP，\n回到上個房間。\n共 2 張。',
                flavorText: '「從四面八方，聲音越來越密集——是一大群殭屍！」',
                imagePath: '/images/event_zombie_horde.png',
                hex: '#065f46'
            },
            {
                id: 'event-nothing',
                value: 12,
                name: '安全！',
                count: 2,
                summary: '事件牌（平安）',
                effect: '【事件牌】安全！\n本次進入此房間\n沒有任何威脅。\n你可以安心探索\n下一個房間。\n共 2 張。',
                flavorText: '「四下無聲，只有自己心跳聲……這次是安全的。」',
                imagePath: '/images/event_safe.png',
                hex: '#0891b2'
            },
            {
                id: 'event-find',
                value: 13,
                name: '意外發現！',
                count: 1,
                summary: '事件牌（獲得物品）',
                effect: '【事件牌】意外發現！\n在角落發現急救箱：\n恢復 3 HP！\n（最高 HP 為 10）\n共 1 張。',
                flavorText: '「牆角的箱子裡還有急救用品，真是天無絕人之路！」',
                imagePath: '/images/event_find.png',
                hex: '#dc2626'
            },
            {
                id: 'event-trap',
                value: 14,
                name: '暗中陷阱！',
                count: 1,
                summary: '事件牌（HP 懲罰）',
                effect: '【事件牌】暗中陷阱！\n不小心踩到了破玻璃：\n扣 2 HP！\n注意：可以用 DEF\n道具抵消 1 點傷害。\n共 1 張。',
                flavorText: '「玻璃碎片划破了腳掌，疼痛讓你哀嚎一聲！」',
                imagePath: '/images/event_trap.png',
                hex: '#a16207'
            }
        ],
        rules: [
            {
                title: '準備',
                desc: '地圖牌（卡牌 1-9）洗勻後疊成牌庫。事件牌（卡牌 10-14，共 10 張）單獨疊成事件庫。翻出「入口玄關」作為起始位置，HP 為 10。'
            },
            {
                title: '探索規則',
                desc: '每回合選擇一個方向移動。抵達新房間時：先翻地圖牌放置，再翻事件牌並立即執行效果。'
            },
            {
                title: '戰鬥',
                desc: '遭遇殭屍時，必須戰鬥或逃跑。\n戰鬥：按卡牌說明扣 HP，成功則消滅殭屍。\n逃跑：退回上個房間，扣 1 HP。若有武器（圓鍬），戰鬥傷害減 1。'
            },
            {
                title: '勝利/失敗',
                desc: '★ 抵達「緊急出口」且 HP > 0：成功逃生！\n○ HP 歸零：遊戲結束，被殭屍抓到了。\n最終分數 = 剩餘 HP × 10 分。'
            }
        ]
    }
};
