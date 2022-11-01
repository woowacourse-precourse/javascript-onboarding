const FRIEND_POINT = 10;
const VISITOR_POINT = 1;

function problem7(user, friends, visitors) {
  const friendsGraph = makeFriendsGraph(friends);
  const twoDistanceFriends = getTwoDistanceFriends(user, friendsGraph);
  const pointMap = {};

  addFriendPoint(pointMap, friendsGraph, user, twoDistanceFriends);
  addVisitorPoint(pointMap, friendsGraph, user, visitors);

  const pointEntries = Object.entries(pointMap);
  pointEntries.sort(comparePoint);

  return pointEntries.slice(0, 5).map(([name]) => name);
}

function makeFriendsGraph(friends) {
  const graph = {};

  friends.forEach(([a, b]) => {
    if (!graph[a]) graph[a] = [];
    graph[a].push(b);
    if (!graph[b]) graph[b] = [];
    graph[b].push(a);
  });

  return graph;
}

function getTwoDistanceFriends(start, graph) {
  const visited = new Set();
  const queue = new Queue();
  const result = [];

  queue.enqueue([start, 0]);
  visited.add(start);

  while (!queue.isEmpty() && queue.head.value[1] < 3) {
    const [name, distance] = queue.dequeue();
    if (distance === 2) result.push(name);

    const friends = graph[name] || [];
    friends.forEach((friend) => {
      if (!visited.has(friend)) {
        queue.enqueue([friend, distance + 1]);
        visited.add(friend);
      }
    });
  }

  return result;
}

class Node {
  constructor(value) {
    this.value = value || null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;
  }

  dequeue() {
    if (this.head === null) return;

    const deletedValue = this.head.value;

    if (this.head.next === null) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.size -= 1;

    return deletedValue;
  }

  isEmpty() {
    return this.size === 0;
  }
}

function getCommonFriendCount(friendsA, friendsB) {
  const set = new Set(friendsA);
  const commonFriends = friendsB.filter((friend) => set.has(friend));
  return commonFriends.length;
}

function addFriendPoint(pointMap, friendsGraph, user, twoDistanceFriends) {
  const userFriends = friendsGraph[user] || [];

  twoDistanceFriends.forEach((friend) => {
    const friendFriends = friendsGraph[friend];
    const commonFriendCount = getCommonFriendCount(userFriends, friendFriends);

    if (commonFriendCount) {
      pointMap[friend] = FRIEND_POINT * commonFriendCount;
    }
  });
}

function addVisitorPoint(pointMap, friendsGraph, user, visitors) {
  const userFriendSet = new Set(friendsGraph[user]);

  visitors.forEach((visitor) => {
    const isUserFriend = userFriendSet.has(visitor);
    if (!isUserFriend) {
      if (!pointMap[visitor]) pointMap[visitor] = 0;
      pointMap[visitor] += VISITOR_POINT;
    }
  });
}

function comparePoint([nameA, pointA], [nameB, pointB]) {
  if (pointA === pointB) {
    return nameA.localeCompare(nameB);
  }
  return pointB - pointA;
}

module.exports = problem7;
