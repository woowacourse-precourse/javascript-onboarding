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

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
