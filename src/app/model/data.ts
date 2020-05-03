export interface IState {
  active: string;
  confirmed: string;
  deaths: string;
  deltaconfirmed: string;
  deltadeaths: string;
  deltarecovered: string;
  lastupdatedtime: string;
  recovered: string;
  state: string;
  statecode: string;
  statenotes: string;
}

export interface IDistrict {
  active: string;
  confirmed: string;
  deceased: string;
  delta: IDelta;
  notes: string;
  recovered: string;
}

export interface IDelta {
  confirmed: string;
  deceased: string;
  recovered: string;
}

export interface IAdmin {
  id: any;
  email: string;
  password: string;
}
