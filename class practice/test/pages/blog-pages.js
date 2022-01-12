class Blog {
  open() {
    return browser.url("/blog");
  }
  get recentPostLists() {
    return $$("#recent-posts-3 ul li");
  }
}

export default new Blog;