

describe('Exercise 2', () => {
  it('change the date', async () => {
    // access the date picker 
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.DateWidgets1"
    );
    // get current date 
    const date = await $("//*[@resource-id='io.appium.android.apis:id/dateDisplay']");
    const currentDate = await date.getText();

    // change the date 
    const changeDate = await $('~change the date');
    await changeDate.click();
     
   await $(
     "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
   );

    // select the 20th february
    await $('//android.view.View[@content-desc="20 February 2022"]').click();
    // await $("//android.widget.Button[@text='OK']").click();
    await driver.acceptAlert();

    // verify the updated date 
    const changedDate = date.getText();
    await expect (changedDate).not.toEqual(currentDate);
    await expect(date).toHaveText("2-20-2022 01:02");

  })
})