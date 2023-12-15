import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = async () => {
    if (inputValue.trim() === '') return;

    const newMessage = {
      role: 'user',
      content: inputValue.trim()
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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' 
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [...messages, newMessage]
          })
        });
      
        const data = await response.json();
      
        if (data.choices && data.choices.length > 0) {
          const botReply = data.choices[0].message.content;
          const botMessage = {
            role: 'bot',
            content: botReply
          };
      
          setMessages([...messages, botMessage]);
        } else {
          console.error('No se encontraron opciones de respuesta en la API');
        }
      } catch (error) {
        console.error(error);
      }
      
  };

  useEffect(() => {
    const initialBotMessage = {
      role: 'bot',
      content: '¡Hola! ¿En qué puedo ayudarte?'
    };

    setMessages([initialBotMessage]);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.role === 'bot' ? 'bot' : 'user'}`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
