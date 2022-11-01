// friends는 모든 친구 관계를 포함한 배열 -> friends를 토대로 각 유저들의 친구 관계 알아내기
// 사용자의 친구의 "친구"를 추천해주는 프로그램으로, 이미 친구인 donut과 shakevan은 점수X
// 친구가 아닌 유저 중 mrko의 친구와 친구가 겹칠 때 마다 -> 10점
// mrko의 visitors -> 1점 부여
// 예상점수 : andole 20점, jun 20점, bedi 3점, (donut 1점, shakevan 1점)
// 최대 5명 길이의 result 반환 (오름차순)
// 추천 점수가 0인 경우, 5명 안에 있더라도 추천하지 X
// -
// [✅] user "mrko"와 친구인 아이디를 friends에서 찾기 -> donut과 shakevan 찾기
// [✅] donut과 shakevan의 친구를 찾아 friendYouMightKnow에 저장
// [✅] friendYouMightKnow를 reduce를 사용해 friendsScore 변수에 10점씩 누적
// [✅] visitors를 reduce를 사용해 visitorsScore 변수에 1점씩 누적
// [✅] 점수가 높은 순대로 정렬 후, result에 5명 push
// - [✅] friendsScore와 visitorsScore 합치기 Object.assign(target, ...sources)
// - [✅] result의 길이가 5일 때 까지 비교, 순회 하면서 고득점자 아이디 result에 push
// - [✅] result에 bestFriends에 존재하는 친구가 있다면 삭제, 없다면 그대로 리턴
// - [✅] 반환 시 아이디를 알파벳 오름차순 정렬 후 반환

function problem7(user, friends, visitors) {
  const result = [];
  const friendYouMightKnow = [];
  const friendsList = friends.filter((list) => {
    if (list.includes(user)) {
      return list;
    }
  });
  const bestFriends = friendsList.map((list) => {
    const userIndex = list.indexOf(user);
    list.splice(userIndex, 1);
    return list.toString();
  });
  for (let i = 0; i < bestFriends.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (friends[j].includes(bestFriends[i]) && friends[j].length === 2) {
        const userIndex = friends[j].indexOf(bestFriends[i]);
        friends[j].splice(userIndex, 1);
        friendYouMightKnow.push(friends[j].toString());
      }
    }
  }
  const friendsScore = friendYouMightKnow.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 10;
    return acc;
  }, {});
  const visitorsScore = visitors.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const finalScore = Object.assign(friendsScore, visitorsScore);
  let finalScoreSorted = [];
  for (let idx in finalScore) {
    finalScoreSorted.push([idx, finalScore[idx]]);
  }
  finalScoreSorted.sort((a, b) => b[1] - a[1]);
  finalScoreSorted.forEach((list) => {
    if (result.length <= 5) {
      result.push(list[0]);
    }
  });
  for (let i = 0; i < bestFriends.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[j] === bestFriends[i]) {
        const userIndex = result.indexOf(result[j]);
        result.splice(userIndex, 1);
      }
    }
  }
  return result;
}

module.exports = problem7;
