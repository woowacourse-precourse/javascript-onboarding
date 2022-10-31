function problem7(user, friends, visitors) {
  const userFriend = findFriend(user, friends);
  const noFriend = findNoFriend(user, friends, userFriend);
  const candidateObj = {};
  calculateNoFriendScore(friends, noFriend, candidateObj);
  calculateVisitorScore(visitors, userFriend, candidateObj);
  const sortedCandidate = sortCandidate(candidateObj);
  const fiveCandidate = getFiveCandidate(sortedCandidate);
  const withoutZeroScore = isScoreOverZero(fiveCandidate);
  const answer = getAnswer(withoutZeroScore);
  return answer;
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
  const sortedName = sortCandidateByName(candidateObj);
  return sortCandidateByScore(sortedName);
}

function sortCandidateByName(candidateObj) {
  const objToArr = Object.entries(candidateObj);
  return objToArr.sort((a, b) => a[0].localeCompare(b[0]));
}

function sortCandidateByScore(sortedName) {
  return sortedName.sort((a, b) => b[1] - a[1]);
}

function getFiveCandidate(sortedName) {
  return sortedName.length > 5 ? sortedName.splice(0, 5) : sortedName;
}

function isScoreOverZero(fiveCandidate) {
  return Object.values(fiveCandidate).filter((value) => value !== 0);
}

function getAnswer(withoutZeroScore) {
  const answer = [];
  for (let i = 0; i < withoutZeroScore.length; i++) {
    answer.push(withoutZeroScore[i][0]);
  }
  return answer;
}
module.exports = problem7;
