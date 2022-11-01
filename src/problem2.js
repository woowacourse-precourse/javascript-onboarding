function problem2(cryptogram) {
  let answer;

  let cryptogramArr = cryptogram.split("");
  let result = [];
  let compareTarget;
  let flag = false;

  while (true) {
    let lastIndex = cryptogramArr.length - 1;

    if (cryptogramArr[lastIndex] === cryptogramArr[lastIndex - 1]) {
      flag = true;
      compareTarget = cryptogramArr[lastIndex];
      while (cryptogramArr[cryptogramArr.length - 1] === compareTarget) {
        cryptogramArr.pop();
      }
    } else {
      result.push(cryptogramArr.pop());
    }

    if (cryptogramArr.length === 0) {
      if (result.length === 0) break;
      if (flag === true) {
        cryptogramArr = result.reverse();
        result = [];
      } else break;
      flag = false;
    }
  }

  answer = result.reverse().join("");

  return answer;
}

module.exports = problem2;
