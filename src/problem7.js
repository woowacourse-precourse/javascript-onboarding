function problem7(user, friends, visitors) {
  let answer = [];
  let algorithm = {};
  algorithm.userName = user;
  algorithm.friendArr = [user];
  algorithm.friendRel = friends;
  algorithm.visitorRel = visitors;
  algorithm.recommendName = [];
  algorithm.recommendScore = [];

  algorithm.friendArr = findFriendAndMe(algorithm);
  algorithm = friendAlgorithm(algorithm);
  algorithm = visitorAlgorithm(algorithm, visitors);

  answer = pickFive(algorithm);

  return answer;
}

function findFriendAndMe(obj) {
  let friendAndMe = obj.friendArr;
  const friendRel = algorithm.friendRel;

  for (let i = 0; i < friendRel.length; i++) {
    if (friendRel[index][0] === user) {
      friendAndMe.push(friendRel[index][1]);
    } else if (friendRel[index][1] === user) {
      friendAndMe.push(friendRel[index][0]);
    }
    return friendAndMe;
  }
}

function friendAlgorithm(obj, friends) {
  const friendAndMe = obj.friendArr;

  for (let index = 0; index < friends.length; index++) {
    // friendAndMe.push(friends[index][0]);
    let haveFriendO = !(friendAndMe.indexOf(friends[index][0]));
    let haveFriendT = !(friendAndMe.indexOf(friends[index][1]));

    if (haveFriendO && haveFriendT) {
      continue;
    } else if (haveFriendO && !haveFriendT) {
      isAlready(obj, index, 1);
    } else if (!haveFriendO && haveFriendT) {
      isAlready(obj, index, 0);
    } else if (!haveFriendO && !haveFriendT) {
      continue;
    }

    // let overlapIdx = algorithmName.indexOf(friends[index][1]);
    // if (friendAndMe.indexOf(friends[index][1]) != -1) {
    //   continue;
    // } else if (overlapIdx != -1 && friends[index][1].length === algorithmName[overlapIdx].length) {
    //   algorithmNum[overlapIdx] += 10;
    //   continue;
    // }
    // algorithmName.push(friends[index][1]);
    // algorithmNum.push(10);
  //}
  return obj;
}

function isAlready(obj, index, num){
  let name = obj.friendRel[index][num];
  let dupIndx = obj.recommendName.indexOf(name);
  if(dupIndx > -1 && name.length === obj.recommendName[dupIndx]){
    obj.recommendScore[dupIndx] += 10;
    return obj;
  } 
  obj.recommendName.push(name);
  obj.recommendScore.push(10);
}

function visitorAlgorithm(obj, visitors) {
  for (index = 0; index < visitors.length; index++) {
    let overlapIdx = obj.nameArr.indexOf(visitors[index]);

    if (obj.curFriend.indexOf(visitors[index]) != -1) {
      continue;
    } else if (overlapIdx != -1 && visitors[index].length === obj.nameArr[overlapIdx].length) {
      obj.scoreArr[overlapIdx] += 1;
      continue;
    }
    obj.nameArr.push(visitors[index]);
    obj.scoreArr.push(1);
  }

  return obj;
}

function pickFive(obj) {
  const name = obj.nameArr;
  const score = obj.scoreArr;
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