export class Proposal {
  id: string;
  name: string;
  userName: string;
  userSurname: string;
  purpose: string;
  amount: string;
  bankAccount: string;
  status: string;
}

export enum Statuses {
  Draft,
  Sent,
  Approved
}
