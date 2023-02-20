/*
 * @lc app=leetcode.cn id=1233 lang=javascript
 *
 * [1233] 删除子文件夹
 */

// @lc code=start
/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {

  // 先过滤 && 排序
  folder = folder.filter(path => path && path !== '/').sort((a, b) => a.length - b.length);

  for (let i = 0; i < folder.length - 1; i++) {
    let curPath = folder[i];
    let childIndexes = [];
    for (let j = i + 1; j < folder.length; j++) {
      if (folder[j].startsWith(curPath + '/')) {
        childIndexes.push(j);
      }
    }
    for (let k = childIndexes.length - 1; k >= 0; k--) {
      folder.splice(childIndexes[k], 1);
    }
    childIndexes = [];
  }
  return folder;
};
// @lc code=end

