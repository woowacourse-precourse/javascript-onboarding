function problem7(user, friends, visitors) {
  var scores = {};
  var sortedScore = [];
  var frinedsWithUser = [];
  
  createFrinedsWith();
  addScoresFrinedsWith();
  addScoresVisitors();
  sortScores();

  return sortedScore.slice(0,5).map((el)=>el.name);

  //2. user와 친구인 목록의 친구인 목록 조회하여 점수 가산(+10).
  //3. 타임 라인에 방문한 사용자 조회하여 점수 가산(+1).
  //4. 조건에 맞게 정렬하여 반환.

  function createFrinedsWith(){
    friends.forEach((el)=>{
      if(el.includes(user)){
        frinedsWithUser.push(el[1-el.indexOf(user)]);
      }
    });
  }
}

module.exports = problem7;
