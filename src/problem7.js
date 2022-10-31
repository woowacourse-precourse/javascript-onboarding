function problem7(user, friends, visitors) {
  var answer = [];
  let friendsAll = friends.flat().concat(visitors);
  let friendsList = friendsAll.filter((i, j) => friendsAll.indexOf(i) == j);
  let friendsScore = [];
  let friendsObject = [];

  for (let i = 0; i < friendsList.length; i++) {
    friendsScore.push(
      countScore(
        friendsList[i],
        checkOverlap(user, friends),
        visitors,
        user,
        friends
      )
    );
  }
  for (let i = 0; i < friendsList.length; i++) {
    friendsObject.push(new Who(friendsList[i], friendsScore[i]));
  }
  friendsObject.sort(function (a, b) {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });
  for (let i = 0; i < 5; i++) {
    if (friendsObject[i].score != 0) {
      answer.push(friendsObject[i].name);
    }
  }
  return answer;
}

function checkOverlap(user, friends) {
  let userFriends = [];
  let overlappedFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      userFriends.push(friends[i]);
    }
  }
  userFriends = userFriends.flat().filter((i) => i != user);
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < userFriends.length; j++) {
      if (friends[i].includes(userFriends[j])) {
        if (!friends[i].includes(user)) {
          overlappedFriends.push(friends[i]);
        }
      }
    }
  }
  overlappedFriends = overlappedFriends
    .flat()
    .filter((i) => !userFriends.includes(i) && i != user);
  return overlappedFriends;
}

function countScore(users, overlap, visit, user, friends) {
  let score = 0;
  let userFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      userFriends.push(friends[i]);
    }
  }
  userFriends = userFriends.flat().filter((i) => i != user);
  for (let i = 0; i < overlap.length; i++) {
    if (overlap[i] === users) {
      score = score + 10;
    }
  }
  for (let i = 0; i < visit.length; i++) {
    if (visit[i] === users && !userFriends.includes(visit[i])) {
      score = score + 1;
    }
  }
  return score;
}

function guessRank(arr) {}

function Who(name, score) {
  this.name = name;
  this.score = score;
}

module.exports = problem7;
