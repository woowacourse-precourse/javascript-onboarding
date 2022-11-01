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

}

module.exports = problem7;
