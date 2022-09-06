export class LocalStorage {
  get(key: string) {
    const getItem = localStorage.getItem(key),
      response = getItem ? JSON.parse(getItem) : null

    return response
  }

  set(key: string, data: string): void {
    localStorage.setItem(key, data)
  }
}
