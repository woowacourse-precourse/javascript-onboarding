/**
 * 친구관계 Map 에서 keyName으로 등록되어있나 확인 후, 있으면 연관된 배열 요소를, 없으면 새롭게 추가한다.
 * @param {Map<string, any>} friendListMap - 친구관계 Map
 * @param {string} keyName - 확인 기준 이름 (key)
 * @param {string} valueName - 추가 할 이름 (value)
 * @return {Map}
 */
const updateFriendListMap = (friendListMap, keyName, valueName) => {
  // 이미 생성되어 있을 경우
  if (friendListMap.has(keyName)) {
    const userFriendList = friendListMap.get(keyName);
    // 친구목록에 추가해야 할 경우
    if (!userFriendList.includes(valueName)) {
      friendListMap.set(keyName, [...userFriendList, valueName]);
    }
    // 생성되어있지 않을 경우
  } else {
    friendListMap.set(keyName, [valueName]);
  }

  return friendListMap;
};

/**
 * 친구관계 input으로부터 가공된 Map을 반환한다.
 * @param {string[][]} friends - 친구관계 List input
 * @return {Map<string, string[]>}
 */
const getFriendListMap = (friends) => {
  let friendListMap = new Map();

  friends.forEach((singleRelationship) => {
    const [friendA, friendB] = singleRelationship;

    // 첫번째 유저 기준 Map 업데이트
    friendListMap = updateFriendListMap(friendListMap, friendA, friendB);
    // 두번째 유저 기준 Map 업데이트
    friendListMap = updateFriendListMap(friendListMap, friendB, friendA);
  });

  return friendListMap;
};

/**
 * main 함수
 * @param {string} user
 * @param {string[][]} friends
 * @param {string[]} visitors
 */
const problem7 = (user, friends, visitors) => {
  const answer = [];
  // 아는 친구 점수
  const MUTUAL_FRIEND_POINT = 10;
  // 타임라인 방문 점수
  const VISITOR_POINT = 1;
  const friendListMap = getFriendListMap(friends);
  const userFriendList = friendListMap.get(user);

  return answer;
};

module.exports = problem7;
