const compose =
  (...fns) =>
  (initialValue) =>
    fns.reduce((composed, fn) => fn(composed), initialValue);

const getValuesOf = (target) => (forms) =>
  forms.map(([email, nickname]) => {
    if (target === "email") return email;
    else if (target === "nickname") return nickname;
    else throw new Error("해당 데이터는 존재하지 않습니다.");
  });

const handleError = (forms) => {
  const emails = getValuesOf("email")(forms);

  for (let email of emails) {
    const e = email.split("@")[1];
    if (e !== "email.com") throw new Error("지원하지 않는 이메일 형식입니다.");
  }
  return forms;
};

const listDupCases = (nicknames) => {
  return nicknames.reduce((reduced, nickname) => {
    const copy = reduced.slice();
    for (let i = 0; i < nickname.length - 1; i++) {
      copy.push(nickname.slice(i, i + 2));
    }
    return copy;
  }, []);
};

const isPlural = (array, item) =>
  array.indexOf(item) !== array.lastIndexOf(item);
const isNotExisting = (array, item) => array.indexOf(item) === -1;

const findDups = (cases) => {
  return cases.reduce((reduced, cs) => {
    const copy = reduced.slice();
    if (isPlural(cases, cs) && isNotExisting(copy, cs)) copy.push(cs);
    return copy;
  }, []);
};

const getMatchedForms = (forms) => (cases) => {
  return forms.reduce((reduced, form) => {
    const copy = reduced.slice();
    const nick = form[1];
    for (let cs of cases) {
      if (nick.indexOf(cs) > -1) copy.push(form);
    }
    return copy;
  }, []);
};

const sort = (arr) => [...arr].sort();
const removeDups = (arr) => [...new Set(arr)];

function problem6(forms) {
  const result = compose(
    handleError,
    getValuesOf("nickname"),
    listDupCases,
    findDups,
    getMatchedForms(forms),
    getValuesOf("email"),
    sort,
    removeDups
  )(forms);

  return result;
}

module.exports = problem6;
