const sumAll = function(x, y) {
    if (!(Number.isInteger(x) && x >= 0) || !(Number.isInteger(y) && y >= 0)) return "ERROR"
    let sum = 0;
    for (let i = Math.min(x, y); i <= Math.max(x, y); i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
