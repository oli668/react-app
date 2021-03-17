const liqours = {
  Gin: true,
  Vodka: true,
  "Lillet Blonde": true,
  "White rum": true,
  Campari: true,
  Vermouth: true,
  Kirsch: true,
  Whiskey: true,
  "Dark rum": true,
  Pisco: true,
  Tequila: true,
  "Triple Sec": true,
  Calvados: true,
  Champagne: true,
  Cognac: true,
  "Red Port": true,
  Galliano: true,
  "Cherry liqueur": true,
  Prosecco: true,
  "Créme liqueur": true,
  Drambuie: true,
  DiSaronno: true,
  Prosecco: true,
  Aperol: true,
  Cachaca: true,
  "Orange Bitters": true,
  "Ginger beer": true,
  "Apricot brandy": true,
  "Dry White Wine": true,
  "DOM Bénédictine": true,
  Absinthe: true,
  "Peach schnapps": true,
  "Raspberry liqueur": true,
  "Apricot brandy": true,
};

var cocktails = [
  {
    name: {
      en: "Vesper",
      ch: "邦女郎",
    },
    id: "aa8381956049978f0012e16421d62e54",
    taste: "",
    mood: "",
    img: "src/resources/vesper.webp",
  },
  {
    name: {
      en: "Bacardi",
      ch: "百加得",
    },
    id: "src/resources/Bacardi.webp",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Negroni",
      ch: "尼格罗尼",
    },
    id: "src/resources/Negroni.webp",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Rose",
      ch: "玫瑰",
    },
    id: "src/resources/rose.webp",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Old Fashioned",
      ch: "古典酒",
    },
    id: "src/resources/oldfashion.webp",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Tuxedo",
      ch: "燕尾服",
    },
    id: "aa8381956049978f0012e169085015c8",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Mojito",
      ch: "莫吉托",
    },
    id: "aa8381956049978f0012e16a7ec9f1a3",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Horse's Neck",
      ch: "金马颈",
    },
    id: "aa8381956049978f0012e16b6ea3763e",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Planter's Punch",
      ch: "拓荒者宾治",
    },
    id: "aa8381956049978f0012e16c7bdf742d",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Sea Breeze",
      ch: "海風",
    },
    id: "aa8381956049978f0012e16d79147119",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Pisco Sour",
      ch: "皮斯科酸酒",
    },
    id: "aa8381956049978f0012e16e5e6ed8f2",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Mimosa",
      ch: "含羞草",
    },
    id: "aa8381956049978f0012e17202d9e317",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Long Island Iced Tea",
      ch: "长岛冰茶",
    },
    id: "aa8381956049978f0012e16f02928738",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Clover Club",
      ch: "三叶草俱乐部",
    },
    id: "aa8381956049978f0012e1704a2ffb06",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Angel Face",
      ch: "天使面孔",
    },
    id: "aa8381956049978f0012e1715fb19dfe",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Whiskey Sour",
      ch: "威士忌酸",
    },
    id: "aa8381956049978f0012e1731a5dfb0e",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Screwdriver",
      ch: "螺丝刀",
    },
    id: "aa8381956049978f0012e1744eb2f4fd",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Cuba Libre",
      ch: "自由古巴",
    },
    id: "aa8381956049978f0012e17535c739d1",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Manhattan",
      ch: "曼哈顿",
    },
    id: "aa8381956049978f0012e176656572cc",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Porto Flip",
      ch: "波菲利普",
    },
    id: "aa8381956049978f0012e17701de0466",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Gin Fizz",
      ch: "金菲士",
    },
    id: "aa8381956049978f0012e1785c724bbe",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Espresso Martini",
      ch: "咖啡马天尼",
    },
    id: "aa8381956049978f0012e17927f8ad95",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Margarita",
      ch: "玛格丽塔",
    },
    id: "aa8381956049978f0012e17a7d5a4627",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "French 75",
      ch: "法75",
    },
    id: "aa8381956049978f0012e17b583f8aa0",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Yellow Bird",
      ch: "莺歌",
    },
    id: "aa8381956049978f0012e17c01d29175",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Pina Colada",
      ch: "椰林飘香",
    },
    id: "aa8381956049978f0012e17d6871917b",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Aviation",
      ch: "飞行",
    },
    id: "aa8381956049978f0012e17e2ade34ee",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Bellini",
      ch: "贝里尼",
    },
    id: "aa8381956049978f0012e17f5cf02b1a",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Grasshopper",
      ch: "绿色蚱蜢",
    },
    id: "aa8381956049978f0012e1806199f86c",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Tequila Sunrise",
      ch: "龙舌兰日出",
    },
    id: "aa8381956049978f0012e1814c5b9f46",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Daiquiri",
      ch: "戴吉利",
    },
    id: "aa8381956049978f0012e18265aa4f60",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Rusty Nail",
      ch: "锈丁",
    },
    id: "aa8381956049978f0012e1830487d253",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "B52",
      ch: "B52",
    },
    id: "aa8381956049978f0012e18401eb5a94",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Stinger",
      ch: "毒刺",
    },
    id: "aa8381956049978f0012e1851013205d",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Golden Dream",
      ch: "金色梦幻",
    },
    id: "aa8381956049978f0012e18634dcb4b1",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "God Mother",
      ch: "教母",
    },
    id: "aa8381956049978f0012e18742035fa6",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Spritz Veneziano",
      ch: "威尼斯火花",
    },
    id: "aa8381956049978f0012e1884d2a5019",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Bramble",
      ch: "荆棘",
    },
    id: "aa8381956049978f0012e18951bae424",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Alexander",
      ch: "亚历山大",
    },
    id: "aa8381956049978f0012e18a3d9aa060",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Lemon Drop Martini",
      ch: "柠檬球",
    },
    id: "aa8381956049978f0012e18b199f325c",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "French Martini",
      ch: "法式马天尼",
    },
    id: "aa8381956049978f0012e18c727264c1",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Black Russian",
      ch: "黑俄罗斯",
    },
    id: "aa8381956049978f0012e18d5ebbc620",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Bloody Mary",
      ch: "血腥玛丽",
    },
    id: "aa8381956049978f0012e18e08deece7",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Mai-tai",
      ch: "迈泰",
    },
    id: "aa8381956049978f0012e18f3e0cd28e",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Barracuda",
      ch: "梭子鱼",
    },
    id: "aa8381956049978f0012e1903965e757",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Sex on the Beach",
      ch: "性感海滩",
    },
    id: "aa8381956049978f0012e191163973c7",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Monkey Gland",
      ch: "猴上腺素",
    },
    id: "aa8381956049978f0012e1926bdd1ebd",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Derby",
      ch: "德比",
    },
    id: "aa8381956049978f0012e1936ef2c315",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Sidecar",
      ch: "边车",
    },
    id: "aa8381956049978f0012e1940ff1c29b",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Irish Coffee",
      ch: "爱尔兰咖啡",
    },
    id: "aa8381956049978f0012e19574c7be24",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Sazerac",
      ch: "萨泽拉克",
    },
    id: "aa8381956049978f0012e1964d32b81a",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Americano",
      ch: "美国佬",
    },
    id: "aa8381956049978f0012e197599b985f",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Singapore Sling",
      ch: "新加坡司令",
    },
    id: "aa8381956049978f0012e19857388ddc",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "French Connection",
      ch: "法兰西集团",
    },
    id: "aa8381956049978f0012e19955670bd3",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Moscow Mule",
      ch: "莫斯科骡子",
    },
    id: "aa8381956049978f0012e19a580d72f2",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "John Collins",
      ch: "约翰·柯林斯",
    },
    id: "aa8381956049978f0012e19b1dd17ace",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Kir",
      ch: "基尔",
    },
    id: "aa8381956049978f0012e19c19cb51c9",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Mint Julep",
      ch: "薄荷茱莉普",
    },
    id: "aa8381956049978f0012e19d00f81371",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Tommy's Margarita",
      ch: "汤米的玛格丽特",
    },
    id: "aa8381956049978f0012e19e158e39bc",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Paradise",
      ch: "天堂",
    },
    id: "aa8381956049978f0012e19f442dbf8c",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Dirty Martini",
      ch: "非凡马天尼",
    },
    id: "aa8381956049978f0012e1a0795fc1b8",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Champagne Cocktail",
      ch: "香槟鸡尾酒",
    },
    id: "aa8381956049978f0012e1a11e6d60c6",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Mary Pickford",
      ch: "玛丽皮克福德",
    },
    id: "aa8381956049978f0012e1a27e6a0736",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Hemingway Special",
      ch: "海明威得其利",
    },
    id: "aa8381956049978f0012e1a3604400b2",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Dark 'n' Stormy",
      ch: "月黑风高",
    },
    id: "aa8381956049978f0012e1a467edf62f",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Ramos Fizz",
      ch: "拉莫斯·金·菲兹",
    },
    id: "aa8381956049978f0012e1a53dae1a20",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Russian Spring Punch",
      ch: "苏醒的俄罗斯人",
    },
    id: "aa8381956049978f0012e1a65e0c4fa0",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "God Father",
      ch: "教父",
    },
    id: "aa8381956049978f0012e1a70a6629cc",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Cosmopolitan",
      ch: "大都会",
    },
    id: "aa8381956049978f0012e1a80e620576",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Dry Martini",
      ch: "干马天尼",
    },
    id: "aa8381956049978f0012e1a9685a5119",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Between the Sheets",
      ch: "间缝",
    },
    id: "aa8381956049978f0012e1aa247d55a2",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Casino",
      ch: "赌场",
    },
    id: "aa8381956049978f0012e1ab34bae55f",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Caipirinha",
      ch: "巴西卡琵莉亚",
    },
    id: "aa8381956049978f0012e1ac40a17e48",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Vampiro",
      ch: "吸血鬼",
    },
    id: "aa8381956049978f0012e1ad66aec48a",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Kamikaze",
      ch: "神风",
    },
    id: "aa8381956049978f0012e1ae6a34eac1",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "White Lady",
      ch: "白色佳人",
    },
    id: "aa8381956049978f0012e1af376f2c54",
    taste: "",
    mood: "",
    img: "",
  },
  {
    name: {
      en: "Harvey Wallbanger",
      ch: "哈维撞墙",
    },
    id: "aa8381956049978f0012e1b057e47da7",
    taste: "",
    mood: "",
    img: "",
  },
];

