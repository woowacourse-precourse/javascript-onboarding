function splitNameIntoTwoOrMoreLengths(name) {
  const arrayOfSplitNames = [];
  for (k = 2; k <= name.length; k++) {
    let splitName = name.split("").reduce((acc, _, i, arr) => {
      if (arr.slice(i, i + k).join("").length >= k) {
        acc.push(arr.slice(i, i + k).join(""));
      }
      return acc;
    }, []);
    arrayOfSplitNames.push(...splitName);
  }
  return arrayOfSplitNames;
}

function checkContinuallySameLettersIncluded(
  splitName,
  arr,
  originalEmail,
  emailOfPersonWithDuplicateName
) {
  arr.forEach(([email, name]) => {
    name.includes(splitName) &&
      email !== originalEmail &&
      emailOfPersonWithDuplicateName.push(email);
  });
  return emailOfPersonWithDuplicateName;
}

function getEmailOfPersonWithDuplicateName(
  arrayOfSplitNames,
  arr,
  originalEmail
) {
  let emailOfPersonWithDuplicateName = [];
  arrayOfSplitNames.forEach((splitName) => {
    emailOfPersonWithDuplicateName = checkContinuallySameLettersIncluded(
      splitName,
      arr,
      originalEmail,
      emailOfPersonWithDuplicateName
    );
  });
  return (
    emailOfPersonWithDuplicateName.length && emailOfPersonWithDuplicateName
  );
}

function problem6(forms) {
  let answer = [];
  let emailOfPersonWithDuplicateName;
  forms.forEach(([email, name], _, arr) => {
    (emailOfPersonWithDuplicateName = getEmailOfPersonWithDuplicateName(
      splitNameIntoTwoOrMoreLengths(name),
      arr,
      email
    )) && answer.push(...emailOfPersonWithDuplicateName);
  });
  return;
}

module.exports = problem6;
