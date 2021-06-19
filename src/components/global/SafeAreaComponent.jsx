
import { hp } from '@helpers/responsive';
import React from 'react';
import { SafeAreaView, useSafeAreaInsets, initialWindowMetrics } from 'react-native-safe-area-context';


export default function SafeAreaComponent({ children }) {

  const inset = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        height: hp(100) - inset.bottom
      }}
      initialMetrics={initialWindowMetrics}
    >
      {children}
    </SafeAreaView>
  );

}
