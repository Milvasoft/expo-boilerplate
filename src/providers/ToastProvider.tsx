import { useEffect, useRef, useCallback, useState, type ReactNode } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { registerToastHandler, type ToastMessage, ToastType } from "@/lib/toast";

const TOAST_HEIGHT = 120;
const ANIM_MS = 300;

interface Props {
  children: ReactNode;
}

export function ToastProvider({ children }: Props) {
  const translateY = useSharedValue(-TOAST_HEIGHT);
  const heldRef = useRef(false);
  const [state, setState] = useState<ToastMessage>({
    msg: "",
    type: ToastType.Info,
    duration: 1500,
  });

  const hideToast = useCallback(() => {
    translateY.value = withTiming(-TOAST_HEIGHT, { duration: ANIM_MS });
  }, [translateY]);

  const showToastAnimation = useCallback(
    (duration: number) => {
      translateY.value = withTiming(0, { duration: ANIM_MS });
      setTimeout(() => {
        if (!heldRef.current) {
          hideToast();
        }
      }, duration + ANIM_MS);
    },
    [translateY, hideToast]
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

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <>
      <Pressable
        onPressIn={() => {
          heldRef.current = true;
        }}
        onPressOut={() => {
          heldRef.current = false;
          hideToast();
        }}
      >
        <Animated.View
          style={[styles.toast, animatedStyle, { backgroundColor: state.type }]}
        >
          <Text style={styles.text} numberOfLines={3}>
            {state.msg}
          </Text>
        </Animated.View>
      </Pressable>
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
