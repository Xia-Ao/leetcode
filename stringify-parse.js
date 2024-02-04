function jsonStringify(obj) {
  const type = typeof obj;
  if (type !== 'object' || obj === null) {
    if (/string|undefined/.test(type)) {
      obj = `"${obj}"`
    }
    return String(obj);
  } else {
    const isArr = Array.isArray(obj);
    const res = [];

    for (const key in obj) {
      let v = obj[key];
      const type = typeof v;
      if (/string|undefined/.test(type)) {
        v = `"${v}"`
      } else if (type === 'object') {
        v = jsonStringify(v);
      }
      res.push(`${isArr ? '' : `"${key}":`}${String(v)}`);
    }
    return `${isArr ? '[' : '{'}${String(res)}${isArr ? ']' : '}'}`
  }
}

function jsonParse(str) {
  
}

const aa = {
  a: 1,
  b: 'str',
  c: [1, 23],
  e: undefined,
  f: null,
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