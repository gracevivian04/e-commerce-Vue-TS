import { User } from '@/models/user'
import { Token } from '@/models/token'

//define user properties
export interface IUserState {
  token: string | null;
  user: User | null;
  isLoading: boolean;
}

//launch properties
function state(): IUserState {
  return {
    token: null,
    user: null, 
    isLoading: false,
  }
}

export default state;