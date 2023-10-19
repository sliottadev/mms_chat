// components/InputComponent.js
import React, { useState, useEffect, useRef } from 'react';
import { Color } from '../../../constants/Colors';
import { View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

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
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>
            Send             
          </Text>
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
    paddingHorizontal:20, 
    paddingVertical:10, 
    backgroundColor: Color.primaryBackGround, 
    borderRadius:10, 
    elevation:5
  },
  viewButton:{
    paddingHorizontal:20, 
    paddingVertical:10, 
    backgroundColor: Color.primaryBackGround, 
    borderRadius:10, 
    elevation:5
  },
  textButton: {
    fontSize:20, 
    color: Color.primaryText
  }
});

export default InputComponent;