function problem4(word) {
  let answer = '';

  const AtoZUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const AtoZLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (const oneChar of word){
    const indexInUpperCase = AtoZUpperCase.indexOf(oneChar);
    const indexInLowerCase = AtoZLowerCase.indexOf(oneChar);

    let convertIndex;
    if(indexInUpperCase != -1){
      convertIndex = Math.abs(25-indexInUpperCase);
      answer += AtoZUpperCase[convertIndex];
    }
    else if(indexInLowerCase != -1){
      convertIndex = Math.abs(25-indexInLowerCase);
      answer += AtoZLowerCase[convertIndex];
    }
    else{
      answer += oneChar;
    }
  }

  return answer;
}

module.exports = problem4;
