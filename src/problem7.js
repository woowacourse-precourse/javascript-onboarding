function problem7(user, friends, visitors) {
  const answer = [];
  // "추천 친구(key): 점수(value)"를 담을 객체
  const data = {};

  // user의 친구들을 담는 배열
  const userFriends = [];
  friends.forEach((arr) => {
    const index = arr.indexOf(user);

    if (index === 0) userFriends.push(arr[1]);
    if (index === 1) userFriends.push(arr[0]);
  });

  friends.forEach((arr) => {
    userFriends.forEach((friend) => {
      const index = arr.indexOf(friend);

      if (index === 0 && arr[1] !== user) {
        if (data[arr[1]] === undefined) data[arr[1]] = 0;

        data[arr[1]] += 10;
      }
      if (index === 1 && arr[0] !== user) {
        if (data[arr[0]] === undefined) data[arr[0]] = 0;

        data[arr[0]] += 10;
      }
    });
  });

  visitors.forEach((visitor) => {
    if (!userFriends.includes(visitor)) {
      if (data[visitor] === undefined) data[visitor] = 0;

      data[visitor] += 1;
    }
  });

  for (const person in data) {
    answer.push(person);
  }

  answer.sort((a, b) => {
    if (data[a] === data[b]) return a.charCodeAt() - b.charCodeAt();

    return data[b] - data[a];
  });

  return answer;
}

module.exports = problem7;
