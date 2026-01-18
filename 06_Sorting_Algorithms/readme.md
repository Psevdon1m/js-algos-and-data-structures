# Sorting Algos

# Elementary, bad , less efficient: buble, selection, insersion sorts.

# 1. Bubble sort, not widely used, only has one case when it shines. O(N)(with noSwap var check optimization) in best scenarious, in general it is (N\*\*2). Good candidate for when you know that data is nearly sorted.

Main idea: The idea is to bubble up greater values. So we compare always 2 values, and one that is larger we put to the right, (like bubbling), smaller to the left. And dont swap if values like 29 30. Larger value is alreayd on the right side.
Algo steps:

- Start looping with the variable i = to the end of the array and go to the start of the array
- Start inner loop with the variable j = 0 to end of the array but until i-1
- if arr[j] > arr[j+1] - we swap these values
- return the sorted array.

# 2. Selection sort, similar to bubble sort but instead of first placing LARGER values into sorted position (to an end), it places SMALLER values into sorted positions. Key difference is that we first find a min value until we reach end of the array for first i, and only then swap i with the lowest value, while in buble sort we were potentially swappinig on each iterations. O(n\*\*2) since we have 2 loops that go to end of the array. Its only positive side is that has lower amount of swaps compared to bubble sort. As we swap once per outer loop cycle. THIS IS THE WORST O(N) because even for best cases it still has O(N\*\*2)

Algo steps:

- Store first value in array to be a current_min
- have a second loop starting from i+1 and check if cur_min < new_min. Update cur_min if new_min < cur_min.
- once the inner loop finishes, swap i with cur_min index and increment i;

# 3. Insertion sort, similar to buble and selection sort. Builds up the sort by gradually creating a larger left half which is always sorted. Same O(n\*\*2) as in previous but also works good with almost sorted arrays. Insertion works well with incoming data and you need to resort previosly sorted array. It just inserts new element with one loop.

- Start by picking the second element in arrr
- compare the second el with one before it and swap if necessary
- continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
- repeat until the array is sorted(or end of the array)

### SPACE COMPLAXITY FOR ALL THESE ALGOS IS O(1). OTHER MORE ADVANCED ALGOS WILL NOT HAVE CONSTANT SPACE COMPLEXITY.

=======================================================================================================================================

# Intermediate Sorting Algos

# Better sorting algos with better Big O complixity, usually O(n logn).

# Merge Sort | Space Complex - O(N) | Time Complex (Best, avg, worst) - O(n log n) -> the best what sorting algs can do, exept for radix sort but it works with numbers only.

Main ideas:

- it's a combination of two thins - merging and sorting
- it exploits the fact that arrays of 0 or 1 element are always sorted
- works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

Algo steps (helper fn for merging two sorted arrays):

- In oorder to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
- Given two arrays which are sorted, thhhis helper function should create a new array which iis alsoo sorted and consists of all of the elements in the two input arrays.
- this function shoould run in O(n+m) time and O(n+m)space and should not moify the parameters pa ssed to it.

Pseudo-code for merger:

- create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at...
  ... - If the value in the first arr is smaller that the value in the second array, push the value iin the first array into ouot results and move on to the next value in the first array.
  ... - if the alue in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value iin the second array.
  ... - Once we exhaust one array, push in all remaining values fromo the other array.

Pseudo-code for mergeSort function.

- Break up array into halves until yoou have arrays that are empty or have one element
- create left part of array and make a recursive call to split left part into 1 el arrays, then merge them into sorted array.
- create right part of array and make a recursive call to split right part into 1 el arrays, then merge them into sorted array.
- finally merge left and right sorted arrays
