/*
function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
*/

// cryptogram이 유효한 문자열인지 확인
function checkValid(c){
  if (c.length<1) {return false;}
  return c.toLowerCase();
}

// 중복되는 문자열 제거
function deleteOverlap(c){
  let newC="";
  let i;
  for (i=0; i<(c.length-1); i++){
      if (c[i]==c[i+1]) i+=1;
      else newC+=c[i];
  }
  if(newC[newC.length-1]!=c[c.length-1]){newC+=c[c.length-1];}
  return newC;
}

// 더 이상 연속으로 중복되는 문자열이 없음
function stop(c){
  for (let i=0; i<c.length-1; i++){
    if (c[i]==c[i+1]){return false;}
    if(c[c.length-2]==c[c.length-1]){return false;}
  }
  return true;
}

// 
function solution(c){
  c = checkValid(c); if (c==false){return "";}

  while(true){
    if (stop(c)){break;}
    c= deleteOverlap(c);
    console.log(c);
  }
  return c;
}

let cryptogram="browoanoommnaon";
console.log(solution(cryptogram))