import React, { useEffect } from 'react';
import { updateAppState } from '@modules/app/redux/actions';
import { Appearance } from 'react-native';
import throttle from 'lodash.throttle';

export default function ThemeListener() {

  useEffect(() => {
    
    const handleColorModeChange = async (preferences: Appearance.AppearancePreferences) => {
      
      updateAppState({ userColorScheme: preferences?.colorScheme });
    
    };

    Appearance.addChangeListener(throttle(handleColorModeChange, 100, { leading: false, trailing: true }));

    return () => {

      Appearance.removeChangeListener(handleColorModeChange);
    
    };

    
  }, []);


  return <></>;

}

