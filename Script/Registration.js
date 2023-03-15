const form = document.querySelector('form')
let fullname = document.querySelector('.fullname')
let username = document.querySelector('.username')
let number = document.querySelector('.number')
let password = document.querySelector('.password')
let password2 = document.querySelector('.password2')

const user ={
    fullname:fullname.value,
    username:username.value,
    phoneNumber:number.value,
    password:password.value,
 confirmPassword:password2.value
}

let registerBtn = document.querySelector('.register')
registerBtn.addEventListener('click', function(e){
console.log(user.fullname);

e.preventDefault()
})