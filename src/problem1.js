function problem1(pobi, crong) {
  var answer;
  
  if(pobi[1] !== pobi[0] + 1 || crong[1] !== crong[0] + 1) return -1;

  function getMax(pages) {
    var n1 = pages[0].toString();
    var n2 = pages[1].toString();
    var plusL = 0;
    var multiL = 1;
    var plusR = 0;
    var multiR = 1;
    var arr = [];
    
    for(var i = 0; i < n1.length; i++) {
      plusL += Number(n1[i]);
      multiL *= Number(n1[i]);
        
      if (i === n1.length - 1) {
        arr.push(plusL);
        arr.push(multiL);
      }
    }
    
    for(var j = 0; j < n2.length; j++) {
      plusR += Number(n2[j]);
      multiR *= Number(n2[j]);
        
      if (j === n2.length - 1) {
        arr.push(plusR);
        arr.push(multiR);
      }
    }
    
    return Math.max(...arr);
  }

  const pobiMax = getMax(pobi);
  const crongMax = getMax(crong);
  
  if (pobiMax > crongMax) answer = 1;
  else if(pobiMax < crongMax) answer = 2;
  else if(pobiMax === crongMax) answer = 0;
  else answer = -1;

  return answer;
}

module.exports = problem1;
