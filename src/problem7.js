function problem7(user, friends, visitors) {
  //friends 매개변수에서 user매개변수를 없앤다
  let removeMrko = friends.map((v) => v.filter((v) => v !== user));

  //length가 1개인 배열을 찾는다
  const findFriends = removeMrko
    .filter((v) => v.length === 1)
    .flatMap((v) => v);
}

module.exports = problem7;
