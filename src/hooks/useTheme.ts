import { ThemeContext } from '@src/providers/ThemeProvider';
import { useContext } from 'react';

/**
 * Custom hook that returns the current theme from the ThemeContext.
 * @returns The current theme object.
 */
function useTheme() {

  return useContext(ThemeContext);

}

export default useTheme;
