function problem1(pobi, crong) {
  let pobiMaxV = getMaxV(pobi);
  let crongMaxV = getMaxV(crong);

  function getMaxV(pobi){
    const values = pobi.map((pageNum) => {
      let sum = String(pageNum).split('').reduce((a,b) => Number(a) + Number(b), 0)
      let mul = String(pageNum).split('').reduce((a,b) => Number(a) * Number(b))
      return Math.max(sum, mul)
    })
    return Math.max(...values);
  }

  console.log(pobiMaxV, crongMaxV);
}
problem1([97, 98], [199, 200]);

// module.exports = problem1;
