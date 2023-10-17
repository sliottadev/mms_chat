import React, { useState, useEffect } from 'react';
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
            console.log(cont);
            setContacts(cont);
        }
        fetchContacts();
    }, []);

    const handleContactPress = (contact) => {
        // Aquí puedes navegar a la vista de chat con el contacto seleccionado
        // Por ejemplo, usando React Navigation (si lo estás utilizando):
        // navigation.navigate('Chat', { userId: contact.id });
        navigation.navigate('Chat', { userId: contact.id });
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
        backgroundColor: '#f5f5f5',
    },
    contactItem: {
        flexDirection: 'row',  // Alinear los items horizontalmente
        alignItems: 'center',  // Alinear los items verticalmente al centro
        padding: 15,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    contactImage: {
        width: 40,             // Establece el ancho de la imagen
        height: 40,            // Establece el alto de la imagen
        borderRadius: 20,      // Hace la imagen circular
        marginRight: 10        // Agrega espacio a la derecha de la imagen
    },
    contactName: {
        fontSize: 16
    }

});

export default Contacts;