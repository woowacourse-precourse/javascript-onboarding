function problem2(cryptogram) {
  let answer = cryptogram;

  while (true) {
    let is_not_valid = false;
    for (let i = 0; i < answer.length - 1; i++) {
      if (answer[i] === answer[i + 1]) {
        let next_index = 0;
        for (let j = i + 1; j < answer.length; j++) {
          if (answer[i] !== answer[j]) {
            break;
          } else {
            is_not_valid = true;
            next_index = j;
          }
        }
        if (is_not_valid) {
          let substr_first = answer.substr(0, i);
          let substr_second = answer.substr(next_index + 1, answer.length);

          answer = '';
          answer += substr_first;
          answer += substr_second;
        } else {
          break;
        }
      }
    }

    if (is_not_valid == false) {
      break;
    }
  }

  return answer;
}

module.exports = problem2;
