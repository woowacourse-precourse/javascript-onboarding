const RETURN = {
  invalidInput: -1,
};

const VALIDITY = {
  stringType: 'string',
  english: /[a-zA-Z]/,
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
    return RETURN.invalidInput;
  }
  var answer;
  return answer;
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

  if (!checkAlphabet(user)) {
    return false;
  }

  if (!checkLowercase(user)) {
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
  if (Boolean(value) === false) console.log('checkValue');

  return Boolean(value);
}

function checkType(type, checker) {
  if (type !== checker) console.log('checkType');

  return type === checker;
}

function checkLength(length, min, max) {
  if (!(min <= length && length <= max)) console.log('checkLength');

  return min <= length && length <= max;
}

function checkAlphabet(alphabet) {
  if (!VALIDITY.english.test(alphabet)) console.log('checkAlphabet');

  return VALIDITY.english.test(alphabet);
}

function checkLowercase(lowercase) {
  if (!(lowercase === lowercase.toLowerCase())) console.log('checkLowercase');

  return lowercase === lowercase.toLowerCase();
}

function checkArray(arr) {
  if (!Array.isArray(arr)) console.log('checkArr');

  return Array.isArray(arr);
}

function checkArrayLength(length, min, max) {
  if (!(min <= length && length <= max)) console.log('checkArrayLength');

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
    console.log('checkFriendsElementLength');

  return friends.every(element =>
    checkArrayLength(
      element.length,
      VALIDITY.minLengthOfUserArray,
      VALIDITY.maxLengthOfUserArray,
    ),
  );
}

function checkFriendsElementOfElement(friends) {
  if (friends.every(arr => arr.every(element => checkUser(element))))
    console.log('checkFriendsElement');

  return friends.every(arr => arr.every(element => checkUser(element)));
}

function checkVisitorsElement(visitors) {
  if (!visitors.every(element => checkUser(element))) console.log('checkUser');

  return visitors.every(element => checkUser(element));
}

module.exports = problem7;
