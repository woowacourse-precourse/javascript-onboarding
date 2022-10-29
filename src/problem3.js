function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    let numToStr = i.toString();
    console.log("체크", numToStr);

    for (let j = 0; j < numToStr.length; j++) {
      if (numToStr[j] === "3" || numToStr[j] === "6" || numToStr[j] === "9")
        count++;
      console.log("체크2", count);
    }
    answer += count;
  }
  return answer;
}

problem3(13);
module.exports = problem3;
// number	result
// 13	     4
// 33	     14
