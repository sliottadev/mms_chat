// components/ChatBox.js
import React, { useEffect, useState } from 'react';
import { Color } from '../../../constants/Colors';
import { View, StyleSheet, Text } from 'react-native';
import {getChatFromFriend} from '../../../services/MessageServiceMock'
import Messages from '../messages/Messages';
import InputComponent from '../inputComponnent/InputComponent';
import MessageHeader from '../messageHeader/MessageHeader';


const ChatBox = (props) => {
  const [messages, setMessages] = useState([]);
  console.log('ChatBox Params:')  
  console.log(props.route.params)
  
  useEffect(() => {
    async function fetchMessages() {
      const userId = props.route.params.userId;
      const friendId = props.route.params.contact.id;
      const newMessages = await getChatFromFriend(userId, friendId);
      setMessages(prevMessages => [...prevMessages, ...newMessages]);
    }
  
    fetchMessages();
  }, []);

  const handleSendMessage = (content) => {
    setMessages([...messages, { user: 'You', content }]);    
  };
  
  return (
    <View style={styles.chatBox}>
      <MessageHeader contact={props.route.params.contact}/>
      <Messages messages={messages} yourId={props.route.params.userId} />
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