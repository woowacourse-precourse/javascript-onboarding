const relations = {};
const score = {};

function getSortedScoreArr() {
  const scoreArr = Object.entries(score);
  scoreArr.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;

    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  });
  return scoreArr;
}

function calculateScore(user, visitors) {
  relations[user].forEach((friend) => {
    if (friend in relations) {
      relations[friend].forEach((f) => {
        if (f in score) {
          score[f] += 10;
        } else {
          score[f] = 10;
        }
      });
    }
  });
  visitors.some((visitor) => {
    if (relations[user].includes(visitor)) return 0;
    if (visitor in score) {
      score[visitor] += 1;
    } else {
      score[visitor] = 1;
    }
  });
}

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
  calculateScore(user, visitors);
  const sortedScore = getSortedScoreArr();
  sortedScore.some((each, i) => {
    if (i > 4) return true;
    answer.push(each[0]);
  });
  return answer;
}

module.exports = problem7;
