function problem1(pobi, crong) {

  //책의 범위 설정 getBookNum
  const getBookNum = () => {

  }
  
  //포비, 크롱의 가장 큰 값
  const getMaxNum = () => {

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
    
}

module.exports = problem1;
