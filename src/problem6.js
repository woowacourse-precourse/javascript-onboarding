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

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
