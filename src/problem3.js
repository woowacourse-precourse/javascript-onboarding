/*
방법 1
  N자리 숫자의 손뼉치는 횟수를 opt(N)이라 하면
  opt(N) = opt(N-1)*10 + 3*10^(N-1)
  opt(1) = 3
방법 2
  1부터 하나씩 세는 방법

방법 1은 빠른데 주어지는 수가 너무 무작위라 자릿수 처리때문에 코드가 지저분해짐
방법 2는 느린데 직관적임
max(number)=10000이므로 방법 2 사용
*/

function problem3(number) {
  let answer = 0;

  for (let num=1; num<=number; num++)
  {
    num = String(num);
    for (digit of num)
    {
      if (digit == '3' || digit == '6' || digit == '9')
        answer++;
    }
  }

  return answer;
}

module.exports = problem3;
