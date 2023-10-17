const _messages = [
    { //mauro a seba
        from: '101',
        to: '103',
        message: 'Hola gordo!',
        sended: true
    },
    { //mauro a seba
        from: '101',
        to: '103',
        message: 'Como estas?',
        sended: true
    },
    { //seba a mau
        from: '103',
        to: '101',
        message: 'Todo bien, vos?',
        sended: true
    },
    { //seba a mau
        from: '103',
        to: '101',
        message: 'me tenes que llamar gordo, forro?',
        sended: true
    },
    { //mati a seba
        from: '102',
        to: '103',
        message: 'Que haces gordo?',
        sended: true
    },
    { //seba a mati
        from: '103',
        to: '102',
        message: 'otro forro que me dice gordo, pueden parar?',
        sended: true
    },
]

//devuelve mensajes no recibidos de un amigo
export const getNewMessageFromFriend = async (id, friendId) => {
    return new Promise( resolve=>{
        setTimeout(() => {
            const unreadMessage = _messages.filter((msj)=> msj.to===id && msj.from === friendId && !msj.sended);
            resolve(unreadMessage);
        }, 1000)
    });    
}

//envia mensaje
export const sendMessage = async (id, friendId, message)=>{
    return new Promise( resolve=>{
        setTimeout(() => {
            const newMessage = {
                from: id, 
                to: friendId,
                text: message,
                read: false
            };
            _messages.push(newMessage);
            resolve(newMessage);        
        }, 1000);
    });
}

//trae historial de chat leidos
export const getChatFromFriend = async (is, friendId) => {
    return new Promise( resolve => {
        setTimeout(()=>{
            const history = _messages.filter((msj) => 
                (msj.to===id && msj.from === friendId && msj.sended) ||
                (msj.to===friendId && msj.from === id && msj.sended)
            );
            resolve(history);
        }, 1000);
    });
}
