/* 
 기능 목록
  1) Object를 생성해 친구 사이인 사람끼리 각자의 배열에 추가
  2) Object안에 key값 생성 및 Value는 Set으로 초기화
  3) user의 친구들 배열로 만들기
  4) 사용자와 함께 아는 친구의 수만큼 점수 부여 기능
  5) 사용자의 타임 라인에 방문한 친구들 점수 부여 기능
  6) 점수가 가장 높은 순으로 정렬, 추천 점수가 같은 경우 이름순으로 정렬
  7) 추천 점수가 0점인 경우 추천하지 않는 기능
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
  if(r[u]){
    r[u].forEach((a)=>{
      fou.push(a);
    })
  }
}

function scoreToFreinds(r,fou,result, user){
  let n=0;
  for(let i in r){
    if(fou.find(a=>a===i) || i===user) continue;
    result[n]={}
    result[n]['name']=i;
    result[n]['score']=0;
    for(let j of fou){
      if(r[i].has(j)){
        result[n]['score']+=10;
      }
    }
    n++;
  }
}

function scoreToVisitor(r,fou,result, user, vist){
  let n=result.length, flag=-1;
  for(let v of vist){
    if(fou.find(a=>a===v)) continue;
    for(let re of result){
      if(re['name']===v){
        re['score']++;
        flag=1;
        break;
      }
    }
    if(flag!=1){
      result[n]={}
      result[n]['name']=v;
      result[n]['score']=0;
      result[n]['score']+=1;
      n++;
    } 
    flag=-1;
  }
}

function sortArray(result){
  result=result.sort((a,b)=>{
    if(a.name>b.name) return 1;
    if(a.name<b.name) return -1;
    return 0;
  })
  result=result.sort(function(a,b){
    return b.score-a.score;
  })
}

function problem7(user, friends, visitors) {
  var answer=[];
  let rel={}, result=[];
  let fou=[];
  initializationObj(friends, rel);
  connectFreind(friends, rel);
  createUserFreind(user, rel, fou);
  scoreToFreinds(rel,fou,result, user)
  scoreToVisitor(rel,fou,result, user, visitors)
  sortArray(result)
  for(let value of result){
    if(!value.score) continue;
    answer.push(value.name)
    if(answer.length==5) break;
  }
  return answer;
}

module.exports = problem7;
