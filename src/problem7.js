let hash = {};

function problem7(user, friends, visitors) {
  var answer;

  arrangeFriends();
  const alreadyFriendArr = findUserFriend(friends, user);
  delAlreadyFriend(alreadyFriendArr);
  findKnowTogether(friends, alreadyFriendArr);
  findVisitorNum(visitors);

  return answer;

  // 유저목록 정리
  function arrangeFriends() {
    // friends 배열
    friends.forEach((friend) => {
      friend.forEach((person) => {
        if (person !== user && hash[person] === undefined) {
          hash[person] = 0;
        }
      });
    });
    // visitors 배열
    visitors.forEach((visitors) => {
      if (hash[visitors] === undefined) {
        hash[visitors] = 0;
      }
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

module.exports = problem7;
