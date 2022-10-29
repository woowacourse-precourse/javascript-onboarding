/* 
 기능 목록
  1) Object를 생성해 친구 사이인 사람끼리 각자의 배열에 추가
  2) Object안에 key값 생성 및 Set으로 초기화
*/

function connectFreind(f, r){
  for(let i=0; i<f.length; i++){
    r[f[i][0]].add(f[i][1]);
    r[f[i][1]].add(f[i][0]);
  }
}

function initializationObj(f, r){
  for(let i=0; i<f.length; i++){
    r[f[i][0]]=new Set()
    r[f[i][1]]=new Set()
  }
}

function problem7(user, friends, visitors) {
  var answer;
  let rel={};
  initializationObj(friends, rel);
  connectFreind(friends, rel);
  console.log(rel)
  return answer;
}

module.exports = problem7;
