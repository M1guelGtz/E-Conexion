import { CanActivateFn } from '@angular/router';
import { Token } from '../environment/environment';

export const guardGuard: CanActivateFn = (route, state) => {
  if(Token.token != ""){
    return true
  }
  return false;
};
