function problem7(user, friends, visitors) {
  
  const friendState = {};
  const pointState = {};

  friends.forEach((friendArr) => {
    const [a, b] = friendArr;

    if (a in friendState) {
      friendState[a].push(b);
    } else {
      friendState[a] = [b];
    }

    if (b in friendState) {
      friendState[b].push(a);
    } else {
      friendState[b] = [a];
    }

    pointState[a] = 0;
    pointState[b] = 0;

  });
 
  friendState[user].forEach((friendOfUser) => {
    friendState[friendOfUser].forEach((el) => {
      pointState[el] += 10;
    });
  });

  visitors.forEach((visitor) => {
    if (visitor in pointState) {
      pointState[visitor] += 1;
    } else {
      pointState[visitor] = 1;
    }
  });
  
  delete pointState[user];

  friendState[user].forEach((friendOfUser) => {
    delete pointState[friendOfUser];
  });

  Object.keys(pointState).forEach((key) => {
    if (pointState[key] === 0) delete pointState[key];
  });

  const result = Object.entries(pointState)
    .sort((a, b) => {
      if (a[1] === b[1]) {
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        if (a[0] === b[0]) return 0;
      }
      return b[1] - a[1];
    })
    .map((el) => el[0]);

  return result;
}

module.exports = problem7;
