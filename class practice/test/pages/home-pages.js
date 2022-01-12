import NavBar from './components/nav-comp.js';

class HomePage  {
  open(){
    return browser.url("/");
  }
  get btnGetStarted() {
    return $("#get-started");
  }
  get heading() {
    return $(".elementor-widget-container h1");
  }
  get navBar() {
    return NavBar;
  }
}

export default new HomePage();
