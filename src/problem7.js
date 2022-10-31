function problem7(user, friends, visitors) {
  var answer;

  makeRelations(user, friends, visitors);

  return answer;
}

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
