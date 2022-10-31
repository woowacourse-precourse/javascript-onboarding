// 기능 목록
// 1. 예외 사항 처리 하기
// 2. 페이지 합,곱 구하기
// 3. pobi와 crong의 가장큰수 구하기
// 4. 승패 결과 처리하기

function problem1(pobi, crong) {
  
  const [pobileft, pobiright] = pobi;
  const [crongleft, crongright] = crong;

  if(pobileft-pobiright !== -1 || crongleft-crongright !== -1 ) return -1;

  const sum = (page) => {
    const Page = String(page).split('').reduce((a,b) => Number(a) + Number(b), 0 );
    return Page;
  };
  const multiply = (page) => {
    const Page = String(page).split('').reduce((a,b) => Number(a) * Number(b), 1 );
    return Page;
  };

  const pobiBest = Math.max(sum(pobileft),sum(pobiright),multiply(pobileft),multiply(pobiright));
  const crongBest = Math.max(sum(crongleft),sum(crongright),multiply(crongleft),multiply(crongright));

  if(pobiBest>crongBest) return 1;
  else if (pobiBest<crongBest) return 2;
  else return 0;

}

module.exports = problem1;
