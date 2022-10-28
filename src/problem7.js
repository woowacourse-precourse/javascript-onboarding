function problem7(user, friends, visitors) {
  const friendRelation = getFriendsAdjacencyList(friends);
  const userFriends = friendRelation[user];
  const friendOfFriends = getFriendOfFriends({ user, userFriends, friendRelation });

  const initScore = initRecommendationScore({ friendOfFriends });
  return initScore;
}

function getFriendsAdjacencyList(friends) {
  return friends.reduce((links, [user1, user2]) => {
    if (!links[user1]) links[user1] = [];
    if (!links[user2]) links[user2] = [];

    links[user1].push(user2);
    links[user2].push(user1);

    return links;
  }, {});
}

function getFriendOfFriends({ user, userFriends, friendRelation }) {
  const frinedOfFriends = userFriends.reduce((set, friend) => {
    const friends = friendRelation[friend];
    const filteredFriends = friends.filter(friend => friend !== user);

    filteredFriends.forEach(friend => set.add(friend));
    return set;
  }, new Set());

  return [...frinedOfFriends];
}

function initRecommendationScore({ friendOfFriends }) {
  return friendOfFriends.reduce((map, friend) => {
    map.set(friend, 10);
    return map;
  }, new Map());
}

// 문제 7번 - 인접리스트, Hash 풀이
// 1. friend loop를 돌아 각 유저에 대해 인접리스트를 구한다. ✅
// -> 예상 결과물
// {  donut: [andole, jun, mrko]
//    andole: [donut, shakevan]
//    jun: [donut, shakevan]
//    shakevan: [andole, jun, mrko]
//    mrko: [donut, shakevan]  }
//
// 2. 인접리스트 중 user의 친구를 구한다 ✅
//  -> user = "mrko" 예상 결과물
//  [donut, sharkevan]

// 3. user의 친구들의 친구들 list를 구한다. ✅
//    3.1. 중복 제거를 위해 Set 생성
//    3.2. 친구의 친구 list를 구한다.
//    -> donut = [andole, jun, mrko], sharkevan = [andole, jun, mrko]
//    3.3. 중복 제거한 list를 구한다. 이 때 user(mrko)는 포함하지 않는다.
//    -> [andole, jun]

// 4. Map에 user 배열의 이름에 대해 10을 할당한다. ✅
//  -> { andole => 10, jun => 10 }

// 5. Map에 visitors들 점수를 +1 해준다.
//  5.1. Map에 없는 유저일 경우 0 default

// 6. Map을 점수(= value)에 대해서 내림차순
//  6.1. 만약 점수(= value)가 동일할 시 이름(= key) 내림차순

// 7. @return Map을 배열로 변환 후 길이 5로 slice

module.exports = problem7;
