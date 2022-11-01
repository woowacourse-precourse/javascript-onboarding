function rmDuplicate(arr) {
  var answer = [];

  for (var i = 0; i < arr.length; i++) {
    if (answer.length === 0) {
      answer.push(arr[i]);
    } else {
      var top = answer[answer.length - 1];
      if (top === arr[i]) {
        answer.pop();
      } else {
        answer.push(arr[i]);
      }
    }
  }
  return answer;
}

function problem2(cryptogram) {
  var origin_len = cryptogram.length;

  var answer = rmDuplicate(cryptogram);
  while (answer.length !== origin_len) {
    origin_len = answer.length;
    var answer = rmDuplicate(answer);
  }

  return answer.join("");
}

module.exports = problem2;
