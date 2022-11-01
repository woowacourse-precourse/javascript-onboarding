function checkIdLength(arr) {
  let i = 0;
  let result;
  arr = arr.flat();
  while (i < arr.length) {
    if (arr[i].length >= 1 && arr[i].length <= 30) {
      i++;
      result = true;
    }
  }
  return result;
}

function findDuplicate(arr) {
  let i = 0;
  while (i < arr.length) {
    let possiblyDuplicates = arr.filter((item, index) => item.includes(arr[i][0]) && index !== arr.indexOf(arr[i]));
    possiblyDuplicates = possiblyDuplicates.filter(item => item.includes(arr[i][1]));
    i++;
    if (possiblyDuplicates.length === 0) {
      return true;
    } else if (possiblyDuplicates !== 0) {
      return false;
  }
}
}

function findFriends(arr, person) {
  let i = 0;
  let personFriends = [];
  while (i < arr.length) {
    if (arr[i].includes(person)) {
      personFriends.push(arr[i]);
    }
    i++;
  }
  personFriends = personFriends.flat().filter(element => element !== person);
  return personFriends;
}

function problem7(user, friends, visitors) {
  
}

module.exports = problem7;
