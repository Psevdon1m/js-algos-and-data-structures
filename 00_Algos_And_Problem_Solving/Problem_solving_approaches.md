1. Divise a plan for solviing problems
2. Master commoon problem solviing patters

Steps to solve any problem:

1. Understand the Problem
2. Expore Concrete Examples
3. Break It Down
4. Solve/Simplify
5. Look Back and Refactor

# 1. Understand the Problem

- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
- What are the outputs that should come from the solution to the problem?
- Can the outputs be determined from the inputs? In other wordsd do I have enough info to solve the problem? (I may not be able to aswer this question until I set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
- How should I lable the important pieces of data that are a part of the problem? What really meaters in this problem.

Example: Write a function which takes two numbers and returns their sum.
Following the plan:

1. "Implement addition"
2. Not that easy as numbers may be veery big. If the numbers are too big, we may use strings and BigInts
3. should the result be a string, number or decimal?
4. what happends if user pass 1 argument?
5. decide on function name, its argument names and what are there for, and result name of this function.

# 2. Expore Concrete Examples.

Comming up with examples can help you understand the problem better. Examples also provide sanity checcks that youor eventual solutioon works how it should.

- Start with Simple Examples
- Progress to More Complex Examples
- Explore Examples with Empty Inputs
- Explore Examples with Invalid Inputs
-

Example: Write a function which takes in a string and returns counds of each character in the string.

1. charCount('aaa' // {a: 4})
2. if input has numbers, how do we act? what about spaces, lower case and upper case handled differently?
3. charCount("") - what to return
4. charCount(false) - what are the edge cases? (for real world)

# 3. Break It Down

Explicitly write out actual steps before writing code.

Example: Write a function which takes in a string and returns counds of each character in the string.
function charCount(str){
// make object to return at end
//loop over string, for each car
//-- if the char is number / letter AND a key in obj, add to count,
//-- else if char is number / letter AND is not in object, set value to 1
// return an object of alphanumeric chars lowercased; values should be incremented based on letter appearance
}

# 4. Solve/Simplify

Solve a problem if you can, but if you cannot, try to simplify it/ or part of it. Try to ignore the part that is hard for you.

- Find the core difficulty in what you are trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

# 5. Look Back and Refactor

- Can yoou check the result?
- Can you derive the result differently (other solution approaches)
- Can you understant it at a glance?
- Can you use the result or methods for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor? Spacing, follows style guide, naming conventions.
- How have other people solved this problem?
