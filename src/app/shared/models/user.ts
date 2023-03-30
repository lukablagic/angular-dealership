export interface Role{
    admin?: boolean;
    user: boolean;
    moderator?: boolean;
}

export class User {
    uid: string;
    email: String;
    displayName: String;
    photoURL: String;
    role?: Role;

    constructor(authData) {
        this.uid = authData.uid;
        this.email = authData.email;
        this.displayName = authData.displayName;
        this.photoURL = authData.photoURL;
        this.role = {user: true}
    }
}
