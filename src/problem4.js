function problem4(word) {
  var answer;
  const newWord = [];
  const ASCII_a = 65;
  const ASCII_A = 97;
  const ASCII_Space = ASCII_A-ASCII_a;
  
  let UpCheck,LowCheck;
  for(let i=0;i<word.length;i++){
    if(word[i]===word[i].toUpperCase()){
      UpCheck = ASCII_a+((ASCII_a+25)-word[i].charCodeAt(0));
      if(UpCheck===123){
        newWord.push(String.fromCharCode(ASCII_Space));
      }
      else{
        newWord.push(String.fromCharCode(UpCheck));
      }
    }
    else{
      LowCheck = ASCII_A+((ASCII_A+25)-word[i].charCodeAt(0));
      newWord.push(String.fromCharCode(LowCheck));
    }
  }
  return newWord.join("");
}

module.exports = problem4;
