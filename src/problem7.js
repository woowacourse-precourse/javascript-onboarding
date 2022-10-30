function problem7(user, friends, visitors) {
  let answer;
  const friends_map = makeFriendsMap(friends);
  //console.log([...friends_map]); // 이터러블인 Map객체는 스프레드 문법으로 사용 가능
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

module.exports = problem7;
