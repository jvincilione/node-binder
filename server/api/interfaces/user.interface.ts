interface User {
  id:number;
  email:string;
  login:string;
  pass:string;
  nicename?:string;
  registered:Date;
  displayName?:string;
  role:string;
}

export { User };
