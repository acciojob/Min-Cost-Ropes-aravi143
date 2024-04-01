function mincost(arr)
{ 
//write your code here
// return the min cost
	let s = arr.sort;
	let n = s.lenght;
	let sum = 0;
	for(let i= 0; i <= n -1 ; i++){
		if(arr[i] > 0){
			sum = 2 * arr[i];
		}
		return sum;
	} 
}

module.exports=mincost;
