const path = require('path');
class Cart {
  open() {
    return browser.url("/cart/");
  }
  get path() {
    return path;
  }
  get choose() {
    return $("#upfile_1");
  }
  get visible() {
    return `document.querySelector('#upfile_1').className = ""`;
  }
  get upload() {
    return $("#upload_1");
  }
  get message() {
    return $("#wfu_messageblock_header_1_label_1");
  }
}

export default new Cart;