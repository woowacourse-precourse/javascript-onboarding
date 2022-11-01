function problem7(user, friends, visitors) {
  let answer = [];
  let newArr = [];

  friends.forEach((item) => item.forEach((friend) => newArr.push(friend)));

  let people = new Set(visitors.concat(newArr));
  let countMap = new Map();
  people.forEach((people) => countMap.set(people, 0));

  let myFriendArr = []; // 친구들 배열을 반복하면서 유저의 친구를 찾아서 배열에 추가
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) {
      myFriendArr.push(friends[i][1]);
    } else if (friends[i][1] === user) {
      myFriendArr.push(friends[i][0]);
    }
  }

  // user 친구의 친구를 찾아서 점수 10점 추가
  for (let i = 0; i < friends.length; i++) {
    if (myFriendArr.some((friend) => friend === friends[i][0])) {
      countMap.set(friends[i][1], countMap.get(friends[i][1]) + 10);
    }
    if (myFriendArr.some((friend) => friend === friends[i][1])) {
      countMap.set(friends[i][0], countMap.get(friends[i][0]) + 10);
    }
  }

  // 타임라인에 방문한 친구 1점씩 추가
  for (let i = 0; i < visitors.length; i++) {
    countMap.set(visitors[i], countMap.get(visitors[i]) + 1);
  }
  // 점수 맵 을 answer 배열에 push
  for (let [name, count] of countMap) {
    answer.push([name, count]);
  }

  let result = [];
  let except = [...myFriendArr, user];

  for (let i = 0; i < answer.length; i++) {
    if (!except.some((friend) => friend === answer[i][0]))
      result.push(answer[i]);
  }

  return result.sort((a, b) => b[1] - a[1]).map((el) => el[0]);
}

module.exports = problem7;
