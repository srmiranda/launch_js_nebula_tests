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
