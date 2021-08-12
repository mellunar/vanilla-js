if (window.innerWidth < 769) {
    document.addEventListener("DOMContentLoaded", function() {
                document.querySelectorAll(".navlistm").forEach(element => element.addEventListener("click", function () {
                nextNode = this.nextElementSibling.classList;
                arrow = this.querySelector(".arrow-light").classList;
                if(!nextNode.contains("show")){
                	nextNode.add("show");
                    arrow.add('alhover')
                }
                else{
                    nextNode.remove("show");
                    arrow.remove('alhover')
                }
            })
        );
        window.openClose = function openClose(x) {
            x.classList.toggle("hmenuc");
            document.querySelector("nav").classList.toggle("show")
        }
        /*let list = document.querySelectorAll(".navlistd");
        list.forEach((navlist, index) => {
            navlist.onclick = (event) => {
                list[index].querySelector('.navitem').classList.toggle('show')
            }
        })*/
    });
    
}
 
else {
    document.addEventListener("DOMContentLoaded", function() {
        let list = document.querySelectorAll(".navlistd");
        list.forEach((navlist, index) => {
            let dlist = list[index].querySelector('.navitem').classList;
            let arrow = list[index].querySelector('.arrow-light').classList;
            navlist.onmouseover = (event) => {
                dlist.add('show');
                arrow.add('alhover')
            };
            navlist.onmouseout = (event) => {
                dlist.remove('show');
                arrow.remove('alhover')
            };
        })
        /*
        document.querySelectorAll(".navlist").forEach(element => element.addEventListener("mouseover", function() {this.nextElementSibling.classList.add("show")}));
        document.querySelectorAll(".navlist").forEach(element => element.addEventListener("mouseout", function() {this.nextElementSibling.classList.remove("show")}));
        */
       
    });
}
/**/
