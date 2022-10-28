function problem1(pobi, crong) {
  if(exception(pobi)||exception(crong)) return -1;
  return fight(pobi,crong);
}

function divideDigit(n){
  let nums =[]
  do{
    nums.push(n%10);
    n = Math.floor(n/10);
  }
  while(n>0);
  return nums;
}

function addtimes(nums){

  const addsum = divideDigit(nums).reduce((a,b)=>(a+b));
  const timessum = divideDigit(nums).reduce((a,b)=>(a*b))
  if(addsum>timessum)
    return addsum;
  if(timessum>addsum)
    return timessum;
}

function fight(pobi,crong){
  const pobiPoint=Math.max(addtimes(pobi[0]), addtimes(pobi[1]));
  const crongPoint=Math.max(addtimes(crong[0]),addtimes(crong[1]));
  if(pobiPoint>crongPoint) return 1;
  if(pobiPoint<crongPoint) return 2;
  if(pobiPoint==crongPoint) return 0;
}


function exception(array){
  if(array[0]==1 || array[1]==400) return true;
  if(array[0]%2==0) return true;
  if(array.length!=2) return true;
  if(array[1]-array[0]!=1) return true;
  return false;
}

module.exports = problem1;
