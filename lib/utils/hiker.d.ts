declare function setError(str: string | object | number): void;
declare function fetch(url: string, param: { [propName: string]: any }): string;
declare function setHomeResult(result: { data: any[] }): string;
declare function setSearchResult(result: { data: any[] }): string;
declare function base64Encode(input: string): string;
declare function base64Decode(input: string): string;
declare function getCryptoJS(): string;