
function jieliu(fn, time) {
  let lastTime = 0;
  return function () {
    const arg = arguments;
    const now = new Date().getTime();
    if (now - lastTime > time) {
      fn.apply(arg);
      lastTime = now;
    }
  }
}


function fangdou(fn, time) {
  let timer;
  return function () {
    const arg = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(arg);
    }, time);
  }
}

console.log(1)
setTimeout(() => {
  console.log(2)
  new Promise((resolve) => {
    resolve(3)
  }).then((res) => {
    console.log(res)
  })
})

new Promise((resolve) => {
  console.log(4)
  resolve(5)
}).then((res) => {
  console.log(res)
})

setTimeout(() => {
  console.log(6)
})

console.log(7)

// 1 4 7 5 2 3 6

const api = [url1, url2, url3];

function fetch(api) {
  return Promise((resolve, reject) => {
    // todo
  })
}

let p;
p = api.reduce((last, item) => {
  return last.then(() => fetch(item));
}, Promise.resolve);

// 
p.then((res1) => {}).then((res2) => {}).then((res3) => {});