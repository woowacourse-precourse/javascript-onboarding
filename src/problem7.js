function problem7(user, friends, visitors) {
  var answer = [];
  let friendWithMe = [];
  let pointArr = [];
  friends.map((u) => {
    if (u[0] === user) friendWithMe.push(u[1]);
    else if (u[1] === user) friendWithMe.push(u[0]);
  });
  friends.map((u) => {
    friendWithMe.map((friend) => {
      if (u[0] === friend && !u.includes(user)) {
        let target = pointArr.find((obj) => obj.id === u[1]);
        if (target) {
          target.pnt += 10;
        } else {
          pointArr.push({ id: u[1], pnt: 10 });
        }
      } else if (u[1] === friend && !u.includes(user)) {
        let target = pointArr.find((obj) => obj.id === u[0]);
        if (target) {
          target.pnt += 10;
        } else {
          pointArr.push({ id: u[0], pnt: 10 });
        }
      }
    });
  });
  visitors.map((visitor) => {
    let target = pointArr.find((obj) => obj.id === visitor);
    if (!friendWithMe.includes(visitor)) {
      if (target) {
        target.pnt += 1;
      } else {
        pointArr.push({ id: visitor, pnt: 1 });
      }
    }
  });
  pointArr.sort((a, b) => b.pnt - a.pnt);
  pointArr.map((u) => {
    answer.push(u.id);
  });
  return answer;
}
module.exports = problem7;
