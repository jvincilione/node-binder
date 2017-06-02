interface Page {
  id:number;
  title:string;
  slug:string;
  content:string;
  createdDate:Date;
  author:number;
  parent:number;
  updated:Date;
}

export { Page };
