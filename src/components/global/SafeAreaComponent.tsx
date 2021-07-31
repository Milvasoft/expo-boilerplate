import { hp } from '@helpers/responsive';
import React from 'react';
import { SafeAreaView, useSafeAreaInsets, initialWindowMetrics } from 'react-native-safe-area-context';
  
 type Props = {
   children: React.ReactNode
 };

const SafeAreaComponent : React.FC<Props> = ({ children }) => {  

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

};

export default SafeAreaComponent;
