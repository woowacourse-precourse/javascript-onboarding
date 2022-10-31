function problem1(pobi, crong) {
  if(pobi[0]+1 != pobi[1]){return -1}
  if(crong[0]+1 != crong[1]){return -1}
  if(pobi[1] == 400 || pobi[1] == 2){return -1}
  if(crong[1] == 400 || crong[1] == 2){return -1}
  var mapfn = (arg) => Number(arg);
  var pobileft = String(pobi[0])
  
  pobileft = pobileft.split('').map(mapfn);

  let sum = pobileft.reduce((a, b) => a + b, 0);
  let sum2 = pobileft.reduce((a, b) => a * b, 1);

  sum = Math.max(sum,sum2)

  var pobiright = String(pobi[1])
  
  pobiright = pobiright.split('').map(mapfn);

  let sum3 = pobiright.reduce((a, b) => a + b, 0);
  let sum4 = pobiright.reduce((a, b) => a * b, 1);

  sum2 = Math.max(sum3,sum4)

  let pobisum = Math.max(sum,sum2)

  var crongleft = String(crong[0])
  
  crongleft = crongleft.split('').map(mapfn);

  sum = crongleft.reduce((a, b) => a + b, 0);
  sum2 = crongleft.reduce((a, b) => a * b, 1);

  sum = Math.max(sum,sum2)

  var crongright = String(crong[1])
  
  crongright = crongright.split('').map(mapfn);

  sum3 = crongright.reduce((a, b) => a + b, 0);
  sum4 = crongright.reduce((a, b) => a * b, 1);

  sum2 = Math.max(sum3,sum4)

  let crongsum = Math.max(sum,sum2)

  if(pobisum == crongsum){return 0}
  if(pobisum > crongsum){return 1}
  if(pobisum < crongsum){return 2}

  


  

 
 

}
console.log(problem1([97, 98],[197,198]))


module.exports = problem1;
