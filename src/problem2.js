function problem2(cryptogram) {
  let answer = [...cryptogram];
  let i = 0;
  while (i !== answer.length) {
    if (answer[i] === answer[i + 1]) {
      answer.splice(i, 2);
      i = 0;
    } else {
      i++;
    }
  }
  return answer.join("");
}

module.exports = problem2;
