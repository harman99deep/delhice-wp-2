// Enhanced chatbot.js with bakery context and better UX

// DOM Elements
const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");

// Bakery-specific responses and context
const bakeryContext = {
  businessName: "Delhice By Sanya Singh",
  location: "Suncity Arcade, Sec-54, Gurugram, Haryana",
  phone: "+91 9717295102",
  email: "treats@delhice.com",
  hours: "Monday - Sunday: 11:00 AM - 6:00 PM",
  instagram: "@delhicebysanyasingh",
  specialties: ["Bento Cakes", "Frosted Cakes", "Cupcakes", "Cookies", "Tea Cakes", "Brownies", "Tiramisu"],
  orderAdvance: "24-48 hours",
  
  responses: {
    greeting: [
      "Hi there! 👋 Welcome to Delhice! I'm here to help you with our delicious cakes and treats. What can I help you with today?",
      "Hello! 🍰 Thanks for visiting Delhice! I can help you with our menu, orders, or any questions about our bakery.",
      "Hey! 😊 Welcome to Delhice By Sanya Singh! How can I make your day sweeter?"
    ],
    
    menu: [
      "We have amazing options! 🎂 Our specialties include:\n• Bento Cakes (₹700-750)\n• Frosted Cakes (₹890-1900)\n• Cupcakes (₹750-900)\n• Cookies (₹350)\n• Tea Cakes (₹450)\n• Special items like Tiramisu & Brownies\n\nWhat catches your eye?",
      "Our menu is full of delicious treats! 🧁 We're famous for our fresh bento cakes, beautiful frosted cakes, and artisanal cupcakes. All made with premium ingredients!"
    ],
    
    order: [
      "I'd love to help you place an order! 📝 Here's what you need to know:\n• Order 24-48 hours in advance\n• Call us at +91 9717295102\n• Or fill out our order form on the website\n• We'll confirm details and pricing with you\n\nWhat would you like to order?",
      "Placing an order is easy! 🎉 Just give us a call at +91 9717295102 or use our online order form. We need 1-2 days advance notice for fresh preparation."
    ],
    
    pricing: [
      "Here are our current prices! 💰\n• Bento Cakes: ₹700-750\n• Frosted Cakes: ₹890-1900\n• Cupcakes (pack of 6): ₹750-900\n• Cookies (pack of 6): ₹350\n• Tea Cakes: ₹450\n• Specialties: ₹800-1200\n\nCustomization and delivery charges are extra!"
    ],
    
    contact: [
      "You can reach us easily! 📞\n• Phone: +91 9717295102\n• Email: treats@delhice.com\n• Location: Suncity Arcade, Sec-54, Gurugram\n• Instagram: @delhicebysanyasingh\n• Hours: 11 AM - 6 PM daily\n\nWe're here to help!"
    ],
    
    flavors: [
      "We have so many delicious flavors! 🌈\n• Chocolate: Belgian, Choco-Berry, Mocha, Choco-Orange\n• Classic: Vanilla, Pineapple, Lotus Biscoff\n• Special: Loaded Berry, Salted Caramel\n• Custom flavors available on request!\n\nWhat's your favorite?"
    ],
    
    default: [
      "I'm here to help with anything about Delhice! 🍰 Ask me about our menu, pricing, orders, or contact info.",
      "Not sure I understand, but I'm happy to help! Try asking about our cakes, prices, or how to place an order.",
      "Let me help you with that! I can tell you about our delicious treats, prices, or how to get in touch with us."
    ]
  }
};

// Initialize chat
let chatHistory = [];
const initialMessage = bakeryContext.responses.greeting[0];

// Smart response system
function generateResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Greeting detection
  if (message.match(/^(hi|hello|hey|good morning|good evening)/)) {
    return getRandomResponse('greeting');
  }
  
  // Menu inquiries
  if (message.match(/(menu|cake|cupcake|bento|frosted|cookie|treat|dessert|sweet|what do you have|options)/)) {
    return getRandomResponse('menu');
  }
  
  // Order inquiries
  if (message.match(/(order|buy|purchase|get|want|need|book|reserve)/)) {
    return getRandomResponse('order');
  }
  
  // Pricing inquiries
  if (message.match(/(price|cost|rate|charge|expensive|cheap|budget|₹|rupees|money)/)) {
    return getRandomResponse('pricing');
  }
  
  // Contact inquiries
  if (message.match(/(contact|phone|call|address|location|where|reach|email|instagram)/)) {
    return getRandomResponse('contact');
  }
  
  // Flavor inquiries
  if (message.match(/(flavor|flavour|taste|chocolate|vanilla|berry|caramel)/)) {
    return getRandomResponse('flavors');
  }
  
  // Time/delivery inquiries
  if (message.match(/(time|when|hour|delivery|advance|notice|ready)/)) {
    return `We need 24-48 hours advance notice for orders! ⏰ This ensures everything is baked fresh just for you. Our hours are 11 AM - 6 PM daily. Call us at ${bakeryContext.phone} to discuss timing!`;
  }
  
  // Location inquiries
  if (message.match(/(where|location|address|find|visit)/)) {
    return `We're located at ${bakeryContext.location}! 📍 You can find us on Google Maps too. We're open 11 AM - 6 PM daily. Come visit us!`;
  }
  
  // Custom cake inquiries
  if (message.match(/(custom|special|personalized|design|message|decoration)/)) {
    return `We love creating custom cakes! 🎨 We can add personal messages, special decorations, and custom designs. Call us at ${bakeryContext.phone} to discuss your vision - we'll make it perfect!`;
  }
  
  // Default response
  return getRandomResponse('default');
}

