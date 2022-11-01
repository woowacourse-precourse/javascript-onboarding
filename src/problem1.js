function add(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}
function mul(number) {
  let result = 1;
  while (number > 0) {
    result = result * (number % 10);
    number = Math.floor(number / 10);
  }
  return result;
}
function problem1(pobi, crong) {
  if (Math.abs(pobi[0] - pobi[1]) != 1 || Math.abs(crong[0] - crong[1]) != 1)
    return -1;

  pobi[0] = add(pobi[0]) > mul(pobi[0]) ? add(pobi[0]) : mul(pobi[0]);
  pobi[1] = add(pobi[1]) > mul(pobi[1]) ? add(pobi[1]) : mul(pobi[1]);

  crong[0] = add(crong[0]) > mul(crong[0]) ? add(crong[0]) : mul(crong[0]);
  crong[1] = add(crong[1]) > mul(crong[1]) ? add(crong[1]) : mul(crong[1]);

  const pobiResult = pobi[0] > pobi[1] ? pobi[0] : pobi[1];
  const crongResult = crong[0] > crong[1] ? crong[0] : crong[1];

  if (pobiResult > crongResult) return 1;
  else if (pobiResult < crongResult) return 2;
  else return 0;
}

module.exports = problem1;
