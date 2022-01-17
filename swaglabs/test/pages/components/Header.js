class Header {
  get menu() {
    return $("#react-burger-menu-btn");
  }
  get cart() {
    return $("#shopping_cart_container");
  }
  get nav() {
    return $(".bm-item-list").$$("a");
  }
  get allItems() {
    return $("#inventory_sidebar_link");
  }
  get about() {
    return $("#about_sidebar_link");
  }
  get logout() {
    return $("#logout_sidebar_link");
  }
  get reset() {
    return $("#reset_sidebar_link");
  }
}
export default new Header;