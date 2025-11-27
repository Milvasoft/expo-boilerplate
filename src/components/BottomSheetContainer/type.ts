/**
 * Bottom Sheet Container Types
 */
import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import type { BottomSheetProps as GorhomBottomSheetProps } from "@gorhom/bottom-sheet";

export interface BottomSheetConfig {
  /**
   * Content to render inside the bottom sheet
   */
  content: ReactNode;
  /**
   * Snap points for the bottom sheet (e.g., ['25%', '50%', '90%'])
   */
  snapPoints?: Array<string | number>;
  /**
   * Initial snap index
   * @default 0
   */
  initialSnapIndex?: number;
  /**
   * Enable backdrop
   * @default true
   */
  enableBackdrop?: boolean;
  /**
   * Enable dismiss on backdrop press
   * @default true
   */
  enableBackdropDismiss?: boolean;
  /**
   * Enable pan down to close
   * @default true
   */
  enablePanDownToClose?: boolean;
  /**
   * Callback when bottom sheet is dismissed
   */
  onDismiss?: () => void;
  /**
   * Callback when bottom sheet is opened
   */
  onOpen?: () => void;
  /**
   * Custom backdrop opacity
   * @default 0.5
   */
  backdropOpacity?: number;
  /**
   * Custom handle indicator style
   */
  handleIndicatorStyle?: ViewStyle;
  /**
   * Custom background style
   */
  backgroundStyle?: ViewStyle;
  /**
   * Additional bottom sheet props from @gorhom/bottom-sheet
   */
  bottomSheetProps?: Partial<GorhomBottomSheetProps>;
}

export interface BottomSheetContextValue {
  /**
   * Show bottom sheet with configuration
   */
  show: (config: BottomSheetConfig) => void;
  /**
   * Hide the current bottom sheet
   */
  hide: () => void;
  /**
   * Check if bottom sheet is currently visible
   */
  isVisible: boolean;
  /**
   * Snap to a specific index
   */
  snapToIndex: (index: number) => void;
  /**
   * Snap to a specific position
   */
  snapToPosition: (position: string | number) => void;
}
