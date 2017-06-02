export class Media {
  id: String;
  title: String;
  src: String;
  type: String;

  constructor(media) {
    this.id = media.id;
    this.title = media.title;
    this.src = media.src;
    this.type = media.type;
  }
}
