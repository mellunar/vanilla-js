window.onload = function () {
    window.onscroll = function() {
        const jstn = document.getElementById("jstn")
        const logo = document.getElementById("logo")
        if (window.scrollY > 150) {
            jstn.classList.add("tnscroll")
            logo.classList.add("logoscroll")
        }
        else {
            jstn.classList.remove("tnscroll")
            logo.classList.remove("logoscroll")
        }
    };
};