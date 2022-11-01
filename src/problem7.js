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
 * Point Map 생성 및 초기화
 * @param {Map<string, string[]>} friendListMap - 친구 관계 Map
 * @return {Map<string, number>}
 */
const getInitialPointListMap = (friendListMap) => {
  const pointListMap = new Map();
  // key 값 추출한 array
  const friendListMapKeyArr = friendListMap.keys();

  // key 를 사용하여 순회하며 초기화
  for (let singleUserKey of friendListMapKeyArr) {
    pointListMap.set(singleUserKey, 0);
  }

  return pointListMap;
};

/**
 * 포인트별로 정렬하는 함수 (포인특 같을 경우 이름순으로)
 * @param {string|number[]} firstPerson
 * @param {string|number[]} secondPerson
 * @return {number}
 */
const pointSortFunc = (firstPerson, secondPerson) => {
  const [firstPersonName, firstPersonPoint] = firstPerson;
  const [secondPersonName, secondPersonPoint] = secondPerson;

  // 비교하는 두 대상의 point가 같을 경우
  if (firstPersonPoint === secondPersonPoint) {
    if (firstPersonName > secondPersonPoint) {
      return 1;
    }
    if (firstPersonName < secondPersonName) {
      return -1;
    }
    if (firstPersonName === secondPersonName) {
      return 0;
    }
  }

  return secondPersonPoint - firstPersonPoint;
};

/**
 * Point Map 을 정렬하여 반환한다.
 * @param {Map<string, number>} pointListMap - 포인트 Map
 * @return {string|number[][]}
 */
const getSortedPointList = (pointListMap) => {
  return [...pointListMap].sort(pointSortFunc);
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
  const friendListMap = getFriendListMap(friends) || [];
  const userFriendList = friendListMap.get(user) || [];
  const pointListMap = getInitialPointListMap(friendListMap) || [];

  // 함께 아는 친구 도출
  for (let singleUserInfo of friendListMap) {
    const [singleUserName, singleUserFriendList] = singleUserInfo;
    if (singleUserName !== user) {
      userFriendList.map((singleUserFriend) => {
        if (singleUserFriendList.includes(singleUserFriend)) {
          pointListMap.set(
            singleUserName,
            pointListMap.get(singleUserName) + MUTUAL_FRIEND_POINT
          );
        }
      });
    }
  }

  // 방문자 점수 도출
  visitors.forEach((singleVisitor) => {
    if (!userFriendList.includes(singleVisitor)) {
      if (pointListMap.has(singleVisitor)) {
        pointListMap.set(
          singleVisitor,
          pointListMap.get(singleVisitor) + VISITOR_POINT
        );
      } else {
        pointListMap.set(singleVisitor, VISITOR_POINT);
      }
    }
  });

  // 정렬된 point List 생성
  const sortedPointList = getSortedPointList(pointListMap);

  // 이미 친구인 사람 삭제
  const sortedNonFriendsList = sortedPointList.filter((single) => !userFriendList.includes(single[0]));

  // 정렬된 array에서 최대 5명 도출
  sortedNonFriendsList.map((point) => {
    if (answer.length < 5 && point[1] !== 0) {
      answer.push(point[0]);
    } else {
      return answer;
    }
  });

  return answer;
};

module.exports = problem7;
