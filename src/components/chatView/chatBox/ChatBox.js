// components/ChatBox.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Messages from '../messages/Messages';
import InputComponent from '../inputComponnent/InputComponent';


const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (content) => {
    setMessages([...messages, { user: 'You', content }]);
    // In a real-world app, you might send this message to the server
  };

  return (
    <View style={styles.chatBox}>
      <Messages messages={messages} />
      <InputComponent onSendMessage={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  chatBox: {
    flex: 1,
    justifyContent: 'space-between'
  }
});

export default ChatBox;