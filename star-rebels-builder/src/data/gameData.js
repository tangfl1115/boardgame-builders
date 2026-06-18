export const versions = {
    'star-rebels': {
        id: 'star-rebels',
        name: "星際反叛軍 (15張)",
        title: "星際反叛軍 (Star Rebels)",
        themeName: "星際對決",
        referenceGame: "政變 (Coup)",
        description: "在帝國殘酷統治的星系中，反叛軍各派系正暗中爭奪領導權。玩家必須隱藏身分，利用各種能力消滅對手。",
        cardBorder: "#1e293b", // Slate 800
        backBorder: "#0f172a", // Slate 900
        cards: [
            {
                id: 'role-1',
                value: 3, // count is 3 copies
                name: "軍閥",
                count: 3,
                summary: "拿 3 點能源 / 阻擋偷竊",
                effect: "【行動】獲得 3 點能源石（需宣稱擁有此角色，無人質疑時執行）。\n【被動】阻擋任何走私客對你進行的偷竊。",
                flavorText: "「在混亂的星際邊界，武力是唯一的法律。」",
                imagePath: '/images/warlord.png',
                hex: '#b91c1c' // red-700
            },
            {
                id: 'role-2',
                value: 3,
                name: "影子刺客",
                count: 3,
                summary: "支付 3 點能源刺殺對手",
                effect: "【行動】支付 3 點能源石並指定一名玩家，使其失去一張角色牌（被刺殺者可由護衛阻擋）。",
                flavorText: "「刀刃無聲，身影無形，致命於眨眼之間。」",
                imagePath: '/images/shadow_blade.png',
                hex: '#475569' // slate-600
            },
            {
                id: 'role-3',
                value: 3,
                name: "走私客",
                count: 3,
                summary: "偷 2 點能源 / 阻擋偷竊",
                effect: "【行動】偷取另一名玩家 2 點能源石（可被對方的走私客或解碼駭客阻擋）。\n【被動】阻擋別的玩家對你進行的偷竊。",
                flavorText: "「只要能源石給得夠多，邊境的封鎖線形同虛設。」",
                imagePath: '/images/smuggler.png',
                hex: '#d97706' // amber-600
            },
            {
                id: 'role-4',
                value: 3,
                name: "解碼駭客",
                count: 3,
                summary: "抽換 2 張手牌 / 阻擋偷竊",
                effect: "【行動】從角色牌庫抽取 2 張牌，與自己的一至二張手牌交換，多餘牌洗回牌庫。\n【被動】阻擋走私客的偷竊。",
                flavorText: "「代碼是我的武器，信息才是真正的貨幣。」",
                imagePath: '/images/cypher.png',
                hex: '#059669' // emerald-600
            },
            {
                id: 'role-5',
                value: 3,
                name: "合金盾衛",
                count: 3,
                summary: "阻擋影子刺客的暗殺",
                effect: "【被動】當有玩家對你發動刺殺時，你可以宣稱擁有此角色，完全阻擋該次刺殺行動。",
                flavorText: "「無論多強的能量射線，都無法穿透這面防線。」",
                imagePath: '/images/sentinel.png',
                hex: '#2563eb' // blue-600
            }
        ],
        rules: [
            {
                title: "遊戲目標",
                desc: "消滅所有對手的角色牌，成為星系中存活到最後的唯一勢力！"
            },
            {
                title: "起始準備",
                desc: "洗勻 15 張角色牌，每人發 2 張作為手牌（暗蓋）。每人分得 2 點能源石。"
            },
            {
                title: "回合行動",
                desc: "輪到你時可執行一項行動：\n1. 收入：拿 1 點能源。\n2. 援助：拿 2 點能源（可被軍閥阻擋）。\n3. 政變：花 7 點能源，強制一名玩家失去一張角色牌（不可阻擋）。\n4. 角色能力：宣稱擁有某個角色並執行其能力。"
            },
            {
                title: "質疑與阻擋",
                desc: "1. 質疑：任何人可對執行角色能力的人提出質疑。若質疑成功，吹牛者失去一張手牌；若質疑失敗，質疑者失去一張手牌。\n2. 阻擋：某些角色能阻擋對手的行動，對手也可以質疑你的阻擋。"
            }
        ]
    }
};
