const fizzbuzz = (i) => {
	var n = [i%3,i%5];
	if((n[0] == 0) && (n[1] == 0))
			console.log(`fizzbuzz ${i}`);
	else if(n[0] == 0)
			console.log(`fizz ${i}`);
	else if(n[1] == 0)
			console.log(`buzz ${i}`);
	else
			console.log(i);
	return i += 1;
}
var i = 1;
while(i<102)
	i = fizzbuzz(i);
