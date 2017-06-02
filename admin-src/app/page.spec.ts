import { Page } from './page';

describe('Page', () => {
  let page;
  let testPage = {
    id: 1,
    slug: 'Home',
    content: 'The quick brown fox jumps over the lazy dog.',
    title: 'Landmark Baptist Church'
  };

  it('should create an instance', () => {
    expect(new Page(testPage)).toBeTruthy();
  });

  it('should add page attributes when constructed', () => {
    page = new Page(testPage);
    expect(page.id).toEqual(1);
    expect(page.title).toEqual('Landmark Baptist Church');
    expect(page.slug).toEqual('Home');
    expect(page.content).toEqual('The quick brown fox jumps over the lazy dog.');
  });

  it('should add media', () => {
    page = new Page(testPage);

    page.addMedia({
      id: 1,
      title: 'my sermon',
      src: 'test/url',
      type: 'audio'
    });
    expect(page.media).toBeTruthy();
    expect(page.media.length).toEqual(1);
    expect(page.media[0].id).toEqual(1);
    expect(page.media[0].title).toEqual('my sermon');
    expect(page.media[0].src).toEqual('test/url');
    expect(page.media[0].type).toEqual('audio');
  });
});
