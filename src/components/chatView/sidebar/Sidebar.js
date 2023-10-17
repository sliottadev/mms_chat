// components/Sidebar.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Sidebar = ({ users }) => (
  <View style={styles.sidebar}>
    <Text style={styles.title}>Users</Text>
    <FlatList
      data={users}
      renderItem={({ item }) => <Text style={styles.user}>{item}</Text>}
      keyExtractor={(item) => item}
    />
  </View>
);

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  user: {
    fontSize: 16,
    marginVertical: 5,
  }
});

export default Sidebar;