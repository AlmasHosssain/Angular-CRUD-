import { ISKills } from './ISKills';

export interface IUser{
  id : string,
  name : string,
  email : string,
  password : string,
  skills : ISKills[]
}
