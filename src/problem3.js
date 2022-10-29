function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    let numToStr = i.toString();

    for (let j = 0; j < numToStr.length; j++) {
      if (numToStr[j] === "3" || numToStr[j] === "6" || numToStr[j] === "9")
        count++;
    }
    answer += count;
  }
  return answer;
}

module.exports = problem3;
