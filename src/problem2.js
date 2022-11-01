function problem2(cryptogram) {
  // 암호 문자열의 문자들을 분리하여 배열로 전환
  var cry = [...cryptogram];
  var answer=[cry[0]];
  for (let i=1;i<cry.length;i++){
    var top = answer[answer.length-1];
    if (top===cry[i]){
        answer.splice(answer.length-1,1);
    }
    else{
      answer.push(cry[i]);
    }
  }
  const answer_str = answer.join('')
  return answer_str;
}

module.exports = problem2;
