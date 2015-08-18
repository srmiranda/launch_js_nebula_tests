exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    // Extra Credit
  },

  permute: function(arr) {
    // Extra Credit
  },

  fibonacci: function(n) {
    if(n <= 2) {
        return 1;
    } else {
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  },

  validParentheses: function(n) {
    // Extra Credit
  }
};

// Impure Function: There are pure functions
// in JavaScript, which neither depend on nor modify
//the states of variables outside their scopes.

// Impure Function
var thinkerPerson = { name: "Wittgenstein" };

function impureFunction ( thing ) {
  var suffix = "Philosopher";

  thing.name = thing.name + ", " + suffix;
}
impureFunction( thinkerPerson )

// Pure Function
var thinkerPerson = { name: "Wittgenstein" };

function pureFunction ( thing ) {
  var suffix = "Philosopher";

  thing = thing + ", " + suffix;

  return thing;
}
pureFunction ( thinkerPerson.name );
