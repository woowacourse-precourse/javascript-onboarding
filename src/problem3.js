function problem3(number) {
  let clap = 0;
  // 제한사항 : number는 1 이상 10,000 이하인 자연수이다.
  if (1 <= number <= 10000) {
    //기능 목록 1 이중for문
    for (let i = 0; i <= number; i++) {
      // 기능 목록 2 number값 배열에 추가
      var strNum = i.toString();
      var arr = Array.from(strNum);
      // 기능 목록 3 박수 횟수 추가.
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === "3" || arr[j] === "6" || arr[j] === "9") {
          clap += 1;
        }
      }
    }
  } else {
    return "Error: Incorrect Number"
  }
  return clap;
}

module.exports = problem3;
