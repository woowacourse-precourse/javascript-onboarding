const INPUT = {
  minCrew: 1,
  maxCrew: 10000,
  minForm: 2,
  maxForm: 2,
  minNick: 1,
  maxNick: 20,
  minMail: 11,
  maxMail: 20,
  domain: '@email.com',
  strType: 'string',
  koChar: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
  enChar: /[a-zA-Z]/,
  numChar: /[0-9]/,
  specialChar: /[~!#\#$%<>^&*]/,
};

const RESULT = {
  exception: -1,
};

function problem6(forms) {
  if (isWrongInput(forms)) {
    console.log(forms);
    return RESULT.exception;
  }
}

function isWrongInput(input) {
  if (isWrongTwoDimensionalArray(input)) {
    return true;
  }

  if (isWrongArray(input)) {
    return true;
  }

  if (isWrongElement(input)) {
    return true;
  }

  return false;
}

function isWrongTwoDimensionalArray(twoArr) {
  if (isWrongValue(twoArr)) {
    return true;
  }

  if (isNotArray(twoArr)) {
    return true;
  }

  if (isWrongLength(twoArr.length, INPUT.minCrew, INPUT.maxCrew)) {
    return true;
  }
}

function isWrongArray(twoArr) {
  return twoArr.some(arr => {
    if (isWrongValue(arr)) {
      return true;
    }

    if (isNotArray(arr)) {
      return true;
    }

    if (isWrongLength(arr.length, INPUT.minForm, INPUT.maxForm)) {
      return true;
    }
  });
}

function isWrongElement(twoArr) {
  return twoArr.some(arr => {
    if (isWrongFormat(arr[0], arr[1])) {
      return true;
    }
    return arr.some(v => {
      if (isWrongValue(v)) {
        return true;
      }

      if (isWrongType(typeof v, INPUT.strType)) {
        return true;
      }
    });
  });
}

function isWrongFormat(nickname, email) {
  if (isWrongLanguage(nickname, email)) {
    return true;
  }

  if (
    isWrongLength(nickname.length, INPUT.minNick, INPUT.maxNick) ||
    isWrongLength(email.length, INPUT.minMail, INPUT.maxMail)
  ) {
    return true;
  }

  if (isWrongDomain(email, INPUT.domain)) {
    return true;
  }

  return false;
}

function isWrongLanguage(nickname, email) {
  if (isWrongNickname(nickname)) {
    return true;
  }

  if (isWrongEmail(email)) {
    return true;
  }

  return false;
}

function isWrongNickname(nickname) {
  return (
    INPUT.enChar.test(nickname) ||
    INPUT.numChar.test(nickname) ||
    INPUT.specialChar.test(nickname)
  );
}

function isWrongEmail(email) {
  return INPUT.koChar.test(email) || INPUT.specialChar.test(email);
}

function isWrongType(type, checker) {
  return type !== checker;
}

function isWrongDomain(email, domain) {
  return !email.includes(domain);
}

function isWrongValue(v) {
  return !v;
}

function isNotArray(arr) {
  return !Array.isArray(arr);
}

function isWrongLength(len, min, max) {
  return len < min || len > max;
}

module.exports = problem6;
