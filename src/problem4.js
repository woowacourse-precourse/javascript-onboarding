function problem4(word) {
  var answer = "";
  var upperDict = {};
  var lowerDict = {};

  // 청개구리사전
  for (let i = 97; i<123;  i++){
      upperDict[String.fromCharCode(i)] = String.fromCharCode(219 - i);
      lowerDict[String.fromCharCode(i-32)] = String.fromCharCode(219-i-32);
  }
  console.log(upperDict["A"])

  for (let j = 0; j < word.length; j++) {
    if(upperDict[word[j]]){
        answer += upperDict[word[j]] 
    }else if(lowerDict[word[j]]){
        answer += lowerDict[word[j]]
    }else{
        answer += word[j]
    }

  
  }

  return answer;
}

module.exports = problem4;
