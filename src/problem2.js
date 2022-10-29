function recursion(word) {
  var answer;
  let result = [];
  let temp = word[0];
  let wordlen = word.length
  let count = 0;
  for (let i = 0; i < (wordlen); i++) {
    if (temp == word[i + 1]) {
      count += 1;
      continue;
    } else {
      if (count === 0) {
        result.push(temp);
        temp = word[i + 1];
      } else {
        temp = word[i + 1];
        count = 0
      }
    }
  }
  answer = result.join('');
  console.log(answer);
  return answer;
}

function problem2(cryptogram) {
  var answer;
  if (cryptogram.length === 1) {
    answer = cryptogram;
  } else {
    while (true) {
      let tmp = recursion(cryptogram);
      if (cryptogram === tmp) {
        break;
      } else {
        cryptogram = tmp;
      }
    }
    answer = cryptogram;
  }
  return answer;
}

module.exports = problem2;
