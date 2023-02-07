/*
 * @lc app=leetcode.cn id=1604 lang=javascript
 *
 * [1604] 警告一小时内使用相同员工卡大于等于三次的人
 */

// @lc code=start
/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  // 默认人是按照顺序排的 果然，人也不是顺序的 因此使用hash
  // step1 找出同一个人的所有使用时间数组
  let res = [];
  let obj = {};
  for (let i = 0; i < keyName.length; i++) {
    if (obj[keyName[i]]) {
      obj[keyName[i]].push(keyTime[i]);
    } else {
      obj[keyName[i]] = [keyTime[i]];
    }
  }

  for (let key in obj) {
    if (compare(obj[key])) {
      res.push(key);
    }
  }

  return res.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a.charCodeAt(i) !== b.charCodeAt(i)) return a.charCodeAt(i) - b.charCodeAt(i)
    }
  });

  // step2 对同一个人的时间进行判断 比较是否超过三次  
  function compare(times = []) {
    // 时间是随机的 因此排序
    times = times.sort((a, b) => new Date(`2023-01-01 ${a}`).getTime() - new Date(`2023-01-01 ${b}`).getTime())
    for (let i = 0; i < times.length - 2; i++) {
      let t1 = times[i];
      let t3 = times[i + 2];
      const t1h = +t1.split(':')[0]; // 小时
      const t1m = +t1.split(':')[1]; // 分钟
      const t3h = +t3.split(':')[0];
      const t3m = +t3.split(':')[1];
      if (t1h === t3h) {
        return true;
      } else if (t3h - t1h === 1 && t1m - t3m >= 0) {
        return true;
      }
      continue;
    }
    return false;
  }
};
// alertNames(["alice", "alice", "alice", "bob", "bob", "bob", "bob"],
//   ["12:01", "12:00", "18:00", "21:00", "21:20", "21:30", "23:00"])
// @lc code=end

