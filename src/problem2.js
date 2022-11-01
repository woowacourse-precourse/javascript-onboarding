function problem2(cryptogram) {
  let answer = cryptogram.split('');
  let isRepeat = true;
  let i = 0;
  while(isRepeat) {
    if (answer.length !== 0 && answer[i] === answer[i+1] && answer[i+1] === answer[i+2]) {
        answer.splice(i, 3);
        i = -1;
   }
    else if (answer.length !== 0 && answer[i] === answer[i+1]) {
       answer.splice(i,2);
       i = -1;
   }
    else if ((i+1) >= answer.length) isRepeat = false;
    i += 1;
    console.log(i)
  }
  answer = answer.join('');
  return answer;
}

module.exports = problem2;
