function problem1(pobi, crong) {
  var answer;
  const pobiSum = sumFunc(pobi);
  const crongSum = sumFunc(crong);

  function sumFunc(params){
    const paramsSum = new Array();
    for(let i of params){
      const arr = String(i).split("");
        let sum = [0,1];
        for(let j of arr){
          const numj = Number(j);
          sum[0] = sum[0]+numj;
          sum[1] = sum[1]*numj;
        }
      paramsSum.push(sum)
    }
    return paramsSum;
  }
  
  function result(param1,param2){
    const max1 = Math.max.apply(...param1);
    const max2 = Math.max.apply(...param2);
    const min1 = Math.min.apply(...param1);
    const min2 = Math.min.apply(...param2);
    
    if(min1 === 0 | min2===0){
      return -1
    }else if(max1 === max2){
      return 0;
    }else if(max1 > max2){
      return 1;
    }else if(max1 < max2){
      return 2;
    }
  }

  return result(pobiSum,crongSum);
}

module.exports = problem1;
