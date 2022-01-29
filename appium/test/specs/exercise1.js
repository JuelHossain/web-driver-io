describe('exercise1', () => {
  it('adding text on text field', async () => {
    await $('~Views').click();
    await $('~Auto Complete').click();
    await $("~1. Screen Top").click();
    const textField = await $("android.widget.EditText");
    await textField.addValue("Canada");
    expect(textField).toHaveText('Canada');
  })
})