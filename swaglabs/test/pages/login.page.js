

import Page from './components/OpenBrowser.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $("#login-button");
  }
  get usernames() {
    const random = Math.floor(Math.random() * 3);
    const usernameArray = [
      "standard_user",
      "locked_out_user",
      "problem_user",
      "performance_glitch_user",
    ];
    return usernameArray[random];
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  async login(username = 'standard_user', password = 'secret_sauce') {
    await this.open();
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("");
  }
}

export default new LoginPage();