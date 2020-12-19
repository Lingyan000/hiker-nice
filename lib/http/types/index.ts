export type Method =
  | "get"
  | "GET"
  | "delete"
  | "Delete"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH";

export interface HttpRequestConfig {
  url?: string;
  method?: string;
  headers?: any;
  data?: any;
  params?: any;
  withStatusCode?: boolean;
  responseType?: XMLHttpRequestResponseType;
  redirect?: boolean;
}

export interface HttpResponse<T = any> {
  data: any; // 服务端返回的数据
  status: number; // HTTP 状态码
  headers: any; // 响应头
  config: HttpRequestConfig; // 请求配置对象
}

export interface Http {
  request<T = any>(config: HttpRequestConfig): HttpResponse<T>;

  get<T = any>(url: string, config?: HttpRequestConfig): HttpResponse<T>;

  delete<T = any>(url: string, config?: HttpRequestConfig): HttpResponse<T>;

  head<T = any>(url: string, config?: HttpRequestConfig): HttpResponse<T>;

  options<T = any>(url: string, config?: HttpRequestConfig): HttpResponse<T>;

  // 以下三个与上面三个多了data参数

  post<T = any>(
    url: string,
    data?: any,
    config?: HttpRequestConfig
  ): HttpResponse<T>;

  put<T = any>(
    url: string,
    data?: any,
    config?: HttpRequestConfig
  ): HttpResponse<T>;

  patch<T = any>(
    url: string,
    data?: any,
    config?: HttpRequestConfig
  ): HttpResponse<T>;
}

export interface HttpInstance extends Http {
  <T = any>(config: HttpRequestConfig): HttpResponse<T>;
  <T = any>(url: string, config?: HttpRequestConfig): HttpResponse<T>;
}
