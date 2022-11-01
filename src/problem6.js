function problem6(forms) {
  var answer = [];
  const studentEmails = forms.map((v) => v[0]);
  const studentNames = forms.map((v) => v[1]);

  studentNames.forEach((word, studentIndex) => {
    [...word].forEach((alphbet, index) => {
      if (word.length - 1 === index) return;
      const duplicatedName = alphbet + word[index + 1];

      studentNames.forEach((v, i) => {
        if (i === studentIndex) return;
        if (answer.includes(studentEmails[i])) return;

        const reg = new RegExp(duplicatedName, "gi");

        if (reg.test(v)) answer.push(studentEmails[i]);
      });
    });
  });

  return answer.sort();
}

module.exports = problem6;
