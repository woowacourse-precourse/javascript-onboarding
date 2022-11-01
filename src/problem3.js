function problem3(number) {
  var answer = 0;
  let temp = [];

  //number 만큼 반복문 돌리기
  for (let i = 0; i <= number; i++) {
    //글자열로 바꾼후j번째 인덱스가 3,6,9이면 배열에 추가
    for (let j = 0; j < String(number).length; j++) {
      if (
        String(i)[j] === "3" ||
        String(i)[j] === "6" ||
        String(i)[j] === "9"
      ) {
        temp.push(i);
      }
    }
  }

  //중복 ex) 33, 36
  // console.log(temp);
  answer = temp.length;
  // console.log(answer);
  return answer;
}
module.exports = problem3;

// problem3(13);
// problem3(33);
