const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");

chatToggle.addEventListener("click", () => {
  chatWindow.style.display = chatWindow.style.display === "block" ? "none" : "block";
});

chatInput.addEventListener("keypress", async (e) => {
  if (e.key === "Enter" && chatInput.value.trim() !== "") {
    const userInput = chatInput.value.trim();
    appendMessage("user", userInput);
    chatInput.value = "";

    try {
      const botResponse = await queryHuggingFace(userInput);
      appendMessage("bot", botResponse);
    } catch (err) {
      appendMessage("bot", "Sorry, something went wrong.");
      console.error(err);
    }
  }
});

function appendMessage(sender, message) {
  const msgDiv = document.createElement("div");
  msgDiv.className = sender === "user" ? "user-msg" : "bot-msg";
  msgDiv.textContent = message;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function queryHuggingFace(prompt) {
  const response = await fetch("https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium", {
    method: "POST",
    headers: {
      Authorization: "Bearer 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", // 🔐 Replace with your token
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: prompt })
  });

  const data = await response.json();
  return data.generated_text || (data[0]?.generated_text) || "No response.";
}
