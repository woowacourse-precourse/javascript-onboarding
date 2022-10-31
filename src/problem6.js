function findOverlap(forms) {
  var names = [];
  var overlapNames = [];
  var nowName;
  var temp;

  forms.forEach((element) => {
    names = names.concat(element[1]);
  });

  for (let i = 0; i < names.length; i++) {
    nowName = String(names.splice(i, 1));
    for (let j = 0; j < nowName.length - 1; j++) {
      temp = nowName[j] + nowName[j + 1];
      names.forEach((element) => {
        if (element.includes(temp) === true) overlapNames.push(element);
      });
    }
    names.splice(i, 0, String(nowName));
  }

  overlapNames = [...new Set(overlapNames)];
  console.log(overlapNames);
}

function problem6(forms) {
  var answer;
  findOverlap(forms);
  return answer;
}

module.exports = problem6;
