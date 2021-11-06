export interface ILoginDTO {
  userName : string,
  password : string,
}
  
export type TokenType = {
  accessToken: string
}
  
export interface IAccountInfoDTO {
  id: string;
  nameSurname: string;
  position: string;
  userName: string;

}
