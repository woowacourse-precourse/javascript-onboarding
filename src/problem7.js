function problem7(user, friends, visitors) {
  // 이미 친구인 사용자를 찾는 기능
  let alreadyFriends = friends
    .filter((friend) => friend.includes(user))
    .flat()
    .filter((friend) => friend !== user);

  // 임시 친구추천 배열 도출 (이미 친구인 사용자과 친구인 관계)
  let tempRecommendationFriends = friends
    .filter((friend) => !friend.includes(user)) //유저가 없는 friend배열만 저장
    .filter((friend) => {
      const [friendA, friendB] = friend;
      // friendA와 friendB가 모두 친구면 안됨
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

  // 임시 친구추천 배열에서 사용자 중복제거 & 점수 +10점 부여

  // visitor중 유저나 이미 친구인 사용자 제외

  // 임시 친구추천 배열에 등록된 visitor는 점수 +1점 부여

  // 임시 친구추천 배열에 등록되지 않은 visitor는 신규 등록 (점수 1점 부여)
}

module.exports = problem7;
