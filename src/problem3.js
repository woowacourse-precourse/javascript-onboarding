function find369(num) {
  let result;
  let cnt = 0;
  let check;


  for (i = 1; i <= num; i++) {
    result = i;
    while (result > 0) {
      check = result % 10;

      if (check == 3 || check == 6 || check == 9) {
        cnt += 1;
      }

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
