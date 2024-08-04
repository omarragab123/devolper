const mobileBottom = document.getElementById("mobile-toggle");
const navItems = document.querySelector(".nav-itms");
const navLinks = document.querySelectorAll(".nav-link");
mobileBottom.addEventListener('click',()=>{

    navItems.classList.toggle("active");
});
navLinks.forEach((navLink) => {
    navLink.addEventListener('click',()=>{
        navItems.classList.toggle("active");
    })
});

