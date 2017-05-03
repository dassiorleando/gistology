import { GistologyPage } from './app.po';

describe('gistology App', () => {
  let page: GistologyPage;

  beforeEach(() => {
    page = new GistologyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
