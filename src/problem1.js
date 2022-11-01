function problem1(pobi, crong) {
  function measure(name) {
    if (+name[1] - +name[0] !== 1) return false;
    const leftPage = [...String(name[0])];
    const rightPage = [...String(name[1])];
    function LeftPageMax(leftPage) {
      let plus = 0;
      let mult = 1;
      for (let i = 0; i < leftPage.length; i++) {
        plus += +leftPage[i];
        mult *= +leftPage[i];
      }
      //console.log(plus, mult);
      return Math.max(plus, mult);
    }
    function RightPageMax(rightPage) {
      let plus = 0;
      let mult = 1;
      for (let i = 0; i < rightPage.length; i++) {
        plus += +rightPage[i];
        mult *= +rightPage[i];
      }
      return Math.max(plus, mult);
    }
    return Math.max(LeftPageMax(leftPage), RightPageMax(rightPage));
  }
  const pobiMax = measure(pobi);
  console.log(pobiMax);
  if (pobiMax === false) return -1;
  const crongMax = measure(crong);
  console.log(crongMax);
  if (crongMax === false) return -1;
  function answer(pobiMax, crongMax) {
    if (pobiMax === crongMax) return 0;
    else if (pobiMax > crongMax) return 1;
    else return 2;
  }
  return answer(pobiMax, crongMax);
}

module.exports = problem1;
