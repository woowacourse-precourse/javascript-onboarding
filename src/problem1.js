function problem1(pobi, crong) {
  const LENGTHLIMIT = 2;
  const RIGHTPAGE = 1;
  const LEFTPAGE = 0;
  const BOTHENDPAGES = [1, 2, 399, 400];
  const pobiMaxV = getMaxV(pobi);
  const crongMaxV = getMaxV(crong);
  
  /** 
  * 입력값이 유효하지 않으면 -1 반환
  * 두 최대값이 같으면 0 반환
  * 두 최대값을 비교하여 1 or 2 반환  
  */  
  if (isInvalidInput(pobi, crong)) return -1;
  if (pobiMaxV === crongMaxV) return 0;
  else if(pobiMaxV > crongMaxV) return 1;
  else if(pobiMaxV < crongMaxV) return 2;
  

  // 페이지값을 받아 최대값을 반환 메소드
  function getMaxV(pages){
    const maxValues = pages.map((pageNum) => {
      let sum = String(pageNum).split('').reduce((a,b) => Number(a) + Number(b), 0)
      let mul = String(pageNum).split('').reduce((a,b) => Number(a) * Number(b))
      return Math.max(sum, mul)
    })
    return Math.max(...maxValues);
  }

  // 입력값 검증 메소드 
  function isInvalidInput(pobi, crong) {
    const exceptionOne = hasBothEndsPage(pobi, crong);
    const exceptionTwo = hasWrongLength(pobi, crong);
    const exceptionThree = hasWrongPage(pobi, crong);
    return exceptionOne || exceptionTwo || exceptionThree;
  }

  // 양끝 페이지가 들어있는지 확인 로직
  function hasBothEndsPage(pobiPage, crongPage) {
    return !!BOTHENDPAGES.filter((v) => (pobiPage.concat(crongPage).includes(v))).length;
  }

  // 페이지 배열 길이가 2가 넘었는지 확인 로직
  function hasWrongLength(pobiPage, crongPage) {
    const totalPages = pobiPage.concat(crongPage);
    return totalPages.length !== (LENGTHLIMIT * 2);
  }

  // 홀, 짝수 및 페이지 순서 확인 로직
  function hasWrongPage(pobi, crong) {
    const rightOrder = ((pobi[LEFTPAGE] + 1) !== pobi[RIGHTPAGE]) || ((crong[LEFTPAGE] + 1) !== crong[RIGHTPAGE]);
    const evenCheck = 0 !== (pobi[RIGHTPAGE]%2 + crong[RIGHTPAGE]%2);
    return rightOrder || evenCheck
  }
}

module.exports = problem1;
