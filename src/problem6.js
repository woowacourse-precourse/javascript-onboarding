function problem6(forms) {
  const map = new Map();
  for (let i = 0; i < forms.length; i++) {
    map.set(forms[i][1], forms[i][0]);
  }
  const names = [...map.keys()];

  let a = 0;
  const collided = [];
  const visited = [];
  while (a < names.length) {
    for (let i = 0; i < names[a].length - 1; i++) {
      const linkedName = names[a][i] + names[a][i + 1];
      if (visited.includes(linkedName)) {
        if (!collided.includes(linkedName)) {
          collided.push(linkedName);
        }
      } else {
        visited.push(linkedName);
      }
    }
    a++;
  }

  const searchedNames = Search(collided, names);
  const answer = [];
  searchedNames.forEach((val) => {
    answer.push(map.get(val));
  });

  return SortEmail(answer);
}

function SortEmail(input) {
  input.sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt());
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i][0] === input[i + 1][0]) {
      const length = input[i].length > input[i + 1].length ? input[i + 1].length : input[i].length;

      for (let j = 0; j < length; j++) {
        if (input[i][j] !== input[i + 1][j]) {
          if (input[i][j].charCodeAt() > input[i + 1][j].charCodeAt()) {
            const copy = input[i];
            input[i] = input[i + 1];
            input[i + 1] = copy;
          }
        }
      }
    }
  }
  return input;
}

function Search(input, list) {
  const name = [];
  input.forEach((val) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].includes(val)) {
        name.push(list[i]);
      }
    }
  });
  return name;
}

module.exports = problem6;
