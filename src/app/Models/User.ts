export class User {
  userId: number;
  roleId: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
}

export enum Roles {
  Admin = 1,
  Client = 2,
  Submitter = 3
}
