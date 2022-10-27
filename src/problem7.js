// 정렬을 위한 Object 함수
function ObjectSortFunction(obj) {
  return Object.entries(obj)
    .sort(([keyA, valueA], [keyB, valueB]) => valueA === valueB ? keyA.localeCompare(keyB) : valueB - valueA)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
}

function problem7(user, friends, visitors) {
  const obj = {};

  const notFriends = friends.filter(([A, B]) => (A !== user && B !== user));
  const alredyFriends = friends.filter(([A, B]) => !(A !== user && B !== user));

  const friendList = alredyFriends.flat(Infinity).filter(v => v !== user);

  // 이 부분 추후 수정
  for (const friend of notFriends) {
    const [A, B] = friend;
    if (friendList.includes(A)) {
      !obj[B] ? obj[B] = 10 : obj[B] += 10;
    } else if (friendList.includes(B)) {
      !obj[A] ? obj[A] = 10 : obj[A] += 10;
    }
  }

  for (const visit of visitors) {
    if (!friendList.includes(visit)) {
      !obj[visit] ? obj[visit] = 1 : obj[visit] += 1;
    }
  }

  const sortObj = ObjectSortFunction(obj);
  const answer = Object.keys(sortObj);

  return answer;
}

module.exports = problem7;
