function problem7(user, friends, visitors) {
  const dude = [];

  friends.forEach((arr, idx) => {
    const [A, B] = arr;
    if (A === user) {
      dude.push(B);
    } else if (B === user) {
      dude.push(A);
    }
  });

  return dude;
}

module.exports = problem7;

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
