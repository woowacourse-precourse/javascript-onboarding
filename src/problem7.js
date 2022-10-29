const RETURN = {
  invalidInput: -1,
};

const VALIDITY = {
  stringType: 'string',
  english: /^[a-z]+$/,
  minLengthOfId: 1,
  maxLengthOfId: 30,
  minLengthOfFriends: 1,
  maxLengthOfFriends: 10000,
  minLengthOfUserArray: 1,
  maxLengthOfUserArray: 2,
  minLengthOfVisitor: 1,
  maxLengthOfVisitor: 10000,
};

function problem7(user, friends, visitors) {
  if (!isValidInput(user, friends, visitors)) {
    console.log('무효한 인풋!');
    return RETURN.invalidInput;
  }
}

function isValidInput(user, friends, visitors) {
  if (!checkUser(user)) {
    return false;
  }

  if (!checkFriends(friends)) {
    return false;
  }

  if (!checkVisitors(visitors)) {
    return false;
  }

  return true;
}

function checkUser(user) {
  if (!checkValue(user)) {
    return false;
  }

  if (!checkType(typeof user, VALIDITY.stringType)) {
    return false;
  }

  if (
    !checkLength(user.length, VALIDITY.minLengthOfId, VALIDITY.maxLengthOfId)
  ) {
    return false;
  }

  if (!checkAlphabetWithLowercase(user)) {
    return false;
  }

  return true;
}

function checkFriends(friends) {
  if (!checkValue(friends)) {
    return false;
  }

  if (!checkArray(friends)) {
    return false;
  }

  if (
    !checkArrayLength(
      friends.length,
      VALIDITY.minLengthOfFriends,
      VALIDITY.maxLengthOfFriends,
    )
  ) {
    return false;
  }

  if (!checkFriendsElementLength(friends)) {
    return false;
  }

  if (!checkFriendsElementOfElement(friends)) {
    return false;
  }

  return true;
}

function checkVisitors(visitors) {
  if (!checkValue(visitors)) {
    return false;
  }

  if (!checkArray(visitors)) {
    return false;
  }

  if (
    !checkArrayLength(
      visitors.length,
      VALIDITY.minLengthOfVisitor,
      VALIDITY.maxLengthOfVisitor,
    )
  ) {
    return false;
  }

  if (!checkVisitorsElement(visitors)) {
    return false;
  }

  return true;
}

function checkValue(value) {
  if (Boolean(value) === false) console.log('checkValue', value);

  return Boolean(value);
}

function checkType(type, checker) {
  if (type !== checker) console.log('checkType', type);

  return type === checker;
}

function checkLength(length, min, max) {
  if (!(min <= length && length <= max)) console.log('checkLength', length);

  return min <= length && length <= max;
}

function checkAlphabetWithLowercase(alphabet) {
  if (!VALIDITY.english.test(alphabet))
    console.log('checkAlphabetWithLowercase', alphabet);

  return VALIDITY.english.test(alphabet);
}

function checkArray(arr) {
  if (!Array.isArray(arr)) console.log('checkArr', arr);

  return Array.isArray(arr);
}

function checkArrayLength(length, min, max) {
  if (!(min <= length && length <= max))
    console.log('checkArrayLength', length);

  return min <= length && length <= max;
}

function checkFriendsElementLength(friends) {
  if (
    !friends.every(element =>
      checkArrayLength(
        element.length,
        VALIDITY.minLengthOfUserArray,
        VALIDITY.maxLengthOfUserArray,
      ),
    )
  )
    console.log('checkFriendsElementLength', friends);

  return friends.every(element =>
    checkArrayLength(
      element.length,
      VALIDITY.minLengthOfUserArray,
      VALIDITY.maxLengthOfUserArray,
    ),
  );
}

function checkFriendsElementOfElement(friends) {
  if (
    !friends.every(arr => {
      return arr.every(element => {
        return checkUser(element);
      });
    })
  )
    console.log('checkFriendsElementOFElement', friends);

  return friends.every(arr => arr.every(element => checkUser(element)));
}

function checkVisitorsElement(visitors) {
  if (!visitors.every(element => checkUser(element)))
    console.log('checkUser', visitors);

  return visitors.every(element => checkUser(element));
}

problem7(
  'mrko',
  [
    ['donut', 'andole'],
    ['donut', 'jun'],
    ['donut', 'mrko'],
    ['shakevan', 'andole'],
    ['shakevan', 'jun'],
    ['shakevan', 'mrko'],
  ],
  ['bedi', 'bedi', 'donut', 'bedi', 'shakevan'],
);

module.exports = problem7;
