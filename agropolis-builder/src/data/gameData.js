// Version: 1.0.0
// Changelog:
// - Initial creation: 農場奇境 (Farm Wonderland)，改編自農業都市 (Agropolis)
export const versions = {
    'farm-wonderland': {
        id: 'farm-wonderland',
        name: '農場奇境 (18張)',
        title: '農場奇境 (Farm Wonderland)',
        themeName: '農場拼城',
        referenceGame: '農業都市 (Agropolis)',
        description: '一款 1-4 人的合作拼圖遊戲！大家一起規劃農場版圖，讓作物、牧場、果樹、池塘和諧共存，挑戰達成最高分！',
        cardBorder: '#b45309', // amber-700
        backBorder: '#78350f', // amber-900
        cards: [
            {
                id: 'farm-1',
                value: 1,
                name: '金黃麥田',
                count: 1,
                summary: '作物/作物/牧場/池塘',
                effect: '【背面目標】麥浪滾滾：最大的連續作物區，每塊獲 2 分。',
                flavorText: '「風吹過時，整片金黃麥穗如海浪般起伏。」',
                imagePath: '/images/farm_wheat.png',
                hex: '#f59e0b'
            },
            {
                id: 'farm-2',
                value: 2,
                name: '蘋果果園',
                count: 1,
                summary: '果樹/果樹/作物/牧場',
                effect: '【背面目標】豐收滿載：每個與作物相鄰的果樹塊獲 1.5 分。',
                flavorText: '「每到秋天，枝頭掛滿了紅潤飽滿的蘋果。」',
                imagePath: '/images/farm_orchard.png',
                hex: '#ef4444'
            },
            {
                id: 'farm-3',
                value: 3,
                name: '乳牛牧場',
                count: 1,
                summary: '牧場/牧場/作物/果樹',
                effect: '【背面目標】牛奶飄香：牧場完全被圍欄包圍（無對外道路），獲 5 分。',
                flavorText: '「悠閒吃草的乳牛是農場裡最可愛的居民。」',
                imagePath: '/images/farm_pasture.png',
                hex: '#6b7280'
            },
            {
                id: 'farm-4',
                value: 4,
                name: '荷花池塘',
                count: 1,
                summary: '池塘/池塘/池塘/作物',
                effect: '【背面目標】碧波蕩漾：池塘區不被任何道路分割，每塊獲 2 分。',
                flavorText: '「清澈的池水倒映著藍天，荷花盛開在夏日正午。」',
                imagePath: '/images/farm_pond.png',
                hex: '#0284c7'
            },
            {
                id: 'farm-5',
                value: 5,
                name: '南瓜田',
                count: 1,
                summary: '作物/作物/果樹/果樹',
                effect: '【背面目標】橙海連連：每個與果樹相鄰的作物塊獲 1 分。',
                flavorText: '「一顆顆飽滿的南瓜躺在田間，等待採收。」',
                imagePath: '/images/farm_wheat.png',
                hex: '#ea580c'
            },
            {
                id: 'farm-6',
                value: 6,
                name: '羊咩牧場',
                count: 1,
                summary: '牧場/牧場/池塘/池塘',
                effect: '【背面目標】草地共生：如果牧場與池塘完全相鄰，獲 4 分。',
                flavorText: '「羊群在牧場上安靜地吃草，偶爾向池邊走去喝水。」',
                imagePath: '/images/farm_pasture.png',
                hex: '#6b7280'
            },
            {
                id: 'farm-7',
                value: 7,
                name: '桃子樹林',
                count: 1,
                summary: '果樹/果樹/牧場/作物',
                effect: '【背面目標】桃源深處：果樹與牧場、作物均相鄰，獲 3 分。',
                flavorText: '「粉嫩的桃花開盡後，掛滿了水蜜桃。」',
                imagePath: '/images/farm_orchard.png',
                hex: '#f472b6'
            },
            {
                id: 'farm-8',
                value: 8,
                name: '荷蘭風車',
                count: 1,
                summary: '池塘/池塘/作物/牧場',
                effect: '【背面目標】風車水利：池塘旁每個相鄰的作物塊獲 1 分。',
                flavorText: '「古典風車轉動著，將水引入四周的農田。」',
                imagePath: '/images/farm_pond.png',
                hex: '#0284c7'
            },
            {
                id: 'farm-9',
                value: 9,
                name: '有機溫室',
                count: 1,
                summary: '作物/作物/作物/果樹',
                effect: '【背面目標】玻璃森林：最大作物區塊，每塊獲 2.5 分。',
                flavorText: '「透明玻璃溫室裡四季如春，作物全年不斷。」',
                imagePath: '/images/farm_wheat.png',
                hex: '#22c55e'
            },
            {
                id: 'farm-10',
                value: 10,
                name: '農莊集市',
                count: 1,
                summary: '牧場/牧場/作物/池塘',
                effect: '【背面目標】三區交匯：牧場、作物、池塘三者相鄰的塊獲 3 分。',
                flavorText: '「農莊集市每週日開放，農民帶來各自的農產品。」',
                imagePath: '/images/farm_pasture.png',
                hex: '#a16207'
            },
            {
                id: 'farm-11',
                value: 11,
                name: '橘子大道',
                count: 1,
                summary: '果樹/果樹/果樹/作物',
                effect: '【背面目標】柑橘聚落：最大果樹連續區，每塊獲 2.5 分。',
                flavorText: '「金橘色的大道，是農場最熱鬧的觀光路線。」',
                imagePath: '/images/farm_orchard.png',
                hex: '#f97316'
            },
            {
                id: 'farm-12',
                value: 12,
                name: '鷺鷥濕地',
                count: 1,
                summary: '池塘/池塘/牧場/果樹',
                effect: '【背面目標】野鳥棲地：池塘遠離牧場（相隔 2 塊以上），獲 5 分。',
                flavorText: '「濕地是白鷺鷥的天堂，每天黃昏都有大群飛回。」',
                imagePath: '/images/farm_pond.png',
                hex: '#0891b2'
            },
            {
                id: 'farm-13',
                value: 13,
                name: '草莓花圃',
                count: 1,
                summary: '果樹/果樹/池塘/作物',
                effect: '【背面目標】立體農法：果樹區旁有池塘相鄰，每塊果樹獲 2 分。',
                flavorText: '「沿著小丘的坡面種滿了草莓，是農場的招牌。」',
                imagePath: '/images/farm_orchard.png',
                hex: '#db2777'
            },
            {
                id: 'farm-14',
                value: 14,
                name: '圍欄牧場',
                count: 1,
                summary: '牧場/牧場/牧場/池塘',
                effect: '【背面目標】圍欄完整：牧場區被四周完整包圍，獲 4 分。',
                flavorText: '「高高的木頭圍欄把整片牧場圍得嚴嚴實實。」',
                imagePath: '/images/farm_pasture.png',
                hex: '#78350f'
            },
            {
                id: 'farm-15',
                value: 15,
                name: '灌溉水渠',
                count: 1,
                summary: '池塘/池塘/作物/作物',
                effect: '【背面目標】澆灌豐田：水渠（池塘）與作物相連，保證豐收，獲 3 分。',
                flavorText: '「蜿蜒的水渠把山泉水引到每一塊農田。」',
                imagePath: '/images/farm_pond.png',
                hex: '#0369a1'
            },
            {
                id: 'farm-16',
                value: 16,
                name: '野生草坡',
                count: 1,
                summary: '牧場/牧場/果樹/作物',
                effect: '【背面目標】綠色通道：橫越道路的草坡，每個相鄰牧場獲 2 分。',
                flavorText: '「未被開墾的野草坡是動物自由奔跑的地方。」',
                imagePath: '/images/farm_pasture.png',
                hex: '#65a30d'
            },
            {
                id: 'farm-17',
                value: 17,
                name: '有機穀倉',
                count: 1,
                summary: '作物/作物/作物/牧場',
                effect: '【背面目標】豐收儲備：最大作物連續區，每塊獲 2 分。',
                flavorText: '「紅色的穀倉存放著整個農場的糧食收成。」',
                imagePath: '/images/farm_wheat.png',
                hex: '#dc2626'
            },
            {
                id: 'farm-18',
                value: 18,
                name: '防護林帶',
                count: 1,
                summary: '果樹/果樹/果樹/牧場',
                effect: '【背面目標】防風屏障：圍繞牧場的果樹林帶，每段獲 3 分。',
                flavorText: '「農場邊緣種植的高大喬木，保護農田免受風害。」',
                imagePath: '/images/farm_orchard.png',
                hex: '#15803d'
            }
        ],
        rules: [
            {
                title: '遊戲目標',
                desc: '農場規劃師小組共同擺放 15 張卡牌，完成 3 張隨機計分目標，建設得分最高的農場奇境！'
            },
            {
                title: '起始準備',
                desc: '洗勻 18 張卡牌。隨機抽 3 張牌（背面朝上）放在一旁，作為本次遊戲的共同計分目標。剩餘 15 張作為牌庫。'
            },
            {
                title: '擺放規則',
                desc: '從牌庫抽一張牌作為起點。玩家輪流打出卡牌，新卡牌必須至少有一個區塊與場上已有的區塊重疊或相鄰。'
            },
            {
                title: '計分結算',
                desc: '當 15 張卡牌全部擺放完畢後進行計分：\n1. 四種區塊（作物、牧場、果樹、池塘）最大連續區各得 1 分。\n2. 地圖上每有一條不重合的農道扣 1 分。\n3. 結算 3 張背面計分目標，得分越高說明農場越成功！'
            }
        ]
    }
};
