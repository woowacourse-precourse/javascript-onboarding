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
  specialNickChar: /[~!#@\#$%<>^&*]/,
  specialMailChar: /[~!#\#$%<>^&*]/,
};

const RESULT = {
  exception: -1,
};

const INDEX = {
  email: 0,
  nickname: 1,
};

function problem6(forms) {
  if (isWrongInput(forms)) {
    return RESULT.exception;
  }

  return solution(forms);
}

function solution(forms) {
  const newForms = changeNicknameTypeToArray(forms);
  const obj = getObject(newForms);
  const arr = getDupArrayCycle(obj);
  const cleanSet = removeDupInArray(arr);
  const cleanArr = getArrayFromSet(cleanSet);
  const sortedArr = sortArrWithString(cleanArr);

  return sortedArr;
}

function changeNicknameTypeToArray(twoArr) {
  return twoArr.map(arr => arr.map(splitNickname));
}

function splitNickname(v, i) {
  if (i === INDEX.email) {
    return v;
  }

  return getArrayFromString(v);
}

function getArrayFromString(string) {
  return Array.from(string);
}

function getObject(threeArr) {
  const obj = {};

  threeArr.forEach((twoArr, i) => {
    twoArr.forEach((arr, i) => {
      if (i === INDEX.email) {
        return;
      }
      arr.forEach((v, i) => {
        if (!existWordInObject(obj, v)) {
          obj[v] = {};
        }
        if (i === arr.length - 1) {
          return;
        }
        if (!existWordInObject(obj[v], arr[i + 1])) {
          obj[v][arr[i + 1]] = [];
        }
        obj[v][arr[i + 1]].push(twoArr[INDEX.email]);
      });
    });
  });

  return obj;
}

function existWordInObject(obj, v) {
  return obj.hasOwnProperty(v);
}

function getDupArrayCycle(obj) {
  const arr = [];

  for (let key1 in obj) {
    if (Object.keys(obj[key1]).length >= 1) {
      for (let key2 in obj[key1]) {
        if (Object.keys(obj[key1][key2]).length > 1) {
          arr.push(...obj[key1][key2]);
        }
      }
    }
  }

  return arr;
}

function removeDupInArray(arr) {
  return new Set(arr);
}

function getArrayFromSet(set) {
  return Array.from(set);
}

function sortArrWithString(arr) {
  return arr.sort();
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
    if (isWrongFormat(arr[INDEX.email], arr[INDEX.nickname])) {
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

function isWrongFormat(email, nickname) {
  if (isWrongLanguage(email, nickname)) {
    return true;
  }

  if (
    isWrongLength(email.length, INPUT.minMail, INPUT.maxMail) ||
    isWrongLength(nickname.length, INPUT.minNick, INPUT.maxNick)
  ) {
    return true;
  }

  if (isWrongDomain(email, INPUT.domain)) {
    return true;
  }

  return false;
}

function isWrongLanguage(email, nickname) {
  if (isWrongEmail(email)) {
    return true;
  }

  if (isWrongNickname(nickname)) {
    return true;
  }

  return false;
}

function isWrongEmail(email) {
  return INPUT.koChar.test(email) || INPUT.specialMailChar.test(email);
}

function isWrongNickname(nickname) {
  return (
    INPUT.enChar.test(nickname) ||
    INPUT.numChar.test(nickname) ||
    INPUT.specialNickChar.test(nickname)
  );
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
