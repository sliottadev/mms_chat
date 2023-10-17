// components/Message.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ user, content }) => (
  <View style={styles.message}>
    <Text style={styles.text}><Text style={styles.user}>{user}: </Text>{content}</Text>
  </View>
);

const styles = StyleSheet.create({
  message: {
    padding: 5,
    flexDirection: 'row',
    backgroundColor: '#181818',  // Dark background color
  },
  text: {
    color: '#ffffff',  // White text color
  },
  user: {
    fontWeight: 'bold',
    color: '#ffffff',  // White text color
  }
});

export default Message;