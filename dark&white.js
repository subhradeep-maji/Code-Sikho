// Get the button and add event listener
const toggleButton = document.getElementById('modeToggle');

toggleButton.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle('dark-mode');
  
  // // Update button text based on the current mode
  // if (document.body.classList.contains('dark-mode')) {
  //   toggleButton.textContent = '';
  // } else {
  //   toggleButton.textContent = '';
  // }
});

