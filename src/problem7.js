const objectAddArray = (object, key, value) => {
  if (Object.keys(object).includes(key)) {
    object[key].push(value);
  } else {
    object[key] = [value];
  }
};

const objectAddNumber = (object, key, value) => {
  if (Object.keys(object).includes(key)) {
    object[key] += value;
  } else {
    object[key] = value;
  }
};

function problem7(user, friends, visitors) {
  const recommend = {};
  const friendGraph = {};
  for (let friend of friends) {
    objectAddArray(friendGraph, friend[0], friend[1]);
    objectAddArray(friendGraph, friend[1], friend[0]);
  }

  for (let visitor of visitors) {
    if (friendGraph[user].includes(visitor)) continue;
    objectAddNumber(recommend, visitor, 1);
  }

  for (let j of friendGraph[user]) {
    for (let i of friendGraph[j]) {
      console.log(i, friendGraph[user]);
      if (i === user || friendGraph[user].includes(i)) continue;
      objectAddNumber(recommend, i, 10);
    }
  }

  const recommendArray = [];
  for (let i in recommend) {
    recommendArray.push([i, recommend[i]]);
  }

  recommendArray.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    } else return b[1] - a[1];
  });

  return recommendArray.map((v) => v[0]);
}

module.exports = problem7;
