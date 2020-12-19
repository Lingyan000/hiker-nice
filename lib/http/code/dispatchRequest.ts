import request from "./request";
import { bulidURL } from "../helpers/url";
import { transformRequest, transformResponse } from "../helpers/data";
import { processHeaders } from "../helpers/header";
import { HttpRequestConfig, HttpResponse } from "../types/index";

function dispatchRequest(config: HttpRequestConfig): HttpResponse {
  processConfig(config);
  return transformResponseData(request(config));
}

function processConfig(config: HttpRequestConfig): void {
  config.url = transformUrl(config);
  config.headers = transformHeaders(config);
  config.data = transformRequestData(config);
}

function transformUrl(config: HttpRequestConfig): string {
  const { url, params } = config;
  return bulidURL(url!, params);
}

function transformRequestData(config: HttpRequestConfig): any {
  const { data } = config;
  return transformRequest(data);
}

function transformHeaders(config: HttpRequestConfig): any {
  const { headers = {}, data } = config;
  return processHeaders(headers, data);
}

function transformResponseData(res: HttpResponse): HttpResponse {
  res.data = transformResponse(res.data);
  return res;
}

export default dispatchRequest;
