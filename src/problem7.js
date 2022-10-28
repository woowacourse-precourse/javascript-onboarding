function problem7(user, friends, visitors) {
  // 1. all user와 friend, not friend 구분하기

  // 1.1 made all user array(not me) using app
  let peopleSet = new Set();
  friends.forEach((array) => {
    const result = array.indexOf(user);
    if (result === -1) {
      peopleSet.add(array[0]);
      peopleSet.add(array[1]);
    }
  });
  peopleSet = Array.from(peopleSet);

  // 1.2 find friends of user
  let userFriends = [];
  friends.forEach((array) => {
    const result = array.indexOf(user);
    if (result > -1) {
      userFriends.push(array[1 - result]);
    }
  });

  // 1.3 find "not friends" of user
  let notFriends = [];
  peopleSet.forEach((friend) => {
    const result = userFriends.indexOf(friend);
    if (result === -1) {
      notFriends.push(friend);
    }
  });
  console.log(
    `all peoples : ${peopleSet}, user friends : ${userFriends}, not friends : ${notFriends}`
  );

  // 2. not friend의 친구 중 나와 친구인 사람 찾아 점수 추가하기
  let scoreMap = new Map();

  notFriends.forEach((people) => {
    friends.forEach((array) => {
      const result = array.indexOf(people);
      if (result > -1) {
        const targetUser = array[1 - result];
        const isUserFriend = userFriends.includes(targetUser);
        if (isUserFriend) {
          const score = scoreMap.get(people) ?? 0;
          scoreMap.set(people, score + 10);
        }
      }
    });
  });
  console.log(scoreMap);

  // 3. visitor 탐색해 점수 추가하기
  visitors.forEach((visitor) => {
    const result = userFriends.includes(visitor);
    if (!result) {
      const score = scoreMap.get(visitor) ?? 0;
      scoreMap.set(visitor, score + 1);
    }
  });
  console.log(scoreMap);

  // 4. 결과 값 정렬해 리턴하기.
  const scoreArr = Array.from(scoreMap);
  console.log(scoreArr);

  const keyArr = [];
  const valueArr = [];

  scoreArr.forEach((array) => {
    keyArr.push(array[0]);
    valueArr.push(array[1]);
  });

  console.log(keyArr, valueArr);

  for (let i = 0; i < keyArr - 1; i++) {
    let swap = 0;
    for (let j = 0; j < keyArr - i - 1; j++) {
      if (valueArr[j] < valueArr[j + 1]) {
        swap = valueArr[j];
        valueArr[j] = valueArr[j + 1];
        valueArr[j + 1] = swap;
        swap = keyArr[j];
        keyArr[j] = keyArr[j + 1];
        keyArr[j + 1] = swap;
      }
    }
  }
  console.log(keyArr);
  return keyArr;
}

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

module.exports = problem7;

/* 
  describe("problem7", () => {
    test("case1", () => {
      expect(
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
      ).toEqual(["andole", "jun", "bedi"]);
    });
*/
