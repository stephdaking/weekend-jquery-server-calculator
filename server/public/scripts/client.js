$(onReady);

function onReady() {
	// console.log('We are ready');
	$('.nineButton').on('click', clickNine);
	$('.eightButton').on('click', clickEight);
	$('.sevenButton').on('click', clickSeven);
	$('.sixButton').on('click', clickSix);
	$('.fiveButton').on('click', clickFive);
	$('.fourButton').on('click', clickFour);
	$('.threeButton').on('click', clickThree);
	$('.twoButton').on('click', clickTwo);
	$('.oneButton').on('click', clickOne);
	$('.zeroButton').on('click', clickZero);
	$('.equalButton').on('click', clickEqual);
	$('.subtractButton').on('click', clickSubtract);
	$('.addButton').on('click', clickAdd);
	$('.divideButton').on('click', clickDivide);
	$('.multiplyButton').on('click', clickMultiply);
	$('.dotButton').on('click', clickDot);
	$('.clearButton').on('click', clickClear);
	$(document).on('click', 'li', handleRerun);
	getCalculations();
}

//? get value of input field
//? update input field with number or symbol that was clicked
//? click listener for each button
//? equal button is like a submit button
//? clear button should clear input and add that info to the ul
//? should do a post request when you click enter
//? post request should add an object to the server that gets added to the array
//? maybe send back the request (req.body) and display the response to the dom instead of looping through a response array
//? update the calculated field on the dom. that should also be stored on the server in that object

let operator = '';

function getCalculations() {
	// console.log('In get calculations');
	$.ajax({
		type: 'GET',
		url: '/calculations',
	})
		.then(function (response) {
			// console.log(response);
			renderToDom(response);
		})
		.catch(function (error) {
			// console.log(error);
		});
}

function renderToDom(serverInfo) {
	$('.pastCalculations').empty();
	for (let i of serverInfo) {
		$('.pastCalculations').append(`
			<li>${i.num1} ${i.operator} ${i.num2} = ${i.answer}</li>
		`);
		$('.totalNumber').text(`Answer: ${i.answer}`);
	}
}

function clickNine() {
	// console.log('Clicked nine');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}9`);
	} else {
		$('.numberInput').val(`9`);
	}
}

function clickEight() {
	// console.log('Clicked eight');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}8`);
	} else {
		$('.numberInput').val(`8`);
	}
}

function clickSeven() {
	// console.log('Clicked seven');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}7`);
	} else {
		$('.numberInput').val(`7`);
	}
}

function clickSix() {
	// console.log('Clicked six');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}6`);
	} else {
		$('.numberInput').val(`6`);
	}
}

function clickFive() {
	// console.log('Clicked five');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}5`);
	} else {
		$('.numberInput').val(`5`);
	}
}

function clickFour() {
	// console.log('Clicked four');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}4`);
	} else {
		$('.numberInput').val(`4`);
	}
}

function clickThree() {
	// console.log('Clicked three');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}3`);
	} else {
		$('.numberInput').val(`3`);
	}
}

function clickTwo() {
	// console.log('Clicked two');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}2`);
	} else {
		$('.numberInput').val(`2`);
	}
}

function clickOne() {
	// console.log('Clicked one');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}1`);
	} else {
		$('.numberInput').val(`1`);
	}
}

function clickZero() {
	// console.log('Clicked zero');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}0`);
	} else {
		$('.numberInput').val(`0`);
	}
}

function clickEqual() {
	// console.log('Clicked equal');
	//? somehow get the input and store it in an object
	//? send it over to the server
	//? do the math somehow on the server
	//? server send it back when we do a get request
	//? append data to dom by doing response.length - 1??? instead of loop
	let finalNumbers = $('.numberInput').val();
	console.log('Final Inputs:', finalNumbers);
	let newArray = finalNumbers.split(operator);

	let mathObj = {
		num1: newArray[0],
		num2: newArray[1],
		operator: operator,
	};

	if (operator === '') {
		return alert('Need to have a operator (+, -, *, /)');
	} else {
		console.log(mathObj);

		$.ajax({
			type: 'POST',
			url: '/calculations',
			data: mathObj,
		})
			.then(function (response) {
				console.log(response);
				getCalculations(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	operator = '';
}

function clickSubtract() {
	// console.log('Clicked subtract');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}-`);
	}
	operator = '-';
}

function clickAdd() {
	// console.log('Clicked add');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}+`);
	}
	operator = '+';
}

function clickDivide() {
	// console.log('Clicked divide');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}/`);
	}
	operator = '/';
}

function clickMultiply() {
	// console.log('Clicked multiple');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}*`);
	}
	operator = '*';
}

function clickDot() {
	// console.log('Clicked dot');
	let inputField = $('.numberInput').val();
	if (inputField !== '' && inputField !== undefined) {
		$('.numberInput').val(`${inputField}.`);
	} else {
		$('.numberInput').val(`.`);
	}
}

function clickClear() {
	// console.log('Clicked clear');
	$('.numberInput').val('');
	$('.totalNumber').html(`Answer:`);
}

function handleRerun() {
	let reRun = $(this).data('calculation');
	$('.numberInput').val(`${reRun}`);
}
