function problem2(cryptogram) {
  let answer = [];
  let seperate_string = [...cryptogram];

  for (let i = 0; i < seperate_string.length; i++) {
    if (answer[answer.length - 1] === seperate_string[i]) {
      answer.pop();
    } else {
      answer.push(seperate_string[i]);
    }
  }
  return answer.join("");
}

module.exports = problem2;
