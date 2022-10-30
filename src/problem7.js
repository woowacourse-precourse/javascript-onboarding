function problem7(user, friends, visitors) {
  var answer = [];
  let friendObj = {};
  let score = {};
  let set = new Set(visitors);

  for (i = 0; i < friends.length; i++) {
    set.add(friends[i][0]);
    set.add(friends[i][1]);

    if (
      friends[i][0] in friendObj &&
      friendObj[friends[i][0]].includes(friends[i][1]) === false
    ) {
      friendObj[friends[i][0]].push(friends[i][1]);
    } else {
      friendObj[friends[i][0]] = [friends[i][1]];
    }

    if (
      friends[i][1] in friendObj &&
      friendObj[friends[i][1]].includes(friends[i][0]) === false
    ) {
      friendObj[friends[i][1]].push(friends[i][0]);
    } else {
      friendObj[friends[i][1]] = [friends[i][0]];
    }
  }

  set.forEach((name) => {
    if (name !== user && friendObj[user].includes(name) === false) {
      // user가 아니면서, user의 기존 친구가 아닌 사람만
      if (name in friendObj) {
        const intersect = friendObj[name].filter((value) =>
          friendObj[user].includes(value)
        );
        if (intersect) {
          score[name] = intersect.length * 10;
        }
      }
      if (visitors.includes(name)) {
        const num = visitors.reduce(
          (cnt, element) => cnt + (name === element),
          0
        );
        if (name in score) {
          score[name] += num;
        } else {
          score[name] = num;
        }
      }
    }
  });
  console.log(score);
  // Todo: value 값을 기준으로 score 정렬 필요 (점수가 같은 경우 이름순 정렬)
  return answer;
}

module.exports = problem7;
