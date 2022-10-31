function problem4(word) {
  let answer = "";
  let upperAlpha = [];
  let lowerAlpha = [];

  for (let i = 0; i < 26; i++){
    upperAlpha.push(String.fromCharCode(65 + i));
    lowerAlpha.push(String.fromCharCode(97 + i));
  }
  
  for (let i = 0; i < word.length; i++){
    let ascii = word[i].charCodeAt(0);
    
    if (ascii >= 97 && ascii <= 122) 
      answer += lowerAlpha.at(-(lowerAlpha.indexOf(word[i]) + 1));
    else if (ascii >= 65 && ascii <= 90)
      answer += upperAlpha.at(-(upperAlpha.indexOf(word[i]) + 1));
    else
      answer += word[i];
  }

  return answer;
}


module.exports = problem4;
