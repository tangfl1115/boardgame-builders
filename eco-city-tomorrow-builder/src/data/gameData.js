export const versions = {
    'eco-city-tomorrow': {
        id: 'eco-city-tomorrow',
        name: "明日綠色都市 (18張)",
        title: "明日綠色都市 (Eco-City Tomorrow)",
        themeName: "綠色都市",
        referenceGame: "擴建都市 (Sprawlopolis)",
        description: "玩家扮演城市規劃師小組，要共同建設一座環保、高效的未來綠色都市。合理利用 18 張雙面卡牌來獲得最高評分！",
        cardBorder: "#059669", // Emerald 600
        backBorder: "#064e3b", // Emerald 900
        cards: [
            {
                id: 'dist-1',
                value: 1,
                name: "科技園區",
                count: 1,
                summary: "商業/商業/公園/住宅",
                effect: "【背面目標】商業連線：最大的一個科技商業區塊，每個街區獲得 2 分。",
                flavorText: "「將科技與綠意結合的示範園區，吸引了大量新創公司。」",
                imagePath: '/images/commercial.png',
                hex: '#3b82f6'
            },
            {
                id: 'dist-2',
                value: 2,
                name: "濱水別墅",
                count: 1,
                summary: "住宅/住宅/公園/公園",
                effect: "【背面目標】綠色住宅：每個與生態公園相鄰的綠色住宅街區獲得 1.5 分。",
                flavorText: "「推開窗戶就是大片綠地，是市民最嚮往的宜居之所。」",
                imagePath: '/images/residential.png',
                hex: '#eab308'
            },
            {
                id: 'dist-3',
                value: 3,
                name: "垃圾回收廠",
                count: 1,
                summary: "工業/工業/住宅/商業",
                effect: "【背面目標】循環經濟：每個與住宅或商業相鄰的循環工業街區獲得 2 分，但若相鄰公園則 -1 分。",
                flavorText: "「高效的廢棄物就地轉化設施，為城市提供源源不絕的再生電力。」",
                imagePath: '/images/industrial.png',
                hex: '#64748b'
            },
            {
                id: 'dist-4',
                value: 4,
                name: "中央公園",
                count: 1,
                summary: "公園/公園/公園/住宅",
                effect: "【背面目標】城市綠肺：生態公園區塊中沒有道路穿過時，每個生態公園街區獲得 2 分。",
                flavorText: "「城市的呼吸之所，市民在午後常在此悠閒地散步與野餐。」",
                imagePath: '/images/park.png',
                hex: '#22c55e'
            },
            {
                id: 'dist-5',
                value: 5,
                name: "商貿中心",
                count: 1,
                summary: "商業/商業/住宅/住宅",
                effect: "【背面目標】人潮聚集：每個與商業街區相連的住宅街區獲得 1 分。",
                flavorText: "「購物中心與住宅大樓一體化設計，提供了極高的生活便利性。」",
                imagePath: '/images/commercial.png',
                hex: '#3b82f6'
            },
            {
                id: 'dist-6',
                value: 6,
                name: "環保輕工業",
                count: 1,
                summary: "工業/工業/公園/公園",
                effect: "【背面目標】綠色生產：如果循環工業與生態公園完全相鄰，該工業區塊獲得 4 分。",
                flavorText: "「使用零排放技術的製造工廠，與周邊的林地和諧共存。」",
                imagePath: '/images/industrial.png',
                hex: '#64748b'
            },
            {
                id: 'dist-7',
                value: 7,
                name: "青年公寓",
                count: 1,
                summary: "住宅/住宅/商業/工業",
                effect: "【背面目標】職住平衡：住宅區與商業區、工業區均相鄰時，該住宅街區獲得 3 分。",
                flavorText: "「租金低廉且交通便利的公寓，是年輕上班族首選的落腳點。」",
                imagePath: '/images/residential.png',
                hex: '#eab308'
            },
            {
                id: 'dist-8',
                value: 8,
                name: "湖畔濕地",
                count: 1,
                summary: "公園/公園/住宅/商業",
                effect: "【背面目標】親水公園：環繞湖泊的生態公園，每個相鄰的街區獲得 1 分。",
                flavorText: "「保留自然濕地建成的生態公園，是多種鳥類的棲息地。」",
                imagePath: '/images/park.png',
                hex: '#22c55e'
            },
            {
                id: 'dist-9',
                value: 9,
                name: "高鐵樞紐",
                count: 1,
                summary: "商業/商業/工業/工業",
                effect: "【背面目標】物流樞紐：商業街區與工業街區相連，每條連接道路獲得 2 分。",
                flavorText: "「高效的軌道交通樞紐，每日有數十萬噸物資和旅客在此轉運。」",
                imagePath: '/images/commercial.png',
                hex: '#3b82f6'
            },
            {
                id: 'dist-10',
                value: 10,
                name: "社區文體中心",
                count: 1,
                summary: "住宅/住宅/公園/商業",
                effect: "【背面目標】活力社區：生態公園與商業、住宅三者相連的街區獲得 3 分。",
                flavorText: "「設有圖書館、體育館與零售商店的綜合大樓，是社區活動的中心。」",
                imagePath: '/images/residential.png',
                hex: '#eab308'
            },
            {
                id: 'dist-11',
                value: 11,
                name: "重工業基地",
                count: 1,
                summary: "工業/工業/工業/商業",
                effect: "【背面目標】產業叢集：最大的一個循環工業區塊，每個街區獲得 2.5 分。",
                flavorText: "「集中的大型製造業園區，為都市提供了核心的經濟支柱。」",
                imagePath: '/images/industrial.png',
                hex: '#64748b'
            },
            {
                id: 'dist-12',
                value: 12,
                name: "森林康養中心",
                count: 1,
                summary: "公園/公園/住宅/工業",
                effect: "【背面目標】森林康養：生態公園遠離工業區（相隔 2 格以上），獲得 5 分。",
                flavorText: "「建在森林深處的療養院，空氣清新，遠離一切工業污染。」",
                imagePath: '/images/park.png',
                hex: '#22c55e'
            },
            {
                id: 'dist-13',
                value: 13,
                name: "商務辦公樓",
                count: 1,
                summary: "商業/商業/公園/工業",
                effect: "【背面目標】立體綠化：在高聳的辦公樓樓頂建有綠色植被，每個辦公樓街區獲得 2 分。",
                flavorText: "「摩天大樓外牆覆蓋著綠色藤蔓，實現了建築與自然的融合。」",
                imagePath: '/images/commercial.png',
                hex: '#3b82f6'
            },
            {
                id: 'dist-14',
                value: 14,
                name: "花園住宅",
                count: 1,
                summary: "住宅/住宅/住宅/公園",
                effect: "【背面目標】溫馨花園：住宅區塊被公園完全包圍時，該住宅街區獲得 4 分。",
                flavorText: "「每戶住宅都配有獨立的私人花園，環境優美靜謐。」",
                imagePath: '/images/residential.png',
                hex: '#eab308'
            },
            {
                id: 'dist-15',
                value: 15,
                name: "淨水處理廠",
                count: 1,
                summary: "工業/工業/住宅/住宅",
                effect: "【背面目標】水質安全：淨水廠與住宅區相連，保證市民飲水安全，獲得 3 分。",
                flavorText: "「採用最先進的生物膜淨水技術，為全城提供純淨的自來水。」",
                imagePath: '/images/industrial.png',
                hex: '#64748b'
            },
            {
                id: 'dist-16',
                value: 16,
                name: "野生動物通道",
                count: 1,
                summary: "公園/公園/工業/商業",
                effect: "【背面目標】生態廊道：橫跨道路的綠色生態廊道，每個相連的公園獲得 2 分。",
                flavorText: "「在高速公路上方鋪設的綠色通道，供野生動物安全遷移。」",
                imagePath: '/images/park.png',
                hex: '#22c55e'
            },
            {
                id: 'dist-17',
                value: 17,
                name: "低碳智慧社區",
                count: 1,
                summary: "住宅/住宅/住宅/商業",
                effect: "【背面目標】低碳生活：最大的一個綠色住宅區塊，每個街區獲得 2 分。",
                flavorText: "「全面覆蓋太陽能光伏板，實現零碳排放的環保智慧社區。」",
                imagePath: '/images/residential.png',
                hex: '#eab308'
            },
            {
                id: 'dist-18',
                value: 18,
                name: "防風林帶",
                count: 1,
                summary: "公園/公園/公園/工業",
                effect: "【背面目標】綠色屏障：圍繞循環工業區的生態防風林帶，每段林帶獲得 3 分。",
                flavorText: "「在工業區邊緣種植的茂密防風林，有效阻擋了噪音與粉塵擴散。」",
                imagePath: '/images/park.png',
                hex: '#22c55e'
            }
        ],
        rules: [
            {
                title: "遊戲目標",
                desc: "城市規劃師小組要共同擺放 15 張卡牌，並完成 3 張隨機計分目標，拼出得分最高的明日綠色都市！"
            },
            {
                title: "起始準備",
                desc: "洗勻 18 張卡牌。隨機抽 3 張牌（背面朝上）放在一旁，作為本次遊戲的共同計分目標。剩餘 15 張作為牌庫。"
            },
            {
                title: "擺放規則",
                desc: "從牌庫抽一張牌作為起點。玩家輪流打出卡牌，新卡牌必須至少有一個街區與場上已有的街區重疊或相鄰。"
            },
            {
                title: "計分結算",
                desc: "當 15 張卡牌全部擺放完畢後進行計分：\n1. 四種街區的最大相連區塊（商業、住宅、工業、公園）各得 1 分。\n2. 地圖上每有一條不重合的公路扣 1 分。\n3. 結算 3 張背面計分目標並加總，得分越高說明城市規劃越成功！"
            }
        ]
    }
};
