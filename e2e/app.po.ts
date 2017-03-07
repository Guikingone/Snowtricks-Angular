import { browser, element, by } from 'protractor';

export class SnowtricksAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('Home a')).getText();
  }
}
