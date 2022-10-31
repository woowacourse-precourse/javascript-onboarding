function problem7(user, friends, visitors) {
  //입력: user => 문자열, friends=>2차원배열(겹치는 친구 10점), visitors=> 1차원 배열(1점)
  //출력: 점수가 가장 높은 순으로 정렬하여 최대 5명을 담은 1차원 배열
  // (단, 추천 점수가 0점인 경우 추천하지 않으며, 추천 점수가 같은 경우는 이름순으로 정렬)
  // 해야할 일:
  //1. visitors 배열에 포함 된 모든 친구들에게 1점씩 준다. (객체 활용해서 점수++)
  //2. friends 각 요소를 검사하여 user를 포함한 요소를 찾는다. (user 친구 찾기)
  //3. 다시 friends 각 요소 검사하며 2에서 찾은 친구가 포함된 요소를 찾는다.
  //4. 3에서 걸러진 요소들을 하나의 배열에 담은 뒤, 배열에 담긴 친구들에게 10점씩 준다. (2번에서 찾은 user의 친구 빼고)
  //5. 점수가 높은 순으로 정렬, 점수가 같다면 이름순으로 정렬하여 하나의 배열에 담는다.
  //6. 배열의 길이가 5를 넘을 경우, slice를 이용하여 5개까지 자른다.
  let score = {};
  let userFriends = findUserFriends(user, friends);
  let newFriends = findNewFriends(user, friends, userFriends);
  let newVisitors = filteredVisitors(visitors, userFriends);

  newVisitors.forEach((visitor) => {
    if (score[visitor]) {
      score[visitor] += 1;
    } else {
      score[visitor] = 1;
    }
  });

  newFriends.forEach((newFriend) => {
    if (score[newFriend]) {
      score[newFriend] += 10;
    } else {
      score[newFriend] = 10;
    }
  });

  const nameSort = Object.fromEntries(
    Object.entries(score).sort(([a], [b]) => (a < b ? -1 : 1))
  );

  const scoreSort = Object.fromEntries(
    Object.entries(nameSort).sort(([, a], [, b]) => (a > b ? -1 : 1))
  );

  let answer = Object.keys(scoreSort);

  return answer;
}

function findUserFriends(user, friends) {
  let userFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) {
      userFriends.push(friends[i][1]);
    } else if (friends[i][1] === user) {
      userFriends.push(friends[i][0]);
    }
  }
  return userFriends;
}

function findNewFriends(user, friends, userFriends) {
  let friendsOfFriend = [];
  for (let i = 0; i < userFriends.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (friends[j][0] === userFriends[i]) {
        friendsOfFriend.push(friends[j][1]);
      } else if (friends[j][1] === userFriends[i]) {
        friendsOfFriend.push(friends[j][0]);
      }
    }
  }
  let newFriends = friendsOfFriend.filter((friend) => friend !== user);
  return newFriends;
}

function filteredVisitors(visitors, userFriends) {
  let newVisitors = visitors.filter(
    (visitor) => !userFriends.includes(visitor)
  );
  return newVisitors;
}

module.exports = problem7;
