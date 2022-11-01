const MAXIMUM = 5;
const FIRST_FRIEND = 0,
  SECOND_FRIEND = 1;
const NAME = 0,
  SCORE = 1;

function problem7(user, friends, visitors) {
  let recommend = {};

  arrangeFriends();
  const alreadyFriendArr = findUserFriend(friends, user);
  delAlreadyFriend(alreadyFriendArr);
  findKnowTogether(friends, alreadyFriendArr);
  findVisitorNum(visitors);

  // 객체 오름차순 정렬
  let sortable = [];
  for (let friend in recommend) {
    sortable.push([friend, recommend[friend]]);
  }
  sortable.sort();
  sortable.sort(function (a, b) {
    return b[SCORE] - a[SCORE];
  });

  let answer = [];
  let arrLength = sortable.length;
  if (arrLength > MAXIMUM) arrLength = MAXIMUM;
  for (let idx = 0; idx < arrLength; idx++) {
    if (sortable[idx][SCORE] !== 0) answer.push(sortable[idx][NAME]);
  }

  const set = new Set(answer);
  answer = [...set];

  return answer;

  function arrangeFriends() {
    friends.forEach((friend) => {
      friend.forEach((name) => {
        if (name !== user && recommend[name] === undefined) {
          recommend[name] = 0;
        }
      });
    });

    visitors.forEach((visitor) => {
      if (recommend[visitor] === undefined) {
        recommend[visitor] = 0;
      }
    });
  }

  function delAlreadyFriend(alreadyFriendArr) {
    alreadyFriendArr.forEach((name) => delete recommend[name]);
  }

  function findKnowTogether(friends, alreadyFriendArr) {
    for (let alreadyFriend of alreadyFriendArr) {
      friends.forEach((relation) => {
        if (relation[FIRST_FRIEND] === alreadyFriend) {
          if (recommend.hasOwnProperty(relation[SECOND_FRIEND]))
            recommend[relation[SECOND_FRIEND]] += 10;
        } else if (relation[SECOND_FRIEND] === alreadyFriend) {
          if (recommend.hasOwnProperty(relation[FIRST_FRIEND]))
            recommend[relation[FIRST_FRIEND]] += 10;
        }
      });
    }
  }

  function findVisitorNum(visitors) {
    visitors.forEach((visitor) => {
      if (recommend.hasOwnProperty(visitor)) recommend[visitor] += 1;
    });
  }
}

function findUserFriend(friends, user) {
  let foundUserFriend = [];

  friends.forEach((relation) => {
    if (relation[FIRST_FRIEND] === user)
      foundUserFriend.push(relation[SECOND_FRIEND]);
    else if (relation[SECOND_FRIEND] === user)
      foundUserFriend.push(relation[FIRST_FRIEND]);
  });

  return foundUserFriend;
}

module.exports = problem7;
