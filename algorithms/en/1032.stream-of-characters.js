// Implement the StreamChecker class as follows:

// StreamChecker(words): Constructor, init the data structure with the given words.
// query(letter): returns true if and only if for some k >= 1, the last k characters queried (in order from oldest to newest, including this letter just queried) spell one of the words in the given list.

// Example:

// StreamChecker streamChecker = new StreamChecker(["cd","f","kl"]); // init the dictionary.
// streamChecker.query('a');          // return false
// streamChecker.query('b');          // return false
// streamChecker.query('c');          // return false
// streamChecker.query('d');          // return true, because 'cd' is in the wordlist
// streamChecker.query('e');          // return false
// streamChecker.query('f');          // return true, because 'f' is in the wordlist
// streamChecker.query('g');          // return false
// streamChecker.query('h');          // return false
// streamChecker.query('i');          // return false
// streamChecker.query('j');          // return false
// streamChecker.query('k');          // return false
// streamChecker.query('l');          // return true, because 'kl' is in the wordlist

// Note:

// 1 <= words.length <= 2000
// 1 <= words[i].length <= 2000
// Words will only consist of lowercase English letters.
// Queries will only consist of lowercase English letters.
// The number of queries is at most 40000.
class Trie extends Map {
  constructor() {
    super();
    this.isEnd = false;
  }

  insert(word) {
    let current = this;
    for (let i = word.length - 1; i >= 0; i -= 1) {
      const ch = word[i];
      if (!current.has(ch)) {
        current.set(ch, new this.constructor());
      }
      current = current.get(ch);
    }
    current.isEnd = true;
  }
}

/**
 * @param {string[]} words
 */
const StreamChecker = function StreamChecker(words) {
  this.trie = new Trie();
  this.cache = '';

  for (const word of words) {
    this.trie.insert(word);
  }
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function query(letter) {
  this.cache += letter;
  let cur = this.trie;
  for (let i = this.cache.length - 1; i >= 0; i -= 1) {
    const ch = this.cache[i];
    if (!cur.has(ch)) {
      return false;
    }
    cur = cur.get(ch);
    if (cur.isEnd) {
      return true;
    }
  }
  return false;
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
