function find369(num) {
  let result;
  let cnt = 0;
  let check;

  //1부터 num까지 반복
  for (i = 1; i <= num; i++) {
    result = i;
    while (result > 0) {
      check = result % 10;
      //3 6 9 중 해당 되면 개수 증가
      if (check == 3 || check == 6 || check == 9) {
        cnt += 1;
      }
      //10을 나눠줌(Int 형으로 변경)
      result = parseInt(result / 10);
    }
  }
  return cnt;
}

function problem3(number) {
  var answer;
  answer = find369(number);
  return answer;
}

module.exports = problem3;
