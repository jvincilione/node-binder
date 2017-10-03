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
    this.slug = page.page_slug;
    this.title = page.page_title;
    this.content = page.page_content;
    this.header = page.page_header;
  }

  addMedia(media): void {
    this.media.push(new Media(media));
  }
}
