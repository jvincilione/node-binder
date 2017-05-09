import { LandmarkBaptistPage } from './app.po';

describe('landmark-baptist App', () => {
  let page: LandmarkBaptistPage;

  beforeEach(() => {
    page = new LandmarkBaptistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
