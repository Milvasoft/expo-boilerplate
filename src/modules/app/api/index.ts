import Network from '@utils/network';
import { IAccountInfoDTO } from '../utils/Types';
import * as Routes from './routes';

export const personnelLogin = (LoginDTO: any) => Network.post<IAccountInfoDTO>({
  url: Routes.sigIn,
  data: LoginDTO,
  successMessaging: false,
});

export const personnelSignOut = (data: any) => Network.post({
  url: Routes.sigOut,
  data,
  errorMessaging: false,
  successMessaging: false,
});
