/* 
 기능 목록
  1) Object를 생성해 친구 사이인 사람끼리 각자의 배열에 추가
  2) object안에 key값에 맞게 배열 초기화
*/

function connectFreind(f, r){
  for(let i=0; i<f.length; i++){
    r[f[i][0]].push(f[i][1]);
    r[f[i][1]].push(f[i][0]);
  }
}

function initializationObj(f, r){
  for(let i=0; i<f.length; i++){
    r[f[i][0]]=[]
    r[f[i][1]]=[]
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
