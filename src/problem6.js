function TrieNode() {
  this.children = {};
}

function Trie() {
  this.root = new TrieNode();
  this.overLapped = new Set();
}

Trie.prototype.insert = function (form) {
  const [email, nickname] = form;
  nickname
    .split('')
    .filter((_, index) => index !== nickname.length - 1)
    .forEach((el, index) => {
      const word = el + nickname[index + 1];
      this.checkWord(word, email);
    });
};

Trie.prototype.checkWord = function (word, email) {
  const settedEmail = this.root.children[word[0]]?.[word[1]];
  if (settedEmail) {
    this.overLapped.add(email);
    this.overLapped.add(settedEmail);
  } else {
    if (!this.root.children[word[0]]) {
      this.root.children[word[0]] = {};
    }
    this.root.children[word[0]][word[1]] = email;
  }
};

Trie.prototype.getSortedOverLapped = function () {
  const sortedOverLapped = Array.from(this.overLapped.values());
  return sortedOverLapped.sort();
};

const checkRightForm = (forms) => {
  const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  for (const form of forms) {
    const [email, nickname] = form;
    let isKorean = true;
    //예외사항2
    if (email.length < 11 || email.length >= 20) return false;
    //예외사항3
    if (email.split('@')[1] !== 'email.com') return false;
    //예외사항4
    if (nickname.length < 1 || nickname.length >= 20) return false;
    //예외사항5
    nickname.split('').forEach((element) => {
      if (!korean.test(element)) isKorean = false;
    });
    if (!isKorean) return false;
  }
  return true;
};

function problem6(forms) {
  //예외사항1
  if (forms.length < 1 || forms.length > 10000) return 'ERROR';
  //예외사항 나머지 종합
  if (!checkRightForm(forms)) return 'ERROR';

  const trie = new Trie();

  for (const form of forms) {
    trie.insert(form);
  }

  return trie.getSortedOverLapped();
}

module.exports = problem6;
