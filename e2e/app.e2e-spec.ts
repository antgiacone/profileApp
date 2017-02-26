import { ProProfilePage } from './app.po';

describe('pro-profile App', function() {
  let page: ProProfilePage;

  beforeEach(() => {
    page = new ProProfilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
