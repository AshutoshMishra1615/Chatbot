import { useState } from "react";
import { Bot, Send, User } from "lucide-react";

function Chat() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello! Welcome to our GDSC Session",
      sender: "AI",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white/20 rounded-xl shadow-2xl overflow-hidden flex flex-col">
        <div className="bg-gray-800 text-white p-4">
          <h1 className="text-xl font-semibold">Chat App</h1>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[500px] max-h-[500px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.sender === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`p-2 rounded-full ${
                  message.sender === "user"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {message.sender === "user" ? (
                  <User size={20} />
                ) : (
                  <Bot size={20} />
                )}
              </div>
              <div
                className={`flex flex-col ${
                  message.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-black/50 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="border-t p-4 bg-white/20">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black/50
               text-white rounded-lg hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-white flex items-center gap-2"
            >
              <Send size={20} />
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;
