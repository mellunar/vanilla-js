const ihamb = `
    <a href="#nogo"><img alt="open menu" src="https://live.staticflickr.com/65535/51371421150_6182da9e62_o.png"</a>
    `
const iclose = `
    <a href="#nogo"><img alt="close menu" src="https://live.staticflickr.com/65535/51371146539_43f6d40707_o.png"</a>
    `

document.addEventListener("DOMContentLoaded", function() {
    const mobmenu = document.querySelector("#mobmenu");
    const navlist = document.querySelector("#navlist");
    const list = document.querySelectorAll(".categoryList");
    const menuopened = document.querySelector("#menuopened");
    mobmenu.innerHTML = ihamb;

    function closemenu() {
        navlist.setAttribute("data-menu", "closed");
        mobmenu.innerHTML = ihamb;
        menuopened.hidden = true
    }
    mobmenu.onclick = function () {
        if (navlist.dataset.menu == "closed") {
            navlist.setAttribute("data-menu", "opened");
            mobmenu.innerHTML = iclose;
            menuopened.hidden = false

        }
        else {
            closemenu()
        }
    };
    menuopened.onclick = function () {closemenu()};

    list.forEach((categoryList, index) => {
        let item = list[index].nextElementSibling;
        let arrow = list[index].querySelector(".arrow-light");
        categoryList.onclick = (event) => {
        item.getAttribute("hidden") !== null ? item.hidden = false : item.hidden = true
        item.getAttribute("hidden") !== null ? arrow.classList.remove("alhover") : arrow.classList.add("alhover")
    }});
});