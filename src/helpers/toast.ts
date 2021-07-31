
import ToastColor from '@assets/color/toast';
import Toast from 'react-native-root-toast';
import { TextStyle, StyleProp, ViewStyle } from 'react-native';
import { wp } from './responsive';

/**
* Show Toast Message
* @ {
* @  `msg`: `string`,
* @  `duration`: `number`,
* @  `position`: `Toast.positions`,
* @  `delay`: `number`,
* @  `onShow`: `Function`,
* @  `onShown`: `Function`,
* @  `onHide`: `Function`,
* @  `onHidden`: `Function`,
* @ } */
const showToast = ({
  msg, 
  duration,
  position,
  delay,
  onShow,
  onShown,
  onHide,
  onHidden,
  backgroundColor,
  textColor,
  shadowColor
} :IToastType): void => {

  Toast.show(msg, {
    duration: duration || Toast.durations.LONG,
    position: position || Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    opacity: 1,
    delay: delay || 0,
    backgroundColor: backgroundColor || ToastColor.warning,
    textColor,
    shadowColor, 
    containerStyle: {
      width: '95%',
      padding: wp(4),
    },
    // calls on toast\`s appear animation start
    onShow,
    // calls on toast\`s appear animation end.
    onShown,
    // calls on toast\`s hide animation start.
    onHide,
    // calls on toast\`s hide animation end.
    onHidden,
  });

};

// eslint-disable-next-line import/prefer-default-export
export { showToast };

export interface IToastType {
  msg:string,
  containerStyle?:StyleProp<ViewStyle>
  duration?:number
  visible?: boolean,
  position?: number,
  animation?:boolean,
  shadow?: boolean,
  backgroundColor?: string,
  opacity?: number,
  shadowColor?: string,
  textColor?: string,
  textStyle?: StyleProp<TextStyle>,
  delay?: number,
  keyboardAvoiding?: boolean,
  hideOnPress?: boolean,
  onHide?: () => void,
  onHidden?: () => void,
  onShow?: () => void,
  onShown?: () => void,
  onPress?: () => void
  
}
