class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }

    get password(){
        return `${this._password}Dipta`
    }

    set password(value){
        this._password=value
    }
}

const dipta=new User("dipta@das.ai","abc")
console.log(dipta.email);