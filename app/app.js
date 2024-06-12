const d = document;
const menuBtn = d.querySelector(".menu-btn");

// Mobile menu
const menuMobile = d.querySelector(".ul-mobile");
const companyMenuMobile = d.querySelector(".company-mobile_menu");
const connectMenuMobile = d.querySelector(".connect-mobile_menu");
const productMenuMobile = d.querySelector(".product-mobile_menu");
const collapsableMobile = d.querySelectorAll(".collapsable-mobile");

menuBtn.addEventListener("click", (e) => {
    menuMobile.classList.toggle("hide");
})

productMenuMobile.addEventListener("click", (e) => {
    collapsableMobile[0].classList.toggle("hide");
})

companyMenuMobile.addEventListener("click", (e) => {
    collapsableMobile[1].classList.toggle("hide");
})

connectMenuMobile.addEventListener("click", (e) => {
    collapsableMobile[2].classList.toggle("hide");
})


// Desktop menu
const companyMenuDesktop = d.querySelector(".company-desktop_menu");
const connectMenuDesktop = d.querySelector(".connect-desktop_menu");
const productMenuDesktop = d.querySelector(".product-desktop_menu");
const collapsableDesktop = d.querySelectorAll(".collapsable-desktop");

productMenuDesktop.addEventListener("click", (e) => {
    collapsableDesktop[0].classList.toggle("hide");
})

companyMenuDesktop.addEventListener("click", (e) => {
    collapsableDesktop[1].classList.toggle("hide");
})

connectMenuDesktop.addEventListener("click", (e) => {
    collapsableDesktop[2].classList.toggle("hide");
})



