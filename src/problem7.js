function problem7(user, friends, visitors) {
  //utils
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
    nickNames.forEach((nickName) => {
      if (!NICKNAME_REGEX.test(nickName)) {
        throw new Error(
          '모든 user의 닉네임은 1이상 30이하의 알파벳 소문자이여야 합니다.'
        );
      }
    });
  };

  const checkFriendsValid = (friends) => {
    if (
      friends.length < MIN_FREINDS_LENGTH ||
      friends.length > MAX_FREINDS_LENGTH
    ) {
      throw new Error('friends는 길이가 1이상 10,000 이하인 배열이여야 합니다');
    }
  };

  const checkVistorsValid = (visitors) => {
    if (visitors.length === 0) {
      return;
    }
    if (visitors.length > MAX_FREINDS_LENGTH) {
      throw new Error(
        'visitors는 길이가 0이상 10,000 이하인 배열이여야 합니다'
      );
    }
  };

  //data structure
  class SNS {
    constructor(usersFriendRelation, visitors) {
      this.usersFriendRelation = usersFriendRelation;
      this.userList = usersFriendRelation.flat().concat(visitors);
      this.visitors = visitors;
    }

    getUserMap() {
      const userMap = new Map();
      this.usersFriendRelation.forEach((relation) => {
        const userId1 = relation[0];
        const userId2 = relation[1];
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
      });

      visitors.forEach((visitor) => {
        if (userMap.get(visitor) === undefined) {
          const visitorObject = new User(visitor);
          userMap.set(visitor, visitorObject);
        }
      });
      return userMap;
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
        (user) => !userFriends.includes(user) && user !== 'mrko'
      );
      userNotFriends.forEach((candidate) => {
        scoreBoard.set(candidate, 0);
      });

      this.recommandationScoreBoard = scoreBoard;
      return this;
    }

    analyzeIndrectRelation() {
      //FIXME: userFriendsList 등 기본자료 initBoard()와 중복
      const scoreBoard = this.recommandationScoreBoard;
      const candidates = [...scoreBoard.keys()].filter((candidate) => {
        return this.userMap.get(candidate).friends.length !== 0;
      });
      candidates.forEach((candidate) => {
        const candidatesFriendList = this.userMap.get(candidate).friends;
        const userFriendList = this.user.friends;
        const intersection = candidatesFriendList.filter((user) =>
          userFriendList.includes(user)
        );
        scoreBoard.set(
          candidate,
          scoreBoard.get(candidate) + 10 * intersection.length
        );
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
      const recommandationLsit = [...board.keys()]
        .sort()
        .sort((a, b) => board.get(b) - board.get(a))
        .slice(0, 5);
      return recommandationLsit;
    }
  }

  //error handle
  checkValid(user, friends, visitors);

  //data handle
  const sns = new SNS(friends, visitors);
  snsUserMap = sns.getUserMap();

  //recommandation system handle
  const userRecommandationSystem = new UserRecommandationSystem(
    user,
    snsUserMap
  );
  const result = userRecommandationSystem
    .initBoard()
    .analyzeIndrectRelation()
    .analyzeVistors(visitors)
    .representRecommandation();
  return result;
}

module.exports = problem7;
