import Cart from '../pages/cart.page';
import Header from '../pages/components/Header';
import Home from '../pages/home.page';
import LoginPage from '../pages/login.page';


describe('It should', () => {

  it(' login', async () => {
    await LoginPage.login();
  })
  it(' check the url and title', async () => {
    await expect(browser).toHaveUrlContaining('inventory.html');
    await expect(browser).toHaveTitle(Home.title);
  })
  it(' add items to the cart', async () => {
    await Home.addToCart(5);
  })
  it(' go to cart and check the cart size', async () => {
    await Header.cart.click();
    await expect(Cart.cartSize).toHaveText("5");
  })
  it(' go back and remove items', async () => {
    await Cart.continueShopping.click();
    await expect(Home.products).toHaveText('PRODUCTS');
    await Home.removeItems(2);
  })
  it(' check the cart size again', async () => {
     await Header.cart.click();
     await expect(Cart.cartSize).toHaveText('3');
  })
  it(' checkout', async () => {
    await Cart.checkout();
  })
  it(' check the infromation', async () => {
    await Cart.checkInformation();
    await Cart.finish.click();
    await expect(Cart.thankYou).toHaveText("THANK YOU FOR YOUR ORDER");
  })
  it(" logout", async () => {
    await Header.menu.click();
    await Header.logout.click();
    expect(browser).toHaveUrl("https://www.saucedemo.com/");
  });
})