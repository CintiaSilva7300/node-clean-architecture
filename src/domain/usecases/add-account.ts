export interface AddAccountModel {
  name: string;
  email: string;
  password: string;
}

export interface AddACcount {
  add(account: AddAccountModel): AccountModel;
}
