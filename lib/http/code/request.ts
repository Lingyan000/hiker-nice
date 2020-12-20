import { HttpRequestConfig, HttpResponse } from "../types";

export default function request(config: HttpRequestConfig): HttpResponse {
  const {
    data = null,
    url,
    method = "get",
    headers,
    withStatusCode = true,
    redirect = true,
    timeout = 10000,
  } = config;
  Object.keys(headers).forEach((name) => {
    if (data === null && name.toLowerCase() === "content-type") {
      delete headers[name];
    }
  });
  const RES: any = JSON.parse(
    fetch(url!, {
      headers,
      method,
      body: data,
      withStatusCode,
      redirect,
      timeout,
    })
  );
  const responseHeaders = RES.headers;
  const responseData = RES.body;
  const response: HttpResponse = {
    data: responseData,
    status: RES.statusCode,
    headers: responseHeaders,
    config,
  };
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else if (
    redirect == false &&
    [301, 302, 303, 307, 308].indexOf(response.status) !== -1
  ) {
    return response;
  } else {
    throw new Error(`Request failed with status code ${response.status}`);
  }
}
