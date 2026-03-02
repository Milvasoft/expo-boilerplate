import AsyncStorage from "@react-native-async-storage/async-storage";

export enum StorageKey {
  Token = "token",
  User = "user",
  ColorMode = "color_mode",
}

export async function setStorageItem(
  key: StorageKey,
  value: unknown
): Promise<void> {
  try {
    const serialized =
      typeof value === "string" ? value : JSON.stringify(value);
    await AsyncStorage.setItem(key, serialized);
  } catch {
    // Storage write failed silently
  }
}

export async function getStorageItem<T = string>(
  key: StorageKey
): Promise<T | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value === null) return null;
    try {
      return JSON.parse(value) as T;
    } catch {
      return value as unknown as T;
    }
  } catch {
    return null;
  }
}

export async function removeStorageItem(key: StorageKey): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch {
    // Storage removal failed silently
  }
}
