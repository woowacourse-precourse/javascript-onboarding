function problem2(cryptogram) {
  if (inputExecption(cryptogram)) {
    var answer;
    let decodeArr = [];
    decode(cryptogram, decodeArr);
    answer = decodeArr.join("");
    return answer;
  }
}
module.exports = problem2;

function decode(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const char = arr1[i];
    if (arr2[arr2.length - 1] == char) arr2.pop();
    else arr2.push(char);
  }
}

function inputExecption(string) {
  let inputCheck = true;
  if (string.length < 1 || string.length > 1000) inputCheck = false;
  else if (string !== string.toLowerCase()) inputCheck = false;
  return inputCheck;
}