function problem1(pobi, crong) {

  let result = 0;

  if(pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) {
    return -1;
  }

  const pobiMax = Math.max(
    ...pobi.map((n) => {
      const sum = n.toString().split('').reduce((acc, cur) => acc + Number(cur), 0);
      const mul = n.toString().split('').reduce((acc, cur) => acc * Number(cur), 1);
      return Math.max(sum, mul);
    })
  )

  const crongMax = Math.max(
    ...crong.map((n) => {
      const sum = n.toString().split('').reduce((acc, cur) => acc + Number(cur), 0);
      const mul = n.toString().split('').reduce((acc, cur) => acc * Number(cur), 1);
      return Math.max(sum, mul);
    })
  )

  if (pobiMax > crongMax) result = 1;
  if (pobiMax < crongMax) result = 2;

  return result;

}
module.exports = problem1;
