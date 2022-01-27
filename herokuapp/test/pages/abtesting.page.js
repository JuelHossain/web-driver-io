import Home from "./home.page";
class Ab{
  open() {
    Home.element('A/B Testing');
  }
  get heading() {
    return $('h3');
  }
  get paragraph() {
    return $('p');
  }
}
export default new Ab;