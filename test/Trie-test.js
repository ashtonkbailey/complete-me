import { assert } from 'chai';
import Trie from "../lib/Trie.js"
import fs from 'fs';

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

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
    assert.deepEqual(Object.keys(prefixTrie.root.children), ['m', 'a', 'i'])
  })

  it('should be able to suggest completed word list based on user input', () => {
    var prefixTrie = new Trie();

    prefixTrie.insert('hello');
    prefixTrie.insert('hellen');
    assert.deepEqual(prefixTrie.suggest('he'), [ 'hello', 'hellen']);
  })

  it('should be able to take the dictionary', () => {
    var prefixTrie = new Trie();

    prefixTrie.populate(dictionary);

    prefixTrie.count();
    assert.equal(prefixTrie.count(), 235886)
  })
})