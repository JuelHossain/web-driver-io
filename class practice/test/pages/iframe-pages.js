class IFrame {
  open() {
    return browser.url("/iframe-sample/");
  }
  get iframe() {
    return $("iframe#advanced_iframe");
  }
  get pageHeader() {
    return $('h1.tg-page-header__title');
  }
  get iframeHeader() {
    return $("h1.ugb-cta__title");
  }
}
export default new IFrame;