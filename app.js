// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// make a variable for the button, the input, and the name div
const nameInput = document.getElementById('name-input');
const updateButton = document.getElementById('update-btn');
const nameDiv = document.getElementById('name');
updateButton.addEventListener('click', () => {
    console.log ('clicking');
    const value = nameInput.value;
    console.log(value);
    nameDiv.textContent = value;


});