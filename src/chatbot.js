// Enhanced chatbot.js with mobile optimization and quick actions

// DOM Elements
const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");

// Mobile detection and viewport handling
const isMobile = () => window.innerWidth <= 768;
let originalViewportHeight = window.innerHeight;
let isKeyboardOpen = false;

// Prevent zoom on input focus for mobile
if (isMobile()) {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  }
}

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
      "I'd love to help you place an order! 📝 Here's what you need to know:\n• Order 24-48 hours in advance\n• Call us at +91 9717295102 \n• Or fill out our order form on the website\n• We'll confirm details and pricing with you\n\nWhat would you like to order?",
      "Placing an order is easy! 🎉 Just give us a call at +91 9717295102 or use our online order form. We need 1-2 days advance notice for fresh preparation."
    ],
    
    pricing: [
      "Here are our current prices! 💰\n• Bento Cakes: ₹700-750\n• Frosted Cakes: ₹890-1900\n• Cupcakes (pack of 6): ₹750-900\n• Cookies (pack of 6): ₹350\n• Tea Cakes: ₹450\n• Specialties: ₹800-1200\n\nCustomization and delivery charges are extra!"
    ],
    
    contact: [
      "You can reach us easily! 📞\n• Phone: +91 9717295102 \n• Email: treats@delhice.com \n• Location: Suncity Arcade, Sec-54, Gurugram\n• Instagram: @delhicebysanyasingh\n• Hours: 11 AM - 6 PM daily\n\nWe're here to help!"
    ],
    
    flavors: [
      "We have so many delicious flavors! 🌈\n• Chocolate: Belgian, Choco-Berry, Mocha, Choco-Orange\n• Classic: Vanilla, Pineapple, Lotus Biscoff\n• Special: Loaded Berry, Salted Caramel\n• Custom flavors available on request!\n\nWhat's your favorite?"
    ],
    
    hours: [
      "We're open daily! ⏰\n• Monday - Sunday: 11:00 AM - 6:00 PM\n• Order processing: 24-48 hours advance notice required\n• Same day orders: Call us to check availability\n• We're closed on major holidays\n\nCall us at +91 9717295102 anytime during business hours!"
    ],
    
    delivery: [
      "We offer delivery services! 🚚\n• Delivery available in Gurugram and nearby areas\n• Charges calculated based on distance\n• We ensure safe packaging for fresh delivery\n\nContact us for delivery details to your area!"
    ],
    
    custom: [
      "We love creating custom treats! 🎨\n• Personalized messages and decorations\n• Custom flavors and designs\n• Special dietary requirements (eggless, sugar-free)\n• Corporate orders and bulk quantities\n• Theme-based cakes for celebrations\n\nTell us your vision - we'll make it perfect!"
    ],
    
    default: [
      "I'm here to help with anything about Delhice! 🍰 Ask me about our menu, pricing, orders, or contact info.",
      "Not sure I understand, but I'm happy to help! Try asking about our cakes, prices, or how to place an order.",
      "Let me help you with that! I can tell you about our delicious treats, prices, or how to get in touch with us."
    ]
  }
};

// Quick action buttons configuration
const quickActions = [
  { text: "📋 View Menu", action: "menu", query: "Show me your menu" },
  { text: "🛒 Place Order", action: "order", query: "How do I place an order?" },
  { text: "📞 Contact Info", action: "contact", query: "Contact information" },
  { text: "💰 Pricing", action: "pricing", query: "What are your prices?" },
  { text: "🕒 Hours", action: "hours", query: "What are your opening hours?" },
  { text: "🚚 Delivery", action: "delivery", query: "Do you deliver?" },
  { text: "🎨 Custom Orders", action: "custom", query: "Can you make custom cakes?" },
  { text: "🌈 Flavors", action: "flavors", query: "What flavors do you have?" }
];

// Initialize chat
let chatHistory = [];
let isInitialized = false;
const initialMessage = bakeryContext.responses.greeting[0];

// Mobile keyboard detection
function detectKeyboard() {
  if (!isMobile()) return;

  const handleResize = () => {
    const currentHeight = window.innerHeight;
    const heightDifference = originalViewportHeight - currentHeight;
    
    if (heightDifference > 150) { // Keyboard is likely open
      if (!isKeyboardOpen) {
        isKeyboardOpen = true;
        adjustChatForKeyboard(true);
      }
    } else { // Keyboard is likely closed
      if (isKeyboardOpen) {
        isKeyboardOpen = false;
        adjustChatForKeyboard(false);
      }
    }
  };

  window.addEventListener('resize', handleResize);
  
  // Also listen for input focus/blur
  chatInput.addEventListener('focus', () => {
    setTimeout(() => adjustChatForKeyboard(true), 300);
  });
  
  chatInput.addEventListener('blur', () => {
    setTimeout(() => adjustChatForKeyboard(false), 300);
  });
}

