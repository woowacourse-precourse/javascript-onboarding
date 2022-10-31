function problem1(pobi,crong) {    
  var answer;
    
  var pobiArr1 = pobi.map(x => x.toString().split('').map(x => parseInt(x)).reduce((acc,cur) => acc + cur,0));
  var pobiArr2 = pobi.map(x => x.toString().split('').map(x => parseInt(x)).reduce((acc,cur) => acc * cur));
  var pobiMax1 = Math.max(pobiArr1[0],pobiArr1[1]);
  var pobiMax2 = Math.max(pobiArr2[0],pobiArr2[1]);

  var crongArr1 = crong.map(x => x.toString().split('').map(x => parseInt(x)).reduce((acc,cur) => acc + cur,0));
  var crongArr2 = crong.map(x => x.toString().split('').map(x => parseInt(x)).reduce((acc,cur) => acc * cur));
  var crongMax1 = Math.max(crongArr1[0],crongArr1[1]);
  var crongMax2 = Math.max(crongArr2[0],crongArr2[1])
  
  answer = pobi[1] != pobi[0]+1 || crong[1] != crong[0]+1 ? -1 : (Math.max(pobiMax1,pobiMax2) > Math.max(crongMax1,crongMax2) ? 1 : (Math.max(pobiMax1,pobiMax2) == Math.max(crongMax1,crongMax2) ? 0 : 2 )); 
  return answer
}

module.exports = problem1;
