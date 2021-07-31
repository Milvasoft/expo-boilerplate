
export interface IGlobalState {
  isSignedIn: boolean,
  userColorScheme: string,
  user: unknown,
}
export interface IGlobalStateChangeType {
  property : string,
  value: unknown
}
