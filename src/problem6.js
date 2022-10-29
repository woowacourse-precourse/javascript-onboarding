/*
 기능 목록
 1) 모든 사람들의 이름을 두 글자로 쪼개 Set에 넣기
 2) 모든 사람들의 이름을 Set 안에 있는 것들과 비교해 이름이 있으면 배열에 이메일을 저장

*/

function nameDisting(n, c){
  for(let i=0; i<n.length-1; i++){
    c.add(n.substr(i,2));
  }
}

function problem6(forms) {
  var answer;
  let check = new Set();
  for(let i=0; i<forms.length; i++){
    nameDisting(forms[i][1], check);
  }
  return answer;
}

module.exports = problem6;
