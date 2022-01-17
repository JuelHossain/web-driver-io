
class Cart{
  get cartSize() {
    return $('[class*=badge]')
  }
  get continueShopping() {
    return $("#continue-shopping");
  }
  get checkoutButton() {
    return $("#checkout");
  }
  get firsName() {
    return $("input#first-name");
  }
  get lastName() {
    return $("input#last-name");
  }
  get postalCode() {
    return $("input#postal-code");
  }
  get error() {
    return $("[data-test=error]");
  }
  get continue() {
    return $("#continue");
  }
  get itemPrice() {
    return $$(".inventory_item_price");
  }
  get itemTotalPrice() {
    return $(".summary_subtotal_label");
  }
  get thankYou() {
    return $(".complete-header");
  }
  get finish() {
    return $("#finish");
  }
  get backHome() {
    return $("#back-to-products");
  }
  get informationLabel() {
    return $$(".summary_information_label");
  }
  get informationValue() {
    return $$(".summary_value_label");
  }
  async checkout() {
    await this.checkoutButton.click();
    await this.continue.click();
    await expect(this.error).toHaveText("Error: First Name is required");
    await this.firsName.setValue('juel');
    await this.lastName.setValue('hossain');
    await this.postalCode.setValue(1216);
    await this.continue.click();
  }
  async checkPrice() {
    const item = this.itemPrice;
    let itemPrice = 0;
    const itemPrices = [];
    await item.forEach(price => {
      itemPrices.push(price.getValue());
      console.log(itemPrices)
      console.log('this is the price');
    });
    console.log(`itemPrices${itemPrices}`);
    await itemPrices.forEach(price => {
      itemPrice += price;
    })
    console.log(itemPrices);
    await expect(this.itemTotalPrice).toHaveText('$'+itemPrice)
  }
  async checkInformation() {
    await expect(this.informationValue[0]).toHaveTextContaining("SauceCard");
    await expect(this.informationValue[1]).toHaveTextContaining(
      "EXPRESS DELIVERY"
    );
  }
}
export default new Cart;