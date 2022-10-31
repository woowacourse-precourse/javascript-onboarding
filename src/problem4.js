function replaceLowerCaseByTreeFrogDict(str) {
  let res = str;
  const rgx = /[a-z]/g;
  const endsAsciiValSum = "a".charCodeAt(0) + "z".charCodeAt(0);
  const replacer = (match) => {
    return String.fromCharCode(endsAsciiValSum - match.charCodeAt(0));
  };
  res = str.replace(rgx, replacer);
  return res;
}

function problem4(word) {
  const res = replaceLowerCaseByTreeFrogDict(word);

  return res;
}

module.exports = problem4;
