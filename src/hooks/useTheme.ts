import { useAppSelector } from "@/store/hooks";
import { selectTheme, selectColorScheme } from "@/store/appSlice";

export function useTheme() {
  const colors = useAppSelector(selectTheme);
  const colorScheme = useAppSelector(selectColorScheme);
  const isDark = colorScheme === "dark";

  return { colors, colorScheme, isDark };
}