function getRandomResponse(category) {
  const responses = bakeryContext.responses[category];
  return responses[Math.floor(Math.random() * responses.length)];
}

// Enhanced UI functions
function appendMessage(sender, message) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender === "user" ? "user-msg" : "bot-msg"}`;
  
  if (sender === "bot") {
    // Add typing indicator first
    showTypingIndicator();
    
    setTimeout(() => {
      hideTypingIndicator();
      
      // Create message with avatar and better styling
      messageDiv.innerHTML = `
        <div class="message-content">
          <div class="message-avatar">🍰</div>
          <div class="message-text">${message}</div>
        </div>
      `;
      
      chatMessages.appendChild(messageDiv);
      
      // Animate message in
      messageDiv.style.opacity = '0';
      messageDiv.style.transform = 'translateY(10px)';
      setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
      }, 50);
      
      scrollToBottom();
    }, 1000 + Math.random() * 1000); // Realistic typing delay
    
  } else {
    messageDiv.innerHTML = `
      <div class="message-content user">
        <div class="message-text">${message}</div>
        <div class="message-avatar user">👤</div>
      </div>
    `;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
  }
}

function showTypingIndicator() {
  const existingIndicator = document.querySelector('.typing-indicator');
  if (existingIndicator) return;
  
  const typingDiv = document.createElement("div");
  typingDiv.className = "typing-indicator";
  typingDiv.innerHTML = `
    <div class="message-content">
      <div class="message-avatar">🍰</div>
      <div class="typing-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;
  chatMessages.appendChild(typingDiv);
  scrollToBottom();
}

function hideTypingIndicator() {
  const indicator = document.querySelector('.typing-indicator');
  if (indicator) {
    indicator.remove();
  }
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listeners
chatToggle.addEventListener("click", () => {
  const isOpen = chatWindow.style.display === "flex";
  
  if (isOpen) {
    chatWindow.style.display = "none";
    chatToggle.innerHTML = "💬";
  } else {
    chatWindow.style.display = "flex";
    chatToggle.innerHTML = "✖️";
    
    // Show initial message if first time opening
    if (chatMessages.children.length === 0) {
      setTimeout(() => appendMessage("bot", initialMessage), 500);
    }
    
    chatInput.focus();
  }
});

// Enhanced input handling
chatInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter" && chatInput.value.trim() !== "") {
    const userMessage = chatInput.value.trim();
    
    // Add to history and clear input
    chatHistory.push(userMessage);
    appendMessage("user", userMessage);
    chatInput.value = "";
    chatInput.disabled = true;
    
    try {
      // Generate contextual response
      const botResponse = generateResponse(userMessage);
      appendMessage("bot", botResponse);
      
    } catch (error) {
      console.error("Chat error:", error);
      appendMessage("bot", "Sorry, I had a little hiccup! 😅 Please try asking again, or call us directly at +91 9717295102 for immediate help!");
    } finally {
      chatInput.disabled = false;
      chatInput.focus();
    }
  }
});

// Quick action buttons
function addQuickActions() {
  const quickActions = document.createElement("div");
  quickActions.className = "quick-actions";
  quickActions.innerHTML = `
    <div class="quick-action-title">Quick Questions:</div>
    <button class="quick-btn" onclick="askQuickQuestion('Show me your menu')">📋 Menu</button>
    <button class="quick-btn" onclick="askQuickQuestion('How do I place an order?')">🛒 Order</button>
    <button class="quick-btn" onclick="askQuickQuestion('What are your prices?')">💰 Prices</button>
    <button class="quick-btn" onclick="askQuickQuestion('Contact information')">📞 Contact</button>
  `;
  
  chatMessages.appendChild(quickActions);
}

function askQuickQuestion(question) {
  chatInput.value = question;
  chatInput.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter'}));
}

// Initialize quick actions after initial message
setTimeout(() => {
  if (chatWindow.style.display === "flex" && chatMessages.children.length === 1) {
    addQuickActions();
  }
}, 2000);

// Close chat when clicking outside (mobile)
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768 && 
      chatWindow.style.display === "flex" && 
      !chatWindow.contains(e.target) && 
      !chatToggle.contains(e.target)) {
    chatWindow.style.display = "none";
    chatToggle.innerHTML = "💬";
  }
});

// Improved mobile handling
function handleMobileLayout() {
  if (window.innerWidth <= 768) {
    chatWindow.style.width = '90vw';
    chatWindow.style.height = '70vh';
    chatWindow.style.maxWidth = '350px';
    chatWindow.style.right = '5vw';
  } else {
    chatWindow.style.width = '320px';
    chatWindow.style.height = '400px';
    chatWindow.style.maxWidth = 'none';
    chatWindow.style.right = '0';
  }
}

window.addEventListener('resize', handleMobileLayout);
handleMobileLayout(); // Initial setup