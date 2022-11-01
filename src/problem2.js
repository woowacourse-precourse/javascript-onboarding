function problem2(cryptogram) {
  var answer = [];
  answer.push(cryptogram[0]);

  for(let i=1; i<cryptogram.length; i++) {
    //answer가 비어있으면 cryptogram[i] push
    if(answer.length === 0) {
      answer.push(cryptogram[i]);
    }
    else {
      //answer의 마지막 값이 cryptogram[i]의 값과 같으면 마지막 값 삭제
      if(answer[answer.length-1] === cryptogram[i]) {
        answer.pop();
      }
      //다르다면 cryptogram[i] push
      else{
        answer.push(cryptogram[i])
      }
    }
  }
  return answer.join("");
}


module.exports = problem2;