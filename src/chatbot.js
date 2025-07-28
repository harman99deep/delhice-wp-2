document.getElementById("chat-toggle").onclick = () => {
  const chat = document.getElementById("chat-container");
  chat.style.display = chat.style.display === "none" ? "block" : "none";
};

document.getElementById("chat-input").addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    const input = e.target;
    const message = input.value;
    if (!message.trim()) return;
    
    showMessage("You", message);
    input.value = "";

    const res = await fetch("/.netlify/functions/chatbot", {
      method: "POST",
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    showMessage("Bot", data.reply);
  }
});

function showMessage(sender, text) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  document.getElementById("chat-messages").appendChild(msg);
}