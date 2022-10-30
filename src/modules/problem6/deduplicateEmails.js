function deduplicateEmails(emails) {
  return [...new Set(emails)].sort();
}

module.exports = deduplicateEmails;
