function problem7(user, friends, visitors) {
  let map = {};
  friends.forEach(([a, b]) => {
    if (!map[a]) map[a] = new Set([b]);
    else map[a].add(b);
    if (!map[b]) map[b] = new Set([a]);
    else map[b].add(a);
  });
  visitors.forEach((e) => {
    map[e] = new Set();
  });
  let result = Object.keys(map).reduce((cur, name) => {
    if (name == user) return cur;
    if (map[user].has(name)) return cur;
    let intersect = [...map[user]].filter((data) => map[name].has(data));
    let res = intersect.length * 10;
    intersect = new Set(intersect);
    if (intersect.has(user)) res -= 10;
    if (intersect.has(name)) res -= 10;
    res += visitors.filter((e) => e == name).length;
    if (res != 0) cur[name] = res;
    return cur;
  }, {});
  return Object.keys(result).sort((a, b) => {
    if (result[a] == result[b]) {
      if (a < b) return -1;
      if (a > b) return 1;
    }
    return result[b] - result[a];
  });
}
console.log(
  problem7(
    "mrko",
    [
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  )
);
module.exports = problem7;
