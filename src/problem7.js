// 기능 요구 사항

// -[x] 친구 배열에 유저가 포함되어 있으면 나머지 한 친구를 배열에 저장한다.
// -[x] 배열에 저장된 친구의 친구가 유저가 아니면 그 친구에게 10점을 부과한다.
// -[x] 방문자 점수를 부과한다.

function problem7(user, friends, visitors) {
  let myfriends = [];
  let score = new Map();

  friends.map((data) => {
    if (data[0] == user) {
      myfriends.push(data[1]);
      return;
    }
    if (data[1] == user) {
      myfriends.push(data[0]);
      return;
    }
  });

  friends = friends.filter((data) => {
    return data[0] != user && data[1] != user;
  });

  friends.map((data) => {
    for (let index = 0; index < myfriends.length; index++) {
      if (data[0] == myfriends[index]) {
        let sc = score.get(data[1]);
        score.set(data[1], ~~sc + 10);
      }
      if (data[1] == myfriends[index]) {
        let sc = score.get(data[0]);
        score.set(data[0], ~~sc + 10);
      }
    }
  });

  visitors.map((data) => {
    let sc = score.get(data);
    score.set(data, ~~sc + 1);
  });

  score.forEach((value, key) => {
    myfriends.map((data) => {
      console.log(data + " " + key);

      if (data === key) {
        score.delete(data);
      }
    });
  });

  let sortedDecsArray = [...score];
  sortedDecsArray.sort((a, b) => b[1] - a[1]);
  let keyDescMap = new Map(sortedDecsArray);

  let answer = [];
  keyDescMap.forEach((value, key) => {
    answer.push(key);
  });
  return answer;
}

module.exports = problem7;
