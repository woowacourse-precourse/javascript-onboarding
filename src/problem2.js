const VALIDITY = {
  minLength: 1,
  maxLength: 1000,
  string: 'string',
};

const RESULT = {
  exception: -1,
};

function isValidInput(input) {
  if (input.length < VALIDITY.minLength || input.length > VALIDITY.maxLength) {
    return false;
  }

  if (typeof input !== VALIDITY.string) {
    return false;
  }

  if (input === input.toUpperCase()) {
    return false;
  }

  return true;
}

function problem2(cryptogram) {
  if (!isValidInput(cryptogram)) {
    return RESULT.exception;
  }
}

module.exports = problem2;
