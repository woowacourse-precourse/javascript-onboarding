class AccountManager {

  /**
   * 두 글자 중복 판별을 위한 depth 2 트라이
   * Leaf node에는 두 글자를 선점한 이메일이 저장됨
   * @type {Object.<string, Object.<string, string>>}
   */
  #trie = {}

  /**
   * 닉네임이 중복된 이메일들이 저장된다.
   * @type {Set.<string>}
   */
  #duplicatedEmails = new Set()

  /**
   * 이메일을 주체로 특정 두 단어를 선점
   * @param {string} email
   * @param {string} word
   */
  #markWord(email, word) {
    const [ch1, ch2] = word;
    const otherEmail = this.#trie[ch1]?.[ch2];

    // 두 글자를 선점한 이메일이 없는 경우
    if (!otherEmail) {
      if (!this.#trie[ch1]) this.#trie[ch1] = {};

      this.#trie[ch1][ch2] = email;
      return;
    }

    // 두 글자를 선점한 이메일이 있는 경우
    this.#duplicatedEmails.add(otherEmail);
    this.#duplicatedEmails.add(email);
  }

  /**
   * 회원의 이메일과 닉네임을 등록한다.
   * @param {[string, string]} form 회원의 이메일, 닉네임 배열
   */
  submit(form) {
    const [email, nickname] = form;

    // 닉네임의 모든 두 글자에 대해 수행
    // 제이엠씨 -> 제이, 이엠, 엠씨
    nickname
      .split('')
      .filter((_, index) => index !== nickname.length - 1)
      .forEach((_, index) => {
        const word = nickname[index] + nickname[index + 1];

        this.#markWord(email, word);
      });
  }

  /**
   * 중복된 닉네임을 가진 이메일의 목록을 반환한다.
   * @returns {string[]} 정렬되어 있는 이메일 리스트
   */
  get duplicatedEmails() {
    const emails = Array.from(this.#duplicatedEmails.values());
    emails.sort();
    return emails;
  }
}

/**
 * 문제 6번의 입력으로, 이메일과 닉네임의 리스트가 주어지면
 * 두 글자 이상 중복된 닉네임을 가진 이메일을 추출하여
 * 반환한다.
 * @param {[string, string][]} forms 이메일과 닉네임의 리스트
 * @returns {string[]} 정렬되어 있는 이메일 리스트
 */
function problem6(forms) {
  const manager = new AccountManager();

  forms.forEach(form => manager.submit(form));

  return manager.duplicatedEmails;
}

module.exports = problem6;
