declare function setError(str: string | object | number): void;
declare function fetch(url: string, param: { [propName: string]: any }): string;
declare function setHomeResult(result: { data: any[] }): string;
declare function setSearchResult(result: { data: any[] }): string;

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
