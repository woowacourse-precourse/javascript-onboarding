function find369(number) {
  const regexp = /3|6|9/;
  let found369 = [];

  for (let n = 1; n < number + 1; n++) {
    if (regexp.test(n)) {
      found369.push(n);
    }
  }

  return found369;
}

function problem3(number) {
  let clapNum = 0;
  const found369Num = find369(number);

  for (let element of found369Num) {
    const translatedStr = element.toString();
    count369InStr(translatedStr);
  }

  return clapNum;

  function count369InStr(s) {
    for (let letter of s) {
      if ((letter === "3") | (letter === "6") | (letter === "9")) {
        clapNum += 1;
      }
    }
  }
}

module.exports = problem3;
