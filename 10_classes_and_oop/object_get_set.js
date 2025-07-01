const User={
    _email:'d@ds.com',
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }


}

const dip=Object.create(User)
console.log(dip.email);
