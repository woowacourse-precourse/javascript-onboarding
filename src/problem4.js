class Converter {
  constructor(sentence) {
    const smalls = 'abcdefghijklmnopqrstuvwxyz';
    const caps = smalls.toUpperCase();

    let smallsArr = [...smalls];
    let capsArr = [...caps];

    const revSmallsArr = smallsArr.map((x, i, a) => a[a.length - i - 1]);
    const revCapsArr = capsArr.map((x, i, a) => a[a.length - i - 1]);

    let sentenceArr = [...sentence];
    let revSentenceArr = sentenceArr.map((x, i, a) => {
      if (smallsArr.indexOf(x) !== -1) {
        let index = smallsArr.indexOf(x);
        return revSmallsArr[index]
      }
      else if (capsArr.indexOf(x) !== -1) {
        let index = capsArr.indexOf(x);
        return revCapsArr[index]
      }
      else {
        return x;
      }
    })
    this.input = sentence;
    this.elements = revSentenceArr;
    this.result = revSentenceArr.join('');
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
  get valid() {
    let length = this.lengthChecker(this.input, 1, 1000);
    if (length) {
      return true
    }
    else {
      return false
    }
  }
}

function problem4(word) {
  var answer;
  let convertInfo = new Converter(word);
  // console.log(convertInfo)

  if (convertInfo.valid) {
    answer = convertInfo.result;
  }
  else {
    // alert('invalid input');
    answer = 'invalid input';
  }
  return answer;
}

module.exports = problem4;