// Adjust chat window for mobile keyboard
function adjustChatForKeyboard(keyboardOpen) {
  if (!isMobile()) return;
  
  const chatWindow = document.getElementById('chat-window');
  
  if (keyboardOpen) {
    chatWindow.style.height = '45vh';
    chatWindow.style.bottom = '5px';
    chatWindow.style.maxHeight = '350px';
    chatWindow.style.left = '10px';
    chatWindow.style.right = '10px';
    chatWindow.style.transform = 'none';
    chatWindow.style.width = 'calc(100vw - 20px)';
  } else {
    chatWindow.style.height = '70vh';
    chatWindow.style.bottom = '65px';
    chatWindow.style.maxHeight = '500px';
    chatWindow.style.left = '10px';
    chatWindow.style.right = '10px';
    chatWindow.style.transform = 'none';
    chatWindow.style.width = 'calc(100vw - 20px)';
  }
  
  // Scroll to bottom after adjustment
  setTimeout(scrollToBottom, 100);
}

// Smart response system
function generateResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Greeting detection
  if (message.match(/^(hi|hello|hey|good morning|good evening|start|begin)/)) {
    return getRandomResponse('greeting');
  }
  
  // Menu inquiries
  if (message.match(/(menu|cake|cupcake|bento|frosted|cookie|treat|dessert|sweet|what do you have|options|items|products)/)) {
    return getRandomResponse('menu');
  }
  
  // Order inquiries
  if (message.match(/(order|buy|purchase|get|want|need|book|reserve|place.*order)/)) {
    return getRandomResponse('order');
  }
  
  // Pricing inquiries
  if (message.match(/(price|cost|rate|charge|expensive|cheap|budget|₹|rupees|money|how much)/)) {
    return getRandomResponse('pricing');
  }
  
  // Contact inquiries
  if (message.match(/(contact|phone|call|address|location|where|reach|email|instagram)/)) {
    return getRandomResponse('contact');
  }
  
  // Flavor inquiries
  if (message.match(/(flavor|flavour|taste|chocolate|vanilla|berry|caramel|what.*flavors)/)) {
    return getRandomResponse('flavors');
  }
  
  // Hours inquiries
  if (message.match(/(hours|time|when.*open|opening.*time|close|timing|schedule)/)) {
    return getRandomResponse('hours');
  }
  
  // Delivery inquiries
  if (message.match(/(deliver|delivery|ship|shipping|send|courier)/)) {
    return getRandomResponse('delivery');
  }
  
  // Custom cake inquiries
  if (message.match(/(custom|special|personalized|design|message|decoration|theme|bespoke)/)) {
    return getRandomResponse('custom');
  }
  
  // Location inquiries
  if (message.match(/(where|location|address|find|visit|directions)/)) {
    return `We're located at ${bakeryContext.location}! 📍 You can find us on Google Maps too. We're open 11 AM - 6 PM daily. Come visit us!`;
  }
  
  // Default response
  return getRandomResponse('default');
}

function getRandomResponse(category) {
  const responses = bakeryContext.responses[category];
  return responses[Math.floor(Math.random() * responses.length)];
}

