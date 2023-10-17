// components/Message.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ user, content }) => (
  <View style={styles.message}>
    <Text><Text style={styles.user}>{user}: </Text>{content}</Text>
  </View>
);

const styles = StyleSheet.create({
  message: {
    padding: 5,
    flexDirection: 'row'
  },
  user: {
    fontWeight: 'bold'
  }
});

export default Message;