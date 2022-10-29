class MyError {
  checkLimit() {
    throw new Error("Overiding Error -> 제한된 input 길이를 체크하자");
  }

  occurError() {
    throw new Error("Overiding Error -> Error 발생 시 로직 멈추자");
  }
}

class UsersError extends MyError {
  constructor(user) {
    super();

    this.user = user;
    this.occurError();
  }

  checkLimit() {
    return 1 <= this.user.length && this.user.length <= 30;
  }

  checkLower() {
    return this.user.match(/[a-z]/g).length === this.user.length;
  }

  occurError() {
    if (!(this.checkLimit() && this.checkLower())) {
      throw new Error("input 양식 중 user값에 오류가 발생하였습니다.");
    }
  }
}

class FriendsError extends MyError {
  constructor(friends) {
    super();

    this.friends = friends;
    this.occurError();
  }

  checkLimit() {
    return 1 <= this.friends.length && this.friends.length <= 10000;
  }

  checkIDLimit() {
    return this.friends
      .flatMap((friend) => friend)
      .every((friend) => 1 <= friend.length && friend.length <= 30);
  }

  checkIDListLimit() {
    return this.friends.every((friend) => friend.length === 2);
  }

  check() {
    return this.checkLimit() && this.checkIDLimit() && this.checkIDListLimit();
  }

  occurError() {
    if (!this.check()) {
      throw new Error("input 양식 중 friends값에 오류가 발생하였습니다.");
    }
  }
}

class VisitorsError extends MyError {
  constructor(visitors) {
    super();

    this.visitors = visitors;
    this.occurError();
  }

  checkLimit() {
    return 0 <= this.visitors.length && this.visitors.length <= 10000;
  }

  occurError() {
    if (!this.checkLimit()) {
      throw new Error("input 양식 중 visitor값에 오류가 발생하였습니다.");
    }
  }
}

class SNSAlgorithm {
  constructor(user, friends, visitors) {
    new UsersError(user);
    new FriendsError(friends);
    new VisitorsError(visitors);

    this.user = user;
    this.friends = friends;
    this.visitors = visitors;

    this.scoreBoard = this.makeScoreBoard();
    this.friendGraph = this.makeFriendGraph();
  }

  saveFriendGraph(keyFriend, valueFriend, map) {
    const defaultValue = map.get(keyFriend) || [];

    map.set(keyFriend, [...defaultValue, valueFriend]);
  }

  makeFriendGraph() {
    const resultMap = new Map();

    this.friends.forEach(([ID_A, ID_B]) => {
      this.saveFriendGraph(ID_A, ID_B, resultMap);
      this.saveFriendGraph(ID_B, ID_A, resultMap);
    });

    return resultMap;
  }

  makeScoreBoard() {
    return [
      ...new Set(
        [...this.friends, ...this.visitors].flatMap((relation) => relation)
      ),
    ].reduce((acc, cur) => ({ ...acc, [cur]: 0 }), {});
  }

  isRecommand(person) {
    const { user, friendGraph } = this;

    return !new Set([user, ...friendGraph.get(user)]).has(person);
  }

  scroeFriendToFriend() {
    [...this.friendGraph.get(this.user)]
      .flatMap((friend) => [...this.friendGraph.get(friend)])
      .filter((person) => this.isRecommand(person))
      .forEach((person) => (this.scoreBoard[person] += 10));
  }

  scroeVisitor() {
    this.visitors
      .filter((person) => this.isRecommand(person))
      .forEach((person) => (this.scoreBoard[person] += 1));
  }

  scoreForRecommend() {
    this.scroeFriendToFriend();
    this.scroeVisitor();
  }

  recommend() {
    this.scoreForRecommend();

    return Object.keys(this.scoreBoard)
      .map((person) => [person, this.scoreBoard[person]])
      .filter(([_, score]) => score > 0)
      .sort((x, y) => y[1] - x[1] || (x[0] < y[0] ? -1 : 1))
      .map(([person, _]) => person)
      .slice(0, 5);
  }
}

function problem7(user, friends, visitors) {
  const sns = new SNSAlgorithm(user, friends, visitors);

  return sns.recommend();
}

module.exports = problem7;
