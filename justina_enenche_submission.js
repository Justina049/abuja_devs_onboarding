
exports.reverseString = function(s) {
  let reversed = "";
  for (let i = s.length - 1; i >= 0; i--) {
      reversed += s[i];
  }
  return reversed;
};


exports.isPalindrome = function(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
  }
  return true;
};


exports.fibonacci = function(n) {
  if (n < 0) return null;
  let a = 0, b = 1;
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
  let sum = 0;
  for (let num of arr) {
      sum += num;
  }
  return sum;
};


exports.maxArray = function(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let num of arr) {
      if (num > max) max = num;
  }
  return max;
};


exports.mergeSortedArrays = function(arr1, arr2) {
  let merged = [], i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          merged.push(arr1[i]);
          i++;
      } else {
          merged.push(arr2[j]);
          j++;
      }
  }
  while (i < arr1.length) merged.push(arr1[i++]);
  while (j < arr2.length) merged.push(arr2[j++]);
  return merged;
};


exports.uniqueArray = function(arr) {
  let seen = {}, unique = [];
  for (let num of arr) {
      if (!seen[num]) {
          seen[num] = true;
          unique.push(num);
      }
  }
  return unique;
};


exports.countVowels = function(s) {
  let count = 0, vowels = "aeiouAEIOU";
  for (let char of s) {
      if (vowels.includes(char)) count++;
  }
  return count;
};


exports.evenOrOdd = function(n) {
  return n % 2 === 0 ? "even" : "odd";
};
