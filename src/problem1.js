const checkErr = (pobi, crong) => {
  let findErr = 0;
  if(pobi.length !=2 || crong.length !=2)
    findErr = -1;
  if(pobi[0]<0 || pobi[0]>399 || crong[0]<0 || crong[0]>399)
    findErr = -1;
  if(pobi[1]!=pobi[0]+1 || crong[1]!=crong[0]+1)
    findErr = -1;
  if(pobi[0]%2==0 || crong[0]%2==0)
    findErr = -1;

  return findErr;
}

const findMax = (num) => {
  let sum_max = 0;
  let mul_max = 1;
  for(let i = num;i!=0;i=parseInt(i/10)) {
    let tmp = i%10;
    sum_max += tmp;
    mul_max *= tmp;
  }
  return Math.max(sum_max, mul_max);
}

const winner = (pobi_max, crong_max) => {
  if(pobi_max > crong_max)
    return 1;
  else if(pobi_max < crong_max)
    return 2;
  else
    return 0;
}

function problem1(pobi, crong) {
  if(checkErr(pobi, crong) === -1)
    return -1;
  pobi_max = Math.max(findMax(pobi[0]),findMax(pobi[1]));
  crong_max = Math.max(findMax(crong[0]),findMax(crong[1]));

  return winner(pobi_max, crong_max);
}

module.exports = problem1;
