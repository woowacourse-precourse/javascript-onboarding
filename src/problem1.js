function problem1(pobi, crong) {
  var answer;
  
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

  return answer;
}

module.exports = problem1;
