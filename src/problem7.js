function problem7(user, friends, visitors) {
  let answer;
  const POINT = {
    friendOfFriend: 10,
    visit: 1,
  };

  // - [x] 유저(mrko)의 친구 찾기
  const getUserFriends = (_friends) => {
    return _friends
      .filter((friend) => friend.includes(user))
      .map((friend) => friend.filter((_friend) => _friend !== user))
      .flat(1);
  };
  const userFriends = getUserFriends(friends);

  // - [x] 유저(mrko)의 친구의 친구 찾기
  const getFriendsOfFriends = (_friends) => {
    return _friends
      .filter((friend) => !friend.includes(user))
      .map((friend) => friend.filter((name) => !userFriends.includes(name)))
      .flat(1);
  };
  const removeOverlap = (array) => [...new Set(array)];
  const friendsOfFriends = removeOverlap(getFriendsOfFriends(friends));

  // - [x] visitors에서 이미 친구 제거하기
  const visitorsNotFriend = visitors.filter(
    (friend) => !userFriends.includes(friend)
  );

  // - [x] 점수 계산하기
  const friendsRecommandPoint = [];

  const calculatePoint = (name, point) => {
    const idx = friendsRecommandPoint.findIndex(
      (friend) => friend.name === name
    );
    if (idx === -1) {
      friendsRecommandPoint.push({ name, point });
      return;
    }
    friendsRecommandPoint[idx].point = friendsRecommandPoint[idx].point + point;
  };

  friendsOfFriends.forEach((name) =>
    calculatePoint(name, POINT.friendOfFriend)
  );
  visitorsNotFriend.forEach((name) => {
    calculatePoint(name, POINT.visit);
  });

  // - [x] 결과 반환하기
  //    - 점수가 가장 높은 순으로 최대 5명 반환한다.
  //    - 추천 점수 0 -> 반환 안한다.
  //    - 추천 점수 같음 -> 이름순으로 정렬한다.
  const findOtherSpelling = ([nameA, nameB]) => {
    let letterInA = nameA[0];
    let letterInB = nameB[0];
    for (let i = 1; letterInA === letterInB; i++) {
      letterInA = nameA[i];
      letterInB = nameB[i];
    }
    return [letterInA, letterInB];
  };

  const arrangeRecommandPoint = (recommandPoint) => {
    return recommandPoint
      .sort((a, b) => {
        const value = b.point - a.point;
        if (value === 0) {
          const [aName, bName] = findOtherSpelling([a.name, b.name]);
          return aName < bName ? -1 : 1;
        }
        return value;
      })
      .slice(0, 5)
      .map((friend) => friend.name);
  };

  answer = arrangeRecommandPoint(friendsRecommandPoint);

  return answer;
}

module.exports = problem7;
