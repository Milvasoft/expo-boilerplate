import useTheme from './useTheme';

/**
 * Custom hook that applies themed styles to a component.
 *
 * @template T - The type of the styles function.
 * @param {T} styles - The styles function that accepts the theme as an argument.
 * @returns {ReturnType<T>} - The result of applying the styles function to the current theme.
 */
const useThemedStyles = <T extends (...args: any) => any >(styles: any) : ReturnType<T> => styles(useTheme());

export default useThemedStyles;
