export const navItems = [
  { id: "home", content: "Home", name: "", isSubmenu: false },
  {
    id: "categories",
    content: "Categories",
    name: "categories",
    isSubmenu: true,
  },
  { id: "blog", content: "Blog", name: "blog", isSubmenu: true },
  {
    id: "tools",
    content: "Tools",
    name: "tools",
    isSubmenu: true,
  },
];
// only need modify id for matching.
export const dropdownMenuList = {
  categories: {
    spirits: [
      { id: 0, content: "Gin" },
      { id: 1, content: "Rum" },
      { id: 2, content: "Whiskey" },
      { id: 3, content: "Brandy" },
      { id: 4, content: "Liquer" },
      { id: 5, content: "Tequila" },
      { id: 6, content: "Vodka" },
      { id: 8, content: "Vermouth" },
      { id: 9, content: "More Spirit" },
    ],
    flavors: [
      { id: 1, content: "Bitter" },
      { id: 2, content: "Sweet" },
      { id: 4, content: "Sour" },
      { id: 3, content: "Savory" },
      { id: 5, content: "Fruity" },
      { id: 6, content: "Smoky" },
      { id: 7, content: "Herbaceous" },
    ],
    preparation: [
      { id: 1, content: "On the Rock" },
      { id: 2, content: "Up cocktails" },
      { id: 3, content: "Neat" },
      { id: 4, content: "Shaken" },
      { id: 5, content: "Built in glass" },
      { id: 6, content: "Stirred" },
      { id: 7, content: "Heated" },
      { id: 8, content: "Frozen/Blened" },
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
  tools: {
    glass: [{ id: 1, content: "metal" }],
  },
};
