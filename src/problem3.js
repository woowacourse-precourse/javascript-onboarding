function problem3(number) {
  let answer = 0;
  for (let i = 0; i<= number; i++) {
    answer += calculateClapHands(i);
  }
  return answer;
}

function calculateClapHands(cur_num){
  let cnt = 0 // 3,6,9 개수
  while (cur_num!=0) {
    let tmp = cur_num%10;
    if (tmp == 3 || tmp == 6 || tmp == 9) {
      cnt += 1;
    }
    cur_num = parseInt(cur_num/10);
  }
  return cnt;
}

module.exports = problem3;
