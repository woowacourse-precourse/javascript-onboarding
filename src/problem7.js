function problem7(user, friends, visitors) {
  let userFriendList = getFriendListByUserId(friends, user);
  let recommandUserList = getRecommandUserList(
    friends,
    visitors,
    user,
    userFriendList
  );
  let recommandScoreObject = getUserScoreObject(recommandUserList);

  for (let i = 0; i < recommandUserList.length; i++) {
    const recommandUser = recommandUserList[i];

    const recommandUserFriendList = getFriendListByUserId(
      friends,
      recommandUser
    );

    recommandScoreObject[recommandUser] += getScoreByFriendsKnowTogether(
      userFriendList,
      recommandUserFriendList
    );

    recommandScoreObject[recommandUser] += getScoreByVisitFrequency(
      visitors,
      recommandUser
    );
  }

  recommandUserList.sort(
    (a, b) => Number(recommandScoreObject[b]) - Number(recommandScoreObject[a])
  );

  recommandUserList = recommandUserList
    .filter((v) => recommandScoreObject[v] !== 0)
    .filter((v, i) => i < 5);

  return recommandUserList;
}

function getUserScoreObject(recommandUserList) {
  let recommandScoreObject = {};
  for (let i = 0; i < recommandUserList.length; i++) {
    recommandScoreObject[recommandUserList[i]] = 0;
  }
  return recommandScoreObject;
}

function getRecommandUserList(friends, visitors, user, userFriendList) {
  let recommandUserList = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (
        !recommandUserList.includes(friends[i][j]) &&
        friends[i][j] !== user &&
        !userFriendList.includes(friends[i][j])
      )
        recommandUserList.push(friends[i][j]);
    }
  }
  for (let i = 0; i < visitors.length; i++) {
    if (
      !recommandUserList.includes(visitors[i]) &&
      !userFriendList.includes(visitors[i])
    )
      recommandUserList.push(visitors[i]);
  }
  return recommandUserList.sort();
}

function getFriendListByUserId(friends, userId) {
  let friendList = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(userId)) {
      for (let j = 0; j < 2; j++) {
        if (friends[i][j] !== userId) friendList.push(friends[i][j]);
      }
    }
  }
  return friendList;
}

function getScoreByFriendsKnowTogether(userFriendList, otherUserFriendList) {
  const friendListKnowTogether = userFriendList.filter((friend) =>
    otherUserFriendList.includes(friend)
  );

  return friendListKnowTogether.length * 10;
}

function getScoreByVisitFrequency(visitors, recommandUser) {
  let count = 0;
  visitors.forEach((v) => {
    if (v === recommandUser) count += 1;
  });

  return count;
}

module.exports = problem7;

// 문제 해석
// 입력값
// user -> 사용자
// friends -> 친구 관계를 [A,B] 형식으로 담은 이차원 배열 (A와 B가 친구라는 의미)
// visitors -> 사용자 타임 라인 방문 기록

// 사용자와 함께 아는 친구 수 -> 10점
// 사용자의 타임라인 방문 기록 수 -> 1점

// 위의 점수 산출 방식을 통해 user에게 친구 추천을 띄워주는 알고리즘 작성하기
// 반환값으로 아이디 배열을 리턴한다.
// 단, 아이디 배열은 산출된 점수가 큰 순으로 정렬하되 같은 점수를 가진 아이디들은 알파벳 순으로 정렬한다.
// 점수가 0점인 사람은 추천 친구 목록에 추가하지 않는다.

// 구현 방향성
// 1. {아이디 : 점수} 형식의 유저 아이디 객체를 생성한다.
// 2. user의 친구 목록에 없는 모든 사용자 아이디를 중복되지 않게 하나의 유저 아이디 객체에 {아이디: 0}의 형식으로 담는다.
// 3. user의 친구 목록에 없는 모든 사용자 아이디를 중복되지 않게 하나의 배열에 담는다. (key값으로 유저 아이디 객체의 점수에 접근하기 위함)
// 4. 현재 유저가 아는 친구를 하나의 배열에 담는다.

// 5. 사용자 아이디 배열의 모든 요소를 반복하는 반복문을 작성한다.
// 6. 반복문 내에 friends 배열의 모든 요소를 반복하는 반복문을 작성한다.
// 7. friends 배열 속에서 현재 사이클의 사용자의 친구들을 찾아 하나의 배열에 담는다.
// 8. user의 친구 목록과 비교하여 함께 아는 친구 점수를 산출한다.

// 9. 사용자 아이디 배열의 모든 요소를 반복하는 반복문을 작성한다.
// 10. 현재 사이클의 사용자가 user의 타임라인을 반복한 횟수를 카운팅해 점수를 산출한다.

// 11. 위 과정을 거쳐 나온 유저 아이디 객체를 이용해 추천 친구 배열을 완성한다.

// 구현할 기능
// friends 배열의 모든 사용자를 중복되지 않게 {아이디: 점수} 형식의 사용자 객체로 만들어 반환하는 함수
// 모든 사용자의 아이디를 중복되지 않게 배열에 담아 반환하는 함수
// 현재 유저의 친구들을 배열에 담아 반환하는 함수
// 함께 아는 친구 수를 통해 점수를 산출하는 함수
// 타임라인 방문 횟수를 통해 점수를 산출하는 함수
