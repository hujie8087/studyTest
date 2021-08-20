const menuData = [
  {
    path: "home",
    title: "首页",
    auth: "",
    icon: "HomeOutlined",
    activePaths: [],
    exact: true,
    key: "home",
    component: () => import("../pages/Home"),
  },
  {
    path: "contact",
    title: "联系我们",
    auth: "",
    icon: "HomeOutlined",
    activePaths: [],
    exact: false,
    key: "contact",
    component: () => import("../pages/Contact"),
  },
];

export default menuData;
