function problem6(forms) {
  const result = [];
  for (let i = 0; i < forms.length; i++){
    const testCrew = forms.shift();
    if (result.includes(testCrew[0])) continue;
    for (let idx = 0; idx < testCrew[1].length - 1; idx++){
      const testStr = testCrew[1].slice(idx, idx + 2);
    }
  }

}

module.exports = problem6;
