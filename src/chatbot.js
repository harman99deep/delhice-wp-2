const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatToggle.addEventListener('click', () => {
  chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
});

chatInput.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter' && chatInput.value.trim() !== '') {
    const userMsg = chatInput.value.trim();
    addMessage('You', userMsg);
    chatInput.value = '';

    try {
      const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer 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',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: {
            text: userMsg,
          },
        }),
      });

      const result = await response.json();
      const reply = result.generated_text || "I'm not sure how to respond to that.";
      addMessage('Bot', reply);
    } catch (error) {
      addMessage('Bot', "Sorry, I couldn't connect to Hugging Face.");
    }
  }
});

function addMessage(sender, message) {
  const msgDiv = document.createElement('div');
  msgDiv.textContent = `${sender}: ${message}`;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
