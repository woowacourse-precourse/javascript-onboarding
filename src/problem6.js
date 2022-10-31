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
