function problem7(user, friends, visitors) {
  var answer;
  let list = [];

  friends.forEach((pair) => {
    if (pair.includes(user)) {
      list.push(pair[1 - pair.indexOf(user)]);
    }
  });

  

  return answer;
}

module.exports = problem7;
