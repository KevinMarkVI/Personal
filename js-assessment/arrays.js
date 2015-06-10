if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    },

    remove : function(arr, item) {
      var indexArray = [];
      for (var i = arr.length; i >= 0; i--) {
        if (arr[i] === item) {
          indexArray.push(i);
        }
      }
      for (var j = 0; j < indexArray.length; j++) {
        arr.splice(indexArray[j], 1);
      }
      return arr;
    },

    removeWithoutCopy : function(arr, item) {
      var indexArray = [];
      for (var i = arr.length-1; i >= 0; i--) {
        if (arr[i] === item) {
          indexArray.push(i);
        }
      }
      for (var j = 0; j < indexArray.length; j++) {
        arr.splice(indexArray[j], 1);
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      for (var i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
      }
      return arr1;
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          count++;
        }
      }
      return count;
    },

    duplicates : function(arr) {
      var obj = {};
      var results = [];
      for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
          obj[arr[i]] += 1;
        } else {
          obj[arr[i]] = 1;
        }
      }
      for (var key in obj) {
        if (obj[key] > 1) {
          results.push(key);
        }
      }
      return results;
    },

    square : function(arr) {
      for (var i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i], 2);
      }
      return arr;
    },

    findAllOccurrences : function(arr, target) { 
      var results = []; 
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
          results.push(i);
        }
      }
      return results;
    }
  };
});

















