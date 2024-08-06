export default class Storage {
  static get = (item: string): string | null => {
    const localObject = localStorage.getItem(item);
    return localObject ? JSON.parse(localObject) : null;
  };

  static set = (id: string, data: unknown): void =>
    localStorage.setItem(id, JSON.stringify(data));

  static remove = (id: string) => localStorage.removeItem(id);

  static clear = () => localStorage.clear();
}
