function problem3(number) {
  //count 초기화
  let count = 0;

  //주어진 num만큼 반복하며 박수 횟수 계산
  for (let i = 1; i <= number; i++) {
    countClaps(i);
  }

  //i번째 수를 문자열로 변환후 자릿수마다 3,6,9가 들어가면 count + 1
  function countClaps(i) {
    let str = i.toString().split("");
    str.map((num) => {
      if (num === "3" || num === "6" || num === "9") {
        count++;
      }
    });
  }

  return count;
}

module.exports = problem3;
