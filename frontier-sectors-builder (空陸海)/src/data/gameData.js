export const versions = {
    'frontier-sectors': {
        id: 'frontier-sectors',
        name: "星際邊境戰 (18張)",
        title: "星際邊境戰 (Frontier Sectors)",
        themeName: "星際對決",
        referenceGame: "空陸海 (Air, Land & Sea)",
        description: "兩個星際聯邦在邊界的三個星區展開對峙，調遣主力艦、戰機與步兵爭奪控制權。",
        cardBorder: "#3b82f6", // Blue
        backBorder: "#1e3a8a", // Dark Blue
        cards: [
            // 太空軌道 (Orbit) [Air]
            {
                id: 'orb-1',
                value: 1,
                name: "太空支援",
                count: 1,
                summary: "相鄰戰區獲得 +3 戰力",
                effect: "【持續】你在相鄰的「行星地表」戰區獲得 +3 戰力。",
                flavorText: "「從軌道降下的火力支援，是地表守軍最大的護盾。」",
                imagePath: '/images/rank1.png',
                hex: '#475569' // slate-600
            },
            {
                id: 'orb-2',
                value: 2,
                name: "戰術折躍",
                count: 1,
                summary: "下回合可部署至非匹配戰區",
                effect: "【即時】在你的下一個回合，你可將一張卡牌部署於非匹配的戰區（例如將地表卡部署在軌道或深海）。",
                flavorText: "「利用空間折躍，將軍隊直接傳送到最脆弱的邊界。」",
                imagePath: '/images/rank2.png',
                hex: '#475569'
            },
            {
                id: 'orb-3',
                value: 3,
                name: "軌道機動",
                count: 1,
                summary: "翻面相鄰戰區的一張卡牌",
                effect: "【即時】選擇相鄰「行星地表」戰區的一張未被覆蓋的卡牌，將其翻面（蓋著的翻開，或開著的蓋上）。",
                flavorText: "「變更軌道角度，對目標區域進行精確干涉。」",
                imagePath: '/images/rank3.png',
                hex: '#475569'
            },
            {
                id: 'orb-4',
                value: 4,
                name: "軌道轟炸",
                count: 1,
                summary: "被覆蓋卡牌戰力變為 4",
                effect: "【持續】被此卡覆蓋的所有卡牌（無論敵我，包括已開或暗蓋）戰力數值均變為 4。",
                flavorText: "「無差別的重力轟炸，將戰場上的所有武裝強制均等化。」",
                imagePath: '/images/rank4.png',
                hex: '#475569'
            },
            {
                id: 'orb-5',
                value: 5,
                name: "訊號干擾",
                count: 1,
                summary: "對手翻面 1 張，接著你翻面 1 張",
                effect: "【即時】對手必須選擇其 1 張未覆蓋卡牌翻面；接著你選擇你的 1 張未覆蓋卡牌翻面。",
                flavorText: "「強烈的電磁雜音充斥通訊頻道，雙方的指揮系統陷入短暫混亂。」",
                imagePath: '/images/rank5.png',
                hex: '#475569'
            },
            {
                id: 'orb-6',
                value: 6,
                name: "無畏旗艦",
                count: 1,
                summary: "無特殊能力",
                effect: "（此卡無特殊能力，僅提供 6 點強大戰力。）",
                flavorText: "「聯邦的終極決戰兵器，僅僅是出現在天際就能帶來巨大的威壓。」",
                imagePath: '/images/rank6.png',
                hex: '#475569'
            },
            // 行星地表 (Surface) [Land]
            {
                id: 'sur-1',
                value: 1,
                name: "前線基地",
                count: 1,
                summary: "戰力 3 以下可部署至非匹配戰區",
                effect: "【持續】你可將戰力數值為 1, 2, 3 的卡牌部署於非匹配的戰區中。",
                flavorText: "「建立補給線後，陸戰部隊也能搭乘穿梭機跨區域支援。」",
                imagePath: '/images/rank1.png',
                hex: '#047857' // emerald-750
            },
            {
                id: 'sur-2',
                value: 2,
                name: "地表伏擊",
                count: 1,
                summary: "翻面任一戰區的一張卡牌",
                effect: "【即時】選擇任一戰區的一張未被覆蓋的卡牌，將其翻面（蓋著的翻開，或開著的蓋上）。",
                flavorText: "「埋伏於地表的隱形地雷與游擊隊，能在關鍵時刻扭轉局勢。」",
                imagePath: '/images/rank2.png',
                hex: '#047857'
            },
            {
                id: 'sur-3',
                value: 3,
                name: "裝甲機動",
                count: 1,
                summary: "翻面相鄰戰區的一張卡牌",
                effect: "【即時】選擇相鄰「太空軌道」或「深海基地」戰區的一張未被覆蓋的卡牌，將其翻面。",
                flavorText: "「快速移動的履帶裝甲群，對側翼星區展開突襲。」",
                imagePath: '/images/rank3.png',
                hex: '#047857'
            },
            {
                id: 'sur-4',
                value: 4,
                name: "要塞重砲",
                count: 1,
                summary: "被覆蓋卡牌戰力變為 4",
                effect: "【持續】被此卡覆蓋的所有卡牌（無論敵我，包括已開或暗蓋）戰力數值均變為 4。",
                flavorText: "「巨大的要塞防禦砲，將下方的交戰區域完全封鎖。」",
                imagePath: '/images/rank4.png',
                hex: '#047857'
            },
            {
                id: 'sur-5',
                value: 5,
                name: "全面封鎖",
                count: 1,
                summary: "部署暗蓋卡牌時立刻被棄置",
                effect: "【持續】若有任何玩家在此戰區或其他戰區部署暗蓋卡牌（Improvise），該卡牌立刻被棄置。",
                flavorText: "「全波段掃描已開啟，任何試圖隱形的單位都將無所遁形。」",
                imagePath: '/images/rank5.png',
                hex: '#047857'
            },
            {
                id: 'sur-6',
                value: 6,
                name: "超重型機甲",
                count: 1,
                summary: "無特殊能力",
                effect: "（此卡無特殊能力，僅提供 6 點強大戰力。）",
                flavorText: "「踏碎大地的鋼鐵巨獸，它的每一步都是地震。」",
                imagePath: '/images/rank6.png',
                hex: '#047857'
            },
            // 深海基地 (Abyss) [Sea]
            {
                id: 'aby-1',
                value: 1,
                name: "戰術轉移",
                count: 1,
                summary: "移動 1 張卡牌至另一個戰區",
                effect: "【即時】將你的一張卡牌（無論已開或暗蓋，且不可是被覆蓋的卡牌）移動至另一個戰區。",
                flavorText: "「利用深海洋流與潛艇掩護，進行部隊的隱密撤換。」",
                imagePath: '/images/rank1.png',
                hex: '#1d4ed8' // blue-700
            },
            {
                id: 'aby-2',
                value: 2,
                name: "戰事升級",
                count: 1,
                summary: "所有暗蓋卡牌戰力變為 4",
                effect: "【持續】你所有暗蓋（Improvise）的卡牌戰力數值由 2 點變為 4 點。",
                flavorText: "「在深海掩護下，即使是未探明的假動作，也能產生雙倍威脅。」",
                imagePath: '/images/rank2.png',
                hex: '#1d4ed8'
            },
            {
                id: 'aby-3',
                value: 3,
                name: "潛艇機動",
                count: 1,
                summary: "翻面相鄰戰區的一張卡牌",
                effect: "【即時】選擇相鄰「行星地表」戰區的一張未被覆蓋的卡牌，將其翻面。",
                flavorText: "「潛伏於深海的魚雷發射管，突然對地表海岸線發動打擊。」",
                imagePath: '/images/rank3.png',
                hex: '#1d4ed8'
            },
            {
                id: 'aby-4',
                value: 4,
                name: "重新部署",
                count: 1,
                summary: "收回 1 張暗蓋卡牌並獲得额外回合",
                effect: "【即時】將你的一張暗蓋卡牌收回你的手牌；若如此做，你在本回合後獲得一個額外的回合行動。",
                flavorText: "「將裝甲單位撤回，並重新制定下一波打擊計畫。」",
                imagePath: '/images/rank4.png',
                hex: '#1d4ed8'
            },
            {
                id: 'aby-5',
                value: 5,
                name: "深海阻絕",
                count: 1,
                summary: "相鄰戰區已有 3 張卡牌時新卡被棄置",
                effect: "【持續】若相鄰「行星地表」戰區包含你在內共有 3 張或更多卡牌，當有玩家在該戰區部署新卡牌時，該新卡牌立刻被棄置。",
                flavorText: "「水雷網與深水炸彈已佈滿相鄰海域，任何新進入的軍隊都將被摧毀。」",
                imagePath: '/images/rank5.png',
                hex: '#1d4ed8'
            },
            {
                id: 'aby-6',
                value: 6,
                name: "利維坦母艦",
                count: 1,
                summary: "無特殊能力",
                effect: "（此卡無特殊能力，僅提供 6 點強大戰力。）",
                flavorText: "「遊走於無光深淵的鋼鐵巨獸，是深海的無冕之王。」",
                imagePath: '/images/rank6.png',
                hex: '#1d4ed8'
            }
        ],
        rules: [
            {
                title: "遊戲目標",
                desc: "在戰區對峙結束時，在三個戰區中的至少兩個戰區取得戰力優勢，或迫使對手主動撤退，累計先獲得 12 分的玩家獲勝！"
            },
            {
                title: "戰區與擺放",
                desc: "三個戰區由左至右為：太空軌道、行星地表、深海基地。地表與軌道相鄰，地表與深海相鄰。\n每位玩家發 6 張牌作為手牌（不補牌）。"
            },
            {
                title: "回合行動",
                desc: "輪到你時可執行一項行動：\n1. 部署：將一張手牌正面朝上放在其對應的匹配戰區，執行其即時或持續能力。\n2. 即興：將任一張手牌面朝下部署在任何戰區，其戰力固定為 2 且無能力。\n3. 撤退：若自知無法獲勝，可選擇主動撤退以減少對手本輪得分。"
            },
            {
                title: "戰局判定",
                desc: "當雙方 6 張手牌皆出完，或有人撤退時進行判定。在每個戰區中，卡牌戰力總和較高者控制該戰區。控制 2 個以上戰區者贏得本輪並得分。"
            }
        ]
    }
};
