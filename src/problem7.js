class Members {
  constructor(frds, vsts) {
    this.friends = frds;
    this.visitors = vsts;
    let users = [];
    frds.forEach(x => {
      users.push(...x)
    });
    this.list = [...new Set(users.concat(vsts))].sort();
  }
  get friendsValid() {
    const lengthsArr = this.friends.filter(x => x.length !== 2)
    if (lengthsArr.length === 0) {
      return true
    }
    else {
      return false
    }
  }
}

class Relation {
  constructor(user, frds) {
    this.name = user;
    let order1 = frds.map((x, i) => {
      if (x[0] === user) {
        return x[1]
      }
      else if (x[1] === user) {
        return x[0]
      }
      else {
        return
      }
    }).filter(y => y !== undefined);
    this.friend = new Set(order1);
  }
}

class Point {
  constructor(user1, user2, frds, vsts) {
    this.origin = user1;
    this.target = user2;
    let coFriends = getIntersection(user1, user2, frds)
    this.coFriends = coFriends;
    let pointFriends = coFriends.size * 10;
    let pointVisit = vsts.filter(x => x === user2).length;

    if (user1 === user2) {
      this.pointFriends = 0;
      this.pointVisit = 0;
      this.point = 0;
    }
    else {
      this.pointFriends = pointFriends;
      this.pointVisit = pointVisit;
      this.point = pointFriends + pointVisit;
    }
  }
}

function getIntersection(user1, user2, frds) {
  let set1 = new Relation(user1, frds).friend;
  let set2 = new Relation(user2, frds).friend;
  const intersection = new Set(
    [...set1].filter(x => set2.has(x))
  );
  return intersection;
}

function lengthChecker(arr, min, max) {
  if (arr.length >= min && arr.length <= max) {
    return true
  }
  else {
    // alert(`'${a}' length error: only ${min}~${max} characters allowed.`);
    return false
  }
}

function problem7(user, friends, visitors) {
  var answer;

  const members = new Members(friends, visitors);
  const usersList = members.list;

  if (
    lengthChecker(user, 1, 30) &&
    lengthChecker(friends, 1, 10000) &&
    lengthChecker(visitors, 0, 10000) &&
    /[a-z]/g.test(user)
    && members.friendsValid
  ) {
    const pointsArr = usersList.map((x, i, a) => {
      return new Point(user, x, friends, visitors)
    });

    const pointsSort = pointsArr.sort((x, y) => {
      return y.point - x.point
    });

    const resultAll = pointsSort.map(x => {
      return x.target
    });

    answer = resultAll.slice(0, 3);
  }
  else {
    answer = 'invalid input'
  }
  return answer;
}

module.exports = problem7;
