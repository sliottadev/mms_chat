import { StyleSheet, Text, View } from 'react-native';
//import Sidebar from './src/components/sidebar/Sidebar';
import ChatBox from './src/components/chatView/chatBox/ChatBox.js';
import Contacts from './src/components/contactsView/Contacts.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
    const users = ['jaso', 'falcon', 'jasofalcon']; // example users

    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Contacts'>
          <Stack.Screen name='Contacts' component={Contacts} />
          <Stack.Screen name='Chat' component={ChatBox} />
        </Stack.Navigator>
      </NavigationContainer>
      // <View style={styles.app}>
      //   {/* <Sidebar users={users} /> */}
      //   {/* <ChatBox /> */}
      //   <Contacts/>
      // </View>
    );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'row'
  }

});
