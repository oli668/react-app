export const navItems = [
  { id: "home", content: "Home 首页", name: "", isSubmenu: false },
  { id: "spirits", content: "Spirits 基酒", name: "spirits", isSubmenu: true },
  { id: "flavors", content: "Flavors 口味", name: "flavors", isSubmenu: true },
  {
    id: "preparation",
    content: "Preparation 制作方式",
    name: "preparation",
    isSubmenu: true,
  },
];

export const dropdownMenuList = {
  spirits: [
    { id: 7, content: "Gin 琴酒" },
    { id: 1, content: "Rum 朗姆酒" },
    { id: 2, content: "Whiskey 威士忌" },
    { id: 3, content: "Brandy 白兰地" },
    { id: 4, content: "Liquer 利口酒" },
    { id: 5, content: "Tequila 龙舌兰" },
    { id: 6, content: "Vodka 伏特加" },
    { id: 8, content: "Vermouth 味美思" },
    { id: 9, content: "More Spirit 更多" },
  ],
  flavors: [
    { id: 1, content: "Bitter 苦" },
    { id: 2, content: "Sweet 甜" },
    { id: 4, content: "Sour 酸" },
    { id: 3, content: "Savory 开胃酒" },
    { id: 5, content: "Fruity 水果味" },
    { id: 6, content: "Smoky 烟熏味" },
    { id: 7, content: "Herbaceous 草药味" },
  ],
  preparation: [
    { id: 1, content: "On the Rock 有冰" },
    { id: 2, content: "Up cocktails 无冰" },
    { id: 3, content: "Neat cocktails" },
    { id: 4, content: "Shaken cocktails" },
    { id: 5, content: "Cocktails built in glass" },
    { id: 6, content: "Stirred cocktails" },
    { id: 7, content: "Heated cocktails" },
    { id: 8, content: "Frozen/Blened cocktails" },
  ],
};
