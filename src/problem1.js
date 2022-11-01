/* 
<풀이>
포비일때
이중포문으로 포비배열 안의 원소들을 문자열로 만들어 배열의 길이 만큼 하나씩 뽑아서
pobi_plusNum의 변수에 포비배열안의 원소들을 하나씩 더해준다.
pobi_multipleNum 변수에 포비 배열안의 원소들을 하나씩 곱해준다.
두번째 포문이 끝났을때,pobi_plusNum변수와 pobi_multipleNum변수에 있는 값들 중,제일 큰 수를 찾는다.

크롱일때
이중포문으로 포비배열 안의 원소들을 문자열로 만들어 배열의 길이 만큼 하나씩 뽑아서
pobi_plusNum의 변수에 포비배열안의 원소들을 하나씩 더해준다.
pobi_multipleNum 변수에 포비 배열안의 원소들을 하나씩 곱해준다.
두번째 포문이 끝났을때,pobi_plusNum변수와 pobi_multipleNum변수에 있는 값들 중,제일 큰 수를 찾는다.

**예외인 상황: 왼쪽과 오른쪽 페이지의 숫자가 순차적이지 않을때
마지막으로 포비가 이기면 1,크롱이 이기면 2,무승부는0 예외는 -1 리턴하기 
*/

function problem1(pobi, crong) {
  if (
    pobi[0] !== pobi[1] - 1 ||
    pobi[0] % 2 == 0 ||
    crong[0] !== crong[1] - 1 ||
    crong[0] % 2 == 0
  ) {
    return -1;
  }
  ///포비
  let pobi_max = 0;
  for (let i = 0; i < pobi.length; i++) {
    let pobi_plusNum = 0;
    let pobi_multipleNum = 1;
    for (let i2 = 0; i2 < pobi[i].toString().length; i2++) {
      pobi_plusNum += Number(pobi[i].toString().charAt(i2));
      pobi_multipleNum *= Number(pobi[i].toString().charAt(i2));
    }
    pobi_max = Math.max(pobi_max, pobi_plusNum, pobi_multipleNum);
  }

  ///크롱
  let crong_max = 0;
  for (let i = 0; i < crong.length; i++) {
    let crong_plusNum = 0;
    let crong_multipleNum = 1;
    for (let i2 = 0; i2 < crong[i].toString().length; i2++) {
      crong_plusNum += Number(crong[i].toString().charAt(i2));
      crong_multipleNum *= Number(crong[i].toString().charAt(i2));
    }
    crong_max = Math.max(crong_max, crong_plusNum, crong_multipleNum);
  }

  if (pobi_max === crong_max) {
    return 0;
  }
  if (pobi_max > crong_max) {
    return 1;
  }
  if (pobi_max < crong_max) {
    return 2;
  }
}

module.exports = problem1;
