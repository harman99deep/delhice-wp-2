// DOM Elements
const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");

const initialMessage = "Hi there! 👋 Ask me anything about our cakes, orders, or Delhice!";

const HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium";
const HUGGINGFACE_API_KEY = "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"; // 🔐 Replace this with your real token

// Open chat
chatToggle.addEventListener("click", () => {
  const isOpen = chatWindow.style.display === "block";
  chatWindow.style.display = isOpen ? "none" : "block";
  if (!isOpen && chatMessages.children.length === 0) {
    appendMessage("bot", initialMessage);
  }
  if (!isOpen) chatInput.focus();
});

// Handle Enter press
chatInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter" && chatInput.value.trim() !== "") {
    const userMessage = chatInput.value.trim();
    appendMessage("user", userMessage);
    chatInput.value = "";
    chatInput.disabled = true;

    try {
      const botMessage = await fetchBotReply(userMessage);
      appendMessage("bot", botMessage);
    } catch (err) {
      appendMessage("bot", "Sorry, I couldn't connect to our AI right now.");
      console.error(err);
    } finally {
      chatInput.disabled = false;
      chatInput.focus();
    }
  }
});

function appendMessage(sender, message) {
  const msg = document.createElement("div");
  msg.className = sender === "user" ? "user-msg" : "bot-msg";
  msg.textContent = message;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function fetchBotReply(prompt) {
  const response = await fetch(HUGGINGFACE_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: prompt })
  });

  const data = await response.json();

  // Handle Hugging Face error response
  if (data.error) {
    console.error("Hugging Face Error:", data.error);
    return "Sorry, something went wrong with my brain 🤖.";
  }

  return data.generated_text || "Hmm... I didn't catch that.";
}
