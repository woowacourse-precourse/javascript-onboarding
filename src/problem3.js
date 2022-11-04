function problem3(number) {
  // var answer = 0;
  // let temp = [];

  // //number 만큼 반복문 돌리기
  // // for (let i = 0; i <= number; i++) {
  // //   //글자열로 바꾼후j번째 인덱스가 3,6,9이면 배열에 추가
  // //   for (let j = 0; j < String(number).length; j++) {
  // //     if (
  // //       String(i)[j] === "3" ||
  // //       String(i)[j] === "6" ||
  // //       String(i)[j] === "9"
  // //     ) {
  // //       // temp.push(i);
  // //       // console.log("전 :", answer);
  // //       answer += 1;
  // //       // console.log("후 :", answer);
  // //     }
  // //   }
  // // }

  // //중복 ex) 33, 36
  // // console.log(temp);
  // // answer = temp.length;
  // console.log(answer);
  // return answer;

  let answer = 0;

  for (let i = 1; i <= number; ++i) {
    let temp = i;
    while (temp > 0) {
      if (temp % 10 == 3 || temp % 10 == 6 || temp % 10 == 9) {
        answer++;
      }
      temp = parseInt(temp / 10);
    }
  }
  return answer;
}
module.exports = problem3;

// problem3(13);
// let start = new Date().getTime();

// problem3(33333333);
// let end = new Date().getTime();
// console.log("start", start, "end", end);
// console.log("test시간 :", end - start);
