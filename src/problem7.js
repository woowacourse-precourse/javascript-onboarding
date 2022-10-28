const userInfo={};
const userScore={};

function problem7(user, friends, visitors) {
  relationshipLoad(friends);

  const userFriends=userInfo[user];
  sameFriendScoreCount(userFriends);
  visitScoreCount(visitors);
  deleteInfo(user,userFriends);

  let sortTable=[];
  sortFriends(sortTable);

  return sortTable.map((finalName)=>finalName[0]);
};

function relationshipLoad(friendsName) {
  friendsName.forEach((name)=> {
    userInfo[name[0]] ? userInfo[name[0]].add(name[1]) : userInfo[name[0]]=new Set([name[1]]);
    userInfo[name[1]] ? userInfo[name[1]].add(name[0]) : userInfo[name[1]]=new Set([name[0]]);
  });
};

function sameFriendScoreCount(userFriends) {
  Object.entries(userInfo).forEach((eachlInfo)=> {
    userScore[eachlInfo[0]]=new Set([...eachlInfo[1]].filter(x => userFriends.has(x))).size*10
  });
};

function visitScoreCount(visitors) {
  visitors.forEach((visit) => {
    userScore[visit]=(userScore[visit]|0)+1
  });
};

function deleteInfo(user,userFriends) {
  delete userScore[user];
  for (let userFriend of userFriends) {
    delete userScore[userFriend]
  };
};

function sortFriends(sortTable) {
  for (let member of Object.keys(userScore)) {
    if (userScore[member]!==0) sortTable.push([member,userScore[member]]);
  };

  sortTable.sort((a,b)=> {
    return (a[1]!==b[1]) ? b[1]-a[1] : (a[0]>b[0] ? 1 : -1)
  });
};

module.exports = problem7;
