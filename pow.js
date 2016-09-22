var dec = require('./dec')
var mul = require('./mul')

var pow = function (a, b) {
  var result = 1
  while(b !== 0) {
    result = mul(result, a)
    b = dec(b)
  } 
  return result
}

module.exports = pow

