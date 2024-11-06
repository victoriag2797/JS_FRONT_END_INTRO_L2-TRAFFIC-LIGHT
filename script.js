//Use query Selectors to get the class of all the button shapes
const redLight = document.querySelector('.red-light');
const yellowLight = document.querySelector('.yellow-light');
const greenLight = document.querySelector('.green-light');
const allLights = document.querySelector('.all-lights')

//Use getElementById which allows us to get the ID so that we can add an event listener to the buttons, listen for a click and then set the color via css properties.
const redSwitch = document.getElementById('red-switch');
const yellowSwitch = document.getElementById('yellow-switch');
const greenSwitch = document.getElementById('green-switch');
const allLightsSwitch = document.getElementById('all-lights-switch');

//Add event listeners that listen for a button click
redSwitch.addEventListener('click', () => {
    redLight.style.backgroundColor = 'red';
})
yellowSwitch.addEventListener('click', () => {
    yellowLight.style.backgroundColor = 'yellow';
})
greenSwitch.addEventListener('click', () => {
    greenLight.style.backgroundColor = 'green';
})

//Turn all lights on and off with their specific buttons
redSwitch.addEventListener('click', () => {
    redLight.style.backgroundColor = 'red';
})
yellowSwitch.addEventListener('click', () => {
    yellowLight.style.backgroundColor = 'yellow';
})
greenSwitch.addEventListener('click', () => {
    greenLight.style.backgroundColor = 'green';
})
//Party Mode Button

//Turn all lights on and off at once with a single button
allLightsSwitch.addEventListener('click', () => {
    redLight.style.backgroundColor = 'red';
    yellowLight.style.backgroundColor = 'yellow';
    greenLight.style.backgroundColor = 'green';
})