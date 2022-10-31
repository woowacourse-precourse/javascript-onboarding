function problem1(pobi, crong) {
  
  if (hasBothEndsPage(pobi, crong) || hasWrongPage(pobi, crong)) return -1;
  
  const pobiMaxV = getMaxV(pobi);
  const crongMaxV = getMaxV(crong);
  
  if (pobiMaxV === crongMaxV) return 0;
  else if(pobiMaxV > crongMaxV) return 1;
  else if(pobiMaxV < crongMaxV) return 2; 
}

/**
 * @description 양쪽 페이지 자리수를 각각 덧셈과 곱셈 중 최대값을 반환합니다.
 * @param {number[]} pages 숫자 배열타입의 양쪽 페이지
 * @returns {number}
 */
function getMaxV(pages){
  const maxValues = pages.map((pageNum) => {
    const sum = String(pageNum).split('').reduce((a,b) => Number(a) + Number(b), 0)
    const mul = String(pageNum).split('').reduce((a,b) => Number(a) * Number(b))
    return Math.max(sum, mul)
  })
  return Math.max(...maxValues);
}

/**
 * @description 페이지가 올바른 범위내에 있는 지 유효성 검사 결과를 반환합니다.
 * @param {number[]} pobiPage 숫자 배열타입의 양쪽 페이지
 * @param {number[]} crongPage 숫자 배열타입의 양쪽 페이지
 * @returns {boolean}
 */
function hasBothEndsPage(pobiPage, crongPage) {
  const BOTHENDPAGES = [1, 2, 399, 400];
  return !!BOTHENDPAGES.filter((v) => (pobiPage.concat(crongPage).includes(v))).length;
}

/**
 * @description 페이지의 순서 및 홀,짝수를 유효성 검사하여 결과를 반환합니다.
 * @param {number[]} pobiPage 숫자 배열타입의 양쪽 페이지
 * @param {number[]} crongPage 숫자 배열타입의 양쪽 페이지
 * @returns {boolean}
 */
function hasWrongPage(pobi, crong) {
  const RIGHTPAGE = 1;
  const LEFTPAGE = 0;
  const rightOrder = ((pobi[LEFTPAGE] + 1) !== pobi[RIGHTPAGE]) || ((crong[LEFTPAGE] + 1) !== crong[RIGHTPAGE]);
  const evenCheck = 0 !== (pobi[RIGHTPAGE]%2 + crong[RIGHTPAGE]%2);
  return rightOrder || evenCheck
}

module.exports = problem1;
