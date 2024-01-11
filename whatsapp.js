let name=document.getElementById("name");
let email=document.getElementById("email");
let number=document.getElementById("number");
let button=document.getElementById("button");
let message=document.getElementById("message");

button.addEventListener("click", () => {
    let link = `https://api.whatsapp.com/send/?phone=${number.value}&text=name+%3A${name.value}%0Aemail+${email.value}%0Amesssage+${message.value}%0A&type=phone_number&app_absent=0`;
    console.log(link);
    window.open(link);
});
