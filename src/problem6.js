function problem6(forms) {
  
  // 중복 체크 방지를 위한 체크배열
  const checkArray = Array(forms.length).fill(false);
  // 모든 경우의 수에 대한 단어 정렬
  const dictionary = new Map();
  // 중첩되는 단어가 있는 유저 이메일을 담기 위한 배열 
  const overlapUser = [];

  /*  모든 유저 이름에 대한 2글자 경우의 수를 추출해서 
      dictionary Map 객체에 담아 count를 합니다.  */
  for ( let i = 0 ; i < forms.length ; i++) {
    for( let j = 1 ; j <= forms[i][1].length - 1; j++ ) {
      const word = forms[i][1][j - 1]+forms[i][1][j];
      dictionary.has(word) 
      ? dictionary.set(word, dictionary.get(word)+1)
      : dictionary.set(word, (dictionary.get(word)||0)+1);  
    }
  }

  /*  dictionary Map 객체를 디스트럭쳐링하여서 
      2개 이상 있는 단어에 대해 모든 유저들 닉네임 검사를 하면서
      중복 닉네임이 있는 유저의 이메일을 overlapUser 배열에 담고,
      해당 index는 체크어레이에 담아서 중복되지 않게 합니다. */
  for(let [word, count] of dictionary){
    if(1 < count){
      for( let i = 0 ; i < forms.length; i++){
        if(forms[i][1].includes(word) && !checkArray[i]){
        overlapUser.push(forms[i][0]);
        checkArray[i] = true;
        } 
      }
    }  
  }
  
  return overlapUser.sort();
}


module.exports = problem6;
