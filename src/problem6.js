function problem6(forms) {
  let answer;

  const duplicateDictionary = getDuplicateDictionary(forms);

  const emails = getEmailsFromDuplicateNickname(duplicateDictionary);

  answer = deleteDuplicateEmail(emails);

  return answer;
}

function getDuplicateDictionary(forms) {
  let duplicateDictionary = {};

  for (let f of forms) {
    duplicateDictionary = getTwoCharactersFromNickname(duplicateDictionary, f);
  }
  return duplicateDictionary;
}

function getTwoCharactersFromNickname(duplicateDictionary, form) {
  const [email, nickname] = form;

  for (let i = 0; i < nickname.length - 1; i++) {
    const twoCharacters = nickname[i] + nickname[i + 1];

    if (!duplicateDictionary[twoCharacters]) {
      duplicateDictionary[twoCharacters] = [email];
    } else if (duplicateDictionary[twoCharacters]) {
      duplicateDictionary[twoCharacters].push(email);
    }
  }

  return duplicateDictionary;
}

function getEmailsFromDuplicateNickname(duplicateDictionary) {
  let emails = [];

  for (let key in duplicateDictionary) {
    const value = duplicateDictionary[key];

    if (value.length > 1) {
      emails = emails.concat(value);
    }
  }
  return emails;
}

function deleteDuplicateEmail(emails) {
  let result = [];

  emails = emails.sort();

  for (let email of emails) {
    if (!result || result.at(-1) !== email) {
      result.push(email);
    } else if (result.at(-1) === email) {
      continue;
    }
  }

  return result;
}

module.exports = problem6;
