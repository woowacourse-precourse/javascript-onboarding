function problem7(user, friends, visitors) {
  /**
   * 사용자와 함께 아는 친구의 수 = 10점
   * 사용자의 타임라인에 방문한 횟수 = 1점
   *
   * user : 사용자 (1 이상 30 이하 문자열)
   *
   * friends : 친구관계 ( 1 이상 10000이하 배열 )
   *  (길이가 2인 배열 [ A, B ] => A와 B가 친구라는 의미
   *
   * visitors : 사용자의 타임 라인 방문한 횟수 ( 0이상 10000이하 배열 )
   *
   * 사용자 아이디는 알파벳 소문자로만 이루어져 있다.
   * 동일한 친구 관계가 중복해서 주어지지 않는다.
   * 추천할 친구가 없는 경우는 주어지지 않는다.
   *
   * 추천 점수가 0인경우는 추천 X
   * 추천 점수가 같은 경우 이름 순 정렬
   * 점수 높은 순 5명 정렬 하여 return
   *
   */

  const friendsShip = [];
  let answer = [];
  const result = [];

  friends.forEach( fd => {
    if(friendsShip[fd[0]] === undefined){
      friendsShip[fd[0]] = {};
      friendsShip[fd[0]].name = fd[0];
      friendsShip[fd[0]].friends = [fd[1]];
      friendsShip[fd[0]].score = 0;
    }
    else{
      friendsShip[fd[0]].friends.push(fd[1]);
    }

    if(friendsShip[fd[1]] === undefined){
      friendsShip[fd[1]] = {};
      friendsShip[fd[1]].name = fd[1];
      friendsShip[fd[1]].friends =  [fd[0]];
      friendsShip[fd[1]].score = 0;
    }
    else{
      friendsShip[fd[1]].friends.push(fd[0]);
    }
  });


  // 방문 점수
  visitors.forEach(v =>{
    if(friendsShip[v] === undefined){
      friendsShip[v] = {};
      friendsShip[v].name = v;
      friendsShip[v].score = 1;
    }
    else{
      friendsShip[v].score += 1;
    }
  });

  // 함께 아는 친구 점수
  const friendsKey = Object.keys(friendsShip);

  for(let i = 0; i < friendsKey.length; i++) {
    if(friendsKey[i] !== user && friendsShip[friendsKey[i]].friends !== undefined) {
      friendsShip[user].friends.forEach(userF => {
        if(friendsShip[friendsKey[i]].friends.includes(userF)) {
          friendsShip[friendsKey[i]].score += 10;
        }
      });
    }
  }

  for(let i = 0; i < friendsKey.length; i++) {
    if(friendsKey[i] !== user) {
      answer.push(friendsShip[friendsKey[i]]);
    }
  }

  answer.sort(function(a, b){
    // 점수 순 정렬
    return b.score - a.score;
  });

  answer = answer.filter(u => u.score > 0).sort(function(a, b){
    // 점수가 0 초과 이면서 이름 순 정렬 filter
    return a.name - b.name;
  });

  answer.forEach(a => {
    if(!friendsShip[user].friends.includes(a.name)){
      // user랑 이미 친구인 user 제외
      result.push(a.name);
    }
  });

  return result;
}

module.exports = problem7;
