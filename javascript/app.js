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

//This will print the results in the locations we've called it in the function above.
//Which is our unordered list.

function fizzBuzz(answer){
	for(i = 0; i <= answer; i++){
		if(i % 3===0 && i % 5===0){
			$('ul').append('Fizzbuzz!');
		}else if(i % 3===0){
			$('ul').append('Fizz!');
		}else if(i % 5===0){
			$('ul').append('Buzz!');
		}else{
			$('ul').append(i);
		}
		$('ul').append('<br/>');
	}
}
fizzBuzz();