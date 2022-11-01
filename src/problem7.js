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
        // sort 할 원소를 줄이기 위해서
        // 함께 아는 친구가 있거나 사용자의 타임라인에 방문한 사람 (점수가 0이 아닌 사람)만 score에 추가 합니다.
        if (intersect.length >= 1) {
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
  const sortedObj = Object.entries(score).sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  for (i = 0; i < sortedObj.length; i++) {
    if (i === 5) {
      break;
    }

    answer.push(sortedObj[i][0]);
  }
  return answer;
}

module.exports = problem7;
