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
  minLengthOfVisitor: 1,
  maxLengthOfVisitor: 10000,
};

const ARRAY = {
  vertex1: 0,
  vertex2: 1,
};

const Score = {
  friendOfFriend: 10,
  visit: 1,
};

function problem7(user, friends, visitors) {
  if (!isValidInput(user, friends, visitors)) {
    console.log('무효한 인풋!');
    return RETURN.invalidInput;
  }

  return solution(user, friends, visitors);
}

function solution(user, friends, visitors) {
  const graph = getGraph(user, friends);
  const scoreBoard = getScoreBoard(friends, visitors);
  gradeFriendsScore(user, graph, scoreBoard);
  gradeVisitorsScore(visitors, scoreBoard);
  const refinedBoard = refineBoard(scoreBoard, user, graph);
  const friendList = getNewFriendsList(refinedBoard);

  return friendList;
}

function addVertex(graph, vertex) {
  if (graph[vertex]) {
    return;
  }
  graph[vertex] = [];
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

function getGraph(user, friends) {
  const graph = {};

  addVertex(graph, user);
  friends.forEach(arr => bulidRelationship(graph, arr));

  return graph;
}

function bulidRelationship(graph, arr) {
  arr.forEach(v => addVertex(graph, v));
  addEdge(graph, arr[ARRAY.vertex1], arr[ARRAY.vertex2]);
}

function getScoreBoard(friends, visitors) {
  const scoreBoard = [];

  addFriendsInBoard(scoreBoard, friends);
  addVisitorsInBoard(scoreBoard, visitors);

  return scoreBoard;
}

function addFriendsInBoard(scoreBoard, friends) {
  friends.forEach(arr => arr.forEach(v => pushObejct(scoreBoard, v)));
}

function addVisitorsInBoard(scoreBoard, visitors) {
  visitors.forEach(v => pushObejct(scoreBoard, v));
}

function pushObejct(scoreBoard, v) {
  if (checkValueInScoreBoard(scoreBoard, v)) {
    return;
  }

  scoreBoard.push({ id: v, score: 0 });
}

function checkValueInScoreBoard(scoreBoard, v) {
  return scoreBoard.some(prop => prop.id === v);
}

function gradeFriendsScore(user, graph, scoreBoard) {
  graph[user].forEach(v =>
    graph[v].forEach(v =>
      addScore(scoreBoard[findId(scoreBoard, v)], Score.friendOfFriend),
    ),
  );
}

function addScore(friend, score) {
  friend.score += score;
}

function findId(scoreBoard, v) {
  return scoreBoard.findIndex(element => element.id === v);
}

function gradeVisitorsScore(visitors, scoreBoard) {
  visitors.forEach(v =>
    addScore(scoreBoard[findId(scoreBoard, v)], Score.visit),
  );
}

function refineBoard(scoreBoard, user, graph) {
  const refinedBoard = removeUserAndFriendId(scoreBoard, user, graph);
  return sortScoreBoard(refinedBoard);
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
  sortInAscendingOrder(scoreBoard);
  return scoreBoard;
}

function sortInAlphabeticalOrder(scoreBoard) {
  scoreBoard.sort((x, y) => {
    if (x.id < y.id) {
      return -1;
    }
    if (x.id > y.id) {
      return 1;
    }
    return 0;
  });
}

function sortInAscendingOrder(scoreBoard) {
  scoreBoard.sort((a, b) => b.score - a.score);
}

function getNewFriendsList(sortedBoard) {
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
  if (Boolean(value) === false) console.log('checkValue', value);

  return Boolean(value);
}

function checkType(type, checker) {
  if (type !== checker) console.log('checkType', type);

  return type === checker;
}

function checkLength(length, min, max) {
  if (!(min <= length && length <= max)) console.log('checkLength', length);

  return min <= length && length <= max;
}

function checkAlphabetWithLowercase(alphabet) {
  if (!VALIDITY.english.test(alphabet))
    console.log('checkAlphabetWithLowercase', alphabet);

  return VALIDITY.english.test(alphabet);
}

function checkArray(arr) {
  if (!Array.isArray(arr)) console.log('checkArr', arr);

  return Array.isArray(arr);
}

function checkArrayLength(length, min, max) {
  if (!(min <= length && length <= max))
    console.log('checkArrayLength', length);

  return min <= length && length <= max;
}

function checkFriendsElementLength(friends) {
  if (
    !friends.every(element =>
      checkArrayLength(
        element.length,
        VALIDITY.minLengthOfUserArray,
        VALIDITY.maxLengthOfUserArray,
      ),
    )
  )
    console.log('checkFriendsElementLength', friends);

  return friends.every(element =>
    checkArrayLength(
      element.length,
      VALIDITY.minLengthOfUserArray,
      VALIDITY.maxLengthOfUserArray,
    ),
  );
}

function checkFriendsElementOfElement(friends) {
  if (
    !friends.every(arr => {
      return arr.every(element => {
        return checkUser(element);
      });
    })
  )
    console.log('checkFriendsElementOFElement', friends);

  return friends.every(arr => arr.every(element => checkUser(element)));
}

function checkVisitorsElement(visitors) {
  if (!visitors.every(element => checkUser(element)))
    console.log('checkUser', visitors);

  return visitors.every(element => checkUser(element));
}

problem7(
  'jeunghoon',
  [
    ['donut', 'fndole'],
    ['donut', 'cun'],
    ['donut', 'jeunghoon'],
    ['shakevan', 'fndole'],
    ['shakevan', 'cun'],
    ['shakevan', 'jeunghoon'],
  ],
  ['bedi', 'bedi', 'donut', 'bedi', 'shakevan'],
);

module.exports = problem7;
