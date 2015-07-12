var expect = require("chai").expect;
var app = require("../app");
var arr = ['me', 'you', 'cup', 'can', 'phone', 'list', 'smoke', 'coffee'];

describe("ArrayMethods", function() {
  describe("Push", function() {
    it("should add new items to the end of an array", function() {
      arr.newPush('plant');
      expect(arr[arr.length -1]).to.equal('plant');
    });
    it("should return the new length of an array", function() {
      arr.newPush('tree');
      expect(arr.length).to.equal(10);
    });
  });

  describe("Pop", function() {
    it("should return the item that was removed", function() {
      expect(arr.newPop()).to.equal("tree");
    });
    it("should remove the last item of an array", function() {
      arr.newPop();
      expect(arr.length).to.equal(10);
    });
  });

  describe("Shift", function() {
    it("should remove the first item in an array", function() {

    });
    it("should return the item the item that was removed", function() {

    });
    it("should change the length of an array", function() {

    });
  });

  describe("Unshift", function() {
    it("should add new items to the beginning of an array", function() {

    });
    it("should return the new length of an array", function() {

    });
  });

  describe("Unique", function() {
    it("should take an array", function() {

    });
    it("should return a copy of the array with all duplicates removed", function() {

    });
  });
  describe("Frequency", function() {
    it("should take an array of Engish words", function() {

    });
    it("should return the most common letter in the array", function() {

    });
  })
});
