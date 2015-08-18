exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i <arr.length; i++){
      var v = arr[i];
        for(var j = 1; j < arguments.length; j++){
          if(v == arguments[j]){
            arr.splice(i,1);
            i--;
          }
       }
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
    var new_array = arr1.concat(arr2)
    return new_array
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === item) count += 1;
    }
  return count;
  },

  duplicates : function(arr) {
    function findDuplicates(arr) {
    var i,
        len=arr.length,
        out=[],
        obj={};

    for (i=0;i<len;i++) {
        if (obj[arr[i]] != null) {
            if (!obj[arr[i]]) {
                out.push(arr[i]);
                obj[arr[i]] = 1;
            }
        } else {
            obj[arr[i]] = 0;
        }
    }
    return out;
    }
    var backwards_array = findDuplicates(arr);
    var result = backwards_array.reverse();
   return result;
 },

  square : function(arr) {
    var new_array = [];
    for (i=0; i<arr.length;i++) {
      new_array.push(arr[i] * arr[i]);
    }
    return new_array;
  },

  findAllOccurrences : function(arr, target) {
    var new_array = [];
    for (i = 0;i < arr.length; i++) {
      if (arr[i] === target)
      new_array.push(i);
    }
    return new_array;
  }
};
