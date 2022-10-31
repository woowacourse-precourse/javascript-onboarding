function problem7(user, friends, visitors) {
  var answer;

  makeRelations(user, friends, visitors);
  exceptFriendsInVisotor(visitors);
  calculateVisitor(visitors);
  calculateFriend(friends, user);
  return answer;
}

const calculateVisitor = (visitors) => {
  visitors.map((e) => {
    checkScore(e, 1);
  });
};

const checkScore = (personName, score) => {
  Object.keys(recommendationlist).find((key) =>
    recommendationlist[key].name === personName
      ? (recommendationlist[key].score += score)
      : null
  );
};

const calculateFriend = (friends, user) => {
  friends.map((e) => {
    frinedList.map((alreadyFriend) => {
      if (alreadyFriend == e[0]) {
        checkScore(e[1], 10);
      } else if (alreadyFriend == e[1]) {
        checkScore(e[0], 10);
      }
    });
  });
};

const exceptFriendsInVisotor = (visitors) => {
  let deleteIdx = [];
  visitors.map((visitor, vIdx) => {
    frinedList.map((friend) => {
      friend == visitor ? deleteIdx.push(vIdx) : null;
    });
  });
  deleteIdx.reverse().map((e) => {
    visitors.splice(e, 1);
  });
};

const makeRelations = (user, friends, visitors) => {
  let list1 = [];
  let list2 = [];
  friends.map((e) => {
    if (e[0] === user) {
      frinedList.push(e[1]);
    } else if (e[1] === user) {
      frinedList.push(e[0]);
    } else {
      list1.push(e[0]);
      list2.push(e[1]);
    }
  });
  inputPerson(list1);
  inputPerson(list2);
  inputPerson(visitors);
  checkFrinds();
};

const inputPerson = (people) => {
  people.map((val) => {
    let flag = 0;
    let person = {
      name: val,
      score: 0,
    };
    if (recommendationlist.length === 0) {
      recommendationlist.push(person);
      flag = 1;
    } else {
      recommendationlist.map((e) => {
        e.name == person.name ? (flag = 1) : null;
      });
    }

    flag === 1 ? null : recommendationlist.push(person);
  });
};

const checkFrinds = () => {
  let deleteIdx = [];
  recommendationlist.map((recommendPerson, idx) => {
    frinedList.map((friend) => {
      friend == recommendPerson.name ? deleteIdx.push(idx) : null;
    });
  });
  deleteIdx
    .sort()
    .reverse()
    .map((e) => {
      recommendationlist.splice(e, 1);
    });
};

module.exports = problem7;
