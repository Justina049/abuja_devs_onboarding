exports.reverseString = function (s) {
    // Your implementation here
    let ns = ""
    for (let index = s.length - 1; index >= 0; index--) {
        ns = ns + s[index]
    }
    return ns;
};

exports.isPalindrome = function (s) {
    // Your implementation here
    for (let index = 0; index < s.length; index++) {
        // console.log(s[index], s[s.length - 1 - index]);
        if (s[index] != s[s.length - 1 - index]) return false;
    }
    return true;
};

exports.fibonacci = function (n) {
    // Your implementation here
    if (n < 0) return null;
    if (n === 0) return 0;
    if (n === 1) return 1;
    let sum = 1, prev = 0;
    for (let index = 2; index <= n; index++) {
        const tmp = sum + prev;
        prev = sum
        sum = tmp;
    }
    return sum;
};

exports.factorial = function (n) {
    // Your implementation here
    let sum = n;
    for (let index = n - 1; index >= 1; index--) {
        sum = sum * index;
    }
    return sum;
};

exports.sumArray = function (arr) {
    // Your implementation here
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index];
    }
    return sum
};

exports.maxArray = function (arr) {
    // Your implementation here
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let index = 1; index <= arr.length - 1; index++) {
        if (arr[index] > max) max = arr[index];
    }
    return max;
};

exports.mergeSortedArrays = function (arr1, arr2) {
    // Forgive the crude implementation, you did say to optimize for time.😩
    const short = arr1.length <= arr2.length ? arr1 : arr2;
    const long = arr1.length > arr2.length ? arr1 : arr2;
    const arr3 = Array(arr1.length + arr2.length);
    let long_index = 0, short_index = 0;
    let arr3_idx = -1;
    // [1, 2, 3, 4, 5, 8], [3, 6, 7]
    // [1, 3], [2, 4]
    while (long_index <= long.length - 1) {
        // const s_val = short[short_index];
        // const l_val = long[long_index];
        if (short[short_index] >= long[long_index] || short[short_index] === undefined) {
            arr3[++arr3_idx] = long[long_index];
            long_index++;
        }
        else if (short_index <= short.length - 1) {
            arr3[++arr3_idx] = short[short_index];
            short_index++;
        };
        // True if everything in shorter array has been
        // merged into new array
        // if (short_index >= short.length) {
        //     // Push everything remaining
        //     // from: larger array, starting From last checked index "long_index", To last array element. 
        //     // into: new merged array.
        //     for (let index = ++long_index; index < long.length-1; index++) {
        //         arr3[++arr3_idx] = long[index];
        //     }
        // }
        // console.log(s_val, l_val, arr3);
        console.log(short[short_index], long[long_index], arr3);
    }
    return arr3;
};

exports.uniqueArray = function (arr) {
    // Your implementation here
    const seen = new Map();
    // let uArrIndex = -1;
    // const uArr = Array(arr.length);
    for (let index = 0; index < arr.length; index++) {
        if (seen.has(arr[index])) continue;
        else {
            seen.set(arr[index], true);
            // uArr[++uArrIndex] = arr[index];
        }
    }
    // return uArr;
    return Array.from(seen.keys());
};

exports.countVowels = function (s) {
    // Your implementation here
    let count = 0
    for (let index = 0; index < s.length; index++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(s[index].toLowerCase())) count = count + 1;
    }
    return count;
};

exports.evenOrOdd = function (n) {
    // Your implementation here
    return n % 2 === 0 ? "even" : "odd";
};