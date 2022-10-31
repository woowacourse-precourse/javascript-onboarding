const compose =
  (...fns) =>
    (initialValue) =>
      fns.reduce((composed, fn) => fn(composed), initialValue);

const handleError = (forms) => {
  const emails = getValuesOf("email")(forms);

  for (let email of emails) {
    const e = email.split("@")[1];
    if (e !== "email.com") throw new Error("지원하지 않는 이메일 형식입니다.");
  }
  return forms;
};

const getValuesOf = (target) => (forms) =>
  forms.map(([email, nickname]) => {
    if (target === "email") return email;
    else if (target === "nickname") return nickname;
    else throw new Error("해당 데이터는 존재하지 않습니다.");
  });
