import * as actionTypes from "./actionTypes";
import { MenuAction, MenuState } from "@/types"


const initGlobalState: MenuState = {
  openedMenu: [], // 保存已经打开的菜单栏 用于侧边栏
  openMenuKey: [], // 打开的菜单栏的key  用于顶部导航
  selectMenuKey: [], // 选中菜单栏的key  用户侧边栏
};

export default function reducer(state = initGlobalState, action: MenuAction): MenuState {
  const { type, menuItem, key, keys } = action;
  switch (type) {
    case actionTypes.ADDOPENTMENU: {
      if (menuItem && !state.openedMenu.find((i) => i.path === menuItem.path)) {
        const openedMenu = [...state.openedMenu];
        openedMenu.push(menuItem);
        return { ...state, openedMenu };
      }
      return state;
    }
    case actionTypes.SET_OPENKEY: {
      let oldKeys = state.openMenuKey;
      let isSame = keys.every((item, index) => item === oldKeys[index]);
      let flag = keys.length === oldKeys.length && isSame;
      if (flag) {
        return state;
      }
      return { ...state, openMenuKey: keys };
    }
    case actionTypes.SET_SELECTKEY: {
      if (state.selectMenuKey[0] === keys[0]) {
        return state;
      }
      return { ...state, selectMenuKey: keys };
    }
    case actionTypes.FILTER_OPENKEY: {
      const openedMenu = state.openedMenu.filter((i) => i.path !== key);
      if (state.openedMenu.length === openedMenu.length) {
        return state;
      }
      return { ...state, openedMenu };
    }
    default: {
      return state;
    }
  }
}