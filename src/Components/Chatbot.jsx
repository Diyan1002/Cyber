import React, { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const botReply = getBotReply(input);

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");
  };

  const getBotReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("price"))
      return { from: "bot", text: "You can check pricing on our Pricing page." };

    if (msg.includes("demo"))
      return { from: "bot", text: "Click 'Get a Demo' to schedule one 🚀" };

    if (msg.includes("contact"))
      return { from: "bot", text: "Visit Contact page to reach us 📩" };

    return {
      from: "bot",
      text: "I'm here to help! Ask about pricing, demo, or services 😊",
    };
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white w-14 h-14 rounded-full shadow-lg text-xl flex items-center justify-center hover:scale-110 transition"
      >
        💬
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-20 right-4 sm:right-5 w-[90%] sm:w-[350px] h-[450px] bg-[#0c0c0c] border border-purple-500/30 rounded-2xl shadow-2xl flex flex-col z-50">

          {/* HEADER */}
          <div className="p-4 border-b border-white/10 flex justify-between items-center">
            <h3 className="text-white font-semibold">AI Assistant</h3>
            <button onClick={() => setOpen(false)} className="text-white text-lg">
              ✕
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm px-3 py-2 rounded-xl max-w-[75%] ${
                  msg.from === "user"
                    ? "bg-purple-600 text-white ml-auto"
                    : "bg-white/10 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 rounded-lg bg-black border border-white/10 text-white text-sm focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-purple-600 px-4 rounded-lg text-white text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}