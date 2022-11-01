function problem7(user, friends, visitors) {
  var answer = [];
  var peopleSet = new Set();
  var friendSet = new Set();
  var peopleDict = {};

  //user와 친구인 사람들 friendSet에 추가
  for (const friend of friends) {
    if (friend[0] === user) {
      friendSet.add(friend[1]);
    } else if (friend[1] === user) {
      friendSet.add(friend[0]);
    }
  }

  //친구 아닌 사람들 peopleSet에 추가
  for (const friend of friends) {
    for (var i = 0; i < 2; i++) {
      if (!isIncludes(friend[i], friendSet) && friend[i] !== user) {
        peopleSet.add(friend[i])
      }
    }
  }

  //set을 dict로 변환
  for (const people of peopleSet) {
    peopleDict[people] = 0;
  }

  //함께 아는 친구의 수만큼 + 10
  for (const friend of friends) {
    if (isIncludes(friend[0], friendSet) && isIncludes(friend[1], peopleSet)) {
      peopleDict[friend[1]] += 10;
    } else if (isIncludes(friend[1], friendSet) && isIncludes(friend[0], peopleSet)) {
      peopleDict[friend[0]] += 10;
    }
  }

  //방문한 수만큼 +1
  for (const visitor of visitors) {
    if (visitor !== user && !isIncludes(visitor, friendSet)) {
      if (peopleDict[visitor]) {
        peopleDict[visitor] += 1;
      } else {
        peopleDict[visitor] = 1;
      }
    }
  }

  var sortPeople = Object.keys(peopleDict).map(
    (key) => { return [key, peopleDict[key]] }
  );

  sortPeople.sort((a, b) => {
    if (a[1] - b[1] > 0) return -1;
    if (a[1] - b[1] < 0) return 1;
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;

  });

  for (const srt of sortPeople) {
    answer.push(srt[0]);
  }

  return answer.slice(0, 5);
}

function isIncludes(person, set) {
  if (Array.from(set).includes(person)) {
    return true;
  } else {
    return false;
  }
}

module.exports = problem7;
