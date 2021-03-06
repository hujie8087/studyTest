import React from "react";
import { addOpenedMenu, setOpenKey, setSelectKey } from "@/store/menu/action";
import { connect } from "react-redux";
import { getCurrentUrl, getMenuParentKey } from "@/utils";
import Error from "@pages/err";
import { OpenedMenu, State, Dispatch, MenuList } from "@/types";

const mapStateToProps = (state: State) => ({
  openMenus: state.menu.openedMenu,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addOpenedMenuFn: (val: OpenedMenu) => dispatch(addOpenedMenu(val)),
  setSelectedKeys: (val: string[]) => dispatch(setSelectKey(val)),
  setOpenKeys: (val: string[]) => dispatch(setOpenKey(val)),
});


interface Props {
  path: string
  title: string
  pageKey: string
  openMenus: State["menu"]["openedMenu"]
  setOpenKeys: (val: string[]) => void
  setSelectedKeys: (val: string[]) => void
  addOpenedMenuFn: (val: OpenedMenu) => void
  type: string
  components: React.SFC
  userInfo: State["user"]
  menuList: MenuList
  [key: string]: any
}

class Intercept extends React.Component<Props, any> {
  // eslint-disable-next-line
  constructor(props: any, context: any) {
    super(props, context);
    if (this.props.cacheLifecycles) {
      this.props.cacheLifecycles.didRecover(this.componentDidRecover);
    }
  }
  componentDidMount() {
    this.setInfo();
    this.scrollToTop();
  }
  setInfo = async () => {
    const {
      title,
      pageKey,
      openMenus,
      setOpenKeys,
      setSelectedKeys,
    } = this.props;
    if (!title) {
      return;
    }
    document.title = title;
    const pagePath = getCurrentUrl();
    const findInfo = openMenus.find((i) => i.path === pagePath);
    setSelectedKeys([pageKey]);
    let openkey: string | undefined | string[] = await getMenuParentKey(pageKey);
    openkey = openkey ? [openkey] : [];
    setOpenKeys(openkey);
    this.addMenus(findInfo, pageKey, pagePath, title);
  };
  //
  componentDidRecover = () => {
    this.setInfo();
    this.scrollToTop();
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  addMenus = (info: OpenedMenu | undefined, key: string, path: string, title: string) => {
    if (!info) {
      this.props.addOpenedMenuFn({
        key,
        path,
        title,
      });
    }
  };

  render() {
    const {
      path,
      title,
      pageKey,
      openMenus,
      setOpenKeys,
      setSelectedKeys,
      addOpenedMenuFn,
      components: Components,
      menuList,
      ...itemProps
    } = this.props;
    const hasPath = !menuList.find(
      (m) => (m.parentPath || "") + m.path === path
    );
    if (hasPath && path !== "/") {
      return (
        <Error
          {...itemProps}
          status="403"
          errTitle="????????????"
          subTitle="Sorry, you are not authorized to access this page."
        />
      );
    }
    return <Components {...itemProps} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intercept);
