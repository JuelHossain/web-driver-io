class Home {
  open() {
    browser.url(`/`);
  }
  get heading() {
    return $('h1');
  }
  get subHeading() {
    return $('h2');
  }
  async element(innerText) {
    await $('li').$(`=${innerText}`).click();
  }
} 

export default new Home;