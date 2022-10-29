function problem7(user, friends, visitors) {
  var answer;
  let score = new Map();

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      friends[i].map((ele) => {
        return score.set(ele, 0);
      });
    } 
  }
  return answer;
}

module.exports = problem7;
