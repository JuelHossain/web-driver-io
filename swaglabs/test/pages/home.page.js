
import Page from './components/OpenBrowser';
class Home extends Page {
  get title() {
    return "Swag Labs";
  }
  get url() {
    return "https://www.saucedemo.com/inventory.html";
  }
  get addButtons() {
    return $$("button=Add to cart");
  }
  get removeButtons() {
    return $$("button=Remove");
  }
  get products() {
    return $('span[class=title]')
  }

  async addToCart(items) {
   const buttons = await this.addButtons;
   for (let x = 0; x < buttons.length; x++) {
     if (x===items) {
       break;
     } else {
       await buttons[x].click();
     }
   }
  }
  async removeItems(items) {
    const buttons = await this.removeButtons;
      for (let x = 0; x <buttons.length; x++) {
        if (x===items) {
          break;
        } else {
          await buttons[x].click();
        }
      }
  }
}
export default new Home;