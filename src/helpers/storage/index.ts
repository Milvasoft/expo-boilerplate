
/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isObjectLike } from '@helpers/global';
import { storeEnum } from './Abstract';

export const addStoreDataAsync = async (key: storeEnum, value: string): Promise<void> => {

  try {

    if (isObjectLike(value)) {

      value = JSON.stringify(value);
    
    }
    await AsyncStorage.setItem(key.toString(), value);  
  
  } catch (e) {
    // saving error
  }

};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStoreDataAsync = async (key: storeEnum):Promise<any> => {

  try {

    const value = await AsyncStorage.getItem(key.toString());
    if (value !== null) {

      return JSON.parse(value);
    
    }
    return '';
  
  } catch (e) {

    return '';
  
  } 

};

export const getStoreStringAsync = async (key: storeEnum):Promise<string> => {

  try {

    const value = await AsyncStorage.getItem(key.toString());
    if (value !== null) {

      return value;
    
    }
    return '';
  
  } catch (e) {

    return '';
  
  } 

};
export const removeStoreDataAsync = async (key: storeEnum):Promise<void> => {

  try {

    await AsyncStorage.removeItem(key.toString());
  
  } catch (exception) {

    console.error('error');
  
  }

};
