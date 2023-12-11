//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  let words = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reverse = words.split("").reverse().join("")
  return reverse === words
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
