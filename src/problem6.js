function problem6(forms) {
  let a = forms.filter(v => v[1].includes('제이')).sort();
  let b = a.reduce((a,c) => a.concat(c));
  return b.filter(v => !v.includes('제이'));
}

module.exports = problem6;
