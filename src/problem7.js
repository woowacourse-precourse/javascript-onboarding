function problem7(user, friends, visitors) {
  const userFriend = findFriend(user, friends);
  const noFriend = findNoFriend(user, friends, userFriend);
  calculateNoFriendScore(friends, noFriend, candidateObj);
  calculateVisitorScore(visitors, userFriend, candidateObj);
  const sortedCandidate = sortCandidate(candidateObj);
  const fiveCandidate = getFiveCandidate(sortedCandidate);
}

function findFriend(user, friends) {
  const userFriend = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends[i].length; j++) {
      if (friends[i].includes(user) && friends[i][j] !== user)
        userFriend.push(friends[i][j]);
    }
  }
  return userFriend;
}

function getAllName(friends) {
  const allNameSet = new Set(friends.flat());
  return Array.from(allNameSet);
}

function findNoFriend(user, friends, userFriend) {
  const allName = getAllName(friends);
  return allName.filter((name) => name !== user && !userFriend.includes(name));
}

function calculateNoFriendScore(friends, noFriend, candidateObj) {
  for (let i = 0; i < noFriend.length; i++) {
    let inclusionCounter = 0;
    for (let j = 0; j < friends.length; j++) {
      if (friends[j].includes(noFriend[i])) {
        inclusionCounter++;
      }
    }
    candidateObj[noFriend[i]] = inclusionCounter * 10;
  }
}

function calculateVisitorScore(visitors, userFriend, candidateObj) {
  const numberOfVisit = {};
  const removeFriend = visitors.filter(
    (visitor) => !userFriend.includes(visitor)
  );
  removeFriend.map((member) => {
    if (numberOfVisit[member]) numberOfVisit[member] += 1;
    else numberOfVisit[member] = 1;
  });
  for (let newCandidate in numberOfVisit) {
    if (candidateObj[newCandidate])
      candidateObj[newCandidate] += numberOfVisit[newCandidate];
    else candidateObj[newCandidate] = numberOfVisit[newCandidate];
  }
}

function sortCandidate(candidateObj) {
  return Object.entries(candidateObj).sort((a, b) => {
    if (a[1] === b[1]) a[0] - b[0];
    else b[1] - a[1];
  });
}

function getFiveCandidate(sortedCandidate) {
  return sortedCandidate.length > 5
    ? sortedCandidate.splice(0, 5)
    : sortedCandidate;
}

module.exports = problem7;
