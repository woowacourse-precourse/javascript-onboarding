function problem6(forms) {
  var answer = [];

  const studentNames = forms.map((v) => v[1]);

  studentNames.forEach((word) => {
    [...word].forEach((alphbet, index) => {
      if (word.length - 1 === index) return; // 다음거
      const duplicatedName = alphbet + word[index + 1];
    });
  });
}

module.exports = problem6;
