import Contact from "../pages/contact-pages.js";

describe('Contact Page Assertation', () => {
  it("fill all the input fields", async () => {
    // opening contact page
    await Contact.open();

    // filling the form
    await Contact.fillingForm('test name', 'test@email.com', '0123456789', 'this is a text message');
  });
     
  it('submit the form && assert the notice', async () => {
      
      //click the submit button
    await Contact.submit.click();
    
      //match the text
      await expect(Contact.notice).toHaveText(
        "Thanks for contacting us! We will be in touch with you shortly"
    );
    
    });
});