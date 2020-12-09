import {
  hiker_fetch,
  hiker_setSearchResult,
  hiker_setHomeResult,
} from "./utils/hiker";
import { haveStatusCode, isJSON } from "./validate";

interface requestParams {
  url: string;
  param?: { [propName: string]: any };
  noTips?: boolean;
  needAll?: boolean;
}
/**
 * 网络请求
 * @param {Object} option
 * @param {String} option.url - 请求链接
 * @param {Object} option.param - 请求参数
 * @param {Boolean} option.noTips - 是否不显示提示
 * @param {Boolean} option.needAll - 是否显示所有返回数据，包括 StatusCode 等
 * @returns {(String|Object)} - 当 option.needAll 为 true 时返回 Object，反之返回 String
 */
export default function ({
  url,
  param,
  noTips,
  needAll,
}: requestParams): string | object {
  if (!!param) param["withStatusCode"] = true;
  let requestRes: string = hiker_fetch(
    url,
    param || { withStatusCode: true }
  ) as any;
  if (haveStatusCode(requestRes)) {
    let res = JSON.parse(requestRes);
    if (res.statusCode === 200) {
      if (isJSON(res.body)) res.body = JSON.parse(res.body);
      if (needAll) return res;
      return res.body;
    } else {
      if (!noTips)
        if (!0)
          hiker_setHomeResult([
            {
              title: "““返回错误！！！ Status Code:" + res.statusCode + "””",
              col_type: "text_center_1",
            },
          ] as any);
        else
          hiker_setSearchResult([
            {
              title: "返回错误！！！ Status Code:" + res.statusCode,
            },
          ] as any);
      return "hiker request error";
    }
  } else {
    if (isJSON(requestRes)) requestRes = JSON.parse(requestRes);
    return requestRes;
  }
}
