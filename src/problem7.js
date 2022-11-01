function problem7(user, friends, visitors) {
  let hash = {};

  arrangeFriends();
  const alreadyFriendArr = findUserFriend(friends, user);
  delAlreadyFriend(alreadyFriendArr);
  findKnowTogether(friends, alreadyFriendArr);
  findVisitorNum(visitors);

  // 객체 오름차순 정렬
  let sortable = [];
  for (let friend in hash) {
    sortable.push([friend, hash[friend]]);
  }

  sortable.sort(); // 점수 같을 경우 이름순으로 정렬
  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  let answer = [];
  let arrLength = sortable.length;
  if (arrLength > 5) arrLength = 5;
  for (let idx = 0; idx < arrLength; idx++) {
    // 추천 점수가 0인 경우 추천하지 않음
    if (sortable[idx][1] !== 0) answer.push(sortable[idx][0]);
  }

  return answer;

  function arrangeFriends() {
    friends.forEach((friend) => {
      friend.forEach((person) => {
        if (person !== user && hash[person] === undefined) {
          hash[person] = 0;
        }
      });
    });

    visitors.forEach((visitors) => {
      if (hash[visitors] === undefined) {
        hash[visitors] = 0;
      }
    });
  }

  function delAlreadyFriend(alreadyFriendArr) {
    alreadyFriendArr.forEach((friend) => delete hash[friend]);
  }

  function findKnowTogether(friends, alreadyFriendArr) {
    for (let alreadyFriend of alreadyFriendArr) {
      friends.forEach((relation) => {
        if (relation[0] === alreadyFriend) {
          if (hash.hasOwnProperty(relation[1])) hash[relation[1]] += 10;
        } else if (relation[1] === alreadyFriend) {
          if (hash.hasOwnProperty(relation[0])) hash[relation[0]] += 10;
        }
      });
    }
  }

  function findVisitorNum(visitors) {
    visitors.forEach((visitor) => {
      if (hash.hasOwnProperty(visitor)) hash[visitor] += 1;
    });
  }
}

function findUserFriend(friends, user) {
  let foundUserFriend = [];
  friends.forEach((relation) => {
    if (relation[0] === user) foundUserFriend.push(relation[1]);
    else if (relation[1] === user) foundUserFriend.push(relation[0]);
  });
  return foundUserFriend;
}

module.exports = problem7;
