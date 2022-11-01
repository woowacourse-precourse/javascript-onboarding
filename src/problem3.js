/*
<풀이>
박수칠때마다 개수를 셀 변수지정
for문 이용하여 number안의 숫자만큼 i를 반복(1부터 number까지일때 박수가 몇번인지 세야 하므로)
num_str변수에 i값을 문자로 변환
2중포문으로 num_str 원소들을 num_str 길이만큼 반복
조건문으로 num_str원소가 문자 3, 6, 9가 나올때마다 박수를 세는 clap변수를 +1 해준다.
박수 개수가 저장되있는 변수 clap을 리턴한다.
*/

function problem3(number) {
  let clap = 0;
  for (let i = 1; i <= number; i++) {
    let num_str = String(i);
    for (let j = 0; j < num_str.length; j++) {
      if (num_str[j] === '3' || num_str[j] === '6' || num_str[j] === '9') {
        clap += 1;
      }
    }
  }
  return clap;
}

module.exports = problem3;
