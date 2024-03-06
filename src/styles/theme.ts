/**
 * Represents the light theme colors.
 */
const LightTheme = {
    primary: '#f27a1a',
    secondary: '#202124', 
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(216, 216, 216)",
    notification: "rgb(255, 59, 48)",
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
    background: 'rgb(1, 1, 1)',
    card: 'rgb(18, 18, 18)',
    text: 'rgb(229, 229, 231)',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
};  
  
export {LightTheme, DarkTheme};