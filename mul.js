var dec = require('./dec')
var sum = require('./sum')

var mul = function (a, b) {
  var result = 0
  while(b !== 0) {
    result = sum(result, a)
    b = dec(b)
  } 
  return result
}

module.exports = mul
