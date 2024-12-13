function deepClone(obj, c = {}) {

  for (let key in obj) {
    const val = obj[key];
    if (val instanceof Function) {
      // function
      c[key] = function (...args) {
        return val.call(this, ...args)
      };
    } else if (val instanceof Date) {
      // date
      c[key] = new Date(val.getTime());
    } else if (val instanceof RegExp) {
      // 正则
      c[key] = new RegExp(val.source, val.flags);
    } else if (typeof val === 'object' && typeof val !== null) {
      // 引用类型
      const newObj = Array.isArray(val) ? [] : {};
      c[key] = deepClone(val, newObj);
    }
    else {
      // 基本数据类型
      c[key] = val;
    }
  }
  return c;
}

let person1 = {
  'name': 'Jack',
  'age': 29,
  arr: [
    1,
    {},
    false,
    { a: 1 },
  ],
  'fn': function () {
    console.log('fn')
  },
  'reg': new RegExp('e'),
  date: new Date(),
};

let person2 = deepClone(person1);
person2.name = 'kei';
console.log(person2);
console.log(person1.name);  // 'Jack'
console.log(person2.name);  // 'Kai'
console.log(person2.fn);    // undefined
console.log(person2.reg);   // Object 
console.log(person2.arr);   // Object 
console.log(person2.date);   // Object 