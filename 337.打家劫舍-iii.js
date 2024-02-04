/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {

};
// @lc code=end


// 实现 JSON.stringify
function jsonStringify(obj) {
  let type = typeof obj;

  if (type !== "object" || obj === null) {
    if (/string|undefined/.test(type)) {
      obj = '"' + obj + '"';
    }
    return String(obj);
  } else {
    let json = [];
    let arr = Array.isArray(obj);

    for (let k in obj) {
      let v = obj[k];
      let type = typeof v;
      if (/string|undefined/.test(type)) {
        v = '"' + v + '"';
      } else if (type === "object") {
        v = jsonStringify(v);
      }
      json.push((arr ? "" : '"' + k + '":') + String(v));
    }

    return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
  }
}

// 实现 JSON.parse
function jsonParse(jsonStr) {
  let index = 0;
  let currentChar = jsonStr[0];

  function next() {
    index++;
    currentChar = jsonStr[index];
  }

  function parseValue() {
    if (currentChar === '"') {
      return parseString();
    } else if (currentChar === '{') {
      return parseObject();
    } else if (currentChar === '[') {
      return parseArray();
    } else {
      return parseNumber();
    }
  }

  function parseString() {
    let str = '';
    while (jsonStr[++index] !== '"') {
      str += jsonStr[index];
    }
    next();
    return str;
  }

  function parseObject() {
    let obj = {};
    next();
    while (currentChar !== '}') {
      let key = parseString();
      next();
      let value = parseValue();
      obj[key] = value;
      if (currentChar === ',') {
        next();
      }
    }
    next();
    return obj;
  }

  function parseArray() {
    let arr = [];
    next();
    while (currentChar !== ']') {
      arr.push(parseValue());
      if (currentChar === ',') {
        next();
      }
    }
    next();
    return arr;
  }

  function parseNumber() {
    let numStr = '';
    while (!isNaN(currentChar)) {
      numStr += currentChar;
      next();
    }
    return Number(numStr);
  }

  return parseValue();
}

const aa = {
  a: 1,
  b: 'str',
  c: [1, 23],
  d: {
    da: 1,
    db: 'str',
    dc: [1, 23],
    dd: {
      da: 1,
      db: 'str',
      dc: [1, 23],
      dd: {}
    }
  }
}

const str = jsonStringify(aa);
console.log(str);
console.log(jsonParse(str))