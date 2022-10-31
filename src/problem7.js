function problem7(user, friends, visitors) {

  var result = [];
  var recommend = [];
  var arr = [];

  friends.map((u) => {
    recommend.map((friend) => {
      if (u[0] === friend && !u.includes(user)) {
        let target = arr.find((obj) => obj.id === u[1]);
        if (target) {
          target.pnt += 10;
        } else {
          arr.push({ id: u[1], pnt: 10 });
        }
      } else if (u[1] === friend && !u.includes(user)) {
        let target = arr.find((obj) => obj.id === u[0]);
        if (target) {
          target.pnt += 10;
        } else {
          arr.push({ id: u[0], pnt: 10 });
        }
      }
    });
  });

  friends.map((u) => {
    if (u[0] === user) recommend.push(u[1]);
    if (u[1] === user) recommend.push(u[0]);
  });
  
  visitors.map((visitor) => {
    let target = arr.find((obj) => obj.id === visitor);
    if (!recommend.includes(visitor)) {
      if (target) {
        target.pnt += 1;
      } else {
        arr.push({ id: visitor, pnt: 1 });
      }
    }
  });

  arr.sort((a, b) => b.pnt - a.pnt);
  arr.map((u) => {
    result.push(u.id);
  });
  return result;
}

module.exports = problem7;
