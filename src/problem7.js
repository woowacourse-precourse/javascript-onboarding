function problem7(user, friends, visitors) {
  let answer = [];
  let algorithm = {};
  algorithm.userName = user;
  algorithm.friendArr = [user];
  algorithm.friendRel = friends;
  algorithm.visitorRel = visitors;
  algorithm.recommendName = [];
  algorithm.recommendScore = [];

  algorithm.friendArr.push(findFriendAndMe(algorithm));
  algorithmFunc(algorithm);

  answer = pickFive(algorithm);

  return answer;
}

function findFriendAndMe(obj) {
  let friendAndMe = obj.friendArr;
  const friendRel = obj.friendRel;
  const user = obj.userName;

  for (let index = 0; index < friendRel.length; index++) {
    if (friendRel[index][0] === user) {
      friendAndMe.push(friendRel[index][1]);
    } else if (friendRel[index][1] === user) {
      friendAndMe.push(friendRel[index][0]);
    }
  }
  return friendAndMe;
}

function algorithmFunc(obj) {
  const friendAndMe = obj.friendArr;
  const friend = obj.friendRel;
  const visitor = obj.visitorRel;

  for (let index = 0; index < friend.length; index++) {
    // friendAndMe.push(friends[index][0]);
    let haveFriendO = friendAndMe.indexOf(friend[index][0]) > -1;
    let haveFriendT = friendAndMe.indexOf(friend[index][1]) > -1;

    if (haveFriendO && haveFriendT) {
      continue;
    } else if (haveFriendO && !haveFriendT) {
      isAlready(obj, index, 1, 10);
    } else if (!haveFriendO && haveFriendT) {
      isAlready(obj, index, 0, 10);
    } else if (!haveFriendO && !haveFriendT) {
      continue;
    }
  }

  for (index = 0; index < visitor.length; index++) {
    let haveFriend = friendAndMe.indexOf(visitor[index]) > -1;

    if(haveFriend){
      continue;
    }
    isAlready(obj, index, -1, 1);
  }
  return true;
}

function isAlready(obj, index, num, score) {
  let name;
  console.log("score은" + score);
  if (score === 1) {
    name = obj.visitorRel[index];
  } else if (score === 10) {
    name = obj.friendRel[index][num];
  }

  let dupIndx = obj.recommendName.indexOf(name);
  if (dupIndx > -1 && name.length === obj.recommendName[dupIndx].length) {
    obj.recommendScore[dupIndx] += score;
    return true;
  }
  obj.recommendName.push(name);
  obj.recommendScore.push(score);
  return true;
}

function pickFive(obj) {
  const name = obj.recommendName;
  const score = obj.recommendScore;
  const set = new Set(score);
  let tmpScore = [...set];
  let returnName = [];

  while (tmpScore.length != 0) {
    let tmpName = [];
    let curMax = Math.max(...tmpScore);
    tmpScore = tmpScore.filter(function (item) {
      return item !== curMax;
    });
    for (let m = 0; m < score.length; m++) {
      if (score[m] === curMax) {
        tmpName.push(name[m]);
      }
    }
    //동일한 알고리즘 점수를 가진 사람들끼리 오름차순 정렬된 배열 만들어짐
    returnName.push(tmpName.sort());
  }

  returnName = returnName.flat();
  if (returnName.length > 5) {
    return returnName.slice(0, 6);
  }
  return returnName;
}

module.exports = problem7;