function problem2(cryptogram) {
  for(let i = 0; true; i++) {
    const regExp = /aa+|bb+|cc+|dd+|ee+|ff+|gg+|hh+|ii+|jj+|ll+|mm+|nn+|oo+|pp+|qq+|rr+|ss+|tt+|uu+|vv+|ww+|xx+|yy+|zz+/g;
    const result = cryptogram.replace(regExp, '');
    cryptogram = result;
    if(regExp.test(cryptogram) === false) {
      return cryptogram;
    }
  }
}
module.exports = problem2;