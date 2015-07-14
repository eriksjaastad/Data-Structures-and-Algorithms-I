'use strict';

Array.prototype.newPush = function(el) {
  this[this.length] = el;
  return this.length;
};

Array.prototype.newPop = function() {
  var end = this[this.length-1];
  delete this[this.length-1];
  this[this.length--];
  return end;
};

Array.prototype.newShift = function() {
  var start = this[0];
  delete this[0];
  for(var i = 1; i < this.length; i++){
    this[i - 1] = this[i];
  }
  this.length = this.length -1;
  return start;
};

Array.prototype.newUnshift = function(el) {
  for(var i = this.length; i >= 1; i--) {
    this[i] = this[i - 1];
  }
  this[0] = el;
};

var unique = function(arr) {
  var a = [];
  for(var i = 0; i < arr.length; i++) {
    if(a.indexOf(arr[i]) === -1) {
      a.newPush(arr[i]);
    }
  }
  return a;
};

var frequency2 = function(arr) {
  var freq = {};
  for(var i = 0; i < arr.length;i++) {
    var word = arr[i];
    for(var j = 0; j < word.length; j++) {
      var char = word[j].toLowerCase();
      freq[char] ? freq[char]++ : freq[char] = 1;
    }
  }
  return freq;
};


exports.Array = Array;
exports.unique = unique;
exports.frequency2 = frequency2;
