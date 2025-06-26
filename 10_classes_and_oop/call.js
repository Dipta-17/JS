function setUsername(username){
    //complex DB calls
    this.username=username
    console.log("called");
}

function creatUser(username,email,password){
    setUsername.call(this,username)
    this.email=email
    this.password=password
}

const dip=new creatUser("dipta","dipta@gmaiil.com","123")
console.log(dip);