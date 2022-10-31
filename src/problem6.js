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

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
