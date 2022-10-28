function problem7(user, friends, visitors) {
  var scores = {};
  var sortedScore = [];
  var frinedsWithUser = [];
  
  createFrinedsWith();
  addScoresFrinedsWith();
  addScoresVisitors();
  sortScores();

  return sortedScore.slice(0,5).map((el)=>el.name);

  //1. user와 친구인 목록 배열로 생성.
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

  function addScoresFrinedsWith(){
    friends.forEach((el)=>{
      for(const friend of frinedsWithUser){
        const knowFriend = el[1-el.indexOf(friend)];
        if(el.includes(friend) && knowFriend!==user && !frinedsWithUser.includes(knowFriend)){
          scores[knowFriend] = scores[knowFriend] ? scores[knowFriend]+10 : 10;
        }
      }
    });
  }

  function addScoresVisitors(){
    visitors.forEach((el)=>{
      if(!frinedsWithUser.includes(el)){
        scores[el] = scores[el] ? scores[el]+1 : 1;
      }
    });
  }
}

module.exports = problem7;
