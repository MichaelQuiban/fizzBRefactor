$(document).ready(function() {
	$('#submit').on('click', function(e) {
		e.preventDefault();
		var number = +$('#query').val();
 
		// make sure section is empty before clearing
		if (!$('section').is(':empty')) $('section').html('');

		// make sure span is empty before clearing message
		if (!$('span').is(':empty')) $('span').html('');

		// check if number is integer
		if (number % 1 === 0) {
			appendFizzBuzz(number);
		} else {
			$('span').append('Input must be an integer.');
		}

	});
});