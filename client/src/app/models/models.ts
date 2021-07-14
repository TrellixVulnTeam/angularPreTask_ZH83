export class Server {
  ID: number = 0;
  ServerName: string = '';
  CompanyName: string = '';
  IP: number = 0;
  CompanyID: number = 0;
  Status: number = 0;
  createdAt: string = '';

  constructor(
    ID?: number,
    ServerName?: string,
    CompanyName?: string,
    IP?: number,
    Status?: number,
    createdAt?: string
  ) {
    this.ID = ID || 0;
    this.ServerName = ServerName || '';
    this.CompanyName = CompanyName || '';
    this.IP = IP || 0;
    this.Status = Status || 0;
    this.createdAt = createdAt || '';
  }
}

export class Action {
  ID: number = 0;
  AccountID: number = 0;
  ActionType: number = 0;
  Amount: number = 0;
  Credit: number = 0;
  payQnt: number = 0;
  createdAt: string = '';

  constructor(
    ID?: number,
    AccountID?: number,
    ActionType?: number,
    Amount?: number,
    Credit?: number,
    payQnt?: number,
    createdAt?: string
  ) {
    this.ID = ID || 0;
    this.AccountID = AccountID || 0;
    this.ActionType = ActionType || 0;
    this.Amount = Amount || 0;
    this.Credit = Credit || 0;
    this.payQnt = payQnt || 0;
    this.createdAt = createdAt || '';
  }
}
