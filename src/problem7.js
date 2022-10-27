function problem7(user, friends, visitors) {
  //friends 매개변수에서 user매개변수를 없앤다
  let removeMrko = friends.map((v) => v.filter((v) => v !== user));

  //length가 1개인 배열을 찾는다
  const findFriends = removeMrko
    .filter((v) => v.length === 1)
    .flatMap((v) => v);

  //user를 없앤 배열 변수(removeMrko)에서 length가 1개인 (findFriends)같은 값을 삭제한다
  for (const value of findFriends) {
    removeMrko = removeMrko
      .flatMap((v) => v)
      .filter((v) => v !== value)
      .sort();
    visitors = visitors
      .flatMap((v) => v)
      .filter((v) => v !== value)
      .sort();
  }

  //찾은 목록들에서 중복을 제거한다
  const selectFriends = [...new Set(removeMrko)];
  const selectVisitors = [...new Set(visitors)];

  //찾은 friends와 visitors에게 점수를 부여한다
  const object = {};
  for (const value of selectFriends) {
    object[value] = removeMrko.filter((v) => v === value).length * 10;
  }
  for (const value of selectVisitors) {
    object[value] !== undefined
      ? (object[value] += visitors.filter((v) => v === value).length)
      : (object[value] = visitors.filter((v) => v === value).length);
  }
}

module.exports = problem7;
