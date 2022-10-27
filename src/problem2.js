function problem2(cryptogram) {
  const seperate_string = [...cryptogram];
  for (let i = 0; i < seperate_string.length; i++) {
    remove_duplication(seperate_string);
    if (seperate_string[0] === seperate_string[1]) return "";
  }
  return seperate_string.join("");
}

function remove_duplication(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      return arr;
    }
  }
}

module.exports = problem2;
