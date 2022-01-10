describe('Contact Page Assertation', () => {
  it("fill all the input fields", async () => {
    // opening browse
    await browser.url("/");

    // click the contact button
    await $("#menu-item-493 a").click();

    // get the name input field
    let name = await $("#evf-277-field_ys0GeZISRs-1");

    // add name value on name input field
    await name.addValue("Juel Hossain");

    //get email input field
    let email = await $("#evf-277-field_LbH5NxasXM-2");

    //add email value on email field
    await email.addValue("jrrahman01@gmail.com");

    //get phone input filed
    let phone = await $("#evf-277-field_66FR384cge-3");

    //add phone number on phone field
    await phone.addValue("01234567891");

    //get the text area
    let message = await $("#evf-277-field_yhGx3FOwr2-4");

    //add some text on message field
    await message.addValue("hello this is a message");
  });
     
  it('submit the form && assert the notice', async () => {
      
      //get the submit button
      let submit = await $("#evf-submit-277");

      //click the submit button
      await submit.click();

      //expected text after submitting the form

      // "Thanks for contacting us! We will be in touch with you shortly"
      let notice = await $(".everest-forms-notice");

      //match the text
      await expect(notice).toHaveText(
        "Thanks for contacting us! We will be in touch with you shortly"
      );

    });
});