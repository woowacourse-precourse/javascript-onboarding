function problem7(user, friends, visitors) {
  const idList = getIdSet(user, friends, visitors);
  const idFriendScoreMap = makeFriendScore(idList, friends);
  scoreFriend(user, idFriendScoreMap);
  console.log(idFriendScoreMap);
  var answer;
  return answer;
}

/**
 * user, friends, visitors에 등장하는 모든 id를 중복없이 저장한다
 * @param {string} user - 사용자 아이디
 * @param {Array<Array<string>>} friends - 친구 관계를 담은 이차원 배열
 * @param {Array<string>} visitors - 사용자 타임 라인 방문 기록
 * @returns {Array<string>} 모든 id 리스트
 */
const getIdSet = (user, friends, visitors) => {
  const idSet = new Set(visitors);
  idSet.add(user);
  friends.forEach((friend) => {
    idSet.add(friend[0]).add(friend[1]);
  });
  return [...idSet];
};

/**
 * 아이디는 key 값으로, 아이디와 친구 사이를 저장한 Set과 점수(기본 0점)를 value 값으로 하는 Map을 만든다
 * @param {Array<string>} idList - 모든 id 리스트
 * @param {Array<Array<string>>} friends - 친구 관계를 담은 이차원 배열
 * @returns {Map<string, {friendSet: Set<string>, score: number}>} {key: 아이디, value: {친구 목록, 점수}}
 */
const makeFriendScore = (idList, friends) => {
  const idFriendScoreMap = new Map();
  idList.forEach((id) => {
    idFriendScoreMap.set(id, { friendSet: new Set(), score: 0 });
  });
  friends.forEach((friend) => {
    addFriendSet(idFriendScoreMap, friend[0], friend[1]);
    addFriendSet(idFriendScoreMap, friend[1], friend[0]);
  });
  return idFriendScoreMap;
};

/**
 * 중복 없이 친구 목록에 친구를 추가한다
 * @param {Map<string, {friendSet: Set<string>, score: number}>} idFriendScoreMap - {key: 아이디, value: {친구 목록, 점수}}
 * @param {string} friend1 - 친구 목록을 확인하는 친구
 * @param {string} friend2 - 친구 목록에 추가할 친구
 */
const addFriendSet = (idFriendScoreMap, friend1, friend2) => {
  if (!idFriendScoreMap.get(friend1).friendSet.has(friend2))
    idFriendScoreMap.set(friend1, {
      friendSet: idFriendScoreMap.get(friend1).friendSet.add(friend2),
      score: 0,
    });
};

/**
 * user와 함께 아는 친구가 있다면 점수에 10점 추가한다
 * @param {string} user - 사용자 아이디
 * @param {Map<string, {friendSet: Set<string>, score: number}>} idFriendScoreMap - {key: 아이디, value: {친구 목록, 점수}}
 */
const scoreFriend = (user, idFriendScoreMap) => {
  const userFriendSet = idFriendScoreMap.get(user).friendSet;
  idFriendScoreMap.forEach((value, id) => {
    if (id !== user && !userFriendSet.has(id)) {
      let score = value.score;
      value.friendSet.forEach((friend) => {
        if (userFriendSet.has(friend)) score += 10;
      });
      idFriendScoreMap.set(id, { friendSet: value.friendSet, score });
    }
  });
};

module.exports = problem7;
