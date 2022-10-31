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

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
