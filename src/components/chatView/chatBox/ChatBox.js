// components/ChatBox.js
import React, { useEffect, useState } from 'react';
import { Color } from '../../../constants/Colors';
import { View, StyleSheet } from 'react-native';
import {getChatFromFriend, sendMessage} from '../../../services/MessageServiceMock'
import Messages from '../messages/Messages';
import InputComponent from '../inputComponnent/InputComponent';
import MessageHeader from '../messageHeader/MessageHeader';


const ChatBox = (props) => {
  const [messages, setMessages] = useState([]);
  const userId = props.route.params.userId;
  const friendId = props.route.params.contact.id;
  
  useEffect(() => {
    async function fetchMessages() {
      const newMessages = await getChatFromFriend(userId, friendId);

      setMessages(prevMessages => [...prevMessages, ...newMessages]);
    }
  
    fetchMessages();
  }, []);

  const handleSendMessage = (content) => {
    console.log('Mensaje: '+content);
    if (content.trim()!==""){
      //envio mensaje al server
      sendMessage(userId, friendId, content)
      //cargo mensaje en lista mensajes
      setMessages([...messages,  { 
        from: userId,
        to: friendId,
        message: content,
        sended: true
      }]);
    }
  };
  
  return (
    <View style={styles.chatBox}>
      <MessageHeader contact={props.route.params.contact}/>
      <Messages messages={messages} yourId={userId} />
      <InputComponent onSendMessage={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  chatBox: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Color.secundaryBackground,
  }
});

export default ChatBox;