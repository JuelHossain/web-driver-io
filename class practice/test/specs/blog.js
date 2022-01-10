describe('Exercise Multiple Elements', () => {
  it('Get the list of all recent Posts', async () => {
    //open the url
    await browser.url('/blog');
  
    // get the list of recent posts
    const recentPost = await $$("#recent-posts-3 ul li");

    //text lenght should be greater than 10
for (const post of recentPost) {
  const text = await post.getText();
  await expect(text.length).toBeGreaterThan(10);
}
    // the sizes of recent post item should be 5.
    await expect(recentPost).toHaveLength(5);

  });
});