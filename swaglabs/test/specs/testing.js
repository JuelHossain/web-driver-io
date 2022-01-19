import faker from "@faker-js/faker";
import Cart from '../pages/cart.page';
import Header from '../pages/components/Header';
import Home from '../pages/home.page';
import LoginPage from '../pages/login.page';


describe('It should', () => {

  it('Login', async () => {
    await LoginPage.login();
  })
  it('Check the url and title', async () => {
    await expect(browser).toHaveUrlContaining('inventory.html');
    await expect(browser).toHaveTitle(Home.title);
  })
  it('Add items to the cart & check the cart size', async () => {
    await Home.addToCart(4);
    await expect(Cart.cartSize).toHaveText("4");
  })
  it('Go to cart and check cart title', async () => {
    await Header.cart.click();
    await expect(Cart.cartTitle).toHaveText('YOUR CART')
  })
  it(' go back and remove items', async () => {
    await Cart.continueShopping.click();
    await expect(Home.products).toHaveText('PRODUCTS');
    await Home.removeItems(2);
  })
  it(' check the cart size again', async () => {
    await Header.cart.click();
    await expect(Cart.cartSize).toHaveText('2');
  })
  it(' checkout & give info', async () => {
    await Cart.checkout();
    await Cart.giveInfo(
      faker.name.firstName(),
      faker.name.lastName(),
      faker.address.zipCode()
    );
  })
  it(' check the price and info', async () => {
    await Cart.checkPrice();
    await Cart.checkInformation();
  })
  it('Finish the order', async () => {
     await Cart.finish.click();
     await expect(Cart.thankYou).toHaveText("THANK YOU FOR YOUR ORDER");
  })
  it(" logout", async () => {
    await Header.menu.click();
    await Header.logout.click();
    expect(browser).toHaveUrl("https://www.saucedemo.com/");
  });
})