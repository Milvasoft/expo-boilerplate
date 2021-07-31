import React from 'react';
import Modal from 'react-native-modal';
import Color from '@assets/color';

type Props = {
  children: React.ReactNode,
  isVisible: boolean,
  onBackdropPress: () => void
};
 
  
const FancyModal : React.FC<Props> = ({ children, isVisible, onBackdropPress }) => (
  <Modal
    isVisible={isVisible}
    backdropColor={Color().primary}
    backdropOpacity={0.8}
    animationIn="zoomInDown"
    animationOut="zoomOutUp"
    animationInTiming={200}
    animationOutTiming={200}
    backdropTransitionInTiming={200}
    backdropTransitionOutTiming={200}
    onBackdropPress={onBackdropPress}
  >
    {children}
  </Modal>
);
export default FancyModal;
