

const menuBurger = document.getElementById("topbar-menu-container");

const boutonMenu = document.getElementById("topbar-menuburger");

const navBar = document.getElementById("topbar-navigation-container");



boutonMenu.addEventListener("click", function() {


        if (menuBurger.classList.contains("hidden")) {

            menuBurger.classList.remove("hidden");

            navBar.classList.add("hidden");

        } else {

            menuBurger.classList.add("hidden");

            navBar.classList.remove("hidden");
        }
})


// let prevScrollpos = window.pageYOffset;

// window.onscroll = function() {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     navBar.classList.remove("hidden")
//   } else {
//     navBar.classList.add("hidden");
//   }
//   prevScrollpos = currentScrollPos;
// }