function problem7(user, friends, visitors) {
  function createInfo(eachFriend, idx) {
    eachFriend.forEach((friend) => {
      let [name1, name2] = friend;
      friend.forEach((name) => {
        if (!idIndexInfo[name]) {
          idIndexInfo[name] = idx;
          friendsInfo.push([]);
          friendsScore.push(0);
          idx += 1;
        }
      });
      friendsInfo[idIndexInfo[name1]].push(name2);
      friendsInfo[idIndexInfo[name2]].push(name1);
    });
    return idx;
  }

  function cntScore(visitorsInfo, idx) {
    visitorsInfo.forEach((visitor) => {
      if (!idIndexInfo[visitor]) {
        idIndexInfo[visitor] = idx;
        friendsInfo.push([]);
        friendsScore.push(0);
      }
      let num = idIndexInfo[visitor];
      friendsScore[num] += 1;
    });
  }

  function cntKnowScore(USER) {
    let nearFriends = friendsInfo[idIndexInfo[USER]];
    nearFriends.forEach((nearName) => {
      let farFriends = friendsInfo[idIndexInfo[nearName]];
      farFriends.forEach((target) => {
        friendsScore[idIndexInfo[target]] += 10;
      });
    });
  }

  function sortList(beforeSortList) {
    const afterSortList = beforeSortList.sort((a, b) => {
      let [curScore, preScore] = [b[0], a[0]];
      let [curName, preName] = [b[1], a[1]];
      if (curScore > preScore) return 1;
      if (curScore < preScore) return -1;
      if (curName > preName) return -1;
      if (curName < preName) return 1;
    });
    return afterSortList;
  }

  function makeResult(Score, Friends) {
    let [tmpList, alreadyFriendIdx, result] = [[], [], []];
    Friends.forEach((friend) => {
      alreadyFriendIdx.push(idIndexInfo[friend]);
    });
    for (let i = 2; i < Score.length; i++) {
      if (alreadyFriendIdx.includes(i)) continue;
      if (Score[i] !== 0) {
        tmpList.push([Score[i], i]);
      }
    }
    const sortedList = sortList(tmpList);
    const memberList = Object.keys(idIndexInfo);
    sortedList.forEach((userIdx) => {
      result.push(memberList[userIdx[1] - 1]);
    });

    return result;
  }

  let idIndexInfo = {};
  let friendsInfo = [[], []];
  let friendsScore = [0, 0];
  let i = 1;
  idIndexInfo[user] = i;
  i = createInfo(friends, i + 1);
  cntScore(visitors, i);
  cntKnowScore(user);
  let nowFriends = friendsInfo[1];
  let answer = makeResult(friendsScore, nowFriends);
  answer = answer.slice(0, 5);
  return answer;
}

module.exports = problem7;
