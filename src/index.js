module.exports = function reverse(n) {
let str = String(n).split('').reduce((acc, e) => acc = e+acc, '').replace(/[^0-9]/g, '');
return Number(str)
}
