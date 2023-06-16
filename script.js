function threeSum(arr, target) {
// write your code here
	let b =[];

    while(a>0)
    {
        let rem = a%2;
        b.unshift(rem);
        a = Math.floor(a/2);
    }
    console.log(b.join(""));
  
}

module.exports = threeSum;
