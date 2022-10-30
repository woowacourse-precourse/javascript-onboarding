function problem7(user, friends, visitors) {
  const idList = getIdSet(user, friends, visitors);
  const idFriendScoreMap = makeFriendScore(idList, friends);
  const userFriendSet = idFriendScoreMap.get(user).friendSet; // 사용자 친구
  scoreFriend(user, userFriendSet, idFriendScoreMap);
  scoreVisitor(visitors, userFriendSet, idFriendScoreMap);
  var answer = getFriendTop5(user, userFriendSet, idFriendScoreMap);
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
 * user와 함께 아는 친구가 있다면 점수에 10점 추가한다 (단, 친구는 제외한다)
 * @param {string} user - 사용자 아이디
 * @param {Set<string>} userFriendSet - 사용자 친구 목록
 * @param {Map<string, {friendSet: Set<string>, score: number}>} idFriendScoreMap - {key: 아이디, value: {친구 목록, 점수}}
 */
const scoreFriend = (user, userFriendSet, idFriendScoreMap) => {
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

/**
 * user의 타임 라인에 방문한 횟수마다 점수에 1점 추가한다 (단, 친구는 제외한다)
 * @param {Array<string>} visitors - 사용자 타임 라인 방문 기록
 * @param {Set<string>} userFriendSet - 사용자 친구 목록
 * @param {Map<string, {friendSet: Set<string>, score: number}>} idFriendScoreMap - {key: 아이디, value: {친구 목록, 점수}}
 */
const scoreVisitor = (visitors, userFriendSet, idFriendScoreMap) => {
  visitors.forEach((visitor) => {
    if (!userFriendSet.has(visitor))
      idFriendScoreMap.set(visitor, {
        friendSet: idFriendScoreMap.get(visitor).friendSet,
        score: idFriendScoreMap.get(visitor).score + 1,
      });
  });
};

/**
 * 점수를 정렬해 상위 5명을 구한다 (단, 본인과 친구는 제외한다)
 * @param {string} user - 사용자 아이디
 * @param {Set<string>} userFriendSet - 사용자 친구 목록
 * @param {Map<string, {friendSet: Set<string>, score: number}>} idFriendScoreMap - {key: 아이디, value: {친구 목록, 점수}}
 * @returns {Array<string>} 점수 높은 상위 5명
 */
const getFriendTop5 = (user, userFriendSet, idFriendScoreMap) => {
  const newFriendList = [];
  idFriendScoreMap.forEach((value, id) => {
    if (id !== user && !userFriendSet.has(id))
      newFriendList.push({ id, score: value.score });
  });
  newFriendList.sort((a, b) => {
    if (a.score === b.score) {
      a.id.localeCompare(b.id);
    }
    return b.score - a.score;
  });
  return newFriendList.reduce((prev, cur) => [...prev, cur.id], []).slice(0, 5);
};

module.exports = problem7;
