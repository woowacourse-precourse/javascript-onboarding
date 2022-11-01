function problem2(cryptogram) {
  let answer;

  const cryptogramArr = cryptogram.split("");
  const stack = [cryptogramArr[0]];
  let compareTarget = cryptogramArr[0];

  for (let i = 1; i < cryptogramArr.length; i++) {
    stack.push(cryptogramArr[i]);
    if (compareTarget !== cryptogramArr[i]) {
      compareTarget = cryptogramArr[i];
    } else {
      if (
        i === cryptogramArr.length - 1 ||
        (i !== cryptogramArr.length - 1 &&
          compareTarget !== cryptogramArr[i + 1])
      ) {
        while (compareTarget === stack[stack.length - 1]) stack.pop();
        compareTarget = stack[stack.length - 1];
      }
    }
  }

  answer = stack.join("");

  return answer;
}

module.exports = problem2;
