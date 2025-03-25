exports.reverseString = function(s) {
    return s.split("").reverse().join("");
  };
  
  exports.isPalindrome = function(s) {
    return s === s.split("").reverse().join("");
  };
  
  exports.fibonacci = function(n) {
    if (n < 0) return null;
    let [a, b] = [0, 1];
    for (let i = 0; i < n; i++) {
      [a, b] = [b, a + b];
    }
    return a;
  };
  
  exports.factorial = function(n) {
    if (n < 0) return null;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };
  
  exports.sumArray = function(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  };
  
  exports.maxArray = function(arr) {
    return arr.length ? Math.max(...arr) : undefined;
  };
  
  exports.mergeSortedArrays = function(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
  };
  
  exports.uniqueArray = function(arr) {
    return [...new Set(arr)];
  };
  
  exports.countVowels = function(s) {
    return (s.match(/[aeiouAEIOU]/g) || []).length;
  };
  
  exports.evenOrOdd = function(n) {
    return n % 2 === 0 ? "even" : "odd";
  };
  