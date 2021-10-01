//Daytime and Nighttime mode for Website
let hour = new Date().getHours();

if (hour >= 20 || hour < 6) {
	const background = document.querySelector('body');
	background.style.backgroundImage = "url('https://i.redd.it/amfzanxbvw621.png')";
	background.style.color = 'white';

	const nav = document.querySelectorAll('nav > a');
  
  	nav[0].className = 'dark'; 
  	nav[1].className = 'dark'; 
  	nav[2].className = 'dark';
  	nav[3].className = 'dark';
  	nav[4].className = 'dark';

  	const footer = document.querySelector('footer > p > a');
  	footer.className = 'dark';
}
else {
	const background = document.querySelector('body');
	background.style.backgroundImage = "url('https://i.imgur.com/UmQ1rsW.jpg')";
	background.style.color = 'black';
}

//Ambience mode via a button
let button = document.querySelector('button');
let mainElements = document.querySelector('main');

//Removes all elements in main by setting opacity equal to 0
function removeMain() {
  mainElements.style.opacity = '0';
}

//Removes opacity of all elements in main
function resetOpacity() {
  mainElements.style.opacity = '1';
}

button.addEventListener('click', removeMain);

button.addEventListener('dblclick', resetOpacity);