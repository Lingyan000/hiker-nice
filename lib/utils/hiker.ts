/// <reference path = "./hiker.d.ts" />

export function hiker_setError(str: string): void {
  setError(str);
}

export function hiker_fetch(url: string, param: any): string {
  return fetch(url, param || {});
}

export function hiker_setSearchResult({ data }: { data: any[] }): void {
  setSearchResult({ data });
}

export function hiker_setHomeResult({ data }: { data: any[] }): void {
  setHomeResult({ data });
}
