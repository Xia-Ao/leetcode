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
   * 广度优先搜索
   */
  if(!prerequisites.length) return true;

  let edges = new Array(numCourses).fill(0);
  let idegs = new Map();

  for (let item of prerequisites) {
    edges[item[0]]++;
    console.log(item[0], edges);
    if(!idegs.has(item[1])) idegs.set(item[1], []);
    let vEdeg = idegs.get(item[1]);
    vEdeg.push(item[0]);
  }

  console.log(edges, idegs );

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
    if(idegs.has(v)) {
      for (let w of idegs.get(v)){
        console.log(w, v);
        edges[w]--;
        if(edges[w] === 0) {
          queen.push(w);
        }
      }
    }
  }

  return numCourses === 0

};
// @lc code=end
console.log(canFinish(5, [[4,2],[4,3],[2,0],[2,1]]))

