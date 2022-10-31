const RETURN = {
  invalidInput: -1,
};

const VALIDITY = {
  stringType: 'string',
  english: /^[a-z]+$/,
  minLengthOfId: 1,
  maxLengthOfId: 30,
  minLengthOfFriends: 1,
  maxLengthOfFriends: 10000,
  minLengthOfUserArray: 1,
  maxLengthOfUserArray: 2,
  minLengthOfVisitor: 0,
  maxLengthOfVisitor: 10000,
};

const ARRAY = {
  vertex1: 0,
  vertex2: 1,
};

const Score = {
  friend: 10,
  visit: 1,
};

function problem7(user, friends, visitors) {
  if (!isValidInput(user, friends, visitors)) {
    return RETURN.invalidInput;
  }

  return solution(user, friends, visitors);
}

function isValidInput(user, friends, visitors) {
  if (!checkUser(user)) {
    return false;
  }

  if (!checkFriends(friends)) {
    return false;
  }

  if (!checkVisitors(visitors)) {
    return false;
  }

  return true;
}

function checkUser(user) {
  if (!checkValue(user)) {
    return false;
  }

  if (!checkType(typeof user, VALIDITY.stringType)) {
    return false;
  }

  if (
    !checkLength(user.length, VALIDITY.minLengthOfId, VALIDITY.maxLengthOfId)
  ) {
    return false;
  }

  if (!checkAlphabetWithLowercase(user)) {
    return false;
  }

  return true;
}

function checkFriends(friends) {
  if (!checkValue(friends)) {
    return false;
  }

  if (!checkArray(friends)) {
    return false;
  }

  if (
    !checkArrayLength(
      friends.length,
      VALIDITY.minLengthOfFriends,
      VALIDITY.maxLengthOfFriends,
    )
  ) {
    return false;
  }

  if (!checkFriendsElementLength(friends)) {
    return false;
  }

  if (!checkFriendsElementOfElement(friends)) {
    return false;
  }

  return true;
}

function checkVisitors(visitors) {
  if (!checkValue(visitors)) {
    return false;
  }

  if (!checkArray(visitors)) {
    return false;
  }

  if (
    !checkArrayLength(
      visitors.length,
      VALIDITY.minLengthOfVisitor,
      VALIDITY.maxLengthOfVisitor,
    )
  ) {
    return false;
  }

  if (!checkVisitorsElement(visitors)) {
    return false;
  }

  return true;
}

function checkValue(value) {
  return Boolean(value);
}

function checkType(type, checker) {
  return type === checker;
}

function checkLength(length, min, max) {
  return min <= length && length <= max;
}

function checkAlphabetWithLowercase(alphabet) {
  return VALIDITY.english.test(alphabet);
}

function checkArray(arr) {
  return Array.isArray(arr);
}

function checkArrayLength(length, min, max) {
  return min <= length && length <= max;
}

function checkFriendsElementLength(friends) {
  return friends.every(element =>
    checkArrayLength(
      element.length,
      VALIDITY.minLengthOfUserArray,
      VALIDITY.maxLengthOfUserArray,
    ),
  );
}

function checkFriendsElementOfElement(friends) {
  return friends.every(arr => arr.every(element => checkUser(element)));
}

function checkVisitorsElement(visitors) {
  return visitors.every(element => checkUser(element));
}

function solution(user, friends, visitors) {
  const graph = getGraph(user, friends);
  const plainScoreBoard = getScoreBoard(friends, visitors);
  const gradedFriend = gradeFriendsScore(user, graph, [...plainScoreBoard]);
  const gradedVisitor = gradeVisitorsScore(visitors, [...gradedFriend]);
  const refinedBoard = refineBoard(gradedVisitor, user, graph);
  const friendList = getNewFriendGroup(refinedBoard);

  return friendList;
}

function getGraph(user, friends) {
  const graph = {};

  addVertex(graph, user);
  friends.forEach(arr => buildRelationship(graph, arr));

  return graph;
}

