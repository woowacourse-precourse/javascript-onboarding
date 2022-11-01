function problem7(user, friends, visitors) {
  const usersFriend = new Set();
  const result = [];

  // 친구 상태인 사람들만 모은 set를 완성시킴
  friends.forEach((friend) => {
    if (friend[0] === user) {
      usersFriend.add(friend[1]);
    }
    if (friend[1] === user) {
      usersFriend.add(friend[0]);
    }
  });

  // 방문자 중에서 친구 상태인 사람들을 제거 (친구 상태인 사람은 점수를 매기지 않기에 제거함)
  visitors = visitors.filter((visitor) =>
    usersFriend.has(visitor) ? false : true
  );

  // user가 들어간 친구관계는 삭제, 양쪽 다 user와 친구상태인 경우도 삭제 (이후에 friends 배열을 사용하기 쉽도록 하기 위해서 user가 들어간 부분은 제거함)
  friends = friends.filter((friend) => {
    if (usersFriend.has(friend[0]) && usersFriend.has(friend[1])) {
      return false;
    }
    return friend.includes(user) ? false : true;
  });

  // 점수를 내는 두 함수가 반환하는 객체를 합치기
  const totalScore = { ...scoreByVisiting(visitors) };
  const foafArr = Object.entries(scoreByFoaf(usersFriend, friends));

  foafArr.forEach(([key, value]) => {
    if (totalScore[key]) {
      totalScore[key] += value;
    } else {
      totalScore[key] = value;
    }
  });

  // 점수 순, abc 순 으로 정렬
  const scoreArr = Object.entries(totalScore).slice();

  scoreArr.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    else if (a[1] === b[1]) {
      if (a[0] > b[0]) return 1;
      else return -1;
    } else return 1;
  });

  // 최대 5명 까지 return
  for (let i = 0; i < 5; i++) {
    if (scoreArr[i]) {
      result.push(scoreArr[i][0]);
    }
  }

  return result;
}

// 방문 횟수에 따라 점수 올리는 함수
const scoreByVisiting = (arr) => {
  const scoreObj = {};
  arr.forEach((name) => {
    scoreObj[name] ? scoreObj[name]++ : (scoreObj[name] = 1);
  });

  return scoreObj;
};

// 친구의 친구이면 점수 올리는 함수
const scoreByFoaf = (set, arr) => {
  const scoreObj = {};

  arr.forEach((value) => {
    if (set.has(value[0])) {
      scoreObj[value[1]]
        ? (scoreObj[value[1]] += 10)
        : (scoreObj[value[1]] = 10);
    }
    if (set.has(value[1])) {
      scoreObj[value[0]]
        ? (scoreObj[value[0]] += 10)
        : (scoreObj[value[0]] = 10);
    }
  });

  return scoreObj;
};

module.exports = problem7;
