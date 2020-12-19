import { HttpRequestConfig, HttpResponse, Method } from "../types/index";
import dispatchRequest from "./dispatchRequest";

export default class Http {
  request(url: any, config?: any): HttpResponse {
    if (typeof url === "string") {
      config = config ? config : {};
      config.url = url;
    } else {
      config = url;
    }
    return dispatchRequest(config);
  }
  get(url: string, config?: HttpRequestConfig): HttpResponse {
    return this._requestMethodWithoutData("get", url, config);
  }

  delete(url: string, config?: HttpRequestConfig): HttpResponse {
    return this._requestMethodWithoutData("delete", url, config);
  }

  head(url: string, config?: HttpRequestConfig): HttpResponse {
    return this._requestMethodWithoutData("head", url, config);
  }

  options(url: string, config?: HttpRequestConfig): HttpResponse {
    return this._requestMethodWithoutData("options", url, config);
  }

  post(url: string, data?: any, config?: HttpRequestConfig): HttpResponse {
    return this._requestMethodWithData("post", url, data, config);
  }

  put(url: string, data?: any, config?: HttpRequestConfig): HttpResponse {
    return this._requestMethodWithData("put", url, data, config);
  }

  patch(url: string, data?: any, config?: HttpRequestConfig): HttpResponse {
    return this._requestMethodWithData("patch", url, data, config);
  }
  _requestMethodWithoutData(
    method: Method,
    url: string,
    config?: HttpRequestConfig
  ) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url,
      })
    );
  }

  _requestMethodWithData(
    method: Method,
    url: string,
    data?: any,
    config?: HttpRequestConfig
  ) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url,
        data,
      })
    );
  }
}
