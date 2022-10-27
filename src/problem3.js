function problem3(number) {
  let clapCount = 0;
  for (let i = 1; i <= number; i++) {
    let strArr = String(i).split("");
    for (let j = 0; j < strArr.length; j++) {
      if (strArr[j] === "3") clapCount++;
      else if (strArr[j] === "6") clapCount++;
      else if (strArr[j] === "9") clapCount++;
    }
  }
  return clapCount;
}

module.exports = problem3;
