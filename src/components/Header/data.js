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
// only need modify id for matching.
export const dropdownMenuList = {
  categories: {
    基酒: [
      { id: 0, content: "琴酒 Gin" },
      { id: 1, content: "朗姆 Rum" },
      { id: 2, content: "威士忌 Whiskey" },
      { id: 3, content: "白兰地 Brandy" },
      { id: 4, content: "利口酒 Liquer" },
      { id: 5, content: "龙舌兰 Tequila" },
      { id: 6, content: "伏特加 Vodka" },
      { id: 8, content: "味美思 Vermouth" },
      { id: 9, content: "更多 More Spirit" },
    ],
    味道: [
      { id: 1, content: "苦 Bitter" },
      { id: 2, content: "甜 Sweet" },
      { id: 4, content: "酸 Sour" },
      { id: 3, content: "开胃 Savory" },
      { id: 5, content: "水果 Fruity" },
      { id: 6, content: "烟熏 Smoky" },
      { id: 7, content: "草药 Herbaceous" },
    ],
    准备方式: [
      { id: 1, content: "多冰 On the Rock" },
      { id: 2, content: "Up cocktails" },
      { id: 3, content: "干冰 Neat" },
      { id: 4, content: "摇晃 Shaken" },
      { id: 5, content: "玻璃杯 Built in glass" },
      { id: 6, content: "搅拌 Stirred" },
      { id: 7, content: "加热 Heated" },
      { id: 8, content: "冷冻 Frozen/Blened" },
    ],
  },
  blog: {
    news: [
      { id: 0, content: "new1" },
      { id: 1, content: "new2" },
      { id: 2, content: "new3" },
      { id: 3, content: "new4" },
    ],
    sports: [
      { id: 1, content: "dummy sport1" },
      { id: 2, content: "dummy sport1" },
      { id: 4, content: "dummy sport1" },
    ],
    goods: [
      { id: 1, content: "goods1" },
      { id: 2, content: "goods2" },
      { id: 3, content: "goods3" },
      { id: 4, content: "goods4" },
    ],
  },
  tools: {},
};
