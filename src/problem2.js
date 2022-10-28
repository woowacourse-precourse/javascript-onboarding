function problem2(cryptogram) {
  let array = cryptogram.split('');
  let last = [];
  let answer = [];
  for (i=0; i <= array.length; i++){
  if(array[i] !== last[0]){
      answer.push(array[i]);
      last.pop();
      last.push(array[i]);
  } 
  answer.pop();
  last.push(answer[answer.legth-1])
  last.shift();
}
  return answer;
}

module.exports = problem2;
