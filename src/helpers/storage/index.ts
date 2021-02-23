import AsyncStorage from '@react-native-async-storage/async-storage';
import { isObjectLike } from '@helpers/global';
import { storeType } from './Abstract';

export const storeData = async (key:storeType, value: string): Promise<void> => {
  try {
    if (isObjectLike(value)) {
      value = JSON.stringify(value);
    }
    await AsyncStorage.setItem(key, value);  
  } catch (e) {
    // saving error
  }
};

export const getStoreData = async (key:storeType):Promise<string> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return '';
  } catch (e) {
    return '';
  } 
};
