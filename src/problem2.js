function problem2(cryptogram) {
  let answer = change(cryptogram);
  return answer;
}

function change(word) {
  let size = word.length;
  while (true) {
    word = remove(word);

    if (word.length === size) {
      return word;
    }

    size = word.length;
  }
}

function remove(word) {
  let str = "";
  if (word.length <= 1) {
    return word;
  }

  let c = word.charAt(0);
  let count = 1;

  for (let i = 1; i < word.length; i++) {
    let oneWord = word.charAt(i);

    if (oneWord == c) {
      // 같은 값이 나오면 count를 증가시킨다.
      count++;
    } else {
      // 다른 값이 나왔는데 1개만 나온 경우
      if (count == 1) {
        str += c;
      }
      c = oneWord;
      count = 1;
    }

    // 마지막 인덱스의 경우 직접 처리한다.
    if (i == word.length - 1) {
      if (count == 1) {
        str += c;
      }
    }
  }
  return str;
}

module.exports = problem2;
