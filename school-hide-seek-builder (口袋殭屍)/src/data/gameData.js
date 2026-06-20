// Version: 1.1.0
// Changelog:
// - Re-themed from 殭屍逃生 (Zombie Escape) to 校園躲貓貓大王 (School Hide and Seek) for kids.
// - Updated version key to 'school-hide-seek' and rewrote all card properties and text.
export const versions = {
    'school-hide-seek': {
        id: 'school-hide-seek',
        name: '校園躲貓貓大王 (18張)',
        title: '校園躲貓貓大王 (School Hide and Seek)',
        themeName: '校園地圖拼接',
        referenceGame: '口袋殭屍 (Zombie in My Pocket)',
        description: '一款 1 人的學校捉迷藏冒險遊戲！用 9 張校園地圖卡拼出格局，翻開 9 張事件卡應對追捕者。找到終點校門，成功逃出！',
        cardBorder: '#ea580c', // orange-600
        backBorder: '#c2410c', // orange-700
        cards: [
            {
                id: 'map-classroom',
                value: 1,
                name: '班級教室',
                count: 1,
                summary: '起始位置（固定）',
                effect: '【地圖牌】起始位置。\n你從這裡開始探索。\n有 2 條通道：\n北 → 學校走廊\n東 → 圖書館',
                flavorText: '「你推開了班級教室的大門，捉迷藏冒險正式開始！」',
                imagePath: '/images/map_classroom.png',
                hex: '#f97316'
            },
            {
                id: 'map-corridor',
                value: 2,
                name: '學校走廊',
                count: 1,
                summary: '地圖牌（北區）',
                effect: '【地圖牌】學校走廊\n有 3 條通道：\n北 → 科學實驗室\n東 → 中央穿堂\n西 → 體育器材室\n翻開後放置。',
                flavorText: '「走廊兩旁排列著置物櫃，要小心轉角喔！」',
                imagePath: '/images/map_corridor.png',
                hex: '#eab308'
            },
            {
                id: 'map-library',
                value: 3,
                name: '圖書館',
                count: 1,
                summary: '地圖牌（東區）',
                effect: '【地圖牌】圖書館\n有 2 條通道：\n北 → 中央穿堂\n東 → 學校中庭\n翻開後放置。',
                flavorText: '「安靜的圖書館裡書香四溢，但高大書架後面好像有人？」',
                imagePath: '/images/map_library.png',
                hex: '#84cc16'
            },
            {
                id: 'map-science-lab',
                value: 4,
                name: '科學實驗室',
                count: 1,
                summary: '地圖牌（含物品）',
                effect: '【地圖牌 + 物品】科學實驗室\n進入時：獲得「閃光手電筒」\n（遭遇關主時，體力消耗 -1）\n唯一出口：南 → 學校走廊',
                flavorText: '「實驗桌上放著各種儀器，角落有一支好用的手電筒。」',
                imagePath: '/images/map_science_lab.png',
                hex: '#06b6d4'
            },
            {
                id: 'map-gym-store',
                value: 5,
                name: '體育器材室',
                count: 1,
                summary: '地圖牌（含物品）',
                effect: '【地圖牌 + 物品】體育器材室\n進入時：獲得「聲東擊西大喇叭」\n（可使用一次，引開\n所有相鄰區域的關主）\n出口：東 → 學校走廊',
                flavorText: '「器材室的跳箱旁，放著一個紅色的手提大喇叭！」',
                imagePath: '/images/map_gym_store.png',
                hex: '#3b82f6'
            },
            {
                id: 'map-hallway',
                value: 6,
                name: '中央穿堂',
                count: 1,
                summary: '地圖牌（中轉）',
                effect: '【地圖牌】中央穿堂\n四通八達！\n連接走廊、圖書館、\n科學實驗室、保健室。\n翻開後放置。',
                flavorText: '「穿堂路標指向各個方向，想清楚走哪一條路了嗎？」',
                imagePath: '/images/map_hallway.png',
                hex: '#6366f1'
            },
            {
                id: 'map-courtyard',
                value: 7,
                name: '學校中庭',
                count: 1,
                summary: '地圖牌（放置關主）',
                effect: '【地圖牌 + 危機】學校中庭\n翻開時立即放置\n2 位關主！\n有出口：西 → 圖書館\n注意：關主不可移動。',
                flavorText: '「陽光照在中庭的花草上，但樹叢後站著兩位關主！」',
                imagePath: '/images/map_courtyard.png',
                hex: '#10b981'
            },
            {
                id: 'map-health-center',
                value: 8,
                name: '保健室',
                count: 1,
                summary: '地圖牌（補體力）',
                effect: '【地圖牌 + 回覆】保健室\n翻開時恢復 2 體力。\n連接：南 → 中央穿堂\n注意：無關主威脅。',
                flavorText: '「乾淨的床上放著柔軟被子，先在這裡休息一下吧。」',
                imagePath: '/images/map_health_center.png',
                hex: '#ec4899'
            },
            {
                id: 'map-school-gate',
                value: 9,
                name: '終點校門',
                count: 1,
                summary: '勝利條件！到達即逃生',
                effect: '【終點牌】終點校門\n抵達此格且體力 > 0，\n立即獲得躲貓貓大王勝利！\n☆ 記錄你的體力作為\n最終評分。',
                flavorText: '「校門就在前方，自由和勝利屬於你！」',
                imagePath: '/images/map_school_gate.png',
                hex: '#22c55e'
            },
            {
                id: 'event-seeker1',
                value: 10,
                name: '關主出沒！',
                count: 3,
                summary: '事件牌（體力挑戰）',
                effect: '【事件牌】關主出沒！\n關主捉捕力 1。\n需突破或退避。\n突破：扣 1 體力，成功躲過。\n退避：扣 1 體力，退回上個房間。\n共 3 張。',
                flavorText: '「『抓到你了！』關主從置物櫃後面跳了出來！」',
                imagePath: '/images/event_seeker.png',
                hex: '#a855f7'
            },
            {
                id: 'event-seeker2',
                value: 11,
                name: '捉迷藏包圍網！',
                count: 2,
                summary: '事件牌（強力挑戰）',
                effect: '【事件牌】包圍網！\n3 位小隊隊員手拉手圍過來！\n突破扣 3 體力（或用喇叭）。\n退避扣 2 體力，\n退回上個房間。\n共 2 張。',
                flavorText: '「前後都有人！抓人小隊正逐步縮小包圍圈！」',
                imagePath: '/images/event_seeker_squad.png',
                hex: '#ef4444'
            },
            {
                id: 'event-nothing',
                value: 12,
                name: '安全躲藏點！',
                count: 2,
                summary: '事件牌（平安）',
                effect: '【事件牌】安全！\n進入此房間安全無虞，\n沒有關主巡邏。\n你可以安心規劃\n下一個目的地。\n共 2 張。',
                flavorText: '「成功躲在課桌下，暫時沒有人注意到這個角落。」',
                imagePath: '/images/event_safe.png',
                hex: '#14b8a6'
            },
            {
                id: 'event-find',
                value: 13,
                name: '運動飲料！',
                count: 1,
                summary: '事件牌（體力回復）',
                effect: '【事件牌】運動飲料！\n在角落發現一瓶飲料：\n恢復 3 體力！\n（上限為 10 體力）\n共 1 張。',
                flavorText: '「這瓶運動飲料來得正是時候，體力瞬間補滿！」',
                imagePath: '/images/event_energy_drink.png',
                hex: '#f97316'
            },
            {
                id: 'event-trap',
                value: 14,
                name: '濕滑地板！',
                count: 1,
                summary: '事件牌（體力消耗）',
                effect: '【事件牌】濕滑地板！\n不小心滑倒摔了一跤：\n扣 2 體力！\n注意：可以用防滑鞋（目前無）\n折抵體力消耗。\n共 1 張。',
                flavorText: '「地板剛拖好太滑了，哎呀一聲滑了一大跤！」',
                imagePath: '/images/event_slippery_floor.png',
                hex: '#f59e0b'
            }
        ],
        rules: [
            {
                title: '準備',
                desc: '地圖牌（卡牌 1-9）洗勻後疊成地圖庫。事件牌（卡牌 10-14，共 10 張）單獨疊成事件庫。翻出「班級教室」作為起始位置，體力值為 10。'
            },
            {
                title: '探索規則',
                desc: '每回合選擇一個方向移動。抵達新房間時：先翻地圖牌放置，再翻事件牌並立即執行效果。'
            },
            {
                title: '追捕挑戰',
                desc: '遭遇關主或小隊時，必須選擇突破或退避。\n突破：按卡牌說明扣體力值，成功則躲過。\n退避：退回上個房間，扣對應體力值。若有「閃光手電筒」，突破體力消耗 -1。'
            },
            {
                title: '勝利/失敗',
                desc: '★ 抵達「終點校門」且體力值 > 0：成為躲貓貓大王！\n○ 體力值歸零：挑戰失敗，被關主抓到了。\n最終分數 = 剩餘體力 × 10 分。'
            }
        ]
    }
};
