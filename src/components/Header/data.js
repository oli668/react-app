export const navItems = [
  {
    id: "categories",
    content: { ch: "分类", us: "Categories" },
    name: "categories",
    isSubmenu: true,
  },
  {
    id: "blog",
    content: { ch: "论坛", us: "Blog" },
    name: "blog",
    isSubmenu: true,
  },
  {
    id: "tools",
    content: { ch: "器具", us: "Tools" },
    name: "tools",
    isSubmenu: true,
  },
];
export const subMenuMap = {
  liqours: { us: "Base", ch: "基酒" },
  tastes: { us: "Taste", ch: "味道" },
  categories: { us: "Make", ch: "调配方式" },
};
// only need modify id for matching.
export const dropdownMenuList = {
  categories: {
    liqours: [
      {
        id: "liqour_001",
        content: {
          us: "Gin",
          ch: "金酒",
        },
      },
      {
        id: "liqour_002",
        content: {
          us: "Rum",
          ch: "朗姆酒",
        },
      },
      {
        id: "liqour_003",
        content: {
          us: "Whiskey",
          ch: "威士忌",
        },
      },
      {
        id: "liqour_004",
        content: {
          us: "Brandy",
          ch: "白兰地",
        },
      },
      {
        id: "liqour_005",
        content: {
          us: "Liquer",
          ch: "利口酒",
        },
      },
      {
        id: "liqour_006",
        content: {
          us: "Tequila",
          ch: "龙舌兰",
        },
      },
      {
        id: "liqour_007",
        content: {
          us: "Vodka",
          ch: "伏特加",
        },
      },
      {
        id: "liqour_008",
        content: {
          us: "Other",
          ch: "其他",
        },
      },
    ],
    tastes: [
      {
        id: "taste_001",
        content: {
          us: "Bitter",
          ch: "苦",
        },
      },
      {
        id: "taste_002",
        content: {
          us: "Sweet",
          ch: "甜",
        },
      },
      {
        id: "taste_003",
        content: {
          us: "Sour",
          ch: "酸",
        },
      },
      {
        id: "taste_004",
        content: {
          us: "Refreshing",
          ch: "清爽",
        },
      },
      {
        id: "taste_005",
        content: {
          us: "Fruity",
          ch: "水果",
        },
      },
      {
        id: "taste_006",
        content: {
          us: "Smoky",
          ch: "烟熏",
        },
      },
      {
        id: "taste_007",
        content: {
          us: "Herbaceous",
          ch: "草药",
        },
      },
      {
        id: "taste_008",
        content: {
          us: "Other",
          ch: "其他",
        },
      },
    ],
    categories: [
      {
        id: "category_001",
        content: {
          us: "Longdrink",
          ch: "长饮",
        },
      },
      {
        id: "category_002",
        content: {
          us: "Hot Drink",
          ch: "热饮",
        },
      },
      {
        id: "category_003",
        content: {
          us: "Before Dinner Cocktail",
          ch: "餐前鸡尾酒",
        },
      },
      {
        id: "category_004",
        content: {
          us: "After Dinner Cocktail",
          ch: "餐后鸡尾酒",
        },
      },
      {
        id: "category_005",
        content: {
          us: "All Day Cocktail",
          ch: "全天鸡尾酒",
        },
      },
      {
        id: "category_006",
        content: {
          us: "Sparkling Cocktail",
          ch: "气泡鸡尾酒",
        },
      },
      {
        id: "category_007",
        content: {
          us: "Other",
          ch: "其他",
        },
      },
    ],
  },
  blog: {},
  tools: {},
};

export const IntroductionPageNavItems = [
  {
    id: "about",
    content: { ch: "关于我们", us: "About us" },
    name: "about",
    isSubmenu: true,
  },
  {
    id: "missions",
    content: { ch: "我们的业务", us: "What we do" },
    name: "do",
    isSubmenu: true,
  },
  {
    id: "join",
    content: { ch: "加入我们", us: "Join us" },
    name: "join",
    isSubmenu: true,
  },
];
