import Cart from '../pages/cart-pages.js';

describe('uploading file', () => {
  it('simple upload test', async() => {
    // /opening browser
    await Cart.open();

    //making file path
    const filePath = Cart.path.join(__dirname, '../data/images/Untitled-1.png');
    
    //uploding to chrome driver
    const remoteFilePath = await browser.uploadFile(filePath);

    //making upload option visible
    await browser.execute(Cart.visible);
    
    //uploding the file
    await Cart.choose.setValue(remoteFilePath);

    //submitting file
    await Cart.upload.click();

    //assertation

    await (Cart.message).waitForDisplayed({ timeout: 30000 });
    await expect(Cart.message).toHaveTextContaining("uploaded successfully");

  });
});