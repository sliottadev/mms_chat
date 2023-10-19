import { StyleSheet, Text, View } from 'react-native';
import { Color } from './src/constants/Colors.js';
import ChatBox from './src/components/chatView/chatBox/ChatBox.js';
import Contacts from './src/components/contactsView/Contacts.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const styles = StyleSheet.create({
    app: {
      flex: 1,
      flexDirection: 'row'
    },
    screenOption:{
      headerStyle: {
        backgroundColor: Color.primaryBackGround, // Cambia 'yourColorHere' al color que desees
      },
      headerTintColor: Color.primaryText, // Cambia 'white' al color del texto deseado
    }
  });
  
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Contactos'
          screenOptions={styles.screenOption}
        >
          <Stack.Screen name='Contactos' component={Contacts} />
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


