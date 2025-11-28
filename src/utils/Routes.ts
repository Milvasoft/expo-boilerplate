/**
 * Enum representing the available routes in the application.
 */
export enum Routes {
  Onboarding = "Onboarding",
  Login = "Login",
  Signup = "Signup",
  Home = "Home",
  Profile = "Profile",
  News = "News",
  NewsDetail = "NewsDetail",
  Settings = "Settings",
}

/**
 * Represents the parameter types for the root stack navigation.
 */
export type RootStackParams = {
  [Routes.Onboarding]: undefined;
  [Routes.Login]: undefined;
  [Routes.Signup]: undefined;
  [Routes.Home]: undefined;
  [Routes.NewsDetail]: undefined;
  [Routes.Settings]: undefined;
};

/**
 * Represents the navigation parameters for the root stack.
 */
export type NavigationParams = RootStackParams;

export default Routes;
