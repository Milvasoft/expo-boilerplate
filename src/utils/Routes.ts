export enum Routes {
  Home = 'Home',
  Login = 'Login',
  Profile = 'Profile',
  Settings = 'Settings',
  Post = 'Post'
}

export type RootStackParams = {
  [Routes.Home]: undefined;
  [Routes.Login]: undefined;
};

export type ProfileStackParams = {
  [Routes.Profile]: undefined;
  [Routes.Settings]: undefined;
  [Routes.Post]: { id: string, username: string };
};

export type NavigationParams = RootStackParams;

export default Routes
