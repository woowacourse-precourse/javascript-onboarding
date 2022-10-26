function problem1(pobi, crong) {
  let pobiMaxV = getMaxV(pobi);
  let crongMaxV = getMaxV(crong);

  if(pobiMaxV === crongMaxV) return 0;
  switch (pobiMaxV > crongMaxV) {
    case true:
      return 1;
    case false:
      return 2;
  }

  function getMaxV(pobi){
    const values = pobi.map((pageNum) => {
      let sum = String(pageNum).split('').reduce((a,b) => Number(a) + Number(b), 0)
      let mul = String(pageNum).split('').reduce((a,b) => Number(a) * Number(b))
      return Math.max(sum, mul)
    })
    return Math.max(...values);
  }

}
console.log(problem1([97, 98], [199, 200]));

// module.exports = problem1;
