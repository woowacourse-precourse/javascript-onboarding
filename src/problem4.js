function problem4(word) {
  var answer = "";
  let upper = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  let lower = upper.toLowerCase();
  answer = decipher(word, upper, lower);
  return answer;
}

function decipher(word, upper, lower){
  let decipherStr = "";
  for(let i = 0; i < word.length; i++){
    if((word[i] >= 'a') && (word[i] <= 'z')){
      decipherStr += lower[word[i].charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    else if((word[i] >= 'A') && (word[i] <= 'Z')){
      decipherStr += upper[word[i].charCodeAt(0) - 'A'.charCodeAt(0)];
    }
    else{
      decipherStr += word[i];
    }
  }
  return decipherStr;
}

module.exports = problem4;
