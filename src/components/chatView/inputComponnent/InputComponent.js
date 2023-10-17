// components/InputComponent.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const InputComponent = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        onSubmitEditing={() => {
          onSendMessage(message);
          setMessage('');
        }}
      />
      <Button title="Send" onPress={() => onSendMessage(message)} />
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
    borderColor: '#ccc',
    marginRight: 10,
    padding: 5
  }
});

export default InputComponent;