const { driverConfig } = require("appium/build/lib/cli/args")

describe('Android Native Feature Tests', () => {
  it('Access an Acitivity directly', async () => {
    //access activity
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );
    //assertion.
    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
  })
  it('dialog box', async () => {
    // click the first dialog box 
    await $("//android.widget.Button[@index='0']").click();
    // accept the alert
    // await driver.acceptAlert();
    // dismiss the allert
    // await driver.dismissAlert();
    // assertion - alert box is no longer visible. 
    console.log("ALERT TEXT ==>", await driver.getAlertText());
    // click on okey button 
    await $('//*[@resource-id="android:id/button1"]').click();
    // get alert text 
    
    //click on cancal button 
    // await $('//*[@resource-id="android:id/button2"]').click();
    await expect($("android.widget.TextView[@index='1']")).not.toExist();
  })
  it('Vertical Scrolling', async () => { 
    // landing on the api demos 
    await $('~App').click();
    await $('~Activity').click();
    // scrolling by ui automator to the end
    // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    //scroll text into view.
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();
    // await $('~Secure Surfaces').click();
    // assertion 
    await expect($('~Secure Dialog')).toExist();

  })
  it.only('horizontal Scrollling', async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.Gallery1"
    );

    //horizontal scrolling to forward
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );
    //horizontal scrolling to backward
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()"
    );
  })
})