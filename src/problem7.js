function problem7(user, friends, visitors) {
  let answer;
  const friends_map = makeFriendsMap(friends);
  const candidates_map = makeCandidatesMap(user, friends_map);
  return answer;
}

function makeFriendsMap(friends){
  const friends_map = new Map(); // 친구관계를 Map객체로 저장
  // key: 아이디, value: Set([친구1, 친구2, ...])
  for (let i = 0; i < friends.length; i++){
    const friend0 = new Set([friends[i][0]]); // Set([친구0])
    const friend1 = new Set([friends[i][1]]); // Set([친구1])
    if (!friends_map.has(friends[i][0])){
      friends_map.set(friends[i][0], friend1);
    }
    if (!friends_map.has(friends[i][1])){
      friends_map.set(friends[i][1], friend0);
    }
    friends_map.set(friends[i][0], new Set([...friend1, ...friends_map.get(friends[i][0])])); // 합집합
    friends_map.set(friends[i][1], new Set([...friend0, ...friends_map.get(friends[i][1])]));
  }
  return friends_map;
}

function makeCandidatesMap(user, friends_map){
  const candidates_map = new Map(); // 추천친구 후보목록을 Map객체로 저장
  const user_friends_set = friends_map.get(user); // user의 친구들 저장
  for(const id of friends_map.keys()){
    if (id != user && !user_friends_set.has(id)){ // user와 친구가 아니면 후보 목록에 추가
      candidates_map.set(id, 0); // key: 아이디, value: 추천점수
    }
  }
  //console.log([...candidates_map]);
  return candidates_map;
}
module.exports = problem7;
