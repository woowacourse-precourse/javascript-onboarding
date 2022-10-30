function problem2(cryptogram) {
  let result = cryptogram.split("");
  let nextState = [];

  while (result.length > 0) {
    let count = 0;
    let isDoubled = false;
    nextState = [];
    result.forEach((c, idx) => {
      let prev = nextState[nextState.length - 1];
      if (prev !== c && count > 0) {
        while (count >= 0) {
          nextState.pop();
          count--;
        }
        count = 0;
      } else if (prev == c) {
        isDoubled = true;
        count++;
      }
      nextState.push(c);
    });
    if (result.length == 2 && result[0] == result[1]) return "";
    result = nextState;
    if (isDoubled == false) return nextState.join("");
  }
}

module.exports = problem2;