// Enhanced UI functions
function appendMessage(sender, message, isQuickAction = false) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender === "user" ? "user-msg" : "bot-msg"}`;
  
  if (sender === "bot" && !isQuickAction) {
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
      
      // Add quick actions after bot response
      if (!isInitialized) {
        setTimeout(() => addQuickActionsToChat(), 500);
        isInitialized = true;
      }
      
    }, Math.random() * 1000 + 800); // Realistic typing delay
    
  } else {
    messageDiv.innerHTML = `
      <div class="message-content ${sender === "user" ? "user" : ""}">
        ${sender === "user" ? "" : '<div class="message-avatar">🍰</div>'}
        <div class="message-text">${message}</div>
        ${sender === "user" ? '<div class="message-avatar user">👤</div>' : ""}
      </div>
    `;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
    
    if (sender === "bot" && isQuickAction) {
      // Add quick actions after instant bot response
      setTimeout(() => addQuickActionsToChat(), 300);
    }
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
  requestAnimationFrame(() => {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
}

// Enhanced quick actions
function addQuickActionsToChat() {
  // Remove existing quick actions
  const existingActions = document.querySelector('.quick-actions-chat');
  if (existingActions) {
    existingActions.remove();
  }
  
  const quickActionsDiv = document.createElement("div");
  quickActionsDiv.className = "quick-actions-chat";
  quickActionsDiv.innerHTML = `
    <div class="quick-action-title">Quick Questions:</div>
    <div class="quick-actions-grid">
      ${quickActions.map((action, index) => 
        `<button class="quick-btn" data-action="${action.action}" data-query="${action.query}">${action.text}</button>`
      ).join('')}
    </div>
  `;
  
  // Add event listeners to each button
  quickActionsDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-btn')) {
      const action = e.target.getAttribute('data-action');
      const query = e.target.getAttribute('data-query');
      handleQuickAction(action, query, e.target);
    }
  });
  
  chatMessages.appendChild(quickActionsDiv);
  scrollToBottom();
}

// Handle quick action clicks with automatic sending
function handleQuickAction(action, query, buttonElement) {
  // Find the clicked button and add visual feedback
  if (buttonElement) {
    buttonElement.classList.add('clicked');
    buttonElement.style.pointerEvents = 'none';
  }
  
  // Remove quick actions with fade effect
  const quickActionsDiv = document.querySelector('.quick-actions-chat');
  if (quickActionsDiv) {
    quickActionsDiv.style.opacity = '0.5';
    quickActionsDiv.style.pointerEvents = 'none';
    setTimeout(() => quickActionsDiv.remove(), 200);
  }
  
  // Process the quick action as if user typed it
  setTimeout(() => {
    processUserInput(query);
  }, 300);
}

// Make handleQuickAction globally available (removed - now using event listeners)
// window.handleQuickAction = handleQuickAction;

// Event listeners
chatToggle.addEventListener("click", () => {
  const isOpen = chatWindow.style.display === "flex";
  
  if (isOpen) {
    chatWindow.style.display = "none";
    chatToggle.innerHTML = "💬";
    // Reset mobile adjustments
    if (isMobile()) {
      chatWindow.style.height = '70vh';
      chatWindow.style.bottom = '70px';
    }
  } else {
    chatWindow.style.display = "flex";
    chatToggle.innerHTML = "✖️";
    
    // Show initial message if first time opening
    if (chatMessages.children.length === 0) {
      setTimeout(() => {
        appendMessage("bot", initialMessage);
      }, 500);
    }
    
    // Focus input after a delay to prevent zoom
    setTimeout(() => {
      if (!isMobile()) {
        chatInput.focus();
      }
    }, 600);
  }
});

// Enhanced input handling with mobile optimization
chatInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter" && chatInput.value.trim() !== "") {
    e.preventDefault(); // Prevent form submission
    await sendMessage();
  }
});

// Send button click handler
sendButton.addEventListener("click", async () => {
  if (chatInput.value.trim() !== "") {
    await sendMessage();
  }
});

// Send message function
async function sendMessage() {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;
  
  await processUserInput(userMessage);
}

// Process user input (shared function for both typing and quick actions)
async function processUserInput(userMessage) {
  // Add to history and clear input
  chatHistory.push(userMessage);
  appendMessage("user", userMessage);
  chatInput.value = "";
  chatInput.disabled = true;
  sendButton.disabled = true;
  
  // Remove quick actions when user types
  const quickActionsDiv = document.querySelector('.quick-actions-chat');
  if (quickActionsDiv) {
    quickActionsDiv.remove();
  }
  
  try {
    // Generate contextual response
    const botResponse = generateResponse(userMessage);
    appendMessage("bot", botResponse);
    
  } catch (error) {
    console.error("Chat error:", error);
    appendMessage("bot", "Sorry, I had a little hiccup! 😅 Please try asking again, or call us directly at +91 9717295102 for immediate help!");
  } finally {
    chatInput.disabled = false;
    sendButton.disabled = false;
    // Don't auto-focus on mobile to prevent zoom
    if (!isMobile()) {
      chatInput.focus();
    }
  }
}

// Prevent zoom on input focus for iOS
chatInput.addEventListener('focus', (e) => {
  if (isMobile()) {
    e.target.style.fontSize = '16px'; // Prevents zoom on iOS
  }
});

chatInput.addEventListener('blur', (e) => {
  if (isMobile()) {
    e.target.style.fontSize = '14px'; // Reset to original size
  }
});

// Enable/disable send button based on input content
chatInput.addEventListener('input', (e) => {
  const hasContent = e.target.value.trim().length > 0;
  sendButton.disabled = !hasContent;
  sendButton.style.opacity = hasContent ? '1' : '0.5';
});

// Close chat when clicking outside (mobile)
document.addEventListener('click', (e) => {
  if (isMobile() && 
      chatWindow.style.display === "flex" && 
      !chatWindow.contains(e.target) && 
      !chatToggle.contains(e.target)) {
    chatWindow.style.display = "none";
    chatToggle.innerHTML = "💬";
  }
});

// Enhanced mobile handling
function handleMobileLayout() {
  if (isMobile()) {
    chatWindow.style.width = '95vw';
    chatWindow.style.height = '70vh';
    chatWindow.style.maxWidth = '380px';
    chatWindow.style.maxHeight = '500px';
    chatWindow.style.right = '2.5vw';
    chatWindow.style.bottom = '70px';
  } else {
    chatWindow.style.width = '320px';
    chatWindow.style.height = '400px';
    chatWindow.style.maxWidth = 'none';
    chatWindow.style.maxHeight = 'none';
    chatWindow.style.right = '0';
    chatWindow.style.bottom = '70px';
  }
}

// Initialize
window.addEventListener('resize', handleMobileLayout);
window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    originalViewportHeight = window.innerHeight;
    handleMobileLayout();
  }, 500);
});

handleMobileLayout(); // Initial setup
detectKeyboard(); // Initialize keyboard detection

// Optimize performance
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Preload some responses for better performance
    Object.keys(bakeryContext.responses).forEach(key => {
      getRandomResponse(key);
    });
  });
}