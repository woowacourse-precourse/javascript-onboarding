function problem7(user, friends, visitors) {
  var answer = [];
  let count = {};

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      const friend = friends[i].filter((item) => {
        return item !== user;
      });
      count[`${friend}`] = 10;
    }
  }

  const visitsCount = (visitors) =>
    visitors.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});

  const counts = visitsCount(visitors);

  for (let visit in counts) {
    if (visit in count) {
      count[`${visit}`] += counts[visit];
    } else {
      count[`${visit}`] = counts[visit];
    }
  }

  console.log(count);

  return answer;
}

module.exports = problem7;
