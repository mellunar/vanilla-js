if (window.innerWidth < 769) {
    document.addEventListener("DOMContentLoaded", function() {
        let list = document.querySelectorAll(".navlist");
        list.forEach((navlist, index) => {
            navlist.onclick = (event) => {
                list[index].querySelector('.navitem').classList.toggle('show')
            }
        })
        window.openClose = function openClose(x) {
            x.classList.toggle("hmenuc");
        }
    });
}
 
else {
    document.addEventListener("DOMContentLoaded", function() {
        let list = document.querySelectorAll(".navlist");
        list.forEach((navlist, index) => {
            navlist.onmouseover = (event) => {
                list[index].querySelector('.navitem').classList.add('show')
            };
            navlist.onmouseout = (event) => {
                list[index].querySelector('.navitem').classList.remove('show')
            };
        })
    });
}