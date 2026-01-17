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
