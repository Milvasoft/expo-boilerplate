/**
 * Custom hook to use Bottom Sheet
 */
import { useContext } from "react";
import { BottomSheetContext } from "@src/components/BottomSheetContainer";
import type { BottomSheetContextValue } from "@src/components/BottomSheetContainer/type";

/**
 * Hook to access bottom sheet functionality
 * @example
 * ```tsx
 * const { show, hide, isVisible } = useBottomSheet();
 *
 * show({
 *   content: <MyComponent />,
 *   snapPoints: ['50%', '90%'],
 * });
 * ```
 */
export const useBottomSheet = (): BottomSheetContextValue => {
  const context = useContext(BottomSheetContext);

  if (!context) {
    throw new Error("useBottomSheet must be used within BottomSheetProvider");
  }

  return context;
};
