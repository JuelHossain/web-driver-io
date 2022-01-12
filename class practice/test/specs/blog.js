import Blog from '../pages/blog-pages.js';

describe('Exercise Multiple Elements', () => {
  it('Get the list of all recent Posts', async () => {
    //open the url
    await Blog.open();
  
    // get the list of recent posts
    const recentPost = await Blog.recentPostLists;

    //text lenght should be greater than 10
    for (const post of recentPost) {
      const text = await post.getText();
      expect(text.length).toBeGreaterThan(10);
    }
    // the sizes of recent post item should be 5.
    expect(recentPost).toHaveLength(5);

  });
});