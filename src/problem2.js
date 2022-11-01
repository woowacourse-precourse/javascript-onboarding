function problem2(cryptogram) {
  var answer = new Array();

  for ( var i = 0; i < cryptogram.length; i++) {
    if( cryptogram[i] !== answer[answer.length-1]) {
      answer.push(cryptogram[i]);
    }else {
      answer.pop();
    }
  }
  return answer.join('');
  
}

module.exports = problem2;