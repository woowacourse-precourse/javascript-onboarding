const getKeywords = require("./modules/problem6/getKeywords.js");
const deduplicateEmails = require("./modules/problem6/deduplicateEmails.js");

function problem6(forms) {
  const bannedWords = new Map();
  const emails = [];

  for (const [email, nickname] of forms) {
    if (nickname.length < 2) continue;

    for (const keyword of getKeywords(nickname)) {
      if (!bannedWords.has(keyword)) {
        bannedWords.set(keyword, email);
      } else {
        emails.push(email);
        emails.push(bannedWords.get(keyword));
      }
    }
  }
  return deduplicateEmails(emails);
}

module.exports = problem6;
