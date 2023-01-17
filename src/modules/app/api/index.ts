import Network from '@utils/network';
import { IAccountInfoDTO } from '../types/IAccountInfoDTO';
import * as Routes from './routes';

export function login(LoginDTO: any) {

  return Network.post<IAccountInfoDTO>({
    url: Routes.sigIn,
    data: LoginDTO,
    successMessaging: false,
  });

}

export function lognOut(data: any) {

  return Network.post({
    url: Routes.sigOut,
    data,
    errorMessaging: false,
    successMessaging: false,
  });

}
