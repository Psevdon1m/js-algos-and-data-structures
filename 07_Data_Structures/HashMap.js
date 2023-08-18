/**
 * @class HashMap
 * @classdesc A simple implementation of a hash map data structure.
 * @param {number} size - The initial size of the hash map. Defaults to 53.
 */

class HashMap {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  /**
   * Generates a hash value for a given key.
   * @private
   * @param {string} value - The key to be hashed.
   * @returns {number} The hash value.
   */

  _hash(value) {
    let total = 0;
    const PRIME_NUMBER = 31; // better use odd values than event
    for (let i = 0; i < Math.min(value.length, 100); i++) {
      let char = value[i];
      let code = char.charCodeAt(0) - 96;
      total = (total * PRIME_NUMBER + code) % this.keyMap.length;
    }
    return total;
  }

  /**
   * Adds a key-value pair to the hash map.
   * @param {string} key - The key for the value.
   * @param {any} value - The value associated with the key.
   */

  set(key, value) {
    let hashMapId = this._hash(key);
    if (!this.keyMap[hashMapId]) this.keyMap[hashMapId] = [[key, value]];
    else this.keyMap[hashMapId].push([key, value]);
  }

  /**
   * Retrieves the value associated with a given key.
   * @param {string} key - The key to search for.
   * @returns {any|null} The value associated with the key, or null if not found.
   */

  get(key) {
    let hashMapId = this._hash(key);

    if (!this.keyMap[hashMapId] || !this.keyMap[hashMapId].length) return null;
    else if (this.keyMap[hashMapId].length === 1)
      return this.keyMap[hashMapId][0][1];
    else {
      return this.keyMap[hashMapId].find((el) => el[0] === key)[1];
    }
  }

  /**
   * Retrieves an array of all keys in the hash map.
   * @returns {string[]} An array of keys.
   */

  keys() {
    let results = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!results.includes(this.keyMap[i][j][0])) {
            results.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return results;
  }

  /**
   * Retrieves an array of all values in the hash map.
   * @returns {any[]} An array of values.
   */

  values() {
    let results = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!results.includes(this.keyMap[i][j][1])) {
            results.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return results;
  }
}

let hashMap = new HashMap();
hashMap.set("one", "1");
hashMap.set("two", "2");
hashMap.set("three", "3");
hashMap.set("four", "4");
hashMap.set("five", "5");
hashMap.set("six", "6");
hashMap.set("seven", "7");
hashMap.set("eight", "8");
hashMap.set("nine", "9");
hashMap.set("ten", "10");

console.log(hashMap.values());
console.log(hashMap.keys());
