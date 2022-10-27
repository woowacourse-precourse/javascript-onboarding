function problem2(cryptogram) {
  var answer = cryptogram;
  answer = cryptogram;
  return answer;
}

function removeSequence(str){
  for(let i = 0; i < str.length - 1; i++){
    let index = i;
    while(str[i]===str[index + 1]){
      index++;
    }
    if(i!=index){
      let len = str.length;
      str = str.slice(0, i) + str.slice(index + 1, len);
    }
  }
  return str;
}

module.exports = problem2;
