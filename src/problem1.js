/* 
예외사항
1. 시작 면(1페이지)이나 마지막 면(400페이지)이 나오면 안된다.
2. 페이지 번호가 순서대로 들어있기 때문에 (오른쪽 페이지 - 왼쪽 페이지)가 1이 나와야 한다!

구현사항
1. 예외사항을 확인해준 뒤 코드를 실행해준다. (예외사항: -1)
2. 페이지 번호를 spilt()해주어 각 자리수를 나누어준다. 
3. 각 자리를 누산기를 활용하여 (덧셈, 곱셈)중 큰 값을 점수 배열에 저장한다.
4. pobi와 crong의 점수를 비교하여 결과 값을 return 해준다. (포비 승: 1, 크롱 승: 2, 무승부 0)
*/

function problem1(pobi, crong) {

  // 입력값에 따른 예외처리
  if (pobi[0] === 1 || pobi[1] === 400 || crong[0] === 1 || crong[1] === 400) return -1;
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  // 포비 점수 배열
  const pobiScore = [];

  pobi.forEach(page => {
    const pageSplit = page.toString().split('');
    const add = pageSplit.reduce((fir, idx) => fir + idx/1, 0);
    const mul = pageSplit.reduce((fir, idx) => fir * idx/1, 1);

    pobiScore.push(Math.max(add, mul));
  });

  // 크롱 점수 배열
  const crongScore = [];
  
  crong.forEach(page => {
    const pageSplit = page.toString().split('');
    const add = pageSplit.reduce((fir, idx) => fir + idx/1, 0);
    const mul = pageSplit.reduce((fir, idx) => fir * idx/1, 1);

    crongScore.push(Math.max(add, mul));
  });

}

module.exports = problem1;
