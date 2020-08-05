/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * 这个一个图的数据结构，
 */
var canFinish = function(numCourses, prerequisites) {
  /**
   * 1.1 广度优先搜索
   */
  if(!prerequisites.length) return true;

  // 创建一个数组放所有课程的入度，数组下标对应课程编号
  let edges = new Array(numCourses).fill(0);
  // 创建一个map放所有的课程的依赖
  let map = new Map();

  // 建立对应的
  for (let item of prerequisites) {
    edges[item[0]]++;
    console.log(item[0], edges);
    if(!map.has(item[1])) map.set(item[1], []);
    let vEdeg = map.get(item[1]);
    vEdeg.push(item[0]);
  }

  console.log(edges, map );

  let queen = [];
  for (let i = 0; i< numCourses; i++) {
    if(edges[i] === 0) {
      queen.push(i);
    }
  }

  while(queen.length) {
    let v = queen.shift();
    // 未修课程数-1
    numCourses--;
    // 他的出度全部-1
    if(map.has(v)) {
      for (let w of map.get(v)){
        console.log(w, v);
        edges[w]--;
        if(edges[w] === 0) {
          queen.push(w);
        }
      }
    }
  }
  return numCourses === 0

  /**
   * 2 深度优先搜索
   */

};
// @lc code=end
// console.log(canFinish(5, [[4,2],[4,3],[2,0],[2,1]]))