var cocktailsDetails = [
  {
    _id: "aa8381956049978f0012e16421d62e54",
    name: "Vesper",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 60,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 7.5,
        ingredient: "Lillet Blonde",
      },
    ],
    garnish: "Lemon twist",
    spirits: ["Gin", "Vodka", "Lillet Blonde"],
  },
  {
    _id: "aa8381956049978f0012e165747b8199",
    name: "Bacardi",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "White rum",
        label: "Bacardi White Rum",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Lime juice",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Syrup",
        label: "Grenadine",
      },
    ],
    spirits: ["White rum"],
  },
  {
    _id: "aa8381956049978f0012e1662af0eece",
    name: "Negroni",
    glass: "old-fashioned",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 30,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Campari",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Vermouth",
        label: "Sweet red vermouth",
      },
    ],
    garnish: "Half an orange slice",
    spirits: ["Gin", "Campari", "Vermouth"],
  },
  {
    _id: "aa8381956049978f0012e1676593f177",
    name: "Rose",
    glass: "martini",
    ingredients: [
      {
        unit: "ml",
        amount: 20,
        ingredient: "Kirsch",
      },
      {
        unit: "ml",
        amount: 40,
        ingredient: "Vermouth",
        label: "Dry vermouth",
      },
      {
        special: "3 dashes Strawberry syrup",
      },
    ],
    spirits: ["Kirsch", "Vermouth"],
  },
  {
    _id: "aa8381956049978f0012e1687bed1452",
    name: "Old Fashioned",
    glass: "old-fashioned",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Whiskey",
        label: "Bourbon or rye whiskey",
      },
      {
        special: "2 dashes Angostura Bitters",
      },
      {
        special: "1 sugar cube",
      },
      {
        special: "Few dashes plain water",
      },
    ],
    garnish: "Orange slice and cherry",
    spirits: ["Whiskey"],
  },
  {
    _id: "aa8381956049978f0012e169085015c8",
    name: "Tuxedo",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 30,
        ingredient: "Gin",
        label: "Old Tom Gin",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Vermouth",
        label: "Dry vermouth",
      },
      {
        special: "1/2 bar spoon Maraschino",
      },
      {
        special: "1/4 bar spoon Absinthe",
      },
      {
        special: "3 dashes Orange Bitters",
      },
    ],
    garnish: "Cherry and lemon twist",
    spirits: ["Gin", "Vermouth"],
  },
  {
    _id: "aa8381956049978f0012e16a7ec9f1a3",
    name: "Mojito",
    glass: "collins",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 40,
        ingredient: "White rum",
        label: "White Cuban Rum",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Lime juice",
      },
      {
        special: "6 Mint sprigs",
      },
      {
        special: "2 teaspoons white sugar",
      },
      {
        special: "Soda water",
      },
    ],
    garnish: "Mint leaves and lemon slice",
    spirits: ["White rum"],
  },
  {
    _id: "aa8381956049978f0012e16b6ea3763e",
    name: "Horse's Neck",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 40,
        ingredient: "Cognac",
      },
      {
        unit: "ml",
        amount: 120,
        ingredient: "Ginger Ale",
      },
      {
        special: "Dash of Angostura bitters (optional)",
      },
    ],
    garnish: "Lemon twist",
    spirits: ["Cognac"],
  },
  {
    _id: "aa8381956049978f0012e16c7bdf742d",
    name: "Planter's Punch",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Dark rum",
      },
      {
        unit: "ml",
        amount: 35,
        ingredient: "Orange juice",
      },
      {
        unit: "ml",
        amount: 35,
        ingredient: "Pineapple juice",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Lemon juice",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Syrup",
        label: "Grenadine",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
      {
        special: "3 to 4 dashes Angostura bitters",
      },
    ],
    garnish: "Pineapple slice and a cherry",
    spirits: ["Dark rum"],
  },
  {
    _id: "aa8381956049978f0012e16d79147119",
    name: "Sea Breeze",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 40,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 120,
        ingredient: "Cranberry juice",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Grapefruit juice",
      },
    ],
    garnish: "Lime wedge",
    spirits: ["Vodka"],
  },
  {
    _id: "aa8381956049978f0012e16e5e6ed8f2",
    name: "Pisco Sour",
    glass: "old-fashioned",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Pisco",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Lemon juice",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
      {
        special: "1 raw egg white (small egg)",
      },
    ],
    spirits: ["Pisco"],
  },
  {
    _id: "aa8381956049978f0012e16f02928738",
    name: "Long Island Iced Tea",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 15,
        ingredient: "Tequila",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "White rum",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Triple Sec",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 25,
        ingredient: "Lemon juice",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Syrup",
        label: "Gomme syrup",
      },
      {
        special: "1 dash of Cola",
      },
    ],
    garnish: "Lemon twist",
    spirits: ["Tequila", "Vodka", "White rum", "Triple Sec", "Gin"],
  },
  {
    _id: "aa8381956049978f0012e1704a2ffb06",
    name: "Clover Club",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Syrup",
        label: "Raspberry syrup",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Lemon juice",
      },
      {
        special: "Few drops of Egg White",
      },
    ],
    spirits: ["Gin"],
  },
  {
    _id: "aa8381956049978f0012e1715fb19dfe",
    name: "Angel Face",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 30,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Apricot brandy",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Calvados",
      },
    ],
    spirits: ["Gin", "Apricot brandy", "Calvados"],
  },
  {
    _id: "aa8381956049978f0012e17202d9e317",
    name: "Mimosa",
    glass: "champagne-flute",
    category: "Sparkling Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 75,
        ingredient: "Champagne",
      },
      {
        unit: "ml",
        amount: 75,
        ingredient: "Orange juice",
      },
    ],
    garnish: "Optional orange twist",
    spirits: ["Champagne"],
  },
  {
    _id: "aa8381956049978f0012e1731a5dfb0e",
    name: "Whiskey Sour",
    glass: "old-fashioned",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Whiskey",
        label: "Bourbon whiskey",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Lemon juice",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
    ],
    garnish: "Half an orange slice and cherry",
    spirits: ["Whiskey"],
  },
  {
    _id: "aa8381956049978f0012e1744eb2f4fd",
    name: "Screwdriver",
    glass: "highball",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 50,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 100,
        ingredient: "Orange juice",
      },
    ],
    garnish: "Orange slice",
    spirits: ["Vodka"],
  },
  {
    _id: "aa8381956049978f0012e17535c739d1",
    name: "Cuba Libre",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 50,
        ingredient: "White rum",
      },
      {
        unit: "ml",
        amount: 120,
        ingredient: "Cola",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Lime juice",
      },
    ],
    garnish: "Lime wedge",
    spirits: ["White rum"],
  },
  {
    _id: "aa8381956049978f0012e176656572cc",
    name: "Manhattan",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 50,
        ingredient: "Whiskey",
        label: "Rye whiskey",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Vermouth",
        label: "Red vermouth",
      },
      {
        special: "1 dash Angostura Bitters",
      },
    ],
    garnish: "Cherry",
    spirits: ["Whiskey", "Vermouth"],
  },
  {
    _id: "aa8381956049978f0012e17701de0466",
    name: "Porto Flip",
    glass: "martini",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 15,
        ingredient: "Cognac",
      },
      {
        unit: "ml",
        amount: 45,
        ingredient: "Red Port",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Egg yolk",
      },
    ],
    spirits: ["Cognac", "Red Port"],
  },
  {
    _id: "aa8381956049978f0012e1785c724bbe",
    name: "Gin Fizz",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Lemon juice",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
      {
        unit: "ml",
        amount: 80,
        ingredient: "Soda water",
      },
    ],
    garnish: "Lemon slice",
    spirits: ["Gin"],
  },
  {
    _id: "aa8381956049978f0012e17927f8ad95",
    name: "Espresso Martini",
    glass: "martini",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 50,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Coffee liqueur",
        label: "Kahlúa",
      },
      {
        special:
          "Sugar syrup (according to individual preference of sweetness)",
      },
      {
        special: "1 short strong Espresso",
      },
    ],
    spirits: ["Vodka"],
  },
  {
    _id: "aa8381956049978f0012e17a7d5a4627",
    name: "Margarita",
    glass: "margarita",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 35,
        ingredient: "Tequila",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Triple Sec",
        label: "Cointreau",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Lime juice",
      },
    ],
    spirits: ["Tequila", "Triple Sec"],
  },
  {
    _id: "aa8381956049978f0012e17b583f8aa0",
    name: "French 75",
    glass: "champagne-tulip",
    category: "Sparkling Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 30,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Lemon juice",
      },
      {
        special: "2 dashes Sugar syrup",
      },
      {
        unit: "ml",
        amount: 60,
        ingredient: "Champagne",
      },
    ],
    spirits: ["Gin", "Champagne"],
  },
  {
    _id: "aa8381956049978f0012e17c01d29175",
    name: "Yellow Bird",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 30,
        ingredient: "White rum",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Galliano",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Triple Sec",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Lime juice",
      },
    ],
    spirits: ["White rum", "Galliano", "Triple Sec"],
  },
  {
    _id: "aa8381956049978f0012e17d6871917b",
    name: "Pina Colada",
    glass: "hurricane",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 30,
        ingredient: "White rum",
      },
      {
        unit: "ml",
        amount: 90,
        ingredient: "Pineapple juice",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Coconut milk",
      },
    ],
    garnish: "Pineapple slice and a cherry",
    spirits: ["White rum"],
  },
  {
    _id: "aa8381956049978f0012e17e2ade34ee",
    name: "Aviation",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Cherry liqueur",
        label: "Maraschino",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Lemon juice",
      },
    ],
    spirits: ["Gin", "Cherry liqueur"],
  },
  {
    _id: "aa8381956049978f0012e17f5cf02b1a",
    name: "Bellini",
    glass: "champagne-flute",
    category: "Sparkling Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 100,
        ingredient: "Prosecco",
      },
      {
        unit: "ml",
        amount: 50,
        ingredient: "Peach puree",
      },
    ],
    spirits: ["Prosecco"],
  },
  {
    _id: "aa8381956049978f0012e1806199f86c",
    name: "Grasshopper",
    glass: "martini",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 30,
        ingredient: "Créme liqueur",
        label: "White Créme de Cacao",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Créme liqueur",
        label: "Green Créme de Menthe",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Cream",
      },
    ],
    spirits: ["Créme liqueur", "Créme liqueur"],
  },
  {
    _id: "aa8381956049978f0012e1814c5b9f46",
    name: "Tequila Sunrise",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Tequila",
      },
      {
        unit: "ml",
        amount: 90,
        ingredient: "Orange juice",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Syrup",
        label: "Grenadine",
      },
    ],
    garnish: "Orange slice and a cherry",
    spirits: ["Tequila"],
  },
  {
    _id: "aa8381956049978f0012e18265aa4f60",
    name: "Daiquiri",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "White rum",
      },
      {
        unit: "ml",
        amount: 25,
        ingredient: "Lime juice",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Syrup",
        label: "Simple syrup",
      },
    ],
    spirits: ["White rum"],
  },
  {
    _id: "aa8381956049978f0012e1830487d253",
    name: "Rusty Nail",
    glass: "old-fashioned",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Whiskey",
        label: "Scotch whisky",
      },
      {
        unit: "ml",
        amount: 25,
        ingredient: "Drambuie",
      },
    ],
    garnish: "Lemon twist",
    spirits: ["Whiskey", "Drambuie"],
  },
  {
    _id: "aa8381956049978f0012e18401eb5a94",
    name: "B52",
    glass: "shot",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 20,
        ingredient: "Coffee liqueur",
        label: "Kahlúa",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Cream liqueur",
        label: "Baileys Irish Cream",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Triple Sec",
        label: "Grand Marnier",
      },
    ],
    spirits: ["Triple Sec"],
  },
  {
    _id: "aa8381956049978f0012e1851013205d",
    name: "Stinger",
    glass: "martini",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 50,
        ingredient: "Cognac",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Créme liqueur",
        label: "White Créme de Menthe",
      },
    ],
    spirits: ["Cognac", "Créme liqueur"],
  },
  {
    _id: "aa8381956049978f0012e18634dcb4b1",
    name: "Golden Dream",
    glass: "martini",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 20,
        ingredient: "Galliano",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Triple Sec",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Orange juice",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Cream",
      },
    ],
    spirits: ["Galliano", "Triple Sec"],
  },
  {
    _id: "aa8381956049978f0012e18742035fa6",
    name: "God Mother",
    glass: "old-fashioned",
    ingredients: [
      {
        unit: "ml",
        amount: 35,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 35,
        ingredient: "DiSaronno",
      },
    ],
    spirits: ["Vodka", "DiSaronno"],
  },
  {
    _id: "aa8381956049978f0012e1884d2a5019",
    name: "Spritz Veneziano",
    glass: "old-fashioned",
    category: "Sparkling Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 60,
        ingredient: "Prosecco",
      },
      {
        unit: "ml",
        amount: 40,
        ingredient: "Aperol",
      },
      {
        special: "Splash of Soda water",
      },
    ],
    garnish: "Half an orange slice",
    spirits: ["Prosecco", "Aperol"],
  },
  {
    _id: "aa8381956049978f0012e18951bae424",
    name: "Bramble",
    glass: "old-fashioned",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 40,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Lemon juice",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Blackberry liqueur",
      },
    ],
    garnish: "Lemon slice and two blackberries",
    spirits: ["Gin"],
  },
  {
    _id: "aa8381956049978f0012e18a3d9aa060",
    name: "Alexander",
    glass: "martini",
    ingredients: [
      {
        unit: "ml",
        amount: 30,
        ingredient: "Cognac",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Créme liqueur",
        label: "Brown Créme de Cacao",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Cream",
      },
    ],
    spirits: ["Cognac", "Créme liqueur"],
  },
  {
    _id: "aa8381956049978f0012e18b199f325c",
    name: "Lemon Drop Martini",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 25,
        ingredient: "Vodka",
        label: "Citron Vodka",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Triple Sec",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Lemon juice",
      },
    ],
    garnish: "Lemon slice",
    spirits: ["Vodka", "Triple Sec"],
  },
  {
    _id: "aa8381956049978f0012e18c727264c1",
    name: "French Martini",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Raspberry liqueur",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Pineapple juice",
      },
    ],
    spirits: ["Vodka", "Raspberry liqueur"],
  },
  {
    _id: "aa8381956049978f0012e18d5ebbc620",
    name: "Black Russian",
    glass: "old-fashioned",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 50,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Coffee liqueur",
      },
    ],
    spirits: ["Vodka"],
  },
  {
    _id: "aa8381956049978f0012e18e08deece7",
    name: "Bloody Mary",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 90,
        ingredient: "Tomato juice",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Lemon juice",
      },
      {
        special: "2 to 3 dashes of Worcestershire Sauce",
      },
      {
        special: "Tabasco",
      },
      {
        special: "Celery salt",
      },
      {
        special: "Pepper",
      },
    ],
    garnish: "Celery and optionally lemon wedge",
    spirits: ["Vodka"],
  },
  {
    _id: "aa8381956049978f0012e18f3e0cd28e",
    name: "Mai-tai",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 40,
        ingredient: "White rum",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Dark rum",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Triple Sec",
        label: "Orange Curaçao",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Syrup",
        label: "Orgeat syrup",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Lime juice",
      },
    ],
    garnish: "Pineapple spear, mint leaves and lime wedge",
    spirits: ["White rum", "Dark rum", "Triple Sec"],
  },
  {
    _id: "aa8381956049978f0012e1903965e757",
    name: "Barracuda",
    glass: "margarita",
    category: "Sparkling Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Dark rum",
        label: "Gold rum",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Galliano",
      },
      {
        unit: "ml",
        amount: 60,
        ingredient: "Pineapple juice",
      },
      {
        special: "1 dash Lime juice",
      },
      {
        special: "Top with Prosecco",
      },
    ],
    spirits: ["Dark rum", "Galliano"],
  },
  {
    _id: "aa8381956049978f0012e191163973c7",
    name: "Sex on the Beach",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 40,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Peach schnapps",
      },
      {
        unit: "ml",
        amount: 40,
        ingredient: "Cranberry juice",
      },
      {
        unit: "ml",
        amount: 40,
        ingredient: "Orange juice",
      },
    ],
    garnish: "Orange slice",
    spirits: ["Vodka", "Peach schnapps"],
  },
  {
    _id: "aa8381956049978f0012e1926bdd1ebd",
    name: "Monkey Gland",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 50,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Orange juice",
      },
      {
        special: "2 drops Absinthe",
      },
      {
        special: "2 drops Grenadine",
      },
    ],
    spirits: ["Gin"],
  },
  {
    _id: "aa8381956049978f0012e1936ef2c315",
    name: "Derby",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 60,
        ingredient: "Gin",
      },
      {
        special: "2 drops Peach Bitters",
      },
      {
        special: "2 Fresh mint leaves",
      },
    ],
    garnish: "Mint leaves",
    spirits: ["Gin"],
  },
  {
    _id: "aa8381956049978f0012e1940ff1c29b",
    name: "Sidecar",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 50,
        ingredient: "Cognac",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Triple Sec",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Lemon juice",
      },
    ],
    spirits: ["Cognac", "Triple Sec"],
  },
  {
    _id: "aa8381956049978f0012e19574c7be24",
    name: "Irish Coffee",
    glass: "hot-drink",
    category: "Hot Drink",
    ingredients: [
      {
        unit: "ml",
        amount: 40,
        ingredient: "Whiskey",
        label: "Irish whiskey",
      },
      {
        unit: "ml",
        amount: 90,
        ingredient: "Hot coffee",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Cream",
      },
      {
        special: "1 teaspoon of brown sugar",
      },
    ],
    spirits: ["Whiskey"],
  },
  {
    _id: "aa8381956049978f0012e1964d32b81a",
    name: "Sazerac",
    glass: "old-fashioned",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 50,
        ingredient: "Cognac",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Absinthe",
      },
      {
        special: "1 sugar cube",
      },
      {
        special: "2 dashes Peychaud’s bitters",
      },
    ],
    garnish: "Lemon twist",
    spirits: ["Cognac", "Absinthe"],
  },
  {
    _id: "aa8381956049978f0012e197599b985f",
    name: "Americano",
    glass: "old-fashioned",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 30,
        ingredient: "Campari",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Vermouth",
        label: "Red vermouth",
      },
      {
        special: "A splash of soda water",
      },
    ],
    garnish: "Half an orange slice",
    spirits: ["Campari", "Vermouth"],
  },
  {
    _id: "aa8381956049978f0012e19857388ddc",
    name: "Singapore Sling",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 30,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Cherry liqueur",
      },
      {
        unit: "ml",
        amount: 7.5,
        ingredient: "Triple Sec",
        label: "Cointreau",
      },
      {
        unit: "ml",
        amount: 7.5,
        ingredient: "DOM Bénédictine",
      },
      {
        unit: "ml",
        amount: 120,
        ingredient: "Pineapple juice",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Lime juice",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Syrup",
        label: "Grenadine",
      },
      {
        special: "1 dash Angostura bitters",
      },
    ],
    garnish: "Pineapple slice and a cherry",
    spirits: ["Gin", "Cherry liqueur", "Triple Sec", "DOM Bénédictine"],
  },
  {
    _id: "aa8381956049978f0012e19955670bd3",
    name: "French Connection",
    glass: "old-fashioned",
    ingredients: [
      {
        unit: "ml",
        amount: 35,
        ingredient: "Cognac",
      },
      {
        unit: "ml",
        amount: 35,
        ingredient: "DiSaronno",
      },
    ],
    spirits: ["Cognac", "DiSaronno"],
  },
  {
    _id: "aa8381956049978f0012e19a580d72f2",
    name: "Moscow Mule",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 120,
        ingredient: "Ginger beer",
      },
      {
        unit: "ml",
        amount: 5,
        ingredient: "Lime juice",
      },
      {
        special: "1 slice lime in a highball glass",
      },
    ],
    garnish: "Lime slice",
    spirits: ["Vodka", "Ginger beer"],
  },
  {
    _id: "aa8381956049978f0012e19b1dd17ace",
    name: "John Collins",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Lemon juice",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
      {
        unit: "ml",
        amount: 60,
        ingredient: "Soda water",
      },
    ],
    garnish: "Lemon slice and a cherry",
    spirits: ["Gin"],
  },
  {
    _id: "aa8381956049978f0012e19c19cb51c9",
    name: "Kir",
    glass: "white-wine",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 90,
        ingredient: "Dry White Wine",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Créme liqueur",
        label: "Créme de Cassis",
      },
    ],
    spirits: ["Dry White Wine", "Créme liqueur"],
  },
  {
    _id: "aa8381956049978f0012e19d00f81371",
    name: "Mint Julep",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 60,
        ingredient: "Whiskey",
        label: "Bourbon whiskey",
      },
      {
        special: "4 fresh mint sprigs",
      },
      {
        special: "1 teaspoon powdered sugar",
      },
      {
        special: "2 teaspoons water",
      },
    ],
    garnish: "Mint sprig",
    spirits: ["Whiskey"],
  },
  {
    _id: "aa8381956049978f0012e19e158e39bc",
    name: "Tommy's Margarita",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Tequila",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Lime juice",
      },
      {
        special: "2 bar spoons of Agave nectar",
      },
    ],
    spirits: ["Tequila"],
  },
  {
    _id: "aa8381956049978f0012e19f442dbf8c",
    name: "Paradise",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 35,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Apricot brandy",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Orange juice",
      },
    ],
    spirits: ["Gin", "Apricot brandy"],
  },
  {
    _id: "aa8381956049978f0012e1a0795fc1b8",
    name: "Dirty Martini",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 60,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Vermouth",
        label: "Dry vermouth",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Olive juice",
      },
    ],
    garnish: "Green olive",
    spirits: ["Vodka", "Vermouth"],
  },
  {
    _id: "aa8381956049978f0012e1a11e6d60c6",
    name: "Champagne Cocktail",
    glass: "champagne-flute",
    category: "Sparkling Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 90,
        ingredient: "Champagne",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Cognac",
      },
      {
        special: "2 dashes Angostura Bitters",
      },
      {
        special: "1 sugar cube",
      },
    ],
    garnish: "Orange slice and a cherry",
    spirits: ["Champagne", "Cognac"],
  },
  {
    _id: "aa8381956049978f0012e1a27e6a0736",
    name: "Mary Pickford",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 60,
        ingredient: "White rum",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Cherry liqueur",
        label: "Maraschino",
      },
      {
        unit: "ml",
        amount: 60,
        ingredient: "Pineapple juice",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Syrup",
        label: "Grenadine",
      },
    ],
    spirits: ["White rum", "Cherry liqueur"],
  },
  {
    _id: "aa8381956049978f0012e1a3604400b2",
    name: "Hemingway Special",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 60,
        ingredient: "White rum",
      },
      {
        unit: "ml",
        amount: 40,
        ingredient: "Grapefruit juice",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Cherry liqueur",
        label: "Maraschino",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Lime juice",
      },
    ],
    spirits: ["White rum", "Cherry liqueur"],
  },
  {
    _id: "aa8381956049978f0012e1a467edf62f",
    name: "Dark 'n' Stormy",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 60,
        ingredient: "Dark rum",
      },
      {
        unit: "ml",
        amount: 100,
        ingredient: "Ginger beer",
      },
    ],
    garnish: "Lime wedge",
    spirits: ["Dark rum", "Ginger beer"],
  },
  {
    _id: "aa8381956049978f0012e1a53dae1a20",
    name: "Ramos Fizz",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Lime juice",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Lemon juice",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
      {
        unit: "ml",
        amount: 60,
        ingredient: "Cream",
      },
      {
        special: "1 Egg white",
      },
      {
        special: "3 dashes Orange flower water",
      },
      {
        special: "2 drops Vanilla extract",
      },
      {
        special: "Soda water",
      },
    ],
    spirits: ["Gin"],
  },
  {
    _id: "aa8381956049978f0012e1a65e0c4fa0",
    name: "Russian Spring Punch",
    glass: "highball",
    category: "Sparkling Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 25,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 25,
        ingredient: "Lemon juice",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Créme liqueur",
        label: "Créme de Cassis",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
    ],
    garnish: "Lemon slice and a blackberry",
    spirits: ["Vodka", "Créme liqueur"],
  },
  {
    _id: "aa8381956049978f0012e1a70a6629cc",
    name: "God Father",
    glass: "old-fashioned",
    ingredients: [
      {
        unit: "ml",
        amount: 35,
        ingredient: "Whiskey",
        label: "Scotch whisky",
      },
      {
        unit: "ml",
        amount: 35,
        ingredient: "DiSaronno",
      },
    ],
    spirits: ["Whiskey", "DiSaronno"],
  },
  {
    _id: "aa8381956049978f0012e1a80e620576",
    name: "Cosmopolitan",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 40,
        ingredient: "Vodka",
        label: "Citron Vodka",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Triple Sec",
        label: "Cointreau",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Lime juice",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Cranberry juice",
      },
    ],
    garnish: "Lime slice",
    spirits: ["Vodka", "Triple Sec"],
  },
  {
    _id: "aa8381956049978f0012e1a9685a5119",
    name: "Dry Martini",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 60,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Vermouth",
        label: "Dry vermouth",
      },
    ],
    spirits: ["Gin", "Vermouth"],
  },
  {
    _id: "aa8381956049978f0012e1aa247d55a2",
    name: "Between the Sheets",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 30,
        ingredient: "White rum",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Cognac",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Triple Sec",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Lemon juice",
      },
    ],
    spirits: ["White rum", "Cognac", "Triple Sec"],
  },
  {
    _id: "aa8381956049978f0012e1ab34bae55f",
    name: "Casino",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 40,
        ingredient: "Gin",
        label: "Old Tom Gin",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Cherry liqueur",
        label: "Maraschino",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Orange Bitters",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Lemon juice",
      },
    ],
    garnish: "Lemon twist and a cherry",
    spirits: ["Gin", "Cherry liqueur", "Orange Bitters"],
  },
  {
    _id: "aa8381956049978f0012e1ac40a17e48",
    name: "Caipirinha",
    glass: "old-fashioned",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 50,
        ingredient: "Cachaca",
      },
      {
        special: "half fresh lime cut into 4 wedges",
      },
      {
        special: "2 teaspoon sugar",
      },
    ],
    spirits: ["Cachaca"],
  },
  {
    _id: "aa8381956049978f0012e1ad66aec48a",
    name: "Vampiro",
    glass: "highball",
    ingredients: [
      {
        unit: "ml",
        amount: 50,
        ingredient: "Tequila",
        label: "Silver Tequila",
      },
      {
        unit: "ml",
        amount: 70,
        ingredient: "Tomato juice",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Orange juice",
      },
      {
        unit: "ml",
        amount: 10,
        ingredient: "Lime juice",
      },
      {
        special: "1 teaspoon clear honey",
      },
      {
        special: "Half slice onion finely chopped",
      },
      {
        special: "Few slices fresh red hot chili peppers",
      },
      {
        special: "Few drops Worcestershire sauce",
      },
      {
        special: "Salt",
      },
    ],
    garnish: "Lime wedge and a green or red chili",
    spirits: ["Tequila"],
  },
  {
    _id: "aa8381956049978f0012e1ae6a34eac1",
    name: "Kamikaze",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 30,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Triple Sec",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Lime juice",
      },
    ],
    spirits: ["Vodka", "Triple Sec"],
  },
  {
    _id: "aa8381956049978f0012e1af376f2c54",
    name: "White Lady",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 40,
        ingredient: "Gin",
      },
      {
        unit: "ml",
        amount: 30,
        ingredient: "Triple Sec",
      },
      {
        unit: "ml",
        amount: 20,
        ingredient: "Lemon juice",
      },
    ],
    spirits: ["Gin", "Triple Sec"],
  },
  {
    _id: "aa8381956049978f0012e1b057e47da7",
    name: "Harvey Wallbanger",
    glass: "highball",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "ml",
        amount: 45,
        ingredient: "Vodka",
      },
      {
        unit: "ml",
        amount: 15,
        ingredient: "Galliano",
      },
      {
        unit: "ml",
        amount: 90,
        ingredient: "Orange juice",
      },
    ],
    garnish: "Orance slice and a cherry",
    spirits: ["Vodka", "Galliano"],
  },
];
// "Absinthe",
// "Grenadine",
// Gin: "琴酒",
// Vodka: "伏特加",
// "Lillet Blonde": "苦艾",
// Champagne,
// "Pisco"
// Tequila
// "Triple Sec"
// Calvados,
// Vermouth: "甜红味美思",
// "Coffee liqueur":
//     "Cherry liqueur":
// "Créme liqueur":
//     Drambuie: "杜林标",
// "Aperol":
//Campari: "金巴利",
// Kirsch: "樱桃酒",
// Cognac: "干邑白兰地",
// "Red Port": "红波特",
//"Apricot brandy": "杏子白兰地",
var data = [
  {
    _id: "aa8381956049978f0012e16421d62e54",
    name: "Vesper",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 6,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 0.75,
        ingredient: "Lillet Blonde",
      },
    ],
    garnish: "Lemon twist",
    preparation: "Shake and strain into a chilled cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e165747b8199",
    name: "Bacardi",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "White rum",
        label: "Bacardi White Rum",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Lime juice",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Syrup",
        label: "Grenadine",
      },
    ],
    preparation: "Shake with ice cubes. Strain into chilled cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1662af0eece",
    name: "Negroni",
    glass: "old-fashioned",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 3,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Campari",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Vermouth",
        label: "Sweet red vermouth",
      },
    ],
    garnish: "Half an orange slice",
    preparation: "Build into old-fashioned glass filled with ice. Stir gently.",
  },
  {
    _id: "aa8381956049978f0012e1676593f177",
    name: "Rose",
    glass: "martini",
    ingredients: [
      {
        unit: "cl",
        amount: 2,
        ingredient: "Kirsch",
      },
      {
        unit: "cl",
        amount: 4,
        ingredient: "Vermouth",
        label: "Dry vermouth",
      },
      {
        special: "3 dashes Strawberry syrup",
      },
    ],
    preparation:
      "Stir all ingredients with ice and strain into a cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1687bed1452",
    name: "Old Fashioned",
    glass: "old-fashioned",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Whiskey",
        label: "Bourbon or rye whiskey",
      },
      {
        special: "2 dashes Angostura Bitters",
      },
      {
        special: "1 sugar cube",
      },
      {
        special: "Few dashes plain water",
      },
    ],
    garnish: "Orange slice and cherry",
    preparation:
      "Place sugar cube in old-fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolve. Fill the glass with ice cubes and add whisky.",
  },
  {
    _id: "aa8381956049978f0012e169085015c8",
    name: "Tuxedo",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 3,
        ingredient: "Gin",
        label: "Old Tom Gin",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Vermouth",
        label: "Dry vermouth",
      },
      {
        special: "1/2 bar spoon Maraschino",
      },
      {
        special: "1/4 bar spoon Absinthe",
      },
      {
        special: "3 dashes Orange Bitters",
      },
    ],
    garnish: "Cherry and lemon twist",
    preparation:
      "Stir all ingredients with ice and strain into cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e16a7ec9f1a3",
    name: "Mojito",
    glass: "collins",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 4,
        ingredient: "White rum",
        label: "White Cuban Rum",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Lime juice",
      },
      {
        special: "6 Mint sprigs",
      },
      {
        special: "2 teaspoons white sugar",
      },
      {
        special: "Soda water",
      },
    ],
    garnish: "Mint leaves and lemon slice",
    preparation:
      "Muddle mint sprigs with sugar and lime juice. Add splash of soda water and fill glass with cracked ice. Pour rum and top with soda water. Serve with straw.",
  },
  {
    _id: "aa8381956049978f0012e16b6ea3763e",
    name: "Horse's Neck",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 4,
        ingredient: "Cognac",
      },
      {
        unit: "cl",
        amount: 12,
        ingredient: "Ginger Ale",
      },
      {
        special: "Dash of Angostura bitters (optional)",
      },
    ],
    garnish: "Lemon twist",
    preparation:
      "Build into highball glass with ice cubes. Stir gently. If required, add dashes of Angostura bitters.",
  },
  {
    _id: "aa8381956049978f0012e16c7bdf742d",
    name: "Planter's Punch",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Dark rum",
      },
      {
        unit: "cl",
        amount: 3.5,
        ingredient: "Orange juice",
      },
      {
        unit: "cl",
        amount: 3.5,
        ingredient: "Pineapple juice",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Lemon juice",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Syrup",
        label: "Grenadine",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
      {
        special: "3 to 4 dashes Angostura bitters",
      },
    ],
    garnish: "Pineapple slice and a cherry",
    preparation:
      "Pour all ingredients, except the bitters, into shaker filled with ice. Shake. Pour into large glass, filled with ice. Add Angostura bitters, “on top”.",
  },
  {
    _id: "aa8381956049978f0012e16d79147119",
    name: "Sea Breeze",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 4,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 12,
        ingredient: "Cranberry juice",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Grapefruit juice",
      },
    ],
    garnish: "Lime wedge",
    preparation: "Build all ingredients in a rock glass filled with ice.",
  },
  {
    _id: "aa8381956049978f0012e16e5e6ed8f2",
    name: "Pisco Sour",
    glass: "old-fashioned",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Pisco",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Lemon juice",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
      {
        special: "1 raw egg white (small egg)",
      },
    ],
    preparation:
      "Shake and strain into a chilled champagne flute. Dash some Angostura bitters on top.",
  },
  {
    _id: "aa8381956049978f0012e16f02928738",
    name: "Long Island Iced Tea",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Tequila",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "White rum",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Triple Sec",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 2.5,
        ingredient: "Lemon juice",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Syrup",
        label: "Gomme syrup",
      },
      {
        special: "1 dash of Cola",
      },
    ],
    garnish: "Lemon twist",
    preparation:
      "Add all ingredients into highball glass filled with ice. Stir gently. Serve with straw.",
  },
  {
    _id: "aa8381956049978f0012e1704a2ffb06",
    name: "Clover Club",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Syrup",
        label: "Raspberry syrup",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Lemon juice",
      },
      {
        special: "Few drops of Egg White",
      },
    ],
    preparation: "Shake with ice cubes. Strain into cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1715fb19dfe",
    name: "Angel Face",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 3,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Apricot brandy",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Calvados",
      },
    ],
    preparation: "Shake with ice cubes. Strain into a cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e17202d9e317",
    name: "Mimosa",
    glass: "champagne-flute",
    category: "Sparkling Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 7.5,
        ingredient: "Champagne",
      },
      {
        unit: "cl",
        amount: 7.5,
        ingredient: "Orange juice",
      },
    ],
    garnish: "Optional orange twist",
    preparation:
      "Pour orange juice into flute and gently pour Champagne. Stir gently. Note: Buck's Fizz is a very similar cocktail but made of two parts champagne to one part orange juice.",
  },
  {
    _id: "aa8381956049978f0012e1731a5dfb0e",
    name: "Whiskey Sour",
    glass: "old-fashioned",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Whiskey",
        label: "Bourbon whiskey",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Lemon juice",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
    ],
    garnish: "Half an orange slice and cherry",
    preparation:
      "Dash egg white (Optional: if used shake little harder to foam up the egg white). Pour all ingredients into cocktail shaker filled with ice. Shake. Strain into cocktail glass. If served ‘On the rocks’, strain ingredients into old-fashioned glass filled with ice.",
  },
  {
    _id: "aa8381956049978f0012e1744eb2f4fd",
    name: "Screwdriver",
    glass: "highball",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 5,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 10,
        ingredient: "Orange juice",
      },
    ],
    garnish: "Orange slice",
    preparation: "Build into a highball glass filled with ice. Stir gently.",
  },
  {
    _id: "aa8381956049978f0012e17535c739d1",
    name: "Cuba Libre",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 5,
        ingredient: "White rum",
      },
      {
        unit: "cl",
        amount: 12,
        ingredient: "Cola",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Lime juice",
      },
    ],
    garnish: "Lime wedge",
    preparation: "Build all ingredients in a highball glass filled with ice.",
  },
  {
    _id: "aa8381956049978f0012e176656572cc",
    name: "Manhattan",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 5,
        ingredient: "Whiskey",
        label: "Rye whiskey",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Vermouth",
        label: "Red vermouth",
      },
      {
        special: "1 dash Angostura Bitters",
      },
    ],
    garnish: "Cherry",
    preparation:
      "Stir in mixing glass with ice cubes. Strain into chilled cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e17701de0466",
    name: "Porto Flip",
    glass: "martini",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Cognac",
      },
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Red Port",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Egg yolk",
      },
    ],
    preparation:
      "Shake with ice cubes. Strain into cocktail glass. Sprinkle with fresh ground nutmeg.",
  },
  {
    _id: "aa8381956049978f0012e1785c724bbe",
    name: "Gin Fizz",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Lemon juice",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
      {
        unit: "cl",
        amount: 8,
        ingredient: "Soda water",
      },
    ],
    garnish: "Lemon slice",
    preparation:
      "Shake all ingredients with ice cubes, except soda water. Pour into tumbler. Top with soda water.",
  },
  {
    _id: "aa8381956049978f0012e17927f8ad95",
    name: "Espresso Martini",
    glass: "martini",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 5,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Coffee liqueur",
        label: "Kahlúa",
      },
      {
        special:
          "Sugar syrup (according to individual preference of sweetness)",
      },
      {
        special: "1 short strong Espresso",
      },
    ],
    preparation: "Shake and strain into a chilled cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e17a7d5a4627",
    name: "Margarita",
    glass: "margarita",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 3.5,
        ingredient: "Tequila",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Triple Sec",
        label: "Cointreau",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Lime juice",
      },
    ],
    preparation:
      "Shake with ice cubes. Strain into cocktail glass rimmed with salt (note:Fruit Margarita - blend selected fruit with the above recipe).",
  },
  {
    _id: "aa8381956049978f0012e17b583f8aa0",
    name: "French 75",
    glass: "champagne-tulip",
    category: "Sparkling Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 3,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Lemon juice",
      },
      {
        special: "2 dashes Sugar syrup",
      },
      {
        unit: "cl",
        amount: 6,
        ingredient: "Champagne",
      },
    ],
    preparation:
      "Shake with ice cubes, except for champagne. Strain into a champagne flute. Top up with champagne. Stir gently.",
  },
  {
    _id: "aa8381956049978f0012e17c01d29175",
    name: "Yellow Bird",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 3,
        ingredient: "White rum",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Galliano",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Triple Sec",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Lime juice",
      },
    ],
    preparation: "Shake and strain into a chilled cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e17d6871917b",
    name: "Pina Colada",
    glass: "hurricane",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 3,
        ingredient: "White rum",
      },
      {
        unit: "cl",
        amount: 9,
        ingredient: "Pineapple juice",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Coconut milk",
      },
    ],
    garnish: "Pineapple slice and a cherry",
    preparation:
      "Blend all the ingredients with ice in a electric blender, pour into a large goblet or Hurricane glass and serve with straws.",
  },
  {
    _id: "aa8381956049978f0012e17e2ade34ee",
    name: "Aviation",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Cherry liqueur",
        label: "Maraschino",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Lemon juice",
      },
    ],
    preparation: "Shake and strain into a chilled cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e17f5cf02b1a",
    name: "Bellini",
    glass: "champagne-flute",
    category: "Sparkling Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 10,
        ingredient: "Prosecco",
      },
      {
        unit: "cl",
        amount: 5,
        ingredient: "Peach puree",
      },
    ],
    preparation:
      "Pour peach puree into chilled glass and add sparkling wine. Stir gently. Variations: Puccini (fresh mandarin juice), Rossini (fresh strawberry puree), Tintoretto (fresh pomegranate juice)",
  },
  {
    _id: "aa8381956049978f0012e1806199f86c",
    name: "Grasshopper",
    glass: "martini",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 3,
        ingredient: "Créme liqueur",
        label: "White Créme de Cacao",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Créme liqueur",
        label: "Green Créme de Menthe",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Cream",
      },
    ],
    preparation: "Shake with ice cubes. Strain into chilled cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1814c5b9f46",
    name: "Tequila Sunrise",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Tequila",
      },
      {
        unit: "cl",
        amount: 9,
        ingredient: "Orange juice",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Syrup",
        label: "Grenadine",
      },
    ],
    garnish: "Orange slice and a cherry",
    preparation:
      "Build tequila and orange juice into highball with ice cubes. Add a splash of grenadine to create sunrise effect. Do not stir.",
  },
  {
    _id: "aa8381956049978f0012e18265aa4f60",
    name: "Daiquiri",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "White rum",
      },
      {
        unit: "cl",
        amount: 2.5,
        ingredient: "Lime juice",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Syrup",
        label: "Simple syrup",
      },
    ],
    preparation: "Shake and strain into a cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1830487d253",
    name: "Rusty Nail",
    glass: "old-fashioned",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Whiskey",
        label: "Scotch whisky",
      },
      {
        unit: "cl",
        amount: 2.5,
        ingredient: "Drambuie",
      },
    ],
    garnish: "Lemon twist",
    preparation: "Build into old-fashioned glass filled with ice. Stir gently.",
  },
  {
    _id: "aa8381956049978f0012e18401eb5a94",
    name: "B52",
    glass: "shot",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 2,
        ingredient: "Coffee liqueur",
        label: "Kahlúa",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Cream liqueur",
        label: "Baileys Irish Cream",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Triple Sec",
        label: "Grand Marnier",
      },
    ],
    preparation:
      "Layer ingredients one at a time starting with Kahlúa, followed by Baileys Irish Cream and top with Grand Marnier. Flame the Grand Marnier, serve while the flame is still on, accompanied with a straw on side plate.",
  },
  {
    _id: "aa8381956049978f0012e1851013205d",
    name: "Stinger",
    glass: "martini",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 5,
        ingredient: "Cognac",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Créme liqueur",
        label: "White Créme de Menthe",
      },
    ],
    preparation:
      "Stir in mixing glass with ice cubes. Strain into a cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e18634dcb4b1",
    name: "Golden Dream",
    glass: "martini",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 2,
        ingredient: "Galliano",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Triple Sec",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Orange juice",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Cream",
      },
    ],
    preparation: "Shake with ice cubes. Strain into chilled cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e18742035fa6",
    name: "God Mother",
    glass: "old-fashioned",
    ingredients: [
      {
        unit: "cl",
        amount: 3.5,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 3.5,
        ingredient: "DiSaronno",
      },
    ],
    preparation:
      "Build into old fashioned glass filled with ice cubes. Stir gently.",
  },
  {
    _id: "aa8381956049978f0012e1884d2a5019",
    name: "Spritz Veneziano",
    glass: "old-fashioned",
    category: "Sparkling Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 6,
        ingredient: "Prosecco",
      },
      {
        unit: "cl",
        amount: 4,
        ingredient: "Aperol",
      },
      {
        special: "Splash of Soda water",
      },
    ],
    garnish: "Half an orange slice",
    preparation:
      "Build into an old-fashioned glass filled with ice. Top with a splash of soda water.",
  },
  {
    _id: "aa8381956049978f0012e18951bae424",
    name: "Bramble",
    glass: "old-fashioned",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Lemon juice",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Blackberry liqueur",
      },
    ],
    garnish: "Lemon slice and two blackberries",
    preparation:
      "Build over crushed ice, in a rock glass. Stir, then pour the blackberry liqueur over the top of the drink in a circular fashion.",
  },
  {
    _id: "aa8381956049978f0012e18a3d9aa060",
    name: "Alexander",
    glass: "martini",
    ingredients: [
      {
        unit: "cl",
        amount: 3,
        ingredient: "Cognac",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Créme liqueur",
        label: "Brown Créme de Cacao",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Cream",
      },
    ],
    preparation:
      "Shake and strain into a chilled cocktail glass. Sprinkle with fresh ground nutmeg.",
  },
  {
    _id: "aa8381956049978f0012e18b199f325c",
    name: "Lemon Drop Martini",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 2.5,
        ingredient: "Vodka",
        label: "Citron Vodka",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Triple Sec",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Lemon juice",
      },
    ],
    garnish: "Lemon slice",
    preparation:
      "Shake and strain into a chilled cocktail glass rimmed with sugar.",
  },
  {
    _id: "aa8381956049978f0012e18c727264c1",
    name: "French Martini",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Raspberry liqueur",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Pineapple juice",
      },
    ],
    preparation:
      "Stir in mixing glass with ice cubes. Strain into chilled cocktail glass. Squeeze oil from lemon peel onto the drink.",
  },
  {
    _id: "aa8381956049978f0012e18d5ebbc620",
    name: "Black Russian",
    glass: "old-fashioned",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 5,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Coffee liqueur",
      },
    ],
    preparation:
      "Build into old fashioned glass filled with ice cubes. Stir gently. Note: for White Russian, float fresh cream on the top and stir gently.",
  },
  {
    _id: "aa8381956049978f0012e18e08deece7",
    name: "Bloody Mary",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 9,
        ingredient: "Tomato juice",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Lemon juice",
      },
      {
        special: "2 to 3 dashes of Worcestershire Sauce",
      },
      {
        special: "Tabasco",
      },
      {
        special: "Celery salt",
      },
      {
        special: "Pepper",
      },
    ],
    garnish: "Celery and optionally lemon wedge",
    preparation: "Stir gently, pour all ingredients into highball glass.",
  },
  {
    _id: "aa8381956049978f0012e18f3e0cd28e",
    name: "Mai-tai",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 4,
        ingredient: "White rum",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Dark rum",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Triple Sec",
        label: "Orange Curaçao",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Syrup",
        label: "Orgeat syrup",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Lime juice",
      },
    ],
    garnish: "Pineapple spear, mint leaves and lime wedge",
    preparation: "Shake and strain into highball glass. Serve with straw.",
  },
  {
    _id: "aa8381956049978f0012e1903965e757",
    name: "Barracuda",
    glass: "margarita",
    category: "Sparkling Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Dark rum",
        label: "Gold rum",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Galliano",
      },
      {
        unit: "cl",
        amount: 6,
        ingredient: "Pineapple juice",
      },
      {
        special: "1 dash Lime juice",
      },
      {
        special: "Top with Prosecco",
      },
    ],
  },
  {
    _id: "aa8381956049978f0012e191163973c7",
    name: "Sex on the Beach",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 4,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Peach schnapps",
      },
      {
        unit: "cl",
        amount: 4,
        ingredient: "Cranberry juice",
      },
      {
        unit: "cl",
        amount: 4,
        ingredient: "Orange juice",
      },
    ],
    garnish: "Orange slice",
    preparation: "Build all ingredients in a highball glass filled with ice.",
  },
  {
    _id: "aa8381956049978f0012e1926bdd1ebd",
    name: "Monkey Gland",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 5,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Orange juice",
      },
      {
        special: "2 drops Absinthe",
      },
      {
        special: "2 drops Grenadine",
      },
    ],
    preparation: "Shake and strain into a chilled cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1936ef2c315",
    name: "Derby",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 6,
        ingredient: "Gin",
      },
      {
        special: "2 drops Peach Bitters",
      },
      {
        special: "2 Fresh mint leaves",
      },
    ],
    garnish: "Mint leaves",
    preparation:
      "Stir in mixing glass with ice cubes. Strain into a cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1940ff1c29b",
    name: "Sidecar",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 5,
        ingredient: "Cognac",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Triple Sec",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Lemon juice",
      },
    ],
    preparation: "Shake with ice cubes. Strain into cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e19574c7be24",
    name: "Irish Coffee",
    glass: "hot-drink",
    category: "Hot Drink",
    ingredients: [
      {
        unit: "cl",
        amount: 4,
        ingredient: "Whiskey",
        label: "Irish whiskey",
      },
      {
        unit: "cl",
        amount: 9,
        ingredient: "Hot coffee",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Cream",
      },
      {
        special: "1 teaspoon of brown sugar",
      },
    ],
    preparation:
      "Warm the Irish whiskey over a burner. Pour into the glass (for hot drink) hot coffee, and add a teaspoon of sugar. Float Cream on top.",
  },
  {
    _id: "aa8381956049978f0012e1964d32b81a",
    name: "Sazerac",
    glass: "old-fashioned",
    category: "After Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 5,
        ingredient: "Cognac",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Absinthe",
      },
      {
        special: "1 sugar cube",
      },
      {
        special: "2 dashes Peychaud’s bitters",
      },
    ],
    garnish: "Lemon twist",
    preparation:
      "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Note: The original recipe changed after the American Civil War, rye whiskey substituted cognac as it became hard to obtain.",
  },
  {
    _id: "aa8381956049978f0012e197599b985f",
    name: "Americano",
    glass: "old-fashioned",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 3,
        ingredient: "Campari",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Vermouth",
        label: "Red vermouth",
      },
      {
        special: "A splash of soda water",
      },
    ],
    garnish: "Half an orange slice",
    preparation:
      "Build into old fashioned glass filled with ice cubes. Add a splash of soda water.",
  },
  {
    _id: "aa8381956049978f0012e19857388ddc",
    name: "Singapore Sling",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 3,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Cherry liqueur",
      },
      {
        unit: "cl",
        amount: 0.75,
        ingredient: "Triple Sec",
        label: "Cointreau",
      },
      {
        unit: "cl",
        amount: 0.75,
        ingredient: "DOM Bénédictine",
      },
      {
        unit: "cl",
        amount: 12,
        ingredient: "Pineapple juice",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Lime juice",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Syrup",
        label: "Grenadine",
      },
      {
        special: "1 dash Angostura bitters",
      },
    ],
    garnish: "Pineapple slice and a cherry",
    preparation: "Shake with ice cubes. Strain into highball glass.",
  },
  {
    _id: "aa8381956049978f0012e19955670bd3",
    name: "French Connection",
    glass: "old-fashioned",
    ingredients: [
      {
        unit: "cl",
        amount: 3.5,
        ingredient: "Cognac",
      },
      {
        unit: "cl",
        amount: 3.5,
        ingredient: "DiSaronno",
      },
    ],
    preparation:
      "Build into old fashioned glass filled with ice cubes. Stir gently.",
  },
  {
    _id: "aa8381956049978f0012e19a580d72f2",
    name: "Moscow Mule",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 12,
        ingredient: "Ginger beer",
      },
      {
        unit: "cl",
        amount: 0.5,
        ingredient: "Lime juice",
      },
      {
        special: "1 slice lime in a highball glass",
      },
    ],
    garnish: "Lime slice",
    preparation: "Combine the vodka and ginger beer. Add lime juice.",
  },
  {
    _id: "aa8381956049978f0012e19b1dd17ace",
    name: "John Collins",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Lemon juice",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
      {
        unit: "cl",
        amount: 6,
        ingredient: "Soda water",
      },
    ],
    garnish: "Lemon slice and a cherry",
    preparation:
      "Build into highball glass filled with ice. Stir gently. Add a dash of Angostura bitters. (Note: Use Old Tom Gin for Tom Collins)",
  },
  {
    _id: "aa8381956049978f0012e19c19cb51c9",
    name: "Kir",
    glass: "white-wine",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 9,
        ingredient: "Dry White Wine",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Créme liqueur",
        label: "Créme de Cassis",
      },
    ],
    preparation:
      "Pour Créme de Cassis into glass, top up with white wine. For Kir Royal: Use champagne instead of white wine.",
  },
  {
    _id: "aa8381956049978f0012e19d00f81371",
    name: "Mint Julep",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 6,
        ingredient: "Whiskey",
        label: "Bourbon whiskey",
      },
      {
        special: "4 fresh mint sprigs",
      },
      {
        special: "1 teaspoon powdered sugar",
      },
      {
        special: "2 teaspoons water",
      },
    ],
    garnish: "Mint sprig",
    preparation:
      "In a highball glass gently muddle the mint, sugar and water. Fill the glass with cracked ice, add Bourbon and stir well until the glass is frost.",
  },
  {
    _id: "aa8381956049978f0012e19e158e39bc",
    name: "Tommy's Margarita",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Tequila",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Lime juice",
      },
      {
        special: "2 bar spoons of Agave nectar",
      },
    ],
    preparation: "Shake and strain into a chilled cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e19f442dbf8c",
    name: "Paradise",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 3.5,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Apricot brandy",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Orange juice",
      },
    ],
    preparation: "Shake with ice cubes. Strain into chilled cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1a0795fc1b8",
    name: "Dirty Martini",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 6,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Vermouth",
        label: "Dry vermouth",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Olive juice",
      },
    ],
    garnish: "Green olive",
    preparation:
      "Stir in mixing glass with ice cubes. Strain into chilled martini glass.",
  },
  {
    _id: "aa8381956049978f0012e1a11e6d60c6",
    name: "Champagne Cocktail",
    glass: "champagne-flute",
    category: "Sparkling Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 9,
        ingredient: "Champagne",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Cognac",
      },
      {
        special: "2 dashes Angostura Bitters",
      },
      {
        special: "1 sugar cube",
      },
    ],
    garnish: "Orange slice and a cherry",
    preparation:
      "Add dash of Angostura bitter onto sugar cube and drop it into champagne flute. Add cognac followed by pouring gently chilled champagne.",
  },
  {
    _id: "aa8381956049978f0012e1a27e6a0736",
    name: "Mary Pickford",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 6,
        ingredient: "White rum",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Cherry liqueur",
        label: "Maraschino",
      },
      {
        unit: "cl",
        amount: 6,
        ingredient: "Pineapple juice",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Syrup",
        label: "Grenadine",
      },
    ],
    preparation: "Shake and strain into a chilled large cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1a3604400b2",
    name: "Hemingway Special",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 6,
        ingredient: "White rum",
      },
      {
        unit: "cl",
        amount: 4,
        ingredient: "Grapefruit juice",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Cherry liqueur",
        label: "Maraschino",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Lime juice",
      },
    ],
    preparation: "Shake with ice cubes. Strain into a double cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1a467edf62f",
    name: "Dark 'n' Stormy",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 6,
        ingredient: "Dark rum",
      },
      {
        unit: "cl",
        amount: 10,
        ingredient: "Ginger beer",
      },
    ],
    garnish: "Lime wedge",
    preparation:
      "Build into highball glass filled with ice. Add rum first and top it with ginger beer.",
  },
  {
    _id: "aa8381956049978f0012e1a53dae1a20",
    name: "Ramos Fizz",
    glass: "highball",
    category: "Longdrink",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Lime juice",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Lemon juice",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
      {
        unit: "cl",
        amount: 6,
        ingredient: "Cream",
      },
      {
        special: "1 Egg white",
      },
      {
        special: "3 dashes Orange flower water",
      },
      {
        special: "2 drops Vanilla extract",
      },
      {
        special: "Soda water",
      },
    ],
    preparation:
      "Pour all ingredients (except soda) in a mixing glass, dry shake (no ice) for two minutes, add ice and hard shake for another minute. Strain into a highball glass without ice, top with soda.",
  },
  {
    _id: "aa8381956049978f0012e1a65e0c4fa0",
    name: "Russian Spring Punch",
    glass: "highball",
    category: "Sparkling Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 2.5,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 2.5,
        ingredient: "Lemon juice",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Créme liqueur",
        label: "Créme de Cassis",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Syrup",
        label: "Sugar syrup",
      },
    ],
    garnish: "Lemon slice and a blackberry",
    preparation:
      "Shake the ingredients and pour into highball glass. Top with Sparkling wine.",
  },
  {
    _id: "aa8381956049978f0012e1a70a6629cc",
    name: "God Father",
    glass: "old-fashioned",
    ingredients: [
      {
        unit: "cl",
        amount: 3.5,
        ingredient: "Whiskey",
        label: "Scotch whisky",
      },
      {
        unit: "cl",
        amount: 3.5,
        ingredient: "DiSaronno",
      },
    ],
    preparation:
      "Build into old fashioned glass filled with ice cubes. Stir gently.",
  },
  {
    _id: "aa8381956049978f0012e1a80e620576",
    name: "Cosmopolitan",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4,
        ingredient: "Vodka",
        label: "Citron Vodka",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Triple Sec",
        label: "Cointreau",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Lime juice",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Cranberry juice",
      },
    ],
    garnish: "Lime slice",
    preparation: "Shake with ice cubes. Strain into a large cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1a9685a5119",
    name: "Dry Martini",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 6,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Vermouth",
        label: "Dry vermouth",
      },
    ],
    preparation:
      "Stir in mixing glass with ice cubes. Strain into chilled martini glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
  },
  {
    _id: "aa8381956049978f0012e1aa247d55a2",
    name: "Between the Sheets",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 3,
        ingredient: "White rum",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Cognac",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Triple Sec",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Lemon juice",
      },
    ],
    preparation: "Shake with ice cubes. Strain into chilled cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1ab34bae55f",
    name: "Casino",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4,
        ingredient: "Gin",
        label: "Old Tom Gin",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Cherry liqueur",
        label: "Maraschino",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Orange Bitters",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Lemon juice",
      },
    ],
    garnish: "Lemon twist and a cherry",
    preparation: "Shake with ice cubes. Strain into chilled cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1ac40a17e48",
    name: "Caipirinha",
    glass: "old-fashioned",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 5,
        ingredient: "Cachaca",
      },
      {
        special: "half fresh lime cut into 4 wedges",
      },
      {
        special: "2 teaspoon sugar",
      },
    ],
    preparation:
      "Place lime and sugar in old fashion glass and muddle. Fill glass with ice and Cachaca (note:Caipiroska- use Vodka instead of Cachaca).",
  },
  {
    _id: "aa8381956049978f0012e1ad66aec48a",
    name: "Vampiro",
    glass: "highball",
    ingredients: [
      {
        unit: "cl",
        amount: 5,
        ingredient: "Tequila",
        label: "Silver Tequila",
      },
      {
        unit: "cl",
        amount: 7,
        ingredient: "Tomato juice",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Orange juice",
      },
      {
        unit: "cl",
        amount: 1,
        ingredient: "Lime juice",
      },
      {
        special: "1 teaspoon clear honey",
      },
      {
        special: "Half slice onion finely chopped",
      },
      {
        special: "Few slices fresh red hot chili peppers",
      },
      {
        special: "Few drops Worcestershire sauce",
      },
      {
        special: "Salt",
      },
    ],
    garnish: "Lime wedge and a green or red chili",
    preparation:
      "Shake with ice cubes. Strain into a highball glass, filled with ice.",
  },
  {
    _id: "aa8381956049978f0012e1ae6a34eac1",
    name: "Kamikaze",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 3,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Triple Sec",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Lime juice",
      },
    ],
    preparation: "Shake and strain into a chilled cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1af376f2c54",
    name: "White Lady",
    glass: "martini",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4,
        ingredient: "Gin",
      },
      {
        unit: "cl",
        amount: 3,
        ingredient: "Triple Sec",
      },
      {
        unit: "cl",
        amount: 2,
        ingredient: "Lemon juice",
      },
    ],
    preparation: "Shake with ice cubes. Strain into large cocktail glass.",
  },
  {
    _id: "aa8381956049978f0012e1b057e47da7",
    name: "Harvey Wallbanger",
    glass: "highball",
    category: "All Day Cocktail",
    ingredients: [
      {
        unit: "cl",
        amount: 4.5,
        ingredient: "Vodka",
      },
      {
        unit: "cl",
        amount: 1.5,
        ingredient: "Galliano",
      },
      {
        unit: "cl",
        amount: 9,
        ingredient: "Orange juice",
      },
    ],
    garnish: "Orance slice and a cherry",
    preparation:
      "Build vodka and orange juice into a highball glass filled with ice. Stir gently and float Galliano on top.",
  },
];
