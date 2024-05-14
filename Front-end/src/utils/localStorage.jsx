const storage = {
  get: (item) => {
    const localObject = localStorage.getItem(item);
    if (!localObject) {
      return null;
    }

    return JSON.parse(localObject);
  },
  set: (id, data) => localStorage.setItem(id, JSON.stringify(data)),
  remove: (id) => localStorage.removeItem(id),
  clear: () => localStorage.clear(),
};

export default storage;
