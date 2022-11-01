function problem7(user, friends, visitors) {
  const MAX_VISITORS_LENGTH = 10000;
  const MIN_FREINDS_LENGTH = 1;
  const MAX_FREINDS_LENGTH = 10000;
  const NICKNAME_REGEX = /^[a-z]{1,30}$/;

  const checkValid = (user, friends, visitors) => {
    checkNamesValid(user, friends, visitors);
    checkFriendsValid(friends);
    checkVistorsValid(visitors);
  };

  const checkNamesValid = (user, friends, visitors) => {
    const nickNames = [user, ...friends.flat(), ...visitors];
    nickNames.forEach((nickname) => {
      if (!NICKNAME_REGEX.test(nickname)) {
        throw new Error('모든 user의 닉네임은 1이상 30이하의 알파벳 소문자이여야 합니다.');
      }
    });
  };

  const checkFriendsValid = (friends) => {
    if (friends.length < MIN_FREINDS_LENGTH || friends.length > MAX_FREINDS_LENGTH) {
      throw new Error('friends는 길이가 1이상 10,000 이하인 배열이여야 합니다');
    }
  };

  const checkVistorsValid = (visitors) => {
    if (visitors.length === 0) {
      return;
    }
    if (visitors.length > MAX_VISITORS_LENGTH) {
      throw new Error('visitors는 길이가 0이상 10,000 이하인 배열이여야 합니다');
    }
  };

  class SNS {
    constructor(user, friends, visitors) {
      this.user = user;
      this.friends = friends;
      this.userList = friends.flat().concat(visitors);
      this.visitors = visitors;
    }

    getUserMap() {
      const userMap = new Map();
      this.setUserMapByUser(this.user, userMap);
      this.friends.forEach((relation) => {
        this.setUserMapByFriends(relation, userMap);
      });
      this.setUserMapByVisitors(visitors, userMap);
      return userMap;
    }

    setUserMapByUser(user, userMap) {
      const userObject = new User(user);
      userMap.set(this.user, userObject);
    }

    setUserMapByFriends([userId1, userId2], userMap) {
      if (userMap.get(userId1) === undefined) {
        const userObject = new User(userId1);
        userMap.set(userId1, userObject);
      }

      if (userMap.get(userId2) === undefined) {
        const userObject = new User(userId2);
        userMap.set(userId2, userObject);
      }

      const userObject1 = userMap.get(userId1);
      const userObject2 = userMap.get(userId2);
      userObject1.addFriend(userId2);
      userObject2.addFriend(userId1);
      userMap.set(userId1, userObject1);
      userMap.set(userId2, userObject2);
    }

    setUserMapByVisitors(visitors, userMap) {
      visitors.forEach((visitor) => {
        if (userMap.get(visitor) === undefined) {
          const visitorObject = new User(visitor);
          userMap.set(visitor, visitorObject);
        }
      });
    }
  }

  class User {
    constructor(userId) {
      this.id = userId;
      this.friends = [];
    }

    addFriend(friend) {
      this.friends.push(friend);
    }
  }

  class UserRecommandationSystem {
    constructor(userId, userMap) {
      this.user = userMap.get(userId);
      this.userMap = userMap;
      this.recommandationScoreBoard = new Map();
    }

    initBoard() {
      const scoreBoard = new Map();
      const userFriends = this.user.friends;
      const userList = [...this.userMap.keys()];
      const userNotFriends = userList.filter(
        (user) => !userFriends.includes(user) && user !== this.user.id
      );
      userNotFriends.forEach((candidate) => {
        scoreBoard.set(candidate, 0);
      });

      this.recommandationScoreBoard = scoreBoard;
      return this;
    }

    analyzeIndrectRelation() {
      const scoreBoard = this.recommandationScoreBoard;
      const candidates = [...scoreBoard.keys()].filter((candidate) => {
        return this.userMap.get(candidate).friends.length !== 0;
      });

      candidates.forEach((candidate) => {
        const candidatesFriendList = this.userMap.get(candidate).friends;
        const userFriendList = this.user.friends;
        const intersection = candidatesFriendList.filter((user) => userFriendList.includes(user));
        scoreBoard.set(candidate, scoreBoard.get(candidate) + 10 * intersection.length);
      });

      this.recommandationScoreBoard = scoreBoard;
      return this;
    }

    analyzeVistors(visitors) {
      const scoreBoard = this.recommandationScoreBoard;

      visitors.forEach((visitor) => {
        if (scoreBoard.get(visitor) !== undefined) {
          scoreBoard.set(visitor, scoreBoard.get(visitor) + 1);
        }
      });

      this.recommandationScoreBoard = scoreBoard;
      return this;
    }

    representRecommandation() {
      const board = this.recommandationScoreBoard;
      return [...board.keys()]
        .filter((user) => {
          return board.get(user) > 0;
        })
        .sort()
        .sort((a, b) => board.get(b) - board.get(a))
        .slice(0, 5);
    }
  }

  checkValid(user, friends, visitors);

  const sns = new SNS(user, friends, visitors);
  const snsUserMap = sns.getUserMap();
  const userRecommandationSystem = new UserRecommandationSystem(user, snsUserMap);
  const result = userRecommandationSystem
    .initBoard()
    .analyzeIndrectRelation()
    .analyzeVistors(visitors)
    .representRecommandation();
  return result;
}

module.exports = problem7;
