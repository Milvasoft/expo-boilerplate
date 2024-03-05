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
import { styles } from "./style";
import { ToastColorEnum } from "@components/ToastMessage/ToastColorEnum";

let stop = false;

export const toastHeight = 100;

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
