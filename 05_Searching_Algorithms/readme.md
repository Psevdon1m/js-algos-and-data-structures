# Linear Search

The easies way to search for an iterm in array. You just loop through the array and copare value, once values match - return index. Otherwise return -1 if element is not in array. (How .find or .includes work?)

# Binary Search O(log n) due to chosing half of examined array each step.

You utilize divide and conquer approach but it can be applied only to sorted array. Define start, middle and end points, then checi if look up value is greater or less than middle, and work with a part from start to mid or mid to end array. Continue until you find a value or start !== end.

# Naive String Search
