const copyArray = targetArray => {
  return [...targetArray];
};

const each = (iterable, func) => {
  for (const iterator of iterable) {
    func(iterator);
  }

  return;
};

const map = (array, func) => {
  const resultArray = [];

  each(array, element => resultArray.push(func(element)));

  return resultArray;
};

const getLength = element => {
  if (!element.length) {
    return 0;
  }

  return element.length;
};

const checkRangeException = (targetLength, min, max) => {
  if (targetLength < min || max < targetLength) {
    throw new RangeError(
      `Only natural numbers greater than or equal to ${min} and less than or equal to ${max}.`
    );
  }

  return false;
};

const getAlreadyFriendArray = (friedArray, targetUser) => {
  const alreadyFriendSet = new Set();
  const copiedFriedArray = copyArray(friedArray);

  each(copiedFriedArray, ([idA, idB]) => {
    checkRangeException(getLength(idA), 1, 30);
    checkRangeException(getLength(idB), 1, 30);

    if (idA === targetUser) {
      alreadyFriendSet.add(idB);
    }

    if (idB === targetUser) {
      alreadyFriendSet.add(idA);
    }
  });

  return copyArray(alreadyFriendSet);
};

const excludeFriendsFunc = (friendsArray, alreadyFriendList, user) => {
  const resultArray = [];

  each(friendsArray, ([idA, idB]) => {
    each(alreadyFriendList, alreadyFriend => {
      if (idA === alreadyFriend) {
        resultArray.push(idB);
      }

      if (idB === alreadyFriend) {
        resultArray.push(idA);
      }
    });
  });

  return resultArray.filter(friend => friend !== user);
};

const excludeVisitorsFunc = (visitorsArray, alreadyFriendList) => {
  const copiedVisitors = copyArray(visitorsArray);
  const copiedAlreadyFriendList = copyArray(alreadyFriendList);

  const recursiveTour = (visitorsArray, alreadyFriendList, currentIndex) => {
    if (currentIndex === getLength(alreadyFriendList)) {
      return visitorsArray;
    }

    const nextIndex = currentIndex + 1;
    const newVisitorsArray = visitorsArray.filter(visitor => {
      return visitor !== alreadyFriendList[currentIndex];
    });

    return recursiveTour(newVisitorsArray, alreadyFriendList, nextIndex);
  };

  return recursiveTour(copiedVisitors, copiedAlreadyFriendList, 0);
};

const extractAlreadyFriend = (user, frieds, alreadyFriendList, behaviorFunc) => {
  const copiedFrieds = copyArray(frieds);
  const copiedAlreadyFriendList = copyArray(alreadyFriendList);

  return behaviorFunc(copiedFrieds, copiedAlreadyFriendList, user);
};

const calculateFriendScore = (userListArry, score = 0) => {
  const userListMap = new Map();
  const copiedUserListArry = copyArray(userListArry);

  each(copiedUserListArry, userList => {
    if (!userListMap.has(userList)) {
      userListMap.set(userList, 0);
    }

    userListMap.set(userList, userListMap.get(userList) + score);
  });

  return copyArray(userListMap);
};

const calculateRank = scoreInfoArray => {
  const scoreInfoMap = new Map();
  const copiedScoreInfoArray = copyArray(scoreInfoArray);

  each(copiedScoreInfoArray, ([userId, score]) => {
    if (!scoreInfoMap.has(userId)) {
      scoreInfoMap.set(userId, 0);
    }

    scoreInfoMap.set(userId, scoreInfoMap.get(userId) + score);
  });

  return copyArray(scoreInfoMap);
};

const sortTo = targetArray => {
  const copiedTargetArray = copyArray(targetArray);

  const compareByScore = (firstScore, secondScroe) => {
    if (firstScore > secondScroe) {
      return -1;
    }

    if (firstScore < secondScroe) {
      return 1;
    }

    return 0;
  };

  const compareByUserName = (firstId, secodeId) => {
    if (firstId < secodeId) {
      return -1;
    }

    if (firstId > secodeId) {
      return 1;
    }

    return 0;
  };

  const sortedArray = copiedTargetArray.sort(([firstId, firstScore], [secodeId, secondScroe]) => {
    const sortIndex = compareByScore(firstScore, secondScroe);

    // 추천 점수가 같은 경우는 이름순으로 정렬한다.
    if (sortIndex === 0) {
      return compareByUserName(firstId, secodeId);
    }

    return sortIndex;
  });

  return sortedArray;
};

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
