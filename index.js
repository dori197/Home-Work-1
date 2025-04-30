document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menuToggle');
    const listTool = document.getElementById('listTool');
    const FirstmobileNav = document.getElementById('FirstmobileNav');
    const SecondmobileNav = document.getElementById('SecondmobileNav');
    const userIcon = document.getElementById('userIcon');
    const barIcon = document.getElementById('barIcon');
    const FirstCloseIcon = document.getElementById('FirstCloseIcon');
    const SecondCloseIcon = document.getElementById('SecondCloseIcon');

    FirstCloseIcon.style.display = "none";
    SecondCloseIcon.style.display = "none";

    menuToggle.addEventListener('click', function () {
        FirstmobileNav.classList.toggle("active");
        if(FirstmobileNav.classList.contains("active")) {
            barIcon.style.display = "none";
            SecondCloseIcon.style.display = "block";
        } else {
            barIcon.style.display = "block";
            SecondCloseIcon.style.display = "none";
        }
       
    })
    listTool.addEventListener('click', function () {
         SecondmobileNav.classList.toggle("active");
        if(SecondmobileNav.classList.contains("active")) {
            userIcon.style.display = "none";
            FirstCloseIcon.style.display = "block";
        } else{
            userIcon.style.display = "block";
            FirstCloseIcon.style.display = "none";
        }
    })
});