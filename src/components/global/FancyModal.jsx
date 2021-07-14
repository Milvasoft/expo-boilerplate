/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React from 'react';
import Modal from 'react-native-modal';
import Color from '@assets/color';

function FancyModal({
  children, isVisible, onBackdropPress 
}) {

  return (
    <Modal
      isVisible={isVisible}
      backdropColor={Color.primary}
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

}
export default FancyModal;
