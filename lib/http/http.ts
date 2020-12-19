import Http from "./code/Http";
import { extend } from "./helpers/util";
import { HttpInstance } from "./types/index";

function getHttp(): HttpInstance {
  const context = new Http();
  const http = Http.prototype.request.bind(context);

  extend(http, context);

  return http as HttpInstance;
}

const $http = getHttp();

export default $http;
