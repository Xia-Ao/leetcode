/*
 * @lc app=leetcode.cn id=1797 lang=javascript
 *
 * [1797] 设计一个验证系统
 */

// @lc code=start
/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function (timeToLive) {
  this.timeToLive = timeToLive;
  this.tokenMap = {};
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
  this.tokenMap[tokenId] = currentTime + this.timeToLive;
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
  const tokenExpiredTime = this.tokenMap[tokenId];
  // token存在
  if (tokenExpiredTime) {
    // 未过期
    if (tokenExpiredTime > currentTime) {
      this.tokenMap[tokenId] = currentTime + this.timeToLive;
    } else {
      delete this.tokenMap[tokenId];
    }
  }
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
  let count = 0;
  // console.log('tokenMap', currentTime, this.tokenMap)
  for (let key in this.tokenMap) {
    // 未过期
    if (this.tokenMap[key] > currentTime) {
      count++;
    } else {
      delete this.tokenMap[key];
    }
  }
  return count;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
// @lc code=end

