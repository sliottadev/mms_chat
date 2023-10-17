// components/Messages.js
import React from 'react';
import { View, FlatList } from 'react-native';
import Message from '../message/Message';

const Messages = ({ messages }) => (
  <FlatList
    style={{flex: 1}}
    data={messages}
    renderItem={({ item }) => <Message {...item} />}
    keyExtractor={(item, idx) => idx.toString()}
  />
);

export default Messages;