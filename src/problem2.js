function problem2(cryptogram) {
  var answer = "";
  var dummy = cryptogram
  var i = 0
  while(i<cryptogram.length) {
    if(i==dummy.length){
      answer = dummy
      break;
    }
    if(dummy[i] == dummy[i+1]) {
      dummy = dummy.slice(0,i) + dummy.slice(i+2,);
      i = 0
    } else {
      i++
    }
  }

  return answer;
}

module.exports = problem2;
