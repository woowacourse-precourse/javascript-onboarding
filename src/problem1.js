function compareValue(v1, v2){
  if(v1>v2) return v1;
  else if(v2>v1) return v2;
  else return v1;
}

function addmulValue(page){
  let v, add=0, mul=1;
  while(page>0){
    v=page%10;
    add+=v;
    mul*=v;
    page/=10;
  }
  return compareValue(add, mul);
}

function getValue(a){
  let l, r;
  l=addmulValue(a[0]);
  r=addmulValue(a[1]);
  return compareValue(l, r);
}

function exceptHandling(a){
  if(a[0]===1 && a[1]===2) return 0;
  else if(a[0]===399 && a[1]===400) return 0;

  if((a[1]-a[0])<=0) return 0;

  if((a[1]-a[0])>=2) return 0;
}

function problem1(pobi, crong) {
  var answer;
  let pobiValue=getValue(pobi);
  let crongValue=getValue(crong);
  return answer;
}

module.exports = problem1;
