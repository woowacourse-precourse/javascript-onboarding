function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function makeFriendsTable(friends) {
  const friendTable = {};
  for (let [friendA, friendB] of friends) {
    addFriendToTable(friendTable, friendA, friendB);
  }

  return friendTable;
}

function addFriendToTable(friendTable, friendA, friendB) {
  friendTable[friendA]
      ? friendTable[friendA].add(friendB)
      : (friendTable[friendA] = new Set([friendB]));

  friendTable[friendB]
      ? friendTable[friendB].add(friendA)
      : (friendTable[friendB] = new Set([friendA]));
}

function makeScoreBoard(username, friendTable, visitors) {
  const scoreBoardFromSameFriends = makeScoreBoardFromSameFriendsWith(
      username,
      friendTable,
  );
  const scoreBoardFromVisitors = makeScoreBoardFrom(visitors);

  return combineScoreBoard(scoreBoardFromSameFriends, scoreBoardFromVisitors);
}

function makeScoreBoardFromSameFriendsWith(username, friendTable) {
  const scoreBoard = {};
  for (let candidateName of Object.keys(friendTable)) {
    scoreBoard[candidateName] = calcScoreFromSameFriends(
        friendTable[username],
        friendTable[candidateName],
    );
  }

  return scoreBoard;
}

function calcScoreFromSameFriends(usersFriends, candidatesFriends) {
  const commonFriends = setIntersection(usersFriends, candidatesFriends);
  return commonFriends.size * 10;
}

function makeScoreBoardFrom(visitors) {
  const scoreBoard = {};
  for (let visitor of visitors) {
    if (scoreBoard[visitor]) {
      scoreBoard[visitor] += 1;
    } else {
      scoreBoard[visitor] = 1;
    }
  }

  return scoreBoard;
}

function combineScoreBoard(board1, board2) {
  const scoreBoard = { ...board1 };

  for (let name of Object.keys(board2)) {
    scoreBoard[name]
        ? (scoreBoard[name] += board2[name])
        : (scoreBoard[name] = board2[name]);
  }

  return scoreBoard;
}

function setIntersection(setA, setB) {
  const result = new Set();
  for (const value of setA) {
    if (setB.has(value)) {
      result.add(value);
    }
  }

  return result;
}

module.exports = problem7;
