/**
 * 1. make adjacency list of users and their friends
 * 2. make list of users
 * 3. make map of users and their scores
 * 4. add score of 10 for each friend of target
 * 5. add score of 1 for each visitor of target
 * 6. filter out target, target's friends, and users with 0 score
 * 7. sort by score and name and return top 5 users
 * @param {string} target 
 * @param {string[][]} friends 
 * @param {string[]} targetVisitors 
 * @returns 
 */

function problem7(target, friends, targetVisitors) {
  const userMap = initAdjList(friends);
  const userList = [...userMap.keys()];

  const usersScoreMap = new Map(userList.map((x) => [x, 0]));
  const targetFriends = userMap.get(target) || new Set();

  userMap.forEach((userFriends, user) => {
    usersScoreMap.set(user, intersectNum(targetFriends, userFriends) * 10);
  });
  targetVisitors.forEach((visitor) => {
    usersScoreMap.set(visitor, (usersScoreMap.get(visitor) || 0) + 1);
  });

  // filter out target, target's friends, and users with 0 score
  const filterOption = ([name, score]) => name !== target && !targetFriends.has(name) && score > 0;

  // entries: [[name,score], ...]
  return ([...usersScoreMap.entries()]
    .filter(filterOption)
    .slice(0, 5)
    .sort(sortByScoreAndName)
    .map(([name, _]) => name));
}

const sortByScoreAndName = ([n1, s1], [n2, s2]) => s2 - s1 || n1.localeCompare(n2);

// get intersection size of two sets
const intersectNum = (a, b) => [...a].filter((x) => b.has(x)).length || 0;

// userMap: { user : Set(friends) }
const initAdjList = (friends) => {
  const adjList = new Map();

  friends.forEach(([a, b]) => {
    adjList.set(a, (adjList.get(a) || new Set()).add(b));
    adjList.set(b, (adjList.get(b) || new Set()).add(a));
  });

  return adjList;
};

module.exports = problem7;
