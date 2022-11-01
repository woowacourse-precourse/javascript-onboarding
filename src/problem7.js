class MyError {
  checkLimit() {
    throw new Error("Overiding Error -> 제한된 input 길이를 체크하자");
  }

  occurError() {
    throw new Error("Overiding Error -> Error 발생 시 로직 멈추자");
  }

  checkAllError(errorInstanceList) {
    for (const errorInstance of errorInstanceList) {
      if (errorInstance.occurError()) {
        return true;
      }
    }

    return false;
  }
}

class UsersError extends MyError {
  constructor(user) {
    super();

    this._user = user;
  }

  checkLimit() {
    return 1 <= this._user.length && this._user.length <= 30;
  }

  checkLower() {
    return this._user.match(/[a-z]/g).length === this._user.length;
  }

  occurError() {
    if (!(this.checkLimit() && this.checkLower())) {
      console.log("input 양식 중 user값에 오류가 발생하였습니다.");
      return true;
    }

    return false;
  }
}

class FriendsError extends MyError {
  constructor(friends) {
    super();

    this._friends = friends;
  }

  checkLimit() {
    return 1 <= this._friends.length && this._friends.length <= 10000;
  }

  checkIDLimit() {
    return this._friends
      .flatMap((friend) => friend)
      .every((friend) => 1 <= friend.length && friend.length <= 30);
  }

  checkIDListLimit() {
    return this._friends.every((friend) => friend.length === 2);
  }

  check() {
    return this.checkLimit() && this.checkIDLimit() && this.checkIDListLimit();
  }

  occurError() {
    if (!this.check()) {
      console.log("input 양식 중 friends값에 오류가 발생하였습니다.");
      return true;
    }

    return false;
  }
}

class VisitorsError extends MyError {
  constructor(visitors) {
    super();

    this._visitors = visitors;
  }

  checkLimit() {
    return 0 <= this._visitors.length && this._visitors.length <= 10000;
  }

  occurError() {
    if (!this.checkLimit()) {
      console.log("input 양식 중 visitor값에 오류가 발생하였습니다.");
      return true;
    }

    return false;
  }
}

class SNSModel {
  constructor(friends, visitors) {
    this._friends = friends;
    this._visitors = visitors;

    this._scoreBoard = this.makeScoreBoard();
    this._friendGraph = this.makeFriendGraph();
  }

  getFriendRelation() {
    return this._friendGraph;
  }

  getScoreBoard() {
    return this._scoreBoard;
  }

  saveFriendGraph(keyFriend, valueFriend, map) {
    const defaultValue = map.get(keyFriend) || [];

    map.set(keyFriend, [...defaultValue, valueFriend]);
  }

  makeFriendGraph() {
    const resultMap = new Map();

    this._friends.forEach(([ID_A, ID_B]) => {
      this.saveFriendGraph(ID_A, ID_B, resultMap);
      this.saveFriendGraph(ID_B, ID_A, resultMap);
    });

    return resultMap;
  }

  makeScoreBoard() {
    console.log(this._friends);

    return [
      ...new Set(
        [...this._friends, ...this._visitors].flatMap((relation) => relation)
      ),
    ].reduce((acc, cur) => ({ ...acc, [cur]: 0 }), {});
  }
}

class SNSAlgorithm {
  constructor(user, friends, visitors) {
    this._user = user;
    this._visitors = visitors;

    this._model = new SNSModel(friends, visitors);
  }

  isRecommand(person) {
    const { _model, _user } = this;

    return !new Set([_user, ..._model.getFriendRelation().get(_user)]).has(
      person
    );
  }

  scroeFriendToFriend() {
    const { _model, _user } = this;

    [..._model.getFriendRelation().get(_user)]
      .flatMap((friend) => [..._model.getFriendRelation().get(friend)])
      .filter((person) => this.isRecommand(person))
      .forEach((person) => (_model.getScoreBoard()[person] += 10));
  }

  scroeVisitor() {
    const { _model } = this;

    this._visitors
      .filter((person) => this.isRecommand(person))
      .forEach((person) => (_model.getScoreBoard()[person] += 1));
  }

  recommend() {
    const { _model } = this;

    this.scroeFriendToFriend();
    this.scroeVisitor();

    return Object.keys(_model.getScoreBoard())
      .map((person) => [person, _model.getScoreBoard()[person]])
      .filter(([_, score]) => score > 0)
      .sort((x, y) => y[1] - x[1] || (x[0] < y[0] ? -1 : 1))
      .map(([person, _]) => person)
      .slice(0, 5);
  }
}

function problem7(user, friends, visitors) {
  const myError = new MyError();
  const breakpoint = myError.checkAllError([
    new UsersError(user),
    new FriendsError(friends),
    new VisitorsError(visitors),
  ]);

  if (breakpoint) return;

  const sns = new SNSAlgorithm(user, friends, visitors);

  return sns.recommend();
}

module.exports = problem7;
