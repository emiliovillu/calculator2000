var dec = require('./dec')
var inc = require('./inc')

var sum = function (a, b) {
  while(b !== 0) {
    a = inc(a)
    b = dec(b)
  } 

  return a
}

module.exports = sum
