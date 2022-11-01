function problem6(forms) {
  let answer = [];
  let words = {};
  let dupWords = {};

  // 1. 닉네임 리스트를 돌면서 두 글자씩 뽑아서 등장 빈도수 확인, 두 번이상 등장한 단어만 남김
  for(let i=0;i<forms.length;i++){
    if(forms[i][1].length === 1){
      continue;
    }
    let nickname = forms[i][1];
    for(let j=0;j<nickname.length-1;j++){
      let twoWord = nickname[j] + nickname[j+1];
      if(words[twoWord]){
        words[twoWord].push(forms[i][0]);
        dupWords[twoWord] = words[twoWord];
      }else{
        words[twoWord] = [forms[i][0]];
      }
    }
  }
  
  // 2. 오름차순 정렬 후 중복 제거
  let dupWordsKeys = Object.keys(dupWords)
  for(let i=0;i<dupWordsKeys.length;i++){
    answer = answer.concat(dupWords[dupWordsKeys[i]]);
  }
  answer = answer.sort();
  let set = new Set(answer);
  answer = [...set];
  return answer;
}

module.exports = problem6;
