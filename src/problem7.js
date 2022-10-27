function problem7(user, friends, visitors) {
  //friends 매개변수에서 user매개변수를 없앤다
  let removeMrko = friends.map((v) => v.filter((v) => v !== user));
}

module.exports = problem7;
