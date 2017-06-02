import { Media } from './media';

export class Page {
  id: Number;
  slug: String;
  title: String;
  content: String;
  header: String;
  media: Media[] = [];

  constructor(page) {
    this.id = page.id;
    this.slug = page.slug;
    this.title = page.title;
    this.content = page.content;
    this.header = page.header;
  }

  addMedia(media): void {
    this.media.push(new Media(media));
  }
}
