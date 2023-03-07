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
  tasks = [...map.values()];

  let step = 0;
  while (tasks.length) {
    // 每次循环时 任务数量需要重新排序
    tasks.sort((a, b) => b - a);
    // console.log('循环', tasks)
    const len = tasks.length;
    let k = 0; // step
    let i = 0; // 数组下标

    // 步进 间隔n 实际需要走n+1步
    while (k <= n && tasks.length) {
      // 如果走完数组所有任务，k还比n小，需要待命 n-k+1 时间 进入下一次循环
      if (k === len) {
        step += n - k + 1;
        break;
      }
      tasks[i]--; // 任务数-1
      step++; 
      // 该任务被执行完了，从taskNums 将该任务移除
      if (tasks[i] === 0) {
        tasks.splice(i, 1);
        i--;
      }
      i++;
      k++;
    }
  }
  // console.log(step);
  return step;

};
// @lc code=end

// leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2);
// leastInterval(["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"], 2);