function addVertex(graph, vertex) {
  if (graph[vertex]) {
    return;
  }
  graph[vertex] = [];
}

function buildRelationship(graph, arr) {
  arr.forEach(v => addVertex(graph, v));
  addEdge(graph, arr[ARRAY.vertex1], arr[ARRAY.vertex2]);
}

function addEdge(graph, vertex1, vertex2) {
  if (!graph[vertex1]) {
    addVertex(graph, vertex1);
  }

  if (!graph[vertex2]) {
    addVertex(graph, vertex2);
  }

  graph[vertex1].push(vertex2);
  graph[vertex2].push(vertex1);
}

function getScoreBoard(friends, visitors) {
  const friendBoard = addFriendsInBoard(friends);
  const visitorBoard = addVisitorsInBoard(visitors);
  const scoreBoard = removeDuplicateUser(friendBoard, visitorBoard);

  return scoreBoard;
}

function addFriendsInBoard(friends) {
  let friendBoard = [];

  friends.forEach(arr => {
    const Board = arr.map(addUserInBoard);
    friendBoard = friendBoard.concat(Board);
  });

  return friendBoard;
}

function addVisitorsInBoard(visitors) {
  return visitors.map(addUserInBoard);
}

function addUserInBoard(v) {
  return { id: v, score: 0 };
}

function removeDuplicateUser(friendBoard, visitorBoard) {
  return friendBoard.concat(visitorBoard).filter(checkUniqueElementId);
}

function checkUniqueElementId(v1, i, arr) {
  return (
    arr.findIndex(v2 => {
      return v1.id === v2.id;
    }) === i
  );
}

function gradeFriendsScore(user, graph, scoreBoard) {
  graph[user].forEach(accessFriendOfFriendTable, {
    graph: graph,
    scoreBoard: scoreBoard,
  });

  return [...scoreBoard];
}

function accessFriendOfFriendTable(friend) {
  this.graph[friend].forEach(gradeScore, {
    scoreBoard: this.scoreBoard,
    score: Score.friend,
  });
}

function gradeScore(v) {
  const friend = this.scoreBoard[findId(this.scoreBoard, v)];
  friend.score += this.score;
}

function findId(scoreBoard, v) {
  return scoreBoard.findIndex(element => element.id === v);
}

function gradeVisitorsScore(visitors, scoreBoard) {
  visitors.forEach(gradeScore, {
    scoreBoard: scoreBoard,
    score: Score.visit,
  });

  return [...scoreBoard];
}

function refineBoard(scoreBoard, user, graph) {
  const refinedBoard = removeUserAndFriendId(scoreBoard, user, graph);
  const sortedBoard = sortScoreBoard(refinedBoard);

  return sortedBoard;
}

function removeUserAndFriendId(scoreBoard, user, graph) {
  return scoreBoard.filter(
    v => !isUser(v.id, user) && !isFriend(v.id, graph[user]),
  );
}

function isUser(id, user) {
  return id === user;
}

function isFriend(id, friends) {
  return friends.includes(id);
}

function sortScoreBoard(scoreBoard) {
  sortInAlphabeticalOrder(scoreBoard);
  sortInDescendingOrder(scoreBoard);
  return scoreBoard;
}

function sortInAlphabeticalOrder(scoreBoard) {
  scoreBoard.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    }

    if (a.id > b.id) {
      return 1;
    }

    return 0;
  });
}

function sortInDescendingOrder(scoreBoard) {
  scoreBoard.sort((a, b) => b.score - a.score);
}

function getNewFriendGroup(sortedBoard) {
  return sortedBoard
    .filter((v, i) => checkFiveFriends(i) && checkScore(v.score))
    .map(v => v.id);
}

function checkFiveFriends(i) {
  return i < 5;
}

function checkScore(score) {
  return score > 0;
}

module.exports = problem7;
