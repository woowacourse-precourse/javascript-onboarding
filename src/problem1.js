function problem1(pobi, crong) {
  var answer;
  return answer;
}

const isValidArray = (arr) => {
  const leftPage = arr[0];
  const rightPage = arr[1];
  const firstPage = 1;
  const finalPage = 400;
  
  const isValidRange = () => {
      if (leftPage < finalPage - 1 && leftPage > firstPage) return true;
      if (rightPage < finalPage && rightPage > firstPage + 1) return true;
  }
  const isEvenAndOdd = () =>  leftPage % 2 !== 0 && rightPage % 2 === 0;
  const isSamePage = () =>  leftPage + 1 === rightPage; 
  if (isValidRange() && isEvenAndOdd() && isSamePage()) return true
  return false
}

module.exports = problem1;
