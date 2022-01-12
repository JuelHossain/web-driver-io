class HomePage  {
  open(){
    return browser.url("/");
  }
  get btnGetStarted() {
    return $("#get-started");
  }
  get logo() {
    return $(`//img[@alt="Practice E-Commerce Site"]`);
  }
  get heading() {
    return $(".elementor-widget-container h1");
  }
}

export default new HomePage();
