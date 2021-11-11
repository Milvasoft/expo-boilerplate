import useTheme from './useTheme';

const useThemedStyles = <T extends (...args: any) => any >(styles: any) : ReturnType<T> => styles(useTheme());

export default useThemedStyles;
