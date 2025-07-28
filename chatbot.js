const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');

let conversationHistory = [];

chatToggle.addEventListener('click', () => {
  chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
});

chatInput.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter' && chatInput.value.trim() !== '') {
    const userMessage = chatInput.value.trim();
    chatInput.value = '';
    addMessage('You', userMessage);

    const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer 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',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: {
          past_user_inputs: conversationHistory,
          generated_responses: [],
          text: userMessage
        }
      }),
    });

    const data = await response.json();
    const botMessage = data.generated_text || "Sorry, I couldn't respond.";
    addMessage('Bot', botMessage);
    conversationHistory.push(userMessage);
  }
});

function addMessage(sender, text) {
  const msg = document.createElement('div');
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}