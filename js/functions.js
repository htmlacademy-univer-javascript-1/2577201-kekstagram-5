// eslint-disable-next-line no-unused-vars
function lengthOfStr(str, length) {
  return str.length <= length;
}
// eslint-disable-next-line no-unused-vars
function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s/g, '');
  return str === str.split('').reverse().join('');
}
// eslint-disable-next-line no-unused-vars
function extractNumbers(str) {
  const chars = str.toString().split('');

  let result = '';

  for (const char of chars) {
    if (!isNaN(parseInt(char, 10))) {
      result += char;
    }
  }
  return parseInt(result, 10) || NaN;
}

