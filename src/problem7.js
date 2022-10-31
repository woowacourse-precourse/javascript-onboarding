const FRIEND_POINT = 10;
const VISITOR_POINT = 1;

function problem7(user, friends, visitors) {
  const friendsGraph = makeFriendsGraph(friends);
  const twoDistanceFriends = getTwoDistanceFriends(user, friendsGraph);
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

module.exports = problem7;
