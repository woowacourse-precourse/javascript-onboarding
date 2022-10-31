// 1. 각 페이지의 자리수를 더한다.
// 2. 각 페이지의 자리수를 곱한다. 
// 3. 4개의 값중 가장 큰값 리턴.
// 4. 승자비교.
// 5. 예외처리.

const PlusPage = (page) => {
  return String(page).split('').reduce((acc, cur) => acc + parseInt(cur), 0);
}

const MultiplyPage = (page) => {
  return String(page).split('').reduce((acc, cur) => acc * parseInt(cur), 1);
}

function problem1(pobi, crong) {
  let answer;
  const [pobiL, pobiR] = pobi;
  const [crongL, crongR] = crong;

  const except = () => {
    //1. 연속된 숫자일 것
    if (pobiR - pobiL !== 1 || crongR - crongL !== 1) return true;
    //2. 시작면이나 마지막면이 아닐 것
    if (pobiL === 1 || crongL === 1 || pobiR === 400 || crongR === 400) return true;
    //3. 왼쪽은 홀수, 오른쪽은 짝수일 것
    if (pobiL % 2 === 0 || crongL % 2 === 0 || pobiR % 2 === 1 || crongR % 2 === 1) return true;
  }

  const pobiMax = () => {
    return Math.max(PlusPage(pobiL), PlusPage(pobiR), MultiplyPage(pobiL), MultiplyPage(pobiR));
  };

  const crongMax = () => { 
    return Math.max(PlusPage(crongL), PlusPage(crongR), MultiplyPage(crongL), MultiplyPage(crongR));
  };

  if (pobiMax() > crongMax()) {
    answer = 1;
  } else if (pobiMax() < crongMax()) {
    answer = 2;
  } else if (pobiMax() === crongMax()){
    answer = 0;
  } 

  if (except()) {
    answer = -1;
  }

  return answer;
}

module.exports = problem1;
