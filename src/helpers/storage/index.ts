
/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isObjectLike } from '@helpers/global';
import { storeType } from './Abstract';

export const addStoreDataAsync = async (key:storeType, value: string): Promise<void> => {

  try {

    if (isObjectLike(value)) {

      value = JSON.stringify(value);
    
    }
    await AsyncStorage.setItem(key, value);  
  
  } catch (e) {
    // saving error
  }

};

export const getStoreDataAsync = async (key:storeType):Promise<string> => {

  try {

    const value = await AsyncStorage.getItem(key);
    if (value !== null) {

      return JSON.parse(value);
    
    }
    return '';
  
  } catch (e) {

    return '';
  
  } 

};

export const getStoreStringAsync = async (key:storeType):Promise<string> => {

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
export const removeStoreDataAsync = async (key:storeType):Promise<void> => {

  try {

    await AsyncStorage.removeItem(key);
  
  } catch (exception) {

    console.error('error');
  
  }

};
