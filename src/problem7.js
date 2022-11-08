/* problem7 
   기능 구현 과정에서 오류 발생. -> 수정 후에도 오류 발생
   기능 요구 사항에서 외부 코드 참조.
   - 추천 점수 계산 및 객체에 넣는 부분 참조.
*/

function problem7(user, friends, visitors) {
  //var answer;
  let answer = [];
  const friendsObj = {};
  let scores = [];
  const visitorsObj = {};

  friends.map((name) => {
    const [x, y] = name;
    if(!(x in friendsObj)) friendsObj[x] = {};
    friendsObj[x][y] = true;
    if(!(y in friendsObj)) friendsObj[y] = {};
    friendsObj[y][x] = true;
  })

  visitors.map((visitor) => {
    if(visitor in visitorsObj) visitorsObj[visitor]++;
    else visitorsObj[visitor] = 1;
  })

  for(let id in friendsObj){
    if(user === id) continue;
    let score = 0;
    for(let friend in friendsObj[user]){
      if(friend in friendsObj[id]) score += 10;
    }
    if(id in visitorsObj){
      score += visitorsObj[id];
    }
    scores.push({id,score});
  }
  for(let visitor in visitorsObj){
    if(!(visitorsObj[visitor] in friendsObj)){
      scores.push({id:visitor, score: visitorsObj[visitor]});
    }
  }
  scores.sort((a,b) => b.score - a.score);
  scores = scores.filter((item)=>item.score > 1);

  let count = 0;
  for(let i =0; i <scores.length; i++){
    count++;
    answer.push(scores[i].id);
    if(count === 5) break;
  }
  
  return answer;
}


module.exports = problem7;
