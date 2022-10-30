function problem7(user, friends, visitors) {
  let answer = [];
  const userFriends = [];
  let otherFriends = [];
  const score = {};
  // user의 친구 구하기
  friends.forEach((e) => {
    if (e.includes(user)) userFriends.push(e.find((name) => name !== user));
  });

  // 친구의 친구 구하기
  otherFriends = getOtherFriends(userFriends, friends);

  //중복되는 값 제거 후 점수배열에 추가
  addScore(user, otherFriends, userFriends, score, 10);
  addScore(user, visitors, userFriends, score, 1);

  return answer;
}

const getOtherFriends = (userFriends, friends) => {
  const otherFriends = [];
  userFriends.forEach((friend) => {
    friends.forEach((e) => {
      if (e.includes(friend)) {
        const name = e.find((name) => name !== friend);
        otherFriends.push(name);
      }
    });
  });
  return otherFriends;
};

const addScore = (user, arr, userFriends, scoreObj, score) => {
  arr.forEach((name) => {
    if (name !== user && !userFriends.includes(name)) {
      if (name in scoreObj) scoreObj[name] += score;
      else scoreObj[name] = score;
    }
  });
};
module.exports = problem7;

// 기능 구현
// 1. 반복을 돌며 user와 친구인 사람 찾기
// 2. user와 친구인 사람의 친구를 찾아 추천친구 목록 객체에 저장 {이름: 점수}
// 3. visitors를 통해 추천친구 목록 객체에 추가
// 4. 점수를 기준을 정렬

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
);
