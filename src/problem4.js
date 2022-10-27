function problem4(word) {
  var answer = '';
  const alphaCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphaLow = 'abcdefghijklmnopqrstuvwxyz';

  for(let i=0; i<word.length; ++i){
    let num=0;
    if(alphaCap.indexOf(word[i]) > 0){
      num = 90 - (word[i].codePointAt() - 65);
      answer += String.fromCodePoint(num);
    } else if(alphaLow.indexOf(word[i]) > 0){
      num = 122 - (word[i].codePointAt() - 97);
      answer += String.fromCodePoint(num);
    } else{
      answer += word[i];
    }
  }
  return answer;
}

module.exports = problem4;
