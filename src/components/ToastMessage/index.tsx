import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Text, Animated, TouchableWithoutFeedback } from "react-native";
import { IToastType } from "@components/ToastMessage/IToastType";
import { styles, toastHeight } from "./style";
import { ToastColorEnum } from "@components/ToastMessage/ToastColorEnum";

let stop = false;

/**
 * A customizable toast message component.
 *
 * @component
 * @example
 * ```tsx
 * <ToastMessage ref={toastRef} />
 * ```
 */
const ToastMessage = forwardRef((props, ref) => {
  const animatedValue = useRef(new Animated.Value(-toastHeight)).current;

  const [state, setState] = useState<IToastType>({
    type: ToastColorEnum.Info,
    msg: "",
  });

  const closeToast = useCallback(() => {
    setTimeout(() => {
      if (!stop)
        Animated.timing(animatedValue, {
          toValue: -toastHeight,
          duration: 300,
          useNativeDriver: true,
        }).start();
    }, state?.duration || 1500);
  }, [animatedValue, state?.duration]);

  const showToast = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => closeToast());
  }, [animatedValue, closeToast]);

  const handlePressIn = useCallback(() => {
    stop = true;
  }, []);

  const handlePressOut = useCallback(() => {
    stop = false;

    Animated.timing(animatedValue, {
      toValue: -toastHeight,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  // Parent Component Func
  useImperativeHandle(ref, () => ({
    /**
     * Opens the toast message with the specified parameters.
     *
     * @param {IToastType} param - The toast message parameters.
     * @param {string} param.msg - The message to be displayed.
     * @param {number} param.duration - The duration of the toast message in milliseconds.
     * @param {ToastColorEnum} param.type - The type of the toast message (e.g., "Info", "Success", "Error").
     */
    open(param: IToastType) {
      setState({
        msg: param?.msg || "",
        duration: param.duration || 1500,
        type: param.type || ToastColorEnum.Info,
      });

      showToast();
    },
  }));

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[
          {
            transform: [{ translateY: animatedValue }],
            backgroundColor: state.type,
          },
          styles.root,
        ]}
      >
        <Text style={styles.text} numberOfLines={3}>
          {state?.msg}
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
});

export default memo(ToastMessage);
