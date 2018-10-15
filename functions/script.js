function changeBGColor(){
	let color = prompt('What\'s is your favorite color?');
	document.body.bgColor = color;
}

/*-------------------------------------------------------------------------*/
function multiply(num1, num2){
	return num1 * num2;
}

function displayCalculation(){
	let num1 = document.getElementById('num1').value;
	let num2 = document.getElementById('num2').value;
	document.getElementById('answerText').innerHTML = 'The answer is ' + multiply(num1, num2);
}


/*-------------------------------------------------------------------------*/
function changeUserName(){
	let userName = document.getElementById('userName').value;
	document.getElementById('nameText').innerHTML = 'Hey ' + userName + ', how are you doing';
}


/*-------------------------------------------------------------------------*/
let myClicks = 0;
function increaseMyClicks(){
	myClicks++;
	document.getElementById('clicksDisplay').innerHTML = 'You clicked ' + myClicks + ' times';
}


/*-------------------------------------------------------------------------*/
function hoverImg(){
	document.getElementById('pic').src = 'https://media.tenor.com/images/280f0d77f1e99fe2df3abb6cb788ac44/tenor.gif';
}

function leaveImg(){
	document.getElementById('pic').src = 'https://media.giphy.com/media/3o6gaZiWBQbZw7MBUI/giphy.gif';
}