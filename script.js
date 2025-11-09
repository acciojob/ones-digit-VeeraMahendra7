function onesDigit(n) {
  // your code here
	if(n <= 0) return "Not Valid";
	else return n%10;
	
}

// Do not change the code below

const n = parseInt(prompt("Enter Number:"));
alert(onesDigit(n));
