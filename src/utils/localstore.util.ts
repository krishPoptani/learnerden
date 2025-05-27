type Storable = string | number | boolean | object | null;

const localStoreUtil = {
  store_data: (key: string, data: Storable): boolean | void => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    }
  },

  get_data: (key: string): any | undefined => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key);
      if (!item) return;
      try {
        return JSON.parse(item);
      } catch (e) {
        console.error("Error parsing localStorage item:", e);
        return;
      }
    }
  },

  remove_data: (key: string): boolean | void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
      return true;
    }
  },

  remove_all: (): boolean | void => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      return true;
    }
  },
};

export default localStoreUtil;
