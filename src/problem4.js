function problem4(word) {
  var answer;

  if(word.charCodeAt[i]>=97 && word.charCodeAt[i]<=122 ){
    answer= answer+ (219-word.charCodeAt[i]);
  }
  else if(word.charCodeAt[i]>=65 && word.charCodeAt[i]<=97){
    answer= answer+ 155-word.charCodeAt[i];
  }
  else answer= answer+word.charCodeAt[i];

  return answer;
}

module.exports = problem4;
