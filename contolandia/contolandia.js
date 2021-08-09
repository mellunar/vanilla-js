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
