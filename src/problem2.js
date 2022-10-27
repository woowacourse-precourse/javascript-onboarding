function removeDuplicates(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      let sliceIdx = i + 2;
      for (let j = 2; i + j < str.length; j++) {
        if (str[i] === str[i + j]) {
          sliceIdx++;
        } else {
          break;
        }
      }

      str = str.slice(0, i) + str.slice(sliceIdx);

      if (i > 2) {
        i -= sliceIdx - i;
      } else {
        i = -1;
      }
    }
  }

  return str;
}

function problem2(cryptogram) {
  let answer = removeDuplicates(cryptogram);

  return answer;
}

module.exports = problem2;
