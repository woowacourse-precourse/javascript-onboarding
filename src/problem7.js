function problem7(user, friends, visitors) {
  let answer = [];
  const score = {};
  const userFriends = getUserFriend(user, friends);
  const otherFriends = getOtherFriends(userFriends, friends);
  addScore(user, otherFriends, userFriends, score, 10);
  addScore(user, visitors, userFriends, score, 1);

  answer = Object.entries(score)
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      else if (a[1] < b[1]) return 1;
      else {
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        else return 0;
      }
    })
    .map((e) => e[0]);
  answer.splice(5);

  return answer;
}

const getUserFriend = (user, friends) => {
  const userFriends = [];
  friends.forEach((friend) => {
    if (friend.includes(user))
      userFriends.push(friend.find((name) => name !== user));
  });
  return userFriends;
};

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
