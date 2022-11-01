/*필요한 기능
for loop으로 숫자 iterate
모든 자릿수 보면서 3,6,9 확인
나온 만큼 count에 ++
결과물 리턴
*/

function problem3(number) {
  var answer = solution(number);
  return answer;
}

function solution(num) {
  var count = 0;
  for (var i=1; i<=num; i++) {
    if (i%10==3 || i%10==6 || i%10==9) {
      count ++;
    }
    if (Math.floor(i/10)%10==3 || Math.floor(i/10)%10==6 || Math.floor(i/10)%10==9) {
      count ++;
    }
    if (Math.floor(i/100)%10==3 || Math.floor(i/100)%10==6 || Math.floor(i/100)%10==9) {
      count ++;
    }
    if (Math.floor(i/1000)%10==3 || Math.floor(i/1000)%10==6 || Math.floor(i/1000)%10==9) {
      count ++;
    }
  }
  return count;
}

module.exports = problem3;
