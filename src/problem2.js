function problem2(cryptogram) {
  let answer = "";
  let stringMap = new Map();

  [...cryptogram].forEach((x) => {
    if (stringMap.get(x) > 0) {
      stringMap.set(x, stringMap.get(x) + 1);
    } else {
      stringMap.set(x, 1);
    }
  });

  stringMap.forEach((x, y) => {
    if (x % 2 !== 0) {
      answer += y;
    };
  });

  return answer;
}

module.exports = problem2;
