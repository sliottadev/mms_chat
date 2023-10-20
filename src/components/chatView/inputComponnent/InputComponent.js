// components/InputComponent.js
import React, { useState, useEffect, useRef } from 'react';
import { Color } from '../../../constants/Colors';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import icnSend from '../../../resources/send-icon30p.png';

const InputComponent = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const refInput = useRef();
  
  useEffect(() => {
    refInput.current.focus();
  }, [refInput])

  return (
    <View style={styles.container} >
      <TextInput
        ref={refInput} 
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        onSubmitEditing={() => {
          onSendMessage(message);
          setMessage('');
        }}
      />
      <TouchableOpacity onPress={() => onSendMessage(message)}>
        <View style={styles.viewButton} >
          <Image style={styles.icnSend} source={icnSend} resizeMode="contain"/>
          {/* <Text style={styles.textButton}>
            Send             
          </Text> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: Color.primaryBackGround,
    marginRight: 10,
    padding: 5,
    color: Color.primaryText,
    fontSize: 22 
  },
  viewButton:{
    paddingHorizontal: 5, 
    paddingVertical: 2.5,
    backgroundColor: Color.primaryBackGround, 
    borderRadius:10, 
    elevation:5,
    width : 60,
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
  },
  icnSend:{
    width : 35,
    objectFit: 'cover',
    height: 35,
  },
  textButton: {
    color: Color.primaryText,
    fontSize:20, 
  }
});

export default InputComponent;