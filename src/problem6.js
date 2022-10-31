const copyArray = targetArray => {
  return [...targetArray];
};

const each = (iterable, func) => {
  for (const iterator of iterable) {
    func(iterator);
  }

  return;
};

const getLength = element => {
  if (!element.length) {
    return 0;
  }

  return element.length;
};

const isEmailException = email => {
  const emailLength = getLength(email);

  if (emailLength < 11 || 20 <= emailLength) {
    throw new RangeError("The total length is between 11 characters and less than 20 characters.");
  }

  if (!email.match(/[a-z0-9]+@email.com/)) {
    throw new Error("Email applications are limited to the email.com domain only.");
  }

  return false;
};

const isNickNameException = nickName => {
  const nickNameLength = getLength(nickName);

  if (nickNameLength < 1 || 20 <= nickNameLength) {
    throw new RangeError("The total length is between 1 characters and less than 20 characters.");
  }

  if (!nickName.match(/[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/g)) {
    throw new Error("Nicknames are only available in Korean.");
  }

  return false;
};

const isCrewException = crew => {
  const crewLength = getLength(crew);

  if (crewLength < 1 || 10000 < crewLength) {
    throw new RangeError("Crew must be 1 or more and 10,000 or less.");
  }

  return false;
};

const categorizeNicknames = (nickname, callbackFunc) => {
  let _endIndex = 1;
  const eachNickNameString = copyArray(nickname);
  const maximumLength = getLength(eachNickNameString) - 1;

  for (let _startIndex = 0; _startIndex < maximumLength; _startIndex++) {
    const firstLetter = eachNickNameString[_startIndex];
    const secondLetter = eachNickNameString[_endIndex];

    callbackFunc(`${firstLetter}${secondLetter}`);

    _endIndex += 1;
  }

  return;
};

const getNicknameCountMap = forms => {
  const nickNameMap = new Map();
  const copiedFormArray = copyArray(forms);

  each(copiedFormArray, ([email, nickName]) => {
    isEmailException(email);
    isNickNameException(nickName);
    categorizeNicknames(nickName, separatedNickname => {
      if (!nickNameMap.has(separatedNickname)) {
        nickNameMap.set(separatedNickname, 0);
      }

      nickNameMap.set(separatedNickname, nickNameMap.get(separatedNickname) + 1);
    });
  });

  return nickNameMap;
};

const getDuplicateNicknames = (nicknames, cutLine = 1) => {
  const resultArray = [];

  each(nicknames, ([nickname, count]) => {
    if (cutLine < count) {
      resultArray.push(nickname);
    }
  });

  return resultArray;
};

const sortByAscendingOrder = targetArray => {
  const copiedArray = copyArray(targetArray);

  copiedArray.sort((nameA, nameB) => {
    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  return copiedArray;
};

const getDuplicateDestinationEmailSet = (formArray, duplicatedNickNameArray) => {
  const emailSet = new Set();
  const copiedFormArray = copyArray(formArray);
  const copiedDuplicatedNickNameArray = copyArray(duplicatedNickNameArray);

  each(copiedFormArray, ([email, nickName]) => {
    categorizeNicknames(nickName, eachName => {
      if (copiedDuplicatedNickNameArray.includes(eachName)) {
        emailSet.add(email);
      }
    });
  });

  return emailSet;
};

function problem6(forms) {
  isCrewException(forms);

  const copiedFormArray = copyArray(forms);
  const nicknameCountMap = getNicknameCountMap(copiedFormArray);
  const duplicatedNickNameArray = getDuplicateNicknames(nicknameCountMap);
  const duplicatedDestinationEmailSet = getDuplicateDestinationEmailSet(
    copiedFormArray,
    duplicatedNickNameArray
  );
  const answer = sortByAscendingOrder(duplicatedDestinationEmailSet);

  return answer;
}

module.exports = problem6;
