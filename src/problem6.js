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
  validNickChar: /^[ㄱ-ㅎ|가-힣]+$/,
  validMailChar: /^[a-z|A-Z|0-9|@.]+$/,
};

const RESULT = {
  invalidInput: -1,
};

const INDEX = {
  email: 0,
  nickname: 1,
};

function problem6(forms) {
  if (!checkInput(forms)) {
    return RESULT.invalidInput;
  }

  return solution(forms);
}

function checkInput(input) {
  if (!checkTwoDimensionalArray(input)) {
    return false;
  }

  if (!checkOneDimensionalArray(input)) {
    return false;
  }

  if (!checkElement(input)) {
    return false;
  }

  return true;
}

function checkTwoDimensionalArray(form2DArray) {
  if (!checkValue(form2DArray)) {
    return false;
  }

  if (!checkArray(form2DArray)) {
    return false;
  }

  if (!checkLength(form2DArray.length, INPUT.minCrew, INPUT.maxCrew)) {
    return false;
  }

  return true;
}

function checkOneDimensionalArray(form2DArray) {
  return form2DArray.every(oneArr => {
    if (!checkValue(oneArr)) {
      return false;
    }

    if (!checkArray(oneArr)) {
      return false;
    }

    if (!checkLength(oneArr.length, INPUT.minForm, INPUT.maxForm)) {
      return false;
    }

    return true;
  });
}

function checkElement(form2DArray) {
  return form2DArray.every(arr => {
    if (!checkFormat(arr[INDEX.email], arr[INDEX.nickname])) {
      return false;
    }

    return arr.every(v => {
      if (!checkValue(v)) {
        return false;
      }

      if (!checkType(typeof v, INPUT.strType)) {
        return false;
      }

      return true;
    });
  });
}

function checkFormat(email, nickname) {
  if (!checkLanguage(email, nickname)) {
    return false;
  }

  if (
    !checkLength(email.length, INPUT.minMail, INPUT.maxMail) ||
    !checkLength(nickname.length, INPUT.minNick, INPUT.maxNick)
  ) {
    return false;
  }

  if (!checkDomain(email, INPUT.domain)) {
    return false;
  }

  return true;
}

function checkLanguage(email, nickname) {
  if (!checkEmail(email)) {
    return false;
  }

  if (!checkNickname(nickname)) {
    return false;
  }

  return true;
}

function checkEmail(email) {
  return INPUT.validMailChar.test(email);
}

function checkNickname(nickname) {
  return INPUT.validNickChar.test(nickname);
}

function checkType(type, checker) {
  return type === checker;
}

function checkDomain(email, domain) {
  return email.includes(domain);
}

function checkValue(v) {
  return Boolean(v);
}

function checkArray(arr) {
  return Array.isArray(arr);
}

function checkLength(len, min, max) {
  return len >= min && len <= max;
}

function solution(forms) {
  const newForm3DArr = accessNicknameInforms2DArray(forms);
  const hashTable = createHashTable(newForm3DArr);
  const usersEmailArr = getUserEmail(hashTable);
  const cleanEmailArr = removeDuplicateEmail(usersEmailArr);
  const sortedEmailArr = sortEmail(cleanEmailArr);

  return sortedEmailArr;
}

function accessNicknameInforms2DArray(form2DArray) {
  return form2DArray.map(arr => arr.map(splitNickname));
}

function splitNickname(v, i) {
  if (isEmail(i)) {
    return v;
  }

  return convertStringToArray(v);
}

function isEmail(i) {
  return i === INDEX.email;
}

function convertStringToArray(string) {
  return Array.from(string);
}

function createHashTable(form3DArray) {
  const hashTable = {};

  form3DArray.forEach(fillHashTable, { hashTable: hashTable });

  return hashTable;
}

function fillHashTable(form2DArray) {
  form2DArray.forEach(accessNicknameTable, { hashTable: this.hashTable });
}

function accessNicknameTable(arr, i, form2DArray) {
  if (isEmail(i)) {
    return;
  }

  arr.forEach(fillNicknameTable, {
    hashTable: this.hashTable,
    email: form2DArray[INDEX.email],
  });
}

function fillNicknameTable(word, i, arr) {
  this.hashTable[word] = createWordTable(this.hashTable, word);
  if (isEndOfIndex(arr, i)) {
    return;
  }
  const nextWord = arr[i + 1];
  this.hashTable[word][nextWord] = createNextWordTable(
    this.hashTable[word],
    nextWord,
  );
  this.hashTable[word][nextWord] = pushEmailInNextWordTable(
    this.hashTable[word][nextWord],
    this.email,
  );
}

function createWordTable(hashTable, word) {
  if (existWord(hashTable, word)) {
    return {
      ...hashTable[word],
    };
  }

  return {};
}

function existWord(obj, key) {
  return obj.hasOwnProperty(key);
}

function isEndOfIndex(arr, i) {
  return i === arr.length - 1;
}

function createNextWordTable(hashTable, nextWord) {
  if (existWord(hashTable, nextWord)) {
    return [...hashTable[nextWord]];
  }

  return [];
}

function pushEmailInNextWordTable(hashTable, email) {
  return [...hashTable, email];
}

function getUserEmail(hashTable) {
  let emailArr = [];

  for (let word in hashTable) {
    emailArr = searchWordTable(emailArr, hashTable[word]);
  }

  return [...emailArr];
}

function searchWordTable(emailArr, hashTable) {
  for (let nextWord in hashTable) {
    emailArr = searchNextWordTable(emailArr, hashTable[nextWord]);
  }

  return [...emailArr];
}

function searchNextWordTable(emailArr, hashTable) {
  if (haveLessThanOneMail(hashTable)) {
    return [...emailArr];
  }

  return pushEmailInEmailArray(emailArr, hashTable);
}

function haveLessThanOneMail(hashTable) {
  return Object.keys(hashTable).length <= 1;
}

function pushEmailInEmailArray(emailArr, email) {
  return [...emailArr, ...email];
}

function removeDuplicateEmail(emailArr) {
  return emailArr.filter((v, i, emailArr) => emailArr.indexOf(v) === i);
}

function sortEmail(emailArr) {
  return emailArr.sort();
}

module.exports = problem6;
