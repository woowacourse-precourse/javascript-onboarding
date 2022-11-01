function problem7(user, friends, visitors) {
  const score = {};
  const userFriends = findUserFriends(user, friends);
  const mutualFriends = findMutualFriends(user, friends, userFriends);
  mutualFriendsSum(userFriends, mutualFriends, score);
  visitorsSum(userFriends, visitors, score);
  totalSum(score);
  
  const mutualArr = [];
  for(let friend in score) {
    mutualArr.push(score[friend]);
  }

  mutualArr.sort((a, b) => {
    return b[3] - a[3];
  });

  const answer = [];
  for(let i = 0; i < mutualArr.length; i++) {
    answer.push(mutualArr[i][0]);
    if(5 <= answer.length) break;
  }

  return answer;
}
module.exports = problem7;


function findUserFriends(user, friends) {
  const mutualFriends = [];
  for(let i = 0; i < friends.length; i++) {
    if(friends[i].includes(user)) {
      const userIndex = friends[i].indexOf(user);
      const friendsIndex = userIndex ? 0 : 1;
      mutualFriends.push(friends[i][friendsIndex]);
    }
  }
  return mutualFriends;
}


function findMutualFriends(user, friends, userFriends) {
  const mutualArr = [];
  for(let i = 0; i < friends.length; i++) {
    for(let j = 0; j < userFriends.length; j++) {
      if(friends[i].includes(userFriends[j]) && friends[i].includes(user) === false) {
        mutualArr.push(friends[i]);
      }
    }
  }
  return mutualArr;
}


function mutualFriendsSum(userFriends, mutualFriends, score) {
  for(let i = 0; i < userFriends.length; i++) {
    const userFriend = userFriends[i];
    for(let j = 0; j < mutualFriends.length; j++) {
      mutualFriends[j].forEach(el => {
        if(userFriend === el) {
          const userFriendIdx = mutualFriends[j].indexOf(userFriend);
          mutualFriends[j].splice(userFriendIdx, 1);
        }
      });
    }
  }
  mutualFriends = mutualFriends.join(',').split(',');
  mutualFriends.forEach(el => {
    if(score[el] === undefined) {
      score[el] = [el, 10, 0, 0];
    } else if(score[el][0] === el) {
      score[el][1] += 10;
    }
  });

  return score;
}


function visitorsSum(userFriends, visitors, score) {
  for(let i = 0; i < userFriends.length; i++) {
    const userFriend = userFriends[i];
    for(let j = 0; j < visitors.length; j++) {
      if(userFriend === visitors[j]) {
        const userFriendIdx = visitors.indexOf(userFriend);
        visitors.splice(userFriendIdx, 1);
      }
    }
  }

  visitors.forEach(el => {
    if(score[el] === undefined) {
      score[el] = [el, 0, 1, 0];
    } else if(score[el][0] === el) {
      score[el][2] += 1;
    }
  });

  return score;
}


function totalSum(score) {
  for(let friend in score) {
    const mutualScore = score[friend][1];
    const visitorScore = score[friend][2];
    const totalSum = mutualScore + visitorScore;
    score[friend][3] = totalSum;
  }
  return score;
}