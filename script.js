function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  const messages = document.getElementById('messages');
  
  if (userInput.trim() !== '') {
    messages.innerHTML += `<div class="message">${userInput}</div>`;
  
    // Simulate AI response
    setTimeout(() => {
      messages.innerHTML += `<div class="message">Sorry, I am not able to answer math questions yet.</div>`;
    }, 1000);
  
    document.getElementById('user-input').value = '';
  }
}
