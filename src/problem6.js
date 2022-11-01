// nick1 과 nick2가 같은 글자를 연속적으로 포함하면 true를 return
function includeSameChar(nick1, nick2){
  for(let i = 0 ; i < nick1.length-1 ; i++){
    subStr = nick1.slice(i, i+2);
    if(nick2.includes(subStr))
      return true;
  }
  return false;
}

function problem6(forms) {
  var answer;
  const set = new Set();
  for(let i = 0 ; i < forms.length-1 ; i++){
    for(let j = i+1 ; j < forms.length ; j++){
      // 이미 존재하는 경우 넘어감
      if(set.has(forms[i][0]) && set.has(forms[j][0]))
        continue;
      if(includeSameChar(forms[i][1], forms[j][1])){
        set.add(forms[i][0]);
        set.add(forms[j][0]);
      }
    }
  }
  // 배열로 변환 후 정렬
  answer = Array.from(set);
  answer.sort();
  return answer;
}

module.exports = problem6;
