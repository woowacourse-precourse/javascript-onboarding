function problem2(cryptogram) {
  var answer = '';
  var arr = cryptogram.split('');
  
  while(true) {
    var t = true;
    for(var i=0; i<arr.length-1; i++) {
      if(arr[i] === arr[i+1]) {
        arr.splice(i,2);
        t = false;
      }
    }
    if(t) {
      break;
    }
  }
  answer = arr.join('');  
  return answer;
}

module.exports = problem2;
