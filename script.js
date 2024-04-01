function mincost(arr)
{ 
//write your code here
// return the min cost
	  let cost = 0;

  // Sort the array of rope lengths in ascending order
  arr.sort((a, b) => a - b);

  // Continue until there's only one rope left in the array
  while (arr.length > 1) {
    // Take the two shortest ropes
    const rope1 = arr.shift(); // Remove the first element (shortest rope)
    const rope2 = arr.shift(); // Remove the second element (second shortest rope)

    // Connect the ropes and add the result back to the array
    const newRope = rope1 + rope2;
    cost += newRope;
    // Insert the new rope back into the sorted array
    arr.push(newRope);
    // Re-sort the array (since we added a new element)
    arr.sort((a, b) => a - b);
  }

  return cost;
}

module.exports=mincost;
