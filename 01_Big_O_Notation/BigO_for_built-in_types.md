### BigO for built-in data structures in JS.

## Objective:

- Understand how objects and arrays work, through the lens oof Big O
- Explain why adding elemens to the beginnnig of an array is costly
- Compare and contrast the runtime for arrays and oobjects as well as built-in methods.

# Objects - Unordered, key value pairs. Use when yoou need fast access/insertion and removal.

# Key features:

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(1)

# Object methods:

- Object.keys - O(N)
- Object.values - O(N)
- Object.entries - O(N)
- hasOwnProperty = O(1)

---

# Arrays - Ordered lists. When you need order; Use when yoou need fast access/insertion and removal (sort of).

# Key features:

- Insertion - it depends. O(1) if push(), O(N) if shift();
- Removal - it depends. O(1) if pop(), O(N) if unshift();
- Searching - O(N)
- Access - O(1)

# Array methods:

- push - O(1)
- pop - O(1)
- shift - O(N)
- unshift - O(N)
- concat - O(N)
- slice - O(N)
- splice - O(N)
- sort - O(N \* log N)
- forEach, map,filter,reduce,etc - O(N)
