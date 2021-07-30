const form = document.getElementById("form")
const username = document.getElementById("username")
const age = document.getElementById("age")
const email = document.getElementById("email")
const password = document.getElementById("password")
const newpassword = document.getElementById("newpassword")
const food = document.getElementById("food")
const message = document.getElementById("message")
const emailmessage = document.getElementById("emailmessage")

form.addEventListener("submit", (e) => {
    e.preventDefault();
      checkInput();
})


function checkInput() {
    const usernameValue = username.value.trim();
    console.log(usernameValue)
    const ageValue = age.value.trim();
    console.log(ageValue)
    const emailValue = email.value.trim();
    console.log(emailValue)
    const passwordValue = password.value.trim();
    console.log(passwordValue)
    const newpasswordValue = newpassword.value.trim();
    console.log(newpasswordValue)

    if ( passwordValue !== newpasswordValue) {
        message.textContent = "try again"
    } else {
        form.submit();
        message.textContent = "password correct"

    };

   
}
