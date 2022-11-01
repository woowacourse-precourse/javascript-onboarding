//{ 아이디 : 친구 배열 } 객체 graph 반환
function makeRelation(friends){
  const graph = {};
  friends.forEach((friend)=>{
    for (let i=0; i<2; i++){
      graph.hasOwnProperty(friend[i])
      ? graph[friend[i]].push(friend[1-i])
      : graph[friend[i]]=[friend[1-i]];
    }
  })
  return graph;
}

//인수 : 점수 계산해야 하는 id 배열, 10점 받는 id 배열, 1점 받는 id 배열
//{ 아이디 : 점수 } 객체 score 반환
function calScore(id_list, ten, one){
  const score = {};
  id_list.forEach((id)=>{
    score[id] = ( ten.reduce((score, id_ten)=>score+(id===id_ten), 0)*10
                  + one.reduce((score, id_one)=>score+(id===id_one), 0) );
  })
  return score;
}

//인수: 점수 산출에 해당되는 id 배열, 각 아이디의 점수를 나타내는 객체 score
//점수 높은 순으로 최대 5개의 id 쓰여있는 배열 반환
function makeRanking(id_list, score){
  id_list.sort((a,b)=>{
    if(score[a]===score[b]){ return a<b?-1:a>b?1:0; }
    return score[b]-score[a];
  });
  return id_list.slice(0,5);
}

function problem7(user, friends, visitors) {
  const graph = makeRelation(friends); 
  const ten_points = [];
  graph[user].forEach((friend)=>{
    graph[friend].forEach((fof)=>{ //fof mean friend of friend
      (fof!==user) && ten_points.push(fof);
    })
  })
  const one_point = visitors.filter((id)=> (!graph[user].includes(id)));
  const id_list = [...new Set(ten_points), ...new Set(one_point)];
  const score = calScore(id_list, ten_points, one_point);

  return makeRanking(id_list, score);
}

module.exports = problem7;

//1. relation 나타내는 객체 graph 생성
//2. 10점 받는 id 리스트 ten_points, 1점 받는 id 리스트 one_point 생성
//3. 중복 없는, 점수 계산해야 하는 id 리스트 id_list 생성
//4. 2에서 만든 리스트로 점수 계산
//   점수 계산 원리 : ten or one 포인트 받는 id 리스트에서 해당 id 개수를 참조하여 계산
//5. id_list,score 로 순위 매기기
