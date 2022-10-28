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

function problem1(pobi, crong) {
  if(checkErr === -1)
    return -1;
  
}

module.exports = problem1;
