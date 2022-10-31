function problem2(cryptogram) {
  var answer;
  let arr = [];
  for (let char of cryptogram) {
    arr[arr.length - 1] === char ? arr.pop() : arr.push(char);
  }
  answer = arr.join('');
  return answer;
}

module.exports = problem2;
