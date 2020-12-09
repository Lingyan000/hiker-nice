import { hiker_setError } from "./utils/hiker";
/**
 * 判断是否为JSON
 * @param {string} str
 * @returns {boolean}
 */
export function isJSON(str: string): boolean {
  try {
    let obj: object = JSON.parse(str);
    if (typeof obj == "object" && obj) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}

/**
 * 判断请求数据是否有 StatusCode，旧版本视界没有，此处是兼容处理
 * @param {string} str - 请求数据
 * @returns {boolean}
 */
export function haveStatusCode(str: string): boolean {
  if (isJSON(str) === false) return false;
  let res: object = JSON.parse(str);
  if (
    Object.prototype.hasOwnProperty.call(res, "body") &&
    Object.prototype.hasOwnProperty.call(res, "statusCode")
  )
    return true;
  return false;
}
