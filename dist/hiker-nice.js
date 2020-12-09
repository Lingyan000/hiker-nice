
/*! hiker-nice 1.0.0 https://github.com/[object Object] @license ISC */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.hikerview = {}));
}(this, (function (exports) { 'use strict';

  function hiker_fetch(url, param) {
      return fetch(url, param || {});
  }
  function hiker_setHomeResult(_a) {
      var data = _a.data;
      setHomeResult({ data: data });
  }

  /**
   * 判断是否为JSON
   * @param {string} str
   * @returns {boolean}
   */
  function isJSON(str) {
      try {
          var obj = JSON.parse(str);
          if (typeof obj == "object" && obj) {
              return true;
          }
          else {
              return false;
          }
      }
      catch (e) {
          return false;
      }
  }
  /**
   * 判断请求数据是否有 StatusCode，旧版本视界没有，此处是兼容处理
   * @param {string} str - 请求数据
   * @returns {boolean}
   */
  function haveStatusCode(str) {
      if (isJSON(str) === false)
          return false;
      var res = JSON.parse(str);
      if (Object.prototype.hasOwnProperty.call(res, "body") &&
          Object.prototype.hasOwnProperty.call(res, "statusCode"))
          return true;
      return false;
  }

  var validate = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isJSON: isJSON,
    haveStatusCode: haveStatusCode
  });

  /**
   * 网络请求
   * @param {Object} option
   * @param {String} option.url - 请求链接
   * @param {Object} option.param - 请求参数
   * @param {Boolean} option.noTips - 是否不显示提示
   * @param {Boolean} option.needAll - 是否显示所有返回数据，包括 StatusCode 等
   * @returns {(String|Object)} - 当 option.needAll 为 true 时返回 Object，反之返回 String
   */
  function request (_a) {
      var url = _a.url, param = _a.param, noTips = _a.noTips, needAll = _a.needAll;
      if (!!param)
          param["withStatusCode"] = true;
      var requestRes = hiker_fetch(url, param || { withStatusCode: true });
      if (haveStatusCode(requestRes)) {
          var res = JSON.parse(requestRes);
          if (res.statusCode === 200) {
              if (isJSON(res.body))
                  res.body = JSON.parse(res.body);
              if (needAll)
                  return res;
              return res.body;
          }
          else {
              if (!noTips)
                  hiker_setHomeResult([
                          {
                              title: "““返回错误！！！ Status Code:" + res.statusCode + "””",
                              col_type: "text_center_1",
                          },
                      ]);
              return "hiker request error";
          }
      }
      else {
          if (isJSON(requestRes))
              requestRes = JSON.parse(requestRes);
          return requestRes;
      }
  }

  exports.request = request;
  exports.validate = validate;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
