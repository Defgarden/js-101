function problem_1 () {
	// body...
	var arg = document.getElementById("multiplesInput").value;
	var sum = 0;

	for(i = 0; i < arg; i++){
		if (i % 3 == 0 || i % 5 == 0){
			sum = sum + i;
		}
	}
	alert("The sum of all multiples of 3 or 5 below " + arg + " is: " + sum);

}

function problem_2 () {
	// body...
	var arg = document.getElementById("fibonacciInput").value;

	var first_num 	= 1;
	var second_num 	= 2;
	var sum 		= first_num + second_num;
	var total_sum	= 2;

	while(sum < arg){
		if(sum % 2 == 0){
			total_sum = total_sum + sum;
		}

		first_num = second_num;
		second_num = sum;
		sum = first_num + second_num;
	}
	if(arg > 1){
		alert("The sum of the even numbers in a Fibonacci sequence not exceeding " + arg + " is: " + total_sum);
	}
	else{
		alert("The sum of the even numbers in a Fibonacci sequence not exceeding " + arg + " is: 0");
	}
	
}

function problem_3 () {
	// body...
	var arg = document.getElementById("primeInput").value;
}