function problem7(user, friends, visitors) {
  const alreadyFriends = findAlreadyFriends(user, friends);

  const tempRecommendationFriends = findTempRecommendationFriends(
    user,
    friends,
    alreadyFriends
  );

  // 임시 친구추천 배열에서 사용자 중복제거 & 점수 +10점 부여
  let recommendationFriends = new Map();

  tempRecommendationFriends.map((tempRecommendationFriend) => {
    // 친구추천에 등록돼 있는 경우 +10점
    if (recommendationFriends.has(tempRecommendationFriend)) {
      let recommendationFriendScore = recommendationFriends.get(
        tempRecommendationFriend
      );
      return recommendationFriends.set(
        tempRecommendationFriend,
        recommendationFriendScore + 10
      );
    }
    // 친구추천에 등록돼 있지 않은 경우 신규 등록
    return recommendationFriends.set(tempRecommendationFriend, 10);
  });

  // 친구추천에 visitor 추가 기능
  visitors.map((visitor) => {
    // visitor에 유저나 친구가 들어오는 경우 예외처리
    if (visitor !== user && !alreadyFriends.includes(visitor)) {
      // 친구추천에 등록된 visitor는 점수 +1점 부여
      if (recommendationFriends.has(visitor)) {
        let recommendationFriendScore = recommendationFriends.get(visitor);
        return recommendationFriends.set(
          visitor,
          recommendationFriendScore + 1
        );
      }
      // 친구추천에 등록되지 않은 visitor는 신규 등록
      return recommendationFriends.set(visitor, 1);
    }
  });

  //내림차순 정렬
  let answerTopFive = new Map(
    [...recommendationFriends.entries()].sort((a, b) => {
      //value(점수) 값이 같을 경우
      if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]);
      }
      return b[1] - a[1];
    })
  );

  // 상위 5개까지만 출력
  return Array.from(answerTopFive.keys()).slice(0, 5);
}

function findAlreadyFriends(user, friends) {
  return friends
    .filter((friend) => friend.includes(user))
    .flat()
    .filter((friend) => friend !== user);
}

function findTempRecommendationFriends(user, friends, alreadyFriends) {
  return friends
    .filter((friend) => !friend.includes(user))
    .filter((friend) => {
      const [friendA, friendB] = friend;
      if (
        (alreadyFriends.includes(friendA) &&
          !alreadyFriends.includes(friendB)) ||
        (alreadyFriends.includes(friendB) && !alreadyFriends.includes(friendA))
      ) {
        return friend;
      }
    })
    .flat()
    .filter((friend) => !alreadyFriends.includes(friend));
}

module.exports = problem7;
