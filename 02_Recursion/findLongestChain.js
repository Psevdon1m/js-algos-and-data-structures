const data = {
  prop1: 42,
  prop2: {
    prop21: {
      prop211: "hello",
      prop212: {
        prop2121: {
          prop21211: "world",
        },
      },
    },
    prop22: "foo",
  },
  prop3: {
    prop31: {
      prop311: {
        prop3111: {
          prop31111: "bar",
        },
      },
    },
  },
};

/**
 * Finds the longest chain of nested objects within the given data object
 * and returns the value of the last object in the chain along with the chain's length.
 *
 * @param {Object} obj - The input data object to traverse.
 * @returns {{lastObj: any, maxLength: number}} - An object containing the value of the last object
 *                                              in the longest chain and the length of the chain.
 */

function findLongestChain(obj) {
  let maxLength = 0;
  let lastObj = null;

  /**
   * Recursive function to traverse the nested objects and find the longest chain.
   *
   * @param {Object} obj - The current object being traversed.
   * @param {number} length - The length of the current chain.
   * @returns {void}
   */

  function traverse(obj, length) {
    if (typeof obj === "object" && obj !== null) {
      for (let key in obj) {
        traverse(obj[key], length + 1);
      }
    } else if (length > maxLength) {
      maxLength = length;
      lastObj = obj;
    }
  }
  traverse(obj, 0);
  return { lastObj, maxLength };
}

const result = findLongestChain(data);
console.log(
  "Value of the last object in the longest chain:",
  result.lastObj,
  " Max length is: ",
  result.maxLength
);
