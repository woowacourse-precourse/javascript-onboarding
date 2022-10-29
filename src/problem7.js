/* 
 기능 목록
  1) Object를 생성해 친구 사이인 사람끼리 각자의 배열에 추가
  2) Object안에 key값 생성 및 Value는 Set으로 초기화
  3) user의 친구들 배열로 만들기
  4) 사용자와 함께 하는 친구의 수만큼 점수 부여 기능
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

function createUserFreind(u, r, fou){
  r[u].forEach((a)=>{
    fou.push(a);
  })
}

function scoreToFreinds(r,fou,result, user){
  let n=0;
  for(let i in r){
    if(fou.find(a=>a===i) || i===user) continue;
    result[n]={}
    result[n]['name']=i;
    result[n]['score']=0;
    for(let j of fou){
      console.log(j)
      if(r[i].has(j)){
        result[n]['score']+=10;
      }
    }
    n++;
  }
}
function problem7(user, friends, visitors) {
  var answer;
  let rel={}, result=[];
  let fou=[];
  initializationObj(friends, rel);
  connectFreind(friends, rel);
  createUserFreind(user, rel, fou);
  scoreToFreinds(rel,fou,result, user)
  console.log(result)
  return answer;
}

module.exports = problem7;
