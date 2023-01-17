import { ToastColorEnum } from '@src/helpers/Types/ToastColorEnum';
import { IToastType } from '@src/helpers/Types/IToastType';
import React, {
  forwardRef,
  memo, 
  useCallback, 
  useImperativeHandle,
  useRef, 
  useState 
} from 'react';
import { 
  StyleSheet,
  Text,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';

let stop = false;

const toastHeight = 100;

const ToastMessage = forwardRef((props, ref) => {

  const animatedValue = useRef(new Animated.Value(-toastHeight)).current;
  const [state, setState] = useState<IToastType>({ type: ToastColorEnum.Info, msg: '' });
   
  const closeToast = useCallback(() => {

    setTimeout(() => {

      if (!stop) Animated.timing(animatedValue, { toValue: -toastHeight, duration: 300, useNativeDriver: true }).start();
    
    }, state?.duration || 1500);

  
  }, [animatedValue, state?.duration]);

  const showToast = useCallback(() => {

    Animated.timing(animatedValue, { toValue: 0, duration: 300, useNativeDriver: true }).start(() => closeToast());  
  
  }, [animatedValue, closeToast]);
 
  const handlePressIn = useCallback(() => {

    stop = true;

  }, []);    

  const handlePressOut = useCallback(() => {

    stop = false;

    Animated.timing(animatedValue, { toValue: -toastHeight, duration: 300, useNativeDriver: true }).start();
  
  }, [animatedValue]);

  // Parent Component Func
  useImperativeHandle(
    ref,
    () => ({
        
      open(param: IToastType) {

        setState({ msg: param?.msg || '', duration: param.duration || 1500, type: param.type || ToastColorEnum.Info });

        showToast();
      
      }
    })
  );

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[{ transform: [{ translateY: animatedValue }], backgroundColor: state.type, }, styles.root]}>
        <Text style={styles.text} numberOfLines={3}>
          { state?.msg }
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );

});

export default memo(ToastMessage);

const styles = StyleSheet.create({
  root: {
    height: toastHeight,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 99999,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 35,
  },
  text: {
    fontWeight: '700',
    color: 'white',
    fontSize: 16,
  }
});
