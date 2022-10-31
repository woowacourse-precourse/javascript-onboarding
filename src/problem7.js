function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function getUserFriends(user, friends) {
  let friendArr = [user];

  friends.forEach((el) => {
    if (el[0] === user) friendArr.push(el[1]);
    else if (el[1] === user) friendArr.push(el[0]);
  });

  return friendArr;
}

module.exports = problem7;
