function problem6(forms) {
  
  let map = new Map();

  //문자열을 잘라 map 에 추가
  for (let i = 0; i < forms.length; i++){
    for (let j = 0; j < forms[i][1].length-1; j++){
      const str = forms[i][1].substr(j, 2);
      if (!map.has(str)) {
        map.set(str, 1);
      } else {
        map.set(str, map.get(str) + 1);
      }
    }
  }

  //배열로 변환한 뒤 2이상인 것만 뽑아 answer에 다시 넣기
  let lists = [...map];
  let answer = [];
  
  for (let list of lists) {
    
    if (list[1] <= 1) {
      continue;
      
    } else {
      answer.push(list[0]);
    }
  }
  
  let result = [];
  //닉네임에 문자가 포함된다면 result 추가
  for (let i = 0; i < forms.length; i++){
    for (let x of answer) {
      if (forms[i][1].includes(x)) {
        result.push(forms[i][0]);
      }
    }
  }
  
  //문자열 오름차순 정렬
  result.sort();
  
  
  
  return result;
}

module.exports = problem6;
