function problem2(str) {
  let answer;
  let overRide;
  do {
    overRide = false;
    answer = "";
    let findOverlap = false;
    let prevLetter = null;
    for (let i = 0; i < str.length; i++) {
      //   console.log(answer);
      //   console.log(prevLetter);
      if (!prevLetter) {
        // 초기화 부분
        prevLetter = str[i];
      } else if (prevLetter === str[i]) {
        // console.log("여기 들어오는거니?");
        overRide = true;
        findOverlap = true;
      } else {
        if (findOverlap) {
          if (i === str.length - 1) {
            answer += str[i];
          } else {
            prevLetter = str[i];
            findOverlap = false;
          }
        } else {
          if (i === str.length - 1) {
            answer += prevLetter;
            answer += str[i];
          } else {
            answer += prevLetter;
            prevLetter = str[i];
          }
        }
      }
    }
    // console.log(answer);
    str = answer;
  } while (overRide);
  return answer;
}

module.exports = problem2;
