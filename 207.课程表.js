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
var canFinish = function (numCourses, prerequisites) {
  /**
   * 1.1 广度优先搜索
   * 参考： https://leetcode-cn.com/problems/course-schedule/solution/tu-jie-ke-cheng-biao-wen-ti-by-user7746o/
   */
  // if(!prerequisites.length) return true;
  // // 创建一个数组放所有课程的入度,称为入度表，数组下标对应课程编号
  // let edges = new Array(numCourses).fill(0);
  // // 创建一个map放所有的课程的依赖，称为邻接表
  // let map = new Map();

  // // 初始化入度表和邻接表，建立对应的关系
  // for (let item of prerequisites) {
  //   edges[item[0]]++; // 入度+1
  //   if(!map.has(item[1])) map.set(item[1], []);
  //   let vEdeg = map.get(item[1]);
  //   vEdeg.push(item[0]);
  // }

  // let queen = [];
  // // 对入度为0 的push到队列中，准备学习
  // for (let i = 0; i< numCourses; i++) {
  //   if(edges[i] === 0) {
  //     queen.push(i);
  //   }
  // }

  // while(queen.length) {
  //   let v = queen.shift();
  //   // 未修课程数-1
  //   numCourses--;
  //   // 他的出度全部-1
  //   if(map.has(v)) {
  //     for (let w of map.get(v)){
  //       console.log(w, v);
  //       edges[w]--;
  //       if(edges[w] === 0) {
  //         queen.push(w);
  //       }
  //     }
  //   }
  // }
  // return numCourses === 0






  /**
   * 2 深度优先搜索
   * 参考： https://leetcode-cn.com/problems/course-schedule/solution/tuo-bu-pai-xu-shen-du-you-xian-qiu-ke-cheng-biao-s/
   *
   */

  const mapTable = new Map();// 创建邻接表
  const edges = new Array(numCourses).fill(0); // 创建入度表
  const state = new Map(); // //key:节点, value:访问状态。0未被访问，1正在访问，-1已经被其他访问
  const result = true; //记录是否有环。和是否全部访问完。true 为遍历到的节点是无环的

  for (let i = 0; i < numCourses; i++) {
    mapTable.set(i, []);
    state.set(i, 0);
  }

  for (let item of prerequisites) {
    mapTable.get(item[1]).push(item[0]);
  }

  for (let val of mapTable) {
    val.forEach(item => {
      edges[item]++
    })
  };

  //从每个入度为0的点开始遍历图
  edges.forEach((item, index) => {
    if (item == 0) {
      dfs(index);
    }
  })

  //查看状态;
  if (result == false) return false;
  // console.log('最终状态：', stats)
  for (let i = 0; i < state.size; i++) {
    if (state.get(i) == 0) return false;
  }
  return true;


  // 用于深度遍历所有节点的dfs
  function dfs(node) {
    let nextNodes = mapTable.get(node);
    if (nextNodes.length === 0) {
      state.set(node, -1); //标记为已经访问
      return;
    }

    state.set(node, 1); // 设为正在访问
    for (let i = 0; i < nextNodes.length; i++) {
      const item = nextNodes[i];
      if (result === false) return; //每次访问子节点时判断。有环则立即回退
      if (state.get(item) === 0) { // 未访问 递归向下进行
        dfs(item);
      } else if (state.get(item) === 1) { // 访问到正在访问的节点，则是环
        result = false;
        break;
      } else if (state.get(item) === -1) { // 已访问过的节点 跳过继续
        continue;
      }
    };
    // 所有节点访问完，标记未已访问
    state.set(node, -1);
    return;
  }



};
// @lc code=end
// console.log(canFinish(5, [[4,2],[4,3],[2,0],[2,1]]))

