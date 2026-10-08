
localStorage.setItem("age", "Age : 19 Year");
localStorage.setItem("skill", "Skills : Front-end Developer | Karachi");
localStorage.setItem("Institute", "Institute : Aptech");

localStorage.setItem("Phone", "Phone No : 0309-2258076")
localStorage.setItem("Email", "Email : umairarshad8653@gmail.com")



let age = localStorage.getItem("age");
let skill = localStorage.getItem("skill");
let center = localStorage.getItem("Institute");

let Phone = localStorage.getItem("Phone");
let email = localStorage.getItem("Email")



document.getElementById("Age").textContent = age;
document.getElementById("Skill").textContent = skill;
document.getElementById("Institute").textContent = center;

document.getElementById("Phone").textContent = Phone;
document.getElementById("Email").textContent = email;


