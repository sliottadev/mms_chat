// components/Messages.js
import React from 'react';
import { View, FlatList } from 'react-native';
import SpeechBubble from '../speechBubble/SpeechBubble';

const Messages = ({ messages , yourId}) => {
  
console.log(messages);

  return(  
  <View style={{margin: 10, flexGrow: 1}}>
    {/* Iterar Messages y crear un SpeechBubble para cada uno */}
    {
      messages.map((msj, index)=>{
        return(<SpeechBubble 
          fontSize={22} 
          text={msj.message} 
          isLeft={(yourId === msj.from)?true:false}
          key={index}
        />)
      })
    }
  </View>
)};

export default Messages;