export interface ILoginDTOType {
  userName : string,
  password : string,
}
  
export interface ILoginResult {
  result: {
    token: TokenType      
  },
  statusCode: number
}
  
export type TokenType = {
  accessToken: string
}
  
