import { useEffect, useRef, useCallback, useState, type ReactNode } from "react";
import {
  Text,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { registerToastHandler, type ToastMessage, ToastType } from "@/lib/toast";

const TOAST_HEIGHT = 120;

interface Props {
  children: ReactNode;
}

export function ToastProvider({ children }: Props) {
  const animatedValue = useRef(new Animated.Value(-TOAST_HEIGHT)).current;
  const stopRef = useRef(false);
  const [state, setState] = useState<ToastMessage>({
    msg: "",
    type: ToastType.Info,
    duration: 1500,
  });

  const hideToast = useCallback(
    (duration: number) => {
      setTimeout(() => {
        if (!stopRef.current) {
          Animated.timing(animatedValue, {
            toValue: -TOAST_HEIGHT,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      }, duration);
    },
    [animatedValue]
  );

  const showToastAnimation = useCallback(
    (duration: number) => {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => hideToast(duration));
    },
    [animatedValue, hideToast]
  );

  useEffect(() => {
    registerToastHandler({
      show(message: ToastMessage) {
        setState({
          msg: message.msg,
          type: message.type ?? ToastType.Info,
          duration: message.duration ?? 1500,
        });
        showToastAnimation(message.duration ?? 1500);
      },
    });
  }, [showToastAnimation]);

  const handlePressIn = useCallback(() => {
    stopRef.current = true;
  }, []);

  const handlePressOut = useCallback(() => {
    stopRef.current = false;
    Animated.timing(animatedValue, {
      toValue: -TOAST_HEIGHT,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  return (
    <>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View
          style={[
            styles.toast,
            {
              transform: [{ translateY: animatedValue }],
              backgroundColor: state.type,
            },
          ]}
        >
          <Text style={styles.text} numberOfLines={3}>
            {state.msg}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      {children}
    </>
  );
}

const styles = StyleSheet.create({
  toast: {
    height: TOAST_HEIGHT,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 99999,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 35,
  },
  text: {
    fontWeight: "700",
    color: "white",
    fontSize: 16,
  },
});
