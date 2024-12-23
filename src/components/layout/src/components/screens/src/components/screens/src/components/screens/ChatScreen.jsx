import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "Sophie", message: "Qui participe au challenge de demain ?", time: "10:30" },
    { id: 2, user: "Thomas", message: "Je suis inscrit ! On forme une équipe ?", time: "10:32" },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: messages.length + 1,
      user: "Vous",
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="space-y-4">
      <Card className="h-96">
        <CardContent className="p-4 h-full overflow-y-auto">
          <div className="space-y-4">
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`p-3 rounded-lg ${
                  msg.user === "Vous" 
                    ? "bg-green-600 text-white ml-auto" 
                    : "bg-green-50"
                } max-w-[80%]`}
              >
                <div className="flex justify-between text-sm">
                  <span className="font-bold">{msg.user}</span>
                  <span className="opacity-75">{msg.time}</span>
                </div>
                <p className="mt-1">{msg.message}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <form onSubmit={handleSendMessage} className="flex gap-2">
        <input 
          type="text" 
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Votre message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <button 
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
