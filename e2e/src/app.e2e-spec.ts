import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSendButton() {
    return element(by.css('app-root .button-send'));
  }

  getAddButton() {
    return element(by.css('app-root .button-add'));
  }

  getResault() {
    return element(by.css('.result'));
  }

  getResaultElements() {
    return element.all(by.css('.result > .result__item'));
  }
}

describe('App Page e2e: "/"', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('App title', () => {
    expect(browser.getTitle()).toEqual('AngularTests');
  });

  it('App H1 check', () => {
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('App check send button', () => {
    expect(page.getSendButton().isDisplayed()).toBeTruthy();
  });

  it('App check add button', () => {
    expect(page.getAddButton().isDisplayed()).toBeTruthy();
  });

  it('App click send button', () => {
    page.getSendButton().click();
    expect(page.getResault().isDisplayed()).toBeTruthy();
    expect(page.getResaultElements().count()).toBeGreaterThan(10);
  });

  it('App click add button', () => {
    page.getSendButton().click();
    const count = page.getResaultElements().count();
    page.getAddButton().click();
    expect(page.getResault().isDisplayed()).toBeTruthy();
    expect(page.getResaultElements().count()).toBeGreaterThan(count);
  });
});
