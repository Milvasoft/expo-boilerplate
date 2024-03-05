/**
 * Represents the light theme colors.
 */
const LightTheme = {
    primary: '#f27a1a',
    secondary: '#202124',
  };
  
/**
 * Represents the type for the theme object.
 */
export type ITheme = typeof LightTheme;
  
/**
 * Dark theme object.
 */
const DarkTheme: ITheme = {
    primary: '#f27a1a',
    secondary: '#efefef',
};
  
export {LightTheme, DarkTheme};