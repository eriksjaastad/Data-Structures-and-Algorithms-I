
var app = require("../lib/app.js"),
    expect = require("chai").expect;

    describe("newPush", function() {
      it("should add new items to the end of an array and array length should increase", function() {
        var arr = [1,2,3];
        arr.newPush(4);
        expect(arr).to.eql([1,2,3,4]);
        expect(arr.length).to.eql(4);
      });
    });

    describe("newPop", function() {
      it("should return the item that was removed and should remove the last item of an array", function() {
        var arr = [1,2,3];
        expect(arr.newPop()).to.eql(3);
        expect(arr.length).to.eql(2);
      });
    });

    describe("newShift", function() {
      it("should remove the first item in an array and return it and the array length should decrease", function() {
        var arr = [1,2,3];
        expect(arr.newShift()).to.eql(1);
        expect(arr).to.eql([2,3]);
        expect(arr.length).to.eql(2);
      });
    });

    describe("newUnshift", function() {
      it("should add new items to the beginning of an array and return the new length of the array", function() {
        var arr = [1,2,3];
        arr.newUnshift(0);
        expect(arr).to.eql([0,1,2,3]);
        expect(arr.length).to.eql(4);
      });
    });



    describe("Unique", function() {
      it("should take an array and return a copy of the array with all duplicates removed", function() {
        var arr = ['alpha', 'beta', 'gamma', 'alpha'];
        expect(app.unique(arr)).to.eql(['alpha', 'beta', 'gamma']);
      });
    });

    describe("Frequency2", function() {
      it("should take an array of words and return the most common letter in the array", function() {
        var arr = ['mu', 'nu'];
        expect(app.frequency2(arr)).to.eql({m:1,u:2,n:1});
      });
    });

