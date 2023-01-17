/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import { Appearance } from 'react-native';
import throttle from 'lodash.throttle';
import { useDispatch } from 'react-redux';
import { SetColorShceme } from '@modules/app/redux/appSlice';

export default function ThemeListener() {

  const dispatch = useDispatch();
  

  useEffect(() => {
    
    const handleColorModeChange = async (preferences: Appearance.AppearancePreferences) => {
      
      dispatch(SetColorShceme(preferences?.colorScheme));
    
    };

    Appearance.addChangeListener(throttle(handleColorModeChange, 100, { leading: false, trailing: true }));

    return () => {

      // Appearance.removeChangeListener(handleColorModeChange);
    
    };

    
  }, [dispatch]);


  return <></>;

}

