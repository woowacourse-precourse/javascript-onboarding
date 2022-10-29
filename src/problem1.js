function problem1(pobi, crong) {

   //책의 범위 설정 getBookNum
  const getBookNum  = (pobibook, crongbook ) => {
    if (pobibook[0] <= 1 || pobibook[1] >= 400 || crongbook[0] <= 1 || crongbook[1] >= 400)
      return false;
    else if (pobibook[1] - pobibook[0] !== 1) return false;
    else if (crongbook[1] - crongbook[0] !== 1) return false;
    else return true;
  };

  //책 페이지 합산 값
  const getSumNum  = (book) => {
    const bookString  = book.toString().split("");
    let sumNum = 0;
    for(let i=0; i<bookString.length; i++){
      sumNum += Number(bookString[i])
    }
    return sumNum;
  };

  //책 페이지 곱한 값
  const getmultNum  = (book)  => {
    const bookString  = book.toString().split("");
    let mulNum = 1;
    for(let i=0; i<bookString.length; i++){
      mulNum *= Number(bookString[i])
    }
    return mulNum;
  };

  //포비, 크롱의 가장 큰 값
  const maxNum = (book) => {
    let max = 0;

    book.forEach((page) => {
      let sum = getSumNum (page);
      let mul = getmultNum(page);
      if (sum >= mul){
        max = sum;
      }
      if (sum < mul){
        max = mul;
      }
    });
    return max;
  };
    
}

module.exports = problem1;
