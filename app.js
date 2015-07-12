'use strict';

var arr = ['me', 'you', 'cup', 'can', 'phone', 'list', 'smoke', 'coffee'];

exports.newPush = Array.prototype.newPush = function(el) {
  this[this.length] = el;
};
