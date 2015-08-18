exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    obj.new_function = fn;
    return obj.new_function();
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var new_array = [];
    for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      new_array.push(key + ": " + obj[key]);
    }
  }
  return new_array;
  }
};
