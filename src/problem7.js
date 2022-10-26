function problem7(user, friends, visitors) {
  /**
   * 1. 이미 친구인 사람 + 본인 목록 생성 및 중복 제거 : alreadyFriendList
   * 2. friends 이중 배열 분해 후 alreadyFriendList에 있는 값들 제거
   * 3. 겹치는 갯수 세어서 객체로 생성 {name: 'jongco', friend: 2, visit: 1, score: 21}
   * 4. visitor도 똑같이 세어서 객체로 생성 {name: 'jongco', friend: 2, visit: 1, score: 21}
   * 5. 점수 별로 나열 후 score가 0인 것 제외해서 배열에 이름 반환
   */
  const alreadyFriendList = [...new Set(friends.filter((friend) => friend.includes(user)).flat())];
  return alreadyFriendList;
}
console.log(
  problem7(
    "mrko",
    [
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  )
);

module.exports = problem7;
