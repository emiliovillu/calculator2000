var dec = require('./dec')
var inc = require('./inc')

var sub = function (a, b) {
  while(b !== 0) {
    a = dec(a)
    b = dec(b)
  } 

  return a
}

module.exports = sub
