import { IaProjectPage } from './app.po';

describe('ia-project App', () => {
  let page: IaProjectPage;

  beforeEach(() => {
    page = new IaProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
