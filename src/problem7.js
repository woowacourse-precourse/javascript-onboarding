/* problem7 
   기능 구현 과정에서 오류 발생. -> 수정 후에도 오류 발생
   기능 요구 사항에서 외부 코드 참조.
   - 추천 점수 계산 및 객체에 넣는 부분 참조.
*/

function problem7(user, friends, visitors) {
  //var answer;
  let answer = [];
  const friends_user = {};
  let scores = [];
  const visitors_user = {};

  friends.map((name) => {
    const [x, y] = name;
    if(x === friends_user) friends_user[x] = {};
    if(y === friends_user) friends_user[y] = {};
  });

  visitors.map((visitor) => {
    //if(visitor === visitors_user) visitors_user[visitor]++;
    if(visitor in visitors_user) visitors_user[visitor]++;
    else visitors_user[visitor] = 1;
  });

  for(let id in friends_user){
    if(user === id) continue;
    let score = 0;
    for(let friend in friends_user[user]){
      if(friend in friends_user[id]) score += 10;
    }
    if(id in visitors_user){
      score += visitors_user[id];
    }
    scores.push({id, score});
  }
  
  for(let visitor in visitors_user){
    if(!(visitors_user[visitor] === friends_user)){
      scores.push({id:visitor, score: visitors_user[visitor]});
    }
  }

  scores.sort((a,b) => b.score - a.score);

  let count = 0;
  for(let i =0; i <scores.length; i++){
    if(count === 5 || scores[i].score < 1) break;
    else {
      answer.push(scores[i].id);
      count++;
    }
  }
  
  return answer;
}

module.exports = problem7;
