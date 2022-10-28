function problem1(pobi, crong) {

  // 입력값에 따른 예외처리
  if (pobi[1] === 1 && crong[1] === 1 || pobi[0] === 400 || crong[0] === 400) return -1; // 시작면으로 끝나거나 끝면으로 시작 할 경우
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1; // 페이지가 순서대로 없을 경우

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

  // 포비와 크롱의 점수를 비교하여 결과 값 return
  if (Math.max(...pobiScore) > Math.max(...crongScore)) {
    return 1;
  } else if (Math.max(...pobiScore) < Math.max(...crongScore)) {
    return 2;
  } else if (Math.max(...pobiScore) === Math.max(...crongScore)) {
    return 0;
  }        
}

module.exports = problem1;
