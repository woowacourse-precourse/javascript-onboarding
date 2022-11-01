function problem7(user, friends, visitors) {
  var answer = [];

  // 각자 사람들의 친구 구하기
  const getFirends = (friends) => {
    const result = {};
    friends.forEach((value) => {
      const [user1, user2] = value;
      if (!(user1 in result)) {
        result[user1] = [user2];
      } else {
        result[user1].push(user2);
      }

      if (!(user2 in result)) {
        result[user2] = [user1];
      } else {
        result[user2].push(user1);
      }
    });
    return result;
  };

  const friendsDict = getFirends(friends);

  // 자신 제외 사람들 점수 dict 생성
  const scoreDict = {};
  Object.keys(friendsDict).forEach((value) => {
    if (value !== user) {
      scoreDict[value] = 0;
      // 유저의 친구 목록과 비교하면서 함께하는 친구 찾기
      friendsDict[value].forEach((friend) => {
        if (friendsDict[user].includes(friend)) {
          scoreDict[value] += 10;
        }
      });
    }
  });

  // 방문자 추가
  visitors.forEach((visitor) => {
    if (!(visitor in scoreDict)) {
      // 없다면 추가하고 1점 부여
      scoreDict[visitor] = 1;
    } else {
      // 있다면 1점 추가
      scoreDict[visitor] += 1;
    }
  });

  // 상위 5명을 추가한다. (단 나와 친구가 아니어야한다.)
  let items = Object.keys(scoreDict).map(function (key) {
    return [key, scoreDict[key]];
  });

  items.sort(function (first, second) {
    return second[1] - first[1];
  });

  for (let i = 0; i < items.length; i++) {
    if (answer.length > 5) {
      break;
    }
    if (!friendsDict[user].includes(items[i][0])) {
      answer.push(items[i][0]);
    }
  }
  return answer;
}
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
);
module.exports = problem7;
