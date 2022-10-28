function problem4(word) {
  var answer;

  let AtoZCapital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let AtoZSmall = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  let newWord = '';

  for (var i=0; i<word.length; i++){
    let indexInCapital = AtoZCapital.indexOf(word[i]);
    let indexInSmall = AtoZSmall.indexOf(word[i]);
    if(indexInCapital != -1){ //알파벳 대문자 변환
      newWord += AtoZCapital[Math.abs(25 -indexInCapital)];
    }
    else if(indexInSmall != -1){ //알파벳 소문자 변환
      newWord += AtoZSmall[Math.abs(25 -indexInSmall)];
    }
    else{ //변환X
      newWord += word[i];
    }
  }

  answer = newWord;
  return answer;
}

module.exports = problem4;
