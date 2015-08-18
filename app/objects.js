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
    // var array = []
    // array.push(obj);
    // for (var i = 0; i < array.length; i++){
    //   return array[i];
    // }
  }
};
