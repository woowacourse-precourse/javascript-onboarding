class UserInfo {
  constructor(arr) {
    this.mail = arr[0];
    this.nick = arr[1];
    this.pairs = new Set([...this.nick].map((x, i, a) => {
      return a[i] + a[i + 1]
    }).slice(0, -1));
  }
  lengthChecker(arr, min, max) {
    if (arr.length >= min && arr.length <= max) {
      return true
    }
    else {
      // alert(`'${a}' length error: only ${min}~${max} characters allowed.`);
      return false
    }
  }
  get mailValid() {
    if (this.lengthChecker(this.mail, 11, 19)) {
      if (/[a-z0-9]+@email.com/.test(this.mail)) {
        return true
      }
    }
    else {
      return false
    }
  }
  get nickValid() {
    if (this.lengthChecker(this.nick, 1, 20)) {
      if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi.test(this.nick)) {
        return true
      }
    }
    else {
      return false
    }
  }
}

class Degeneracy {
  constructor(user1, userInfos) {
    this.user = user1;
    this.usersNum = userInfos.length;
    this.pairs = user1.pairs;
    this.intersection = userInfos.map((x, i, a) => {
      if (user1 === x) {
        return
      }
      else {
        return getIntersection(user1, x);
      }
    }).filter(x => x !== undefined);
    this.degeneracy = this.intersection.map(x => x?.size).reduce((x, y) => x + y);
  }
}

function getIntersection(userInfo1, userInfo2) {
  let set1 = userInfo1.pairs;
  let set2 = userInfo2.pairs;
  let arr1 = [...set1];
  const intersection = new Set(
    arr1.filter(x => set2.has(x))
  );
  return intersection;
}

function problem6(forms) {

  var answer;

  const userInfos = forms.map(x => {
    return new UserInfo(x)
  });

  if (forms.length >= 1 && forms.length <= 10000) {
    let userVaildInfos = userInfos.filter(x => x.mailValid && x.nickValid)
    let degeneracy = [...new Set(userVaildInfos.map((x, i, a) => {
      return new Degeneracy(x, a);
    }))];
    // console.log(denied)

    answer = degeneracy.filter(x => x.degeneracy > 0).map(x => x.user.mail).sort();
  }
  else {
    answer = 'invalid input'
  }
  return answer;
}

module.exports = problem6;
