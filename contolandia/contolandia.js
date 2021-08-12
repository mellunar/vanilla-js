window.onload = function () {
    window.onscroll = function() {
        const jstn = document.getElementById("jstn");
        const logo = document.getElementById("logo");
        const ddlist = document.getElementsByClassName("ddlist");
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
};

document.addEventListener("DOMContentLoaded", function() {
    window.mobilemenu = function mobilemenu() {
        let o = document.getElementById("moblinks");
        o.style.display === "flex" ? o.style.display = "none" : o.style.display = "flex"
    }
    window.openClose = function openClose(x) {
        x.classList.toggle("bi-x");
    }
});

/*
if (window.innerWidth > 1023) {
    void(0);
}
 
else {
    void(0);
}
*/
