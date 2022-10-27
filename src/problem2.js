function problem2(cryptogram) {
  var answer = cryptogram;
  answer = cryptogram;
  while(checkIsSequence(answer)){
    answer = removeSequence(answer);
  }
  return answer;
}

function checkIsSequence(str){
  for(let i = 0; i < str.length - 1; i++){
    if(str[i] === str[i+1]){
      return true;
    }
  }
  return false;
}

function removeSequence(str){
  for(let i = 0; i < str.length - 1; i++){
    let index = i;
    while(str[i] === str[index + 1]){
      index++;
    }
    if(i!=index){
      let len = str.length;
      str = str.slice(0, i) + str.slice(index + 1, len);
      i--;
    }
  }
  return str;
}

module.exports = problem2;
