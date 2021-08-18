const ihamb = `
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
    `
const iclose = `
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
    `


window.onload = function () {
    window.onscroll = function() {
        const jstn = document.getElementById("jstn");
        const logo = document.getElementById("logo");
        const ddlist = document.getElementsByClassName("sublist");
        if (window.scrollY > 150) {
            jstn.classList.add("tnscroll")
            logo.classList.add("logoscroll")
            for (i = 0; i < ddlist.length; i++) {ddlist[i].classList.add("ddls")}
        }
        else {
            jstn.classList.remove("tnscroll")
            logo.classList.remove("logoscroll")
            for (i = 0; i < ddlist.length; i++) {ddlist[i].classList.remove("ddls")}
        }
    };
    const mobmenu = document.querySelector("#mobmenu");
    const navlist = document.querySelector("#navlinks");
    const list = document.querySelectorAll(".categoryList");
    const menuopened = document.querySelector("#menuopened");
    const imghvr = document.querySelectorAll(".imghvr");
    const outbox = document.querySelector("#outbox");
    mobmenu.innerHTML = ihamb;

    function closemenu() {
        navlist.setAttribute("data-menu", "closed");
        mobmenu.innerHTML = ihamb;
        document.body.style.position = '';
        menuopened.hidden = true
    }
    mobmenu.onclick = function () {
        if (navlist.dataset.menu == "closed") {
            navlist.setAttribute("data-menu", "opened");
            mobmenu.innerHTML = iclose;
            document.body.style.position = 'fixed';
            menuopened.hidden = false

        }
        else {
            closemenu()
        }
    };
    menuopened.onclick = function () {closemenu()};

    list.forEach((categoryList, index) => {
        let item = list[index].nextElementSibling;
        categoryList.onclick = (event) => {
        item.getAttribute("hidden") !== null ? item.hidden = false : item.hidden = true
    }});

    if (window.innerWidth < 1024) {
        imghvr.forEach((hover, index) => {
            const txtbox = imghvr[index].querySelector('.txtbox');
            const linkfill = imghvr[index].querySelector('.linkboxfill');

            function imageHover(att1, att2){
            txtbox.setAttribute("data-hover", att1);
            linkfill.setAttribute("data-hidden", att2);
            outbox.setAttribute("data-hidden", att2);
            }

            hover.onclick = (event) => {
            imageHover("true","false");
            if (txtbox.dataset.hover == "true") {void(0)};
            };

            function closeHovera(element){
                element.setAttribute("data-hidden", "true")
            }
            function closeHoverb(element){
                element.setAttribute("data-hover", "false")
            }

            outbox.onclick = function() {
                document.querySelectorAll(".txtbox").forEach(closeHoverb);
                document.querySelectorAll(".linkboxfill").forEach(closeHovera);
                closeHovera(outbox);
            }
            })
    }
};

document.addEventListener("DOMContentLoaded", function() {

});