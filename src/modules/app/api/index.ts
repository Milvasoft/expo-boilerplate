import Network from '@utils/network';
import { IAccountInfoDTO } from '../utils/Types';
import * as Routes from './routes';

export function personnelLogin(LoginDTO: any) {

  return Network.post<IAccountInfoDTO>({
    url: Routes.sigIn,
    data: LoginDTO,
    successMessaging: false,
  });

}

export function personnelSignOut(data: any) {

  return Network.post({
    url: Routes.sigOut,
    data,
    errorMessaging: false,
    successMessaging: false,
  });

}
