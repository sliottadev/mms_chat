import React, { useState, useEffect } from 'react';
import { Color } from '../../constants/Colors';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { login, getUser } from '../../services/UsersServiceMock';

const Contacts = ({ navigation }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        async function fetchContacts() {
            const users = await login();
            const cont = [];
            for (i=0; i<users.friend.length; i++) {
                const usrData = await getUser(users.friend[i]);
                cont.push(usrData);
            }
            setContacts(cont);
        }
        fetchContacts();
    }, []);

    const handleContactPress = (contact) => {
        navigation.navigate('Chat', { userId: '101', contact: contact});
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleContactPress(item)} style={styles.contactItem}>
                        <Image source={{ uri: item.avatar }} style={styles.contactImage} />
                        <Text style={styles.contactName}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.secundaryBackground,  // Dark background color
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomColor: Color.primaryBackGround,  // Darker line color
        borderBottomWidth: 1
    },
    contactImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    contactName: {
        fontSize: 16,
        color: Color.primaryText  // White text color
    }
});

export default Contacts;