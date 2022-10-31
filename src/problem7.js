function problem7(user, friends, visitors) {
  var answer;
  let friendsAll = friends.flat().concat(visitors);
  let friendsList = friendsAll.filter((i, j) => friendsAll.indexOf(i) == j);
  let friendsScore = [];
  let friendsObject = [];

  for (let i = 0; i < friendsList.length; i++) {
    friendsScore.push(
      countScore(friendsList[i], checkOverlap(user, friends), visitors)
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
  answer = [
    friendsObject[0].name,
    friendsObject[1].name,
    friendsObject[2].name,
  ];
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
        overlappedFriends.push(friends[i]);
      }
    }
  }
  overlappedFriends = overlappedFriends
    .flat()
    .filter((i) => !userFriends.includes(i) && i != user);
  return overlappedFriends;
}

function countScore(user, overlap, visit) {
  let score = 0;
  for (let i = 0; i < overlap.length; i++) {
    if (overlap[i] === user) {
      score = score + 10;
    }
  }
  for (let i = 0; i < visit.length; i++) {
    if (visit[i] === user) {
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

problem7(
  'mrko',
  [
    ['donut', 'andole'],
    ['donut', 'jun'],
    ['donut', 'mrko'],
    ['shakevan', 'andole'],
    ['shakevan', 'jun'],
    ['shakevan', 'mrko'],
  ],
  ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
);
