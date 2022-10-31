function problem7(user, friends, visitors) {
  let answer;
  const friends_map = makeFriendsMap(friends);
  const candidates_map = makeCandidatesMap(user, friends_map);

  calculateByOverlapFriendsNum(user, friends_map, candidates_map);
  calculateByVisitNum(user, visitors, friends_map, candidates_map);
  const candidates_arr = sortByScoreDesc(candidates_map);

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
  for (const id of friends_map.keys()){
    if (id != user && (user_friends_set === undefined || !user_friends_set.has(id))){ 
      // user와 친구가 아니면 후보 목록에 추가
      candidates_map.set(id, 0); // key: 아이디, value: 추천점수
    }
  }
  //console.log([...candidates_map]);
  return candidates_map;
}

function calculateByOverlapFriendsNum(user, friends_map, candidates_map){
  const user_friends_set = friends_map.get(user); // user의 친구들 저장

  if (user_friends_set === undefined) { // user가 친구가 없다면 종료
    return;
  }
  //console.log([...candidates_map]);
  for (const candidate of candidates_map.keys()){
    for (const candidate_friend of friends_map.get(candidate)){ // candidate의 친구들 순회
      if (user_friends_set.has(candidate_friend)){ // 겹치는 친구가 있으면 점수+10
        candidates_map.set(candidate, candidates_map.get(candidate)+10);
      }
    }
  }
  //console.log([...candidates_map]);
}

function calculateByVisitNum(user, visitors, friends_map, candidates_map){
  const user_friends_set = friends_map.get(user); // user의 친구들 저장
  //console.log([...candidates_map]);
  for (const visitor of visitors){
    if (user_friends_set !== undefined && user_friends_set.has(visitor)){ 
      // visitor가 user의 친구라면 다음으로 넘어감
      continue;
    }
    if (!candidates_map.has(visitor)){ // 추천친구 후보목록에 없다면 목록에 추가
      candidates_map.set(visitor, 0); // key: 아이디, value: 추천점수
    }
    // visitor는 점수+1
    candidates_map.set(visitor, candidates_map.get(visitor)+1);
  }
  //console.log([...candidates_map]);
}

function sortByScoreDesc(candidates_map){
  // Map 객체를 배열로 변환
  let candidates_arr = [...candidates_map];
  //console.log(candidates_arr);

  // value(추천점수) 기준 내림차순 정렬
  candidates_arr.sort((a, b) => {
    if (a[1] === b[1]){ // value(추천점수)가 같을 경우 key(아이디) 기준 오름차순 정렬
      let x = a[0];
      let y = b[0];
      return x < y ? -1 : x > y ? 1 : 0;
    }

    return b[1] - a[1];
  })

  //console.log(candidates_arr);
  return candidates_arr;
}

module.exports = problem7;
