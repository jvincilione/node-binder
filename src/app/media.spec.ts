import { Media } from './media';

describe('Media', () => {
  let testMedia = {
    id: 1,
    title: 'my sermon',
    src: 'test/url',
    type: 'audio'
  };

  it('should create an instance', () => {
    expect(new Media(testMedia)).toBeTruthy();
  });

  it('should set values from the constuctor', () => {
    let media = new Media(testMedia);

    expect(media).toBeTruthy();
    expect(media.id).toEqual(1);
    expect(media.title).toEqual('my sermon');
    expect(media.src).toEqual('test/url');
    expect(media.type).toEqual('audio');
  });
});
