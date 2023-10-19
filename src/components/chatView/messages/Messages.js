// components/Messages.js
import React, { useRef, useEffect } from 'react';
import { ScrollView  } from 'react-native';
import SpeechBubble from '../speechBubble/SpeechBubble';

const Messages = ({ messages , yourId}) => {
  const scrollRef = useRef();
  
  useEffect(() =>{
    scrollRef.current.scrollToEnd();
  },[ messages])

  return(  
  <ScrollView ref={scrollRef} style={{margin: 10, flexGrow: 1}}>
    {
      messages.map((msj, index)=>{
        return(<SpeechBubble 
          fontSize={22} 
          text={msj.message} 
          isLeft={(yourId === msj.from)?false:true}
          key={index}
        />)
      })
    }
  </ScrollView >
)};

export default Messages;