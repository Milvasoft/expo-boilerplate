/**
 * Global Bottom Sheet Container
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React, {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
  ReactNode,
} from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useTheme } from "@src/hooks";
import type { BottomSheetConfig, BottomSheetContextValue } from "./type";
import { styles } from "./style";

export const BottomSheetContext = createContext<BottomSheetContextValue>({
  show: () => {},
  hide: () => {},
  isVisible: false,
  snapToIndex: () => {},
  snapToPosition: () => {},
});

interface BottomSheetContainerProps {
  children: ReactNode;
}

/**
 * Global Bottom Sheet Container
 * Provides a bottom sheet that can be controlled from anywhere in the app
 */
function BottomSheetContainer({ children }: BottomSheetContainerProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [config, setConfig] = useState<BottomSheetConfig | null>(null);
  const theme = useTheme();

  const show = useCallback((newConfig: BottomSheetConfig) => {
    setConfig(newConfig);
    setIsVisible(true);
    setTimeout(() => {
      bottomSheetRef.current?.snapToIndex(newConfig.initialSnapIndex ?? 0);
      newConfig.onOpen?.();
    }, 100);
  }, []);

  const hide = useCallback(() => {
    bottomSheetRef.current?.close();
    setTimeout(() => {
      setIsVisible(false);
      config?.onDismiss?.();
      setConfig(null);
    }, 300);
  }, [config]);

  const snapToIndex = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  const snapToPosition = useCallback((position: string | number) => {
    bottomSheetRef.current?.snapToPosition(position);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => {
      if (!config?.enableBackdrop) return null;

      return (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          opacity={config?.backdropOpacity ?? 0.5}
          pressBehavior={
            config?.enableBackdropDismiss !== false ? "close" : "none"
          }
        />
      );
    },
    [config]
  );

  const snapPoints = useMemo(
    () => config?.snapPoints ?? ["50%", "90%"],
    [config]
  );

  const contextValue = useMemo<BottomSheetContextValue>(
    () => ({
      show,
      hide,
      isVisible,
      snapToIndex,
      snapToPosition,
    }),
    [show, hide, isVisible, snapToIndex, snapToPosition]
  );

  return (
    <BottomSheetContext.Provider value={contextValue}>
      {children}
      {isVisible && config && (
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={config.enablePanDownToClose !== false}
          backdropComponent={renderBackdrop}
          handleIndicatorStyle={[
            styles.handleIndicator,
            { backgroundColor: theme.border },
            config.handleIndicatorStyle,
          ]}
          backgroundStyle={[
            styles.background,
            { backgroundColor: theme.card },
            config.backgroundStyle,
          ]}
          onClose={hide}
          {...config.bottomSheetProps}
        >
          <BottomSheetView style={styles.contentContainer}>
            {config.content}
          </BottomSheetView>
        </BottomSheet>
      )}
    </BottomSheetContext.Provider>
  );
}

export default BottomSheetContainer;
