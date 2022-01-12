class NavBar {
  get logo() {
    return $("img[alt='Practice E-Commerce Site']");
  }
  get navLinks() {
  return $$("#primary-menu li[id|=menu]");
  }
  get home() {
    return $("#menu-item-489");
  }
  get about() {
    return $("#menu-item-491");
  }
  get shop() {
    return $("#menu-item-567");
  }
  get blog() {
    return $("#menu-item-490");
  }
  get contact() {
    return $("#menu-item-493");
  }
  get myAccount() {
    return $("#menu-item-619");
  }
  get search() {
    return $("#primary-menu li[class*=search]");
  }
  get searchInput() {

    return $("#primary-menu li[class*=search] input");
  }
  get cart() {
    return $("#primary-menu li[class*=cart]");
  }
}

export default new NavBar();