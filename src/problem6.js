/*
 기능 목록
 1) 모든 사람들의 이름을 두글자로 쪼개 Set1에 넣기
 2) 이름과 횟수를 배열에 넣어주기
 3) 만들어진 배열에 횟수 카운트하기
 4) 횟수가 2인 이상이면 다른 Set2에 넣어주기
 5) 모든 사람들의 이름을 Set2 안에 있는 것들과 비교해 반복된 이름이 있는지 확인 후 있다면 true반환
 6) 이메일 삽입 후 오름차순으로 정렬
*/

function nameDisting(n, c){
  for(let i=0; i<n.length-1; i++){
    c.add(n.substr(i,2));
  }
}

function makeName(c, name){
  c.forEach((a) => name[a]=0);
}

function nameNumberCount(n, c, name){
  for(let i=0; i<n.length-1; i++){
    if(c.has(n.substr(i,2))){
      name[n.substr(i,2)]+=1;
    }
  }
}

function overTwo(n, name, d){
  for(let i=0; i<n.length-1; i++){
    if(name[n.substr(i,2)]>=2) d.add(n.substr(i,2))
  }
}

function problem6(forms) {
  var answer;
  let name = {};
  let check = new Set();
  let doubleCheck = new Set();
  for(let i=0; i<forms.length; i++){
    nameDisting(forms[i][1], check);
  }
  makeName(check, name);
  for(let i=0; i<forms.length; i++){
    nameNumberCount(forms[i][1], check, name);
  }
  for(let i=0; i<forms.length; i++){
    overTwo(forms[i][1], name, doubleCheck);
  }

  console.log(doubleCheck)
  return answer;
}

module.exports = problem6;
