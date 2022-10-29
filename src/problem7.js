/*
 * -- 기능 목록 --
 * 1. 친구 목록과 관련된 모든 정보를 다루는 객체의 생성자 함수 FriendDictionary
 * 2. FriendDictionary의 내부 메소드
 *   2.1 friends와 visitors 정보로 친구 관계, 방문 점수를 추가해 사전을 초기 세팅하는 메소드 - init
 *   2.2 두 명을 서로 친구 관계로 추가하는 메소드 - addLink
 *   2.3 유저 이름을 받아, 해당 유저의 사전 데이터를 활용해 5명의 추천 친구 목록을 반환하는 메소드 - getRecommendList(user)
 *   2.4 정렬 조건에 맞게 비교해주는 내부 비교 함수 - compare
 */

function FriendDictionary() {
  this.friendList = {};
  this.recommendUsers = {};

  // 점수는 내림차순, 이름은 오름차순으로 정렬하는 비교 함수
  this.compare = ([nameA, scoreA], [nameB, scoreB]) => {
    if (scoreA !== scoreB) {
      return scoreB - scoreA;
    }
    return nameA > nameB ? 1 : -1;
  };

  this.addLink = ([targetName, friendName]) => {
    if (this.friendList[targetName]) {
      this.friendList[targetName].push(friendName);
    } else {
      this.friendList[targetName] = [friendName];
    }
  };

  this.init = (friends, visitors) => {
    friends.forEach(([firstUser, secondUser]) => {
      this.addLink([firstUser, secondUser]);
      this.addLink([secondUser, firstUser]);
    });

    for (let visitor of visitors) {
      if (this.recommendUsers[visitor]) {
        this.recommendUsers[visitor] += 1;
      } else {
        this.recommendUsers[visitor] = 1;
      }
    }
  };

  this.getRecommendList = (user) => {
    const userFriendList = this.friendList[user];

    // user의 친구 목록을 돌며 recommendUsers에 이미 있다면 점수를 올리고, 없다면 초기화
    for (let userFriend of userFriendList) {
      this.friendList[userFriend].forEach((friend) => {
        if (this.recommendUsers[friend]) {
          this.recommendUsers[friend] += 10;
        } else {
          this.recommendUsers[friend] = 10;
        }
      });
    }

    const recommendUserList = Object.entries(this.recommendUsers)
      .filter(([name]) => !(userFriendList.includes(name) || name == user))
      .sort(this.compare)
      .map(([name]) => name)
      .slice(0, 5);

    return recommendUserList;
  };
}

function problem7(user, friends, visitors) {
  const friendDictionary = new FriendDictionary();
  friendDictionary.init(friends, visitors);

  const recommendUserList = friendDictionary.getRecommendList(user);

  return recommendUserList;
}

module.exports = problem7;
