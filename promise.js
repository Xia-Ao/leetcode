
class MyPromise {
  constructor(executor) {
    this.status = 'pending';
    this.val = null;
    this.err = null;
    this.onResolveCbs = [];
    this.onRejectCbs = [];

    let resolve = (val) => {
      this.status = 'fulfilled';
      this.val = val;
      this.onResolveCbs.forEach(cb => {
        if (typeof cb === 'function') {
          cb();
        }
      })
    };
    let reject = (err) => {
      this.status = 'rejected';
      this.err = err;
      this.onRejectCbs.forEach(cb => cb())
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject()
    }
  }



  then(onFulfilled, onRejected) {
    if (this.status === 'pending') {
      this.onResolveCbs.push(() => {
        onFulfilled(this.val);
      });
      this.onRejectCbs.push(() => {
        onRejected(this.err);
      });
    } else if (this.status === 'fulfilled') {
      onFulfilled(this.val);
    } else if (this.status === 'rejected') {
      onRejected(this.err);
    }
  }
  catch(onRejected) {
    return this.then(() => { }, onRejected)
  }
  static resolve(params) {
    if(params instanceof MyPromise){
      return params
    }
    return new MyPromise((resolve, reject) => reject(params));
  }

  static resolve(params) {
    if(params instanceof MyPromise){
      return params
    }
    return new MyPromise((resolve) => resolve(params));
  }

  static all(list) {
    return new MyPromise((resolve, reject) => {
      const len = list.length;
      const resList = [];
      let count = 0;
      list.forEach((p, i) => {
        p().then(res => {
          resList[i] = res;
          count++;
          if (count === len) {
            resolve(resList)
          }
        }).catch(err => {
          reject(err)
        })
      })
    })
  }

  static race(list) {
    return new MyPromise((resolve, reject) => {
      list.forEach(p => {
        p().then(resolve).catch(reject)
      })
    })
  }
}