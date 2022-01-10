const exp = require('constants');
const path = require('path');

describe('uploading file', () => {
  it('simple upload test', async() => {
    // /opening browser
    await browser.url('/cart/');

    //making file path
    const filePath = path.join(__dirname, '../images/Untitled-1.png')
    
    //uploding to chrome driver
    const remoteFilePath = await browser.uploadFile(filePath);

    //making upload option visible
    await browser.execute('document.getElementById("upfile_1").className=""');
    //uploding the file
    await $("#upfile_1").setValue(remoteFilePath);

    //submitting file
    await $("#upload_1").click();

    //assertation
    const message = $("#wfu_messageblock_header_1_label_1");
    await (message).waitForDisplayed({ timeout: 30000 });
    await expect(message).toHaveTextContaining("uploaded successfully");

  });
});