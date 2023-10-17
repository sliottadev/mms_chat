const _users = [
    {
        id: '101',
        name: 'Mauro',
        avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
        friend: ['102','103']
    },
    {
        id: '102',
        name: 'Mati',
        avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
        friend: ['101','103']
    },
    {
        id: '103',
        name: 'Seba',
        avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
        friend: ['101','102']
    },
];

export const login = async (id)=>{
    return _users[0];
}

export const getUsersFriends = async (myId)=>{
    return _users[0].friend;
}

export const getUser = async (id)=>{
    console.log('Buscando usuario con id: '+id);
    return _users.find((usr)=>usr.id === id);
}
