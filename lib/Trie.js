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
    let finalArray = [];

    while (completeMe.length) {
      if (currentNode.children[completeMe[0]]) {
        currentNode = currentNode.children[completeMe.shift()];
      } else {
        return;
      }
    }

    this.suggestAgain(currentNode, finalArray);

    return finalArray;
  }

  count() {
    return this.wordCount;
  }

  suggestAgain(currentNode, finalArray) {
    if (Object.keys(currentNode.children).length > 1) {
      let keysArray = Object.keys(currentNode.children);
      let checkpoint = currentNode;

      keysArray.forEach((key) => {
        currentNode = checkpoint;
        currentNode = currentNode.children[key];
        this.suggestAgain(currentNode, finalArray);
      })
    } else {
      if (!currentNode.end) {
        let key = Object.keys(currentNode.children);

        currentNode = currentNode.children[key];
        this.suggestAgain(currentNode, finalArray);
      } else {        
        finalArray.push(currentNode.finalWord);
        currentNode.end = !currentNode.end;

        let key = Object.keys(currentNode.children);
        
        if (key.length >= 1) {
          this.suggestAgain(currentNode, finalArray);
        };
        currentNode.end = !currentNode.end;
      }
    }
  }

  populate(array) {
    array.forEach((word) => {
      this.insert(word);
    });
  }

}




