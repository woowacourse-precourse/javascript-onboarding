const relationship={};
const score={};

function problem7(user, friends, visitors) {
  relationshipLoad(friends);

  const userFriends=relationship[user];
  sameFriendScoreCount(userFriends);
  visitScoreCount(visitors);
  deleteInfo(user,userFriends);

  let sortTable=[];
  sortFriends(sortTable);

  return sortTable.map((finalName)=>finalName[0]);
};

function relationshipLoad(friends) {
  friends.forEach((name)=> {
    relationship[name[0]] ? relationship[name[0]].add(name[1]) : relationship[name[0]]=new Set([name[1]]);
    relationship[name[1]] ? relationship[name[1]].add(name[0]) : relationship[name[1]]=new Set([name[0]]);
  });
};

function sameFriendScoreCount(userFriends) {
  Object.entries(relationship).forEach((eachlInfo)=> {
    score[eachlInfo[0]]=[...eachlInfo[1]].filter(x => userFriends.has(x)).size*10
  });
};

function visitScoreCount(visitors) {
  visitors.forEach((visitorName) => {
    score[visitorName]=(score[visitorName]|0)+1
  });
};

function deleteInfo(user,userFriends) {
  delete score[user];
  for (let eachUserFriend of userFriends) {
    delete score[eachUserFriend]
  };
};

function sortFriends(sortTable) {
  for (let member of Object.keys(score)) {
    if (score[member]!==0) sortTable.push([member,score[member]]);
  };

  sortTable.sort((a,b)=> {
    return (a[1]!==b[1]) ? b[1]-a[1] : (a[0]>b[0] ? 1 : -1)
  });
};

module.exports = problem7;
