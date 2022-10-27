const relations = {};
const score = {};

function makeRelations(friends, me) {
  friends.forEach((friend) => {
    if (friend[0] in relations) {
      if (friend[1] !== me) {
        relations[friend[0]].push(friend[1]);
      }
    } else {
      relations[friend[0]] = [friend[1]];
    }
    if (friend[1] in relations && friend[0] !== me) {
      if (friend[0] !== me) {
        relations[friend[1]].push(friend[0]);
      }
    } else {
      relations[friend[1]] = [friend[0]];
    }
  });
}

function problem7(user, friends, visitors) {
  const answer = [];
  makeRelations(friends, user);

  return answer;
}

module.exports = problem7;
