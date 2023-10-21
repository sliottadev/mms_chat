import { useState, useEffect } from "react";
import { Color } from "../../constants/Colors";
import { View, Image, Text, StyleSheet } from "react-native";
import { login } from "../../services/UsersServiceMock";
import MenuIcon from './menuIcon/MenuIcon';
import { Svg, SvgXml } from "react-native-svg";

const UserHeader = ()=>{
    
    const [user, setUser] = useState('')

    useEffect(() => {
        async function fetchContacts() {
            const user = await login();
            console.log(user);
            setUser(user);
        }
        fetchContacts();
    }, []);

    return(
        <View style={style.container}>
            <View style={style.containerInner}>
                <Image source={{ uri: user.avatar }} style={style.avatar}></Image>
                <Text style={{fontSize: 28, color: Color.primaryText}}>{user.name}</Text>
            </View>
            <MenuIcon width={30} height={30} color={Color.primaryText}/>
        </View>
    )
}

const style = StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    container: {
        flex: 0,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: Color.primaryBackGround,
        color: Color.primaryText,
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    containerInner: {
        flex: 0,
        flexDirection: 'row'
    }
})

export default UserHeader;