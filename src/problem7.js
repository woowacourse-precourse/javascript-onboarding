function problem7(user, friends, visitors) {

  // 결괏값을 담아줄 배열 생성
  const result = [];

  // "추천 친구(key): 점수(value)"를 담을 객체
  const data = {};

  // user의 친구들을 담는 배열
  const userFriends = [];
  friends.forEach((arr) => {
    const index = arr.indexOf(user);

    if (index === 0) userFriends.push(arr[1]);
    if (index === 1) userFriends.push(arr[0]);
  });

  // 친구에 대한 점수 설정
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

  // 방문자에 대한 점수 설정
  visitors.forEach((visitor) => {
    if (!userFriends.includes(visitor)) {
      if (data[visitor] === undefined) data[visitor] = 0;

      data[visitor] += 1;
    }
  });

  // 객체로 지정된 값들을 배열로 변환
  for (const person in data) {
    result.push(person);
  }

  // 해당 결괏값을 이름순으로 정렬
  result.sort((a, b) => {
    if (data[a] === data[b]) return a.charCodeAt() - b.charCodeAt();

    return data[b] - data[a];
  });

  // 정렬된 결괏값 리턴
  return result;
}

module.exports = problem7;
