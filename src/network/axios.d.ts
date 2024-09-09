import "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    withoutToast?: boolean;
  }
}
