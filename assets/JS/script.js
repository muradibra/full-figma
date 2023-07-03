const menuBtn = document.querySelector("#menuBtn")
const menu = document.querySelector(".menu")
const menuCloseBtn = document.querySelector("#menuCloseBtn")
menuBtn.addEventListener("click", menuOpen)
menuCloseBtn.addEventListener("click", menuClose)
function menuOpen() {
    menu.classList.toggle("menu-close")
}

function menuClose() {
    menu.classList.toggle("menu-close")
}

const workHours = document.querySelector(".work-hours")
const companyInformation = document.querySelector(".company-information")

workHours.addEventListener("click", openWorkHours)

function openWorkHours() {
    companyInformation.classList.toggle("pos")
}

const profile = document.querySelector(".profile")
const myAccount = document.querySelector(".my-account")

profile.addEventListener("click", profileSection)

function profileSection() {
    myAccount.classList.toggle("profile-pos")
}

const accordionBtn = document.querySelectorAll(".accordion-button")

accordionBtn.forEach(item=>{
    item.addEventListener("click", function(){
        item.setAttribute("style", "color: white")
    })
})
