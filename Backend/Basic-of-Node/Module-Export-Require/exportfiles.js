// first way to export

// const sum = (a,b) => a + b ;
// const mul = (a,b) => a * b ;
// const g = 9.8 ;
// const PI = 3.14 ;
// module.exports = {sum, mul, g, PI};


// Second way to export

// module.exports.sum = (a,b) => a + b ;
// module.exports.mul = (a,b) => a * b ;
// module.exports.g = 9.8 ;
// module.exports.PI = 3.14 ;


// Third way to export
exports.sum = (a,b) => a + b ;
exports.mul = (a,b) => a * b ;
exports.g = 9.8 ;
exports.PI = 3.14 ;