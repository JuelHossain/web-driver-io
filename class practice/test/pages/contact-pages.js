class Contact {
  open() {
    return browser.url('/contact/');
  }
  get name() {
    return $("#evf-277-field_ys0GeZISRs-1");
  }
  get email() {
    return $("#evf-277-field_LbH5NxasXM-2");
  }
  get phone() {
    return $("#evf-277-field_66FR384cge-3");
  }
  get message() {
    return $("#evf-277-field_yhGx3FOwr2-4");
  }
  get submit() {
    return $("#evf-submit-277");
  }
  get notice() {
    return $(".everest-forms-notice");
  }
  async fillingForm(name,email,phone,message) {
    await this.name.addValue(name);
    await this.email.addValue(email);
    await this.phone.addValue(phone);
    await this.message.addValue(message);
  }
}

export default new Contact;