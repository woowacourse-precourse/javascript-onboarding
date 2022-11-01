function problem2(cryptogram) {
  var answer = [];
  let arr = [...cryptogram];

  while (1) {
    let cnt = 0
    answer.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      if (answer[i-1] === arr[i]) {
        answer.pop();
        cnt++;
      } else {
        answer.push(arr[i]);
      }
    }

    if (cnt === 0) {
      return answer.join("")
    } else {
      arr = answer.join("");
      answer = [];
    }
  }


  return answer;
}

module.exports = problem2;
