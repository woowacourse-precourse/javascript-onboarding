function problem7(user, friends, visitors) {
  //var answer;
  let answer = [];
  let userFriends = [];
  //user의 친구를 찾는다.
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      if (friends[i][0] == user) {
        userFriends.push(friends[i][1]);
      } else {
        userFriends.push(friends[i][0]);
      }
      friends.splice(i, 1); //사용자가 있는 부분은 지움.
    }
    // console.log(userFriends);
  }
  // console.log(friends);

  //친구들 점수 매겨놓은 객체를 초기화 하기
  let friendScore = new Object();
  for (friend of friends) {
    if (userFriends.includes(friend[0])) {
      friendScore[friend[1]] = 0;
    } else if (userFriends.includes(friend[1])) {
      friendScore[friend[0]] = 0;
    }
  }
  for (visitor of visitors) {
    if (!userFriends.includes(visitor)) {
      friendScore[visitor] = 0;
    }
  }
  console.log(friendScore);

  //user 친구들의 친구를 찾는다 (+10점해야하는 사람들)
  for (friend of friends) {
    if (userFriends.includes(friend[0])) {
      friendScore[friend[1]] += 10;
    } else if (userFriends.includes(friend[1])) {
      friendScore[friend[0]] += 10;
    }
  }
  //user 타임라인에 방문한 친구들에게 점수 부여
  for (visitor of visitors) {
    if (!userFriends.includes(visitor)) {
      friendScore[visitor] += 1;
    }
  }

  console.log(friendScore);
  let sortable = [];
  for (let name in friendScore) {
    sortable.push([name, friendScore[name]]);
  }
  sortable.sort(); //우선 이름 순으로 정렬 -> 뒤에서 점수가 높은 순으로 정렬하면 됨
  console.log(sortable);
  //점수가 높은 것 순으로 정렬
  sortable.sort(function (a, b) {
    return b[1] - a[1]; // 내림차순으로 정렬
  });

  console.log(sortable);
  for (let i = 0; i < sortable.length; i++) {
    answer.push(sortable[i][0]);
  }

  return answer;
}
module.exports = problem7;
