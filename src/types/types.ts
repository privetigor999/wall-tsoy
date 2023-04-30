export interface ILink {
  title: string;
  route: string;
}

export interface IAuth {
  name: string;
  photo: string;
  email: string;
  uid: string;
  uuid: string;
  message: string;
  date: {
    nanoseconds: number;
    seconds: number;
  };
}
