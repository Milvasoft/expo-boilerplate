/**
 * Enum representing the available routes in the application.
 */
export enum Routes {
  Home = 'Home',
  Login = 'Login',
  Profile = 'Profile',
  Settings = 'Settings',
  Post = 'Post'
}

/**
 * Represents the parameter types for the root stack navigation.
 */
export type RootStackParams = {
  [Routes.Home]: undefined;
  [Routes.Login]: undefined;
};

/**
 * Represents the parameter types for the profile stack routes.
 */
export type ProfileStackParams = {
  [Routes.Profile]: undefined;
  [Routes.Settings]: undefined;
  [Routes.Post]: { id: string, username: string };
};

/**
 * Represents the navigation parameters for the root stack.
 */
export type NavigationParams = RootStackParams;

export default Routes
