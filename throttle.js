
function throttle(fn, time,) {
  // const that = this;
  let lastTime = 0

  return (...args) => {
    if (Date.now() - lastTime > time) {
      fn(...args);
      lastTime = Date.now();
    }
    // if (timer) return;
    // timer = setTimeout(() => {
    //   fn.apply(that, args);
    //   timer = null;
    // }, time)
  }
  // fn.apply(that, args);
}

function testThrottle() {
  function fn(args) {
    console.log(args, Date.now());
  }
  const tfn = throttle(fn, 500);
  let i = 0;
  setInterval(() => {
    tfn(i);
    i++;
  }, 10)
}
// testThrottle();



function debounce(fn, time) {
  let timer;
  return (...args) => {

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args)
      timer = null;
    }, time)
  }
}

function testDebounce() {
  function fn(args, i) {
    console.log(Date.now() - args, i);
  }
  const bfn = debounce(fn, 300);

  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      bfn(Date.now(), i)
    }, i * 200)
  }
}
testDebounce();