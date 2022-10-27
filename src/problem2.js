function problem2(cryptogram) {
  var answer;
  let decodeArr = [];

  decode(cryptogram, decodeArr);
  answer = decodeArr.join("");
  return answer;
}
module.exports = problem2;

function decode(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const char = arr1[i];
    if (arr2[arr2.length - 1] == char) arr2.pop();
    else arr2.push(char);
  }
}