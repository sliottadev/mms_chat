import { StyleSheet, Text, View } from "react-native";
import { Color } from "./src/constants/Colors.js";
import ChatBox from "./src/components/chatView/chatBox/ChatBox.js";
import Contacts from "./src/components/contactsView/Contacts.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserHeader from "./src/components/userHeader/UserHeader.js";

export default function App() {
  const styles = StyleSheet.create({
    app: {
      flex: 1,
      flexDirection: "row",
    },
    screenOption: {
      headerStyle: {
        backgroundColor: Color.primaryBackGround,
      },
      cardStyle: { backgroundColor: Color.primaryBackGround },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white', // Cambia el color de los íconos de navegación (flecha de retroceso, hamburguesa, etc.)
    },
  });

  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Contactos"
          screenOptions={styles.screenOption}
        >
          <Stack.Screen name="Contactos" component={Contacts} options={{ headerShown: false }}/>
          <Stack.Screen name="Chat" component={ChatBox} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
