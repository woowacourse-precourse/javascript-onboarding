/*
function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
*/

let cryptogram="browoanoommnaon";

// cryptogram이 유효한 문자열인지 확인
function checkValid(c){
  if (c.length<1) {return false;}
  return c.toLowerCase();
}

// 이웃하는 문자열이 동일한 모든 구간 체크
function deleteOverlap(c){
  let newC="";
  let i;
  for (i=0; i<(c.length-1); i++){
      if (c[i]==c[i+1]){
          i+=1;
      }else{
          console.log(c[i]);
          newC+=c[i];}
  }
  if(newC[newC.length-1]!=c[c.length-1]){newC+=c[c.length-1];}
  return newC;
}

console.log(deleteOverlap(cryptogram));

// 
function solution(c){
  c = checkValid(c); if (c==false){return "";}
}