$(document).ready(function(){
	$('#submit').on('click',function(e){
		e.preventDefault();
		var fizzNumber = +$('#fizzNumber').val();

		// Validate an empty unordered list.
		if (!$('ul').is(':empty')) $('ul').html('');

		// make sure span is empty.
		if (!$('span').is(':empty')) $('span').html('');

		// check if the number is an integer
		if (fizzNumber % 1 === 0){
			fizzBuzz(fizzNumber);
		}else {
			$('span').append('Input must be an integer');
		}
	});
});

function fizzBuzz(){
	for(i = 0; i <= 100; i++){
		if(i % 3===0 && i % 5===0){
			console.log("Fizzbuzz!");
		}else if(i % 3===0){
			console.log("Fizz!");
		}else if(i % 5===0){
			console.log("Buzz!");
		}else{
			console.log(i);
		}
	}
}
fizzBuzz();