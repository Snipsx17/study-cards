const storage = {
  get: (item: string) => {
    const localObject = localStorage.getItem(item);
    if (!localObject) {
      return null;
    }

    return JSON.parse(localObject);
  },
  set: (id: string, data: unknown) =>
    localStorage.setItem(id, JSON.stringify(data)),
  remove: (id: string) => localStorage.removeItem(id),
  clear: () => localStorage.clear(),
};

export default storage;
