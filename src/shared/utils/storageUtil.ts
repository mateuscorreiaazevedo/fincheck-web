export const storageUtil = (callback: Storage) => {
  function set<T = unknown>(key: string, value: T) {
    const transformedValue =
      typeof value === 'string' ? value : JSON.stringify(value);
    callback.setItem(key, transformedValue);
  }

  function get<T>(key: string, useParse: boolean): T | string | null {
    const stringfiedValue = callback.getItem(key);

    if (!stringfiedValue) {
      return null;
    }

    return useParse ? (JSON.parse(stringfiedValue) as T) : stringfiedValue;
  }

  function remove(key: string) {
    callback.removeItem(key);
  }

  function clear() {
    callback.clear();
  }

  return {
    set,
    get,
    remove,
    clear,
  };
};
