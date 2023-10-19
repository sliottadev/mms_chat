import { Image, Text, View, StyleSheet} from "react-native"
import { Color } from "../../../constants/Colors";

const MessageHeader = (contact) => {
    return (
        <View style={styles.messageHeader}>
            <Image source={{uri: contact.contact.avatar}} style={styles.avatar}/>
            <Text style={styles.name}>{contact.contact.name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    messageHeader :{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        height: "auto",
        backgroundColor: Color.primaryBackGround,
        marginBottom: 10
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 10,        
    },
    name: {
        fontSize: 24,
        color: Color.primaryText,  // White text color        
    },
});

export default MessageHeader;

