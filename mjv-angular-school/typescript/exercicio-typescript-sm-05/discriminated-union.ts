// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos  


export type UserWithEmail = {
    name: string;
    email: string;
    registered: true;
}

export type UserWithoutEmail = {
    name: string;
    registered: false;
}

export type User = UserWithEmail | UserWithoutEmail

function testUser(user: User){
    if(user.registered){
        user.email
    }else{
        user.name
    }
}