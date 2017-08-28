import { ZohoRdPage } from './app.po';

describe('zoho-rd App', () => {
  let page: ZohoRdPage;

  beforeEach(() => {
    page = new ZohoRdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
