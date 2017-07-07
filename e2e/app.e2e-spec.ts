import { NgOlPage } from './app.po';

describe('ng-ol App', () => {
  let page: NgOlPage;

  beforeEach(() => {
    page = new NgOlPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
