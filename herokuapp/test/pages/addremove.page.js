import Home from './home.page';
class Ar{
  open() {
    Home.element('Add/Remove Elements');
  }
  get heading() {
    return $('h3');
  }
  get addElement() {
    return $('=Add element');
  }
  get delete() {
    return $('=Delete');
  }
}
export default new Ar;