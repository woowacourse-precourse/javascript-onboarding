function problem1(pobi, crong) {
  let pobimax = 0;
  let crongmax = 0;
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  function check(num) {
    let local = num.split("");
    let sum = 0,
      div = 1;
    for (let x of local) {
      sum += Number(x);
      div *= Number(x);
    }
    return sum > div ? sum : div;
  }

  for (let i of pobi) {
    if (i < 3 || i > 398) return -1;
    let num = check(String(i));
    num > pobimax ? (pobimax = num) : num;
  }

  for (let i of crong) {
    if (i < 3 || i > 398) return -1;
    let num = check(String(i));
    num > crongmax ? (crongmax = num) : num;
  }
  if (pobimax > crongmax) return 1;
  if (pobimax < crongmax) return 2;
  if (pobimax === crongmax) return 0;
}

module.exports = problem1;
