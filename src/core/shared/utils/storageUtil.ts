export const storageUtil = (callback: Storage) => {
  function set(key: string, value: unknown) {
    callback.setItem(key, JSON.stringify(value));
  }

  function get<T>(key: string): T | null {
    const stringfiedValue = callback.getItem(key);

    if (!stringfiedValue) {
      return null;
    }

    return JSON.parse(stringfiedValue) as T;
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
