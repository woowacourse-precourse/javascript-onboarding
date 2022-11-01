// friends는 모든 친구 관계를 포함한 배열 -> friends를 토대로 각 유저들의 친구 관계 알아내기
// 사용자의 친구의 "친구"를 추천해주는 프로그램으로, 이미 친구인 donut과 shakevan은 점수X
// 친구가 아닌 유저 중 mrko의 친구와 친구가 겹칠 때 마다 -> 10점
// mrko의 visitors -> 1점 부여
// 예상점수 : andole 20점, jun 20점, bedi 3점, (donut 1점, shakevan 1점)
// 최대 5명 길이의 result 반환 (오름차순)
// 추천 점수가 0인 경우, 5명 안에 있더라도 추천하지 X
// -
// [✅] user "mrko"와 친구인 아이디를 friends에서 찾기 -> donut과 shakevan 찾기
// [] donut과 shakevan의 친구를 찾아 friendsList에 저장
// [] friendsList를 reduce를 사용해 friendsScore 변수에 10점씩 누적
// [] visitors를 reduce를 사용해 visitorsScore 변수에 1점씩 누적
// [] 점수가 높은 순대로 정렬 후, result에 5명 push
// [] user와 기존에 친구인 친구 result에서 제거
// [] result 알파벳 오름차순 정렬 후 반환

function problem7(user, friends, visitors) {
  const result = [];
  const friendsList = friends.filter((list) => {
    if (list.includes(user)) {
      return list;
    }
  });
  const bestFriends = friendsList.map((list) => list.slice(user, 1).toString());
  console.log(bestFriends);
  return result;
}

console.log(
  problem7(
    'mrko',
    [
      ['donut', 'andole'],
      ['donut', 'jun'],
      ['donut', 'mrko'],
      ['shakevan', 'andole'],
      ['shakevan', 'jun'],
      ['shakevan', 'mrko'],
    ],
    ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
  )
);

module.exports = problem7;
