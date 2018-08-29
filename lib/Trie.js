import Node from "./Node.js";

export default class Trie {
  constructor() {
    this.wordCount = 0;
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;
    let lettersArray = [...string];

    this.insertAgain(lettersArray, currentNode, string);
    this.wordCount++;
  }

  insertAgain(lettersArray, currentNode, string) {
    if (!lettersArray.length) {
      currentNode.end = true;
      currentNode.finalWord = string;
      return;
    }

    if (currentNode.children[lettersArray[0]]) {
      currentNode = currentNode.children[lettersArray.shift()];
    } else {
      currentNode.children[lettersArray[0]] = new Node();
      currentNode = currentNode.children[lettersArray.shift()];
    }

    return this.insertAgain(lettersArray, currentNode, string);
  }

  suggest(prefix) {
    let completeMe = [...prefix];
    let currentNode = this.root;

    while(completeMe.length) {
      if (currentNode.children[completeMe[0]]) {
        currentNode = currentNode.children[completeMe.shift()];
      } else {
        return;
      }
    };

    if (currentNode.finalWord = null) {
      currentNode = currentNode.children;
    }
    }
  }
 
}




