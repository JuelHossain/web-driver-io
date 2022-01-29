describe('testing with accessiblity id', () => {
  it('click on App & assert', async () => {
    //find the element
    const appOption = await $('~App');
    //click on the element
    await appOption.click();
    //find action bar 
    const ActionBar = await $('~Action Bar');
    await expect(ActionBar).toHaveText('Action Bar');
  });
  it('Find element by class name', async () => {
    //find element by class name
    const className = await $("android.widget.TextView");
    console.log(await className.getText());

    //assertion
    await expect(className).toHaveText("API Demos");

  })
  it('Find multiple elements', async () => {
    //find multiple elements
    const textList = await $$('android.widget.TextView');
    // loop through them 
    const expectedList = [
  "API Demos",
  "Action Bar",
  "Activity",
  "Alarm",
  "Alert Dialogs",
  "Device Admin",
  "Fragment",
  "Launcher Shortcuts",
  "Loader",
  "Menu",
  "Notification",
  "Search",
  "Service",
  "Text-To-Speech",
  "Voice Recognition"];
    const actualList = [];
    for (const e of textList) {
      actualList.push(await e.getText());
    }
    //assert the list
    await expect(actualList).toEqual(expectedList);
  })
  it('Find elements by Xpath', async () => {
    //xpath - (//tagname[@attribute=value])
    //find by content-desc
    const alertDialogs = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
    await alertDialogs.click();

    //find by resource id
    const listDialogs = await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    );
    await listDialogs.click();
    //find by text
    const commandTwo = await $(
      '//android.widget.TextView[@text="Command two"]'
    );
    await commandTwo.click();

    //find by class
    const text = await $('//android.widget.TextView');
    await expect(text).toHaveText("You selected: 1 , Command two");
  })
  it('Find elements by UIAutomator', async () => {
    //find by text contains
    await $('android=new UiSelector().textContains("alert")').click();
  })
})