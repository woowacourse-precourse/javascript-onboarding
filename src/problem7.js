class ErrorCase {
  constructor(user, friends, visitors) {
    this.user = user;
    this.friends = friends;
    this.visitors = visitors;
    this.checkAllError();
  }

  checkUserLimit() {
    return 1 <= this.user.length && this.user.length <= 30;
  }

  checkUserLower() {
    return this.user.match(/[a-z]/g).length === this.user.length;
  }

  checkUser() {
    return this.checkUserLimit() && this.checkUserLower();
  }

  checkFriendsLimit() {
    return 1 <= this.friends.length && this.friends.length <= 10000;
  }

  checkFriendsIDLimit() {
    return this.friends
      .flatMap((friend) => friend)
      .every((friend) => 1 <= friend.length && friend.length <= 30);
  }

  checkFriendIDListLimit() {
    return this.friends.every((friend) => friend.length === 2);
  }

  checkFriends() {
    return (
      this.checkFriendsLimit() &&
      this.checkFriendsIDLimit() &&
      this.checkFriendIDListLimit()
    );
  }

  checkVisitorsLimit() {
    return 0 <= this.visitors.length && this.visitors.length <= 10000;
  }

  checkAllError() {
    if (!this.checkUser()) {
      throw new Error("input 양식 중 user값에 오류가 발생하였습니다.");
    }

    if (!this.checkFriends()) {
      throw new Error("input 양식 중 friends값에 오류가 발생하였습니다.");
    }

    if (!this.checkVisitorsLimit()) {
      throw new Error("input 양식 중 visitor값에 오류가 발생하였습니다.");
    }
  }
}

class SNSAlgorithm {
  constructor(user, friends, visitors) {
    new ErrorCase(user, friends, visitors);

    this.user = user;
    this.friends = friends;
    this.visitors = visitors;

    this.scoreBoard = this.makeScoreBoard();
    this.friendGraph = this.makeFriendGraph();
    this.notRecommandList = this.getNotRecommandList();
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

  getNotRecommandList() {
    return [this.user, ...this.friendGraph.get(this.user)];
  }

  isFriend(person) {
    return new Set([...this.getNotRecommandList()]).has(person);
  }

  scroeFriendToFriend() {
    [...this.friendGraph.get(this.user)]
      .flatMap((friend) => [...this.friendGraph.get(friend)])
      .filter((person) => !this.isFriend(person))
      .forEach((person) => (this.scoreBoard[person] += 10));
  }

  scroeVisitor() {
    this.visitors
      .filter((person) => !this.isFriend(person))
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
