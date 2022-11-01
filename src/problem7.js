function problem7(user, friends, visitors) {
  let answer=[];
  let res =[];
  let friendOfFriend = [];
  let score = new Map();
  //user의 친구 찾기
  for(let i=0; i<friends.length;i++){
    if(friends[i].includes(user)){
      if(friends[i][0] !== user && !friendOfFriend.includes(friends[i][0]) ){
        friendOfFriend.push(friends[i][0]);
      }else if(friends[i][1] !== user && !friendOfFriend.includes(friends[i][1])){
        friendOfFriend.push(friends[i][1]);
      }
    }
  }

  //user의 친구의 친구 찾아 점수 더해줌
  for (let i = 0; i < friends.length; i++) {
    if (friendOfFriend.some((f) => f === friends[i][0])) {
      if(friends[i][1] !== user){//user가 아닐경우에만 더해줌
        score.set(friends[i][1], score.get(friends[i][1]) + 10);
      }
      
    }
    if (friendOfFriend.some((f) => f === friends[i][1])) {
      if(friends[i][0] !== user){
        score.set(friends[i][0], score.get(friends[i][0]) + 10);
      }
    }
  }

  //방문자와 user의 친구가 같을 경우 제외하고 방문자와 점수를 포함해줌
  for (let i = 0; i < visitors.length; i++) {
    for (let j = 0; j < friendOfFriend.length; j++) {
      if (visitors[i] === friendOfFriend[j] ||
      visitors[i]===user){
        continue;
      }else{
        score.set(visitors[i], score.get(visitors[i]) + 1);
      }
      
    }
  }
 
  //맵을 배열로 만들어줌
  for (let [name, s] of score) {
    res.push([name, s]);
  }

  //user의 친구의 친구와 방문자만 존재하는 배열을 만들기 위해 user의 친구인 경우를 찾아 제외하고 배열을 새로 만듦
  for (let i = 0; i < res.length; i++) {
    if (!friendOfFriend.some((x) => x === res[i][0])) {
      answer.push(res[i]);
    }
  }

  //오름차순 정렬
  return answer.sort((a, b) => b[1] - a[1]).map((f) => f[0]);

}

module.exports = problem7;
