function mincost(arr)
{ 
//write your code here
// return the min cost
	let cost = 0;
	arr.sort((a,b) => a-b);
	while(arr.length > 1){
		const rope1 = arr.shift();
		const rope2 = arr.shift();
		const result = rope1+rope2;
		cost+= result;
		arr.push(cost);
		arr.sort((a,b) => a - b);
		
	}
	return cost;
}

module.exports=mincost;
