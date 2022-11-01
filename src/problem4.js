function problem4(word) {
  var answer = '';
  let upper = {};
  let lower = {};
  // 아스키코드 대문자, 소문자 표현
  const upperStart = 65, upperEnd = 90, lowerStart = 97, lowerEnd = 122;
  
  for(let i = upperStart;i <= upperEnd; i++){
    upper[String.fromCharCode(i)] = String.fromCharCode(155 - i)
  }

  for(let i = lowerStart; i <= lowerEnd; i++){
    lower[String.fromCharCode(i)] = String.fromCharCode(219 - i)
  }

  for(let i = 0; i < word.length; i++){
    if(upper[word[i]]){
      answer += upper[word[i]];
    }else if(lower[word[i]]){
      answer += lower[word[i]];
    }else{
      answer += word[i];
    }
  }
  return answer;
}

module.exports = problem4;
