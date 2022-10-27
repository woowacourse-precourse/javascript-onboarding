function problem4(word) {
  var answer = [];

  for(let i=0;i<word.length;i++){
    let originChar = word[i];
    let charCode = originChar.charCodeAt();
    let changeChar = "";
    // upperCase
    if(charCode >= 65 && charCode <= 90){
      changeChar = String.fromCharCode(charCode + (25-((charCode-65)*2)));
    }
    // lowerCase
    else if(charCode >= 97 && charCode <= 122){
      changeChar = String.fromCharCode(charCode + (25-((charCode-97)*2)));
    }
    answer.push(changeChar || originChar);
  }
  answer = answer.join('');
  return answer;
}

module.exports = problem4;
