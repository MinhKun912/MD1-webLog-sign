class User {
    username;
    email;
    password;

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get username() {
        return this.username;
    }

    set username(user) {
        this.username = user;
    }

    get email() {
        return this.email;
    }

    set email(email) {
        this.email = email;
    }

    get password() {
        return this.password;
    }

    set password(pass) {
        this.password = pass;
    }
    


    

}

