'use strict';

newPush = Array.prototype.newPush = function(el) {
  this[this.length] = el;
};

newPop = Array.prototype.newPop = function(el) {
  var end = this[this.length-1];
  delete this[this.length-1];
  return end;
  console.log(end);
}


exports.newPush = newPush;
exports.newPop = newPop;
