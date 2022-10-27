function problem2(cryptogram) {
  var answer;
  let decodeArr = [];

  for (let i = 0; i < cryptogram.length; i++) {
    const char = cryptogram[i];
    if (decodeArr[decodeArr.length - 1] == char) decodeArr.pop();
    else decodeArr.push(char);
  }
  
  answer = decodeArr.join("");
  return answer;
}
console.log(problem2('browoanoommnaon'));
module.exports = problem2;
