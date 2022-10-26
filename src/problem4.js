function problem4(word) {
  var answer = "";
  let upper = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  let lower = upper.toLowerCase();
  for(let i = 0; i < word.length; i++){
    if((word[i] >= 'a') && (word[i] <= 'z')){
      answer += lower[word[i].charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    else if((word[i] >= 'A') && (word[i] <= 'Z')){
      answer += upper[word[i].charCodeAt(0) - 'A'.charCodeAt(0)];
    }
    else{
      answer += word[i];
    }
  }
  return answer;
}

module.exports = problem4;
