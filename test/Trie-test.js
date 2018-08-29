import { assert } from 'chai';
import Trie from "../lib/Trie.js"

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  })

  it('should be able to take in words', () => {
    var prefixTrie = new Trie();

    prefixTrie.insert('hello');
  })

  it('should count how many words it has', () => {
    var prefixTrie = new Trie();

    assert.equal(prefixTrie.wordCount, 0);
    prefixTrie.insert('hello');
    assert.equal(prefixTrie.wordCount, 1)
  })

  it('should be able to take in multiple words', () => {
    var prefixTrie = new Trie();

    prefixTrie.insert('mambo');
    prefixTrie.insert('animus');
    prefixTrie.insert('iota');
    console.log(JSON.stringify(prefixTrie, null, 3));
    assert.deepEqual(Object.keys(prefixTrie.root.children), ['m', 'a', 'i'])
  })

  // it('should be able to suggest ', () => {
  //   var prefixTrie = new Trie();

  //   prefixTrie.insert('hello');
  //   prefixTrie.insert('hellen');
  //   prefixTrie.suggest('he');
  //   // assert.
  // })
})