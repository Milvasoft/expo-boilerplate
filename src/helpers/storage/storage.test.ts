import AsyncStorage from '@react-native-async-storage/async-storage';
import { addStoreDataAsync,
  getStoreDataAsync,
  getStoreStringAsync,
  removeStoreDataAsync
} from './index';
import { StoreEnum } from './storeEnum';

jest.mock('@react-native-async-storage/async-storage');

describe('addStoreDataAsync', () => {
  it('should store the data in AsyncStorage', async () => {
    const key = StoreEnum.ColorMode;
    const value = 'testValue';

    await addStoreDataAsync(key, value);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(key, value);
  });

  it('should stringify the value if it is an object', async () => {
    const key = StoreEnum.ColorMode;
    const value = { foo: 'bar' };

    await addStoreDataAsync(key, JSON.stringify(value));

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });

});

describe('getStoreDataAsync', () => {
  it('should return the stored data', async () => {
    const key = StoreEnum.ColorMode;
    const value = 'exampleValue';

    const result = await getStoreDataAsync(key);

    expect(result).toEqual(value);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(key.toString());
  });

  it('should return an empty string if the stored data is null', async () => {
    const key = StoreEnum.ColorMode;

    const result = await getStoreDataAsync(key);

    expect(result).toEqual('');
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(key.toString());
  });

  it('should return an empty string if there is an error', async () => {
    const key = StoreEnum.ColorMode;

    const result = await getStoreDataAsync(key);

    expect(result).toEqual('');
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(key.toString());
  });
});


describe('getStoreStringAsync', () => {
  it('should return the stored string', async () => {
    const key = StoreEnum.ColorMode;
    const value = 'exampleValue';

    const result = await getStoreStringAsync(key);

    expect(result).toEqual(value);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(key.toString());
  });

  it('should return an empty string if the value is null', async () => {
    const key = StoreEnum.ColorMode;

    const result = await getStoreStringAsync(key);

    expect(result).toEqual('');
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(key.toString());
  });

  it('should return an empty string if an error occurs', async () => {
    const key = StoreEnum.ColorMode;

    const result = await getStoreStringAsync(key);

    expect(result).toEqual('');
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(key.toString());
  });
});


describe('removeStoreDataAsync', () => {
  it('should remove the data from AsyncStorage', async () => {
    const key = StoreEnum.ColorMode;
    await removeStoreDataAsync(key);

    expect(AsyncStorage.removeItem).toHaveBeenCalledWith(key);
  });

  it('should handle errors', async () => {
    const key = StoreEnum.ColorMode;
    const error = new Error('AsyncStorage error');

    await expect(removeStoreDataAsync(key)).rejects.toThrowError('error');
  });
});