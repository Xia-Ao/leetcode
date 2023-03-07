/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n === 0) return tasks.length;

  let map = new Map();
  for (let i = 0; i < tasks.length; i++) {
    const key = tasks[i];
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1);
    }
  }
  // // 按照单任务数量 从大到小排序
  let taskNums = [...map.values()].sort((a, b) => b - a);
  console.log('taskNums', taskNums);

  let count = 0;
  while (taskNums.length) {
    let i = 0;
    console.log('循环', taskNums)
    // 步进 间隔n 实际需要走n+1步
    let len = taskNums.length;
    while (i <= n && len) {
      // if (!taskNums[i]) {

      //   break;
      // };
      // 如果没有任务，则表示间隔不够，需要待命 n-i 时间 进入下一次
      if (i === len) {
        console.log('待命i', i, n - i);
        count += n - i + 1;
        break;
      }
      taskNums[i]--;
      count++;
      // 该任务被执行完了，从taskNums 将该任务移除
      if (taskNums[i] === 0) {
        taskNums.splice(i, 1);
      }
      i++;
      // console.log('finaly i', i);

    }
  }
  console.log(count);
  return count;

};
// @lc code=end

leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2);