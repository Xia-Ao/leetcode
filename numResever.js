var reverse = function(x) {
    let Max = Math.pow(2, 32);
    console.log(Max);
    function handle(num) {
        let res = parseInt(Math.abs(num).toString().split('').reverse().join('').replace(/\^0+/, ''));
        return res < Max ? res : 0;
    }
    if ( x >= 0) {
        return handle(x);
    } else {
        return 0 - handle(x);
    }
};

console.log(reverse(1563847412));