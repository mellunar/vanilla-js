const ihamb = `
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
    `;
const iclose = `
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
    `;
function arrowD(dir, size, height) {
    let aright = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${size}px" height="${size}px" fill="currentColor" viewBox="0 ${height} 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
        `;
    let aleft = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${size}px" height="${size}px" fill="currentColor" viewBox="0 ${height} 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        `;
    let direction = dir == "right" ? aright : aleft;
    return direction
}
const more = `
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 -3 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
    `;
const less = `
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 -3 16 16">
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
    </svg>
    `;

document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");
    const mobmenu = document.querySelector("#mobmenu");
    const navlist = document.querySelector("#navlist");
    const mml = document.querySelectorAll(".moreless");
    const hassub = document.querySelectorAll(".hassub");
    const menuopened = document.getElementById("menuopened");
    mobmenu.innerHTML = ihamb;

    function bgoc() {
        if (navlist.dataset.menu == "opened") {
            menuopened.hidden = false;
            body.classList.add("mmopened");
        }
        else {
            menuopened.hidden = true;
            body.classList.remove("mmopened");
        }
    };

    function closeMobMenu() {
        navlist.setAttribute("data-menu", "closed");
        mobmenu.innerHTML = ihamb;
        menuopened.hidden = true;
        body.classList.remove("mmopened");
        bgoc();
    };

    mobmenu.onclick = function() {
        if (navlist.dataset.menu == "closed") {
            navlist.setAttribute("data-menu", "opened");
            mobmenu.innerHTML = iclose;
            bgoc();
        }
        else {
            closeMobMenu();
        }
    }

    menuopened.onclick = () => {closeMobMenu()};
    window.onresize = () => {if(window.innerWidth > 1023){closeMobMenu()}};

    mml.forEach((el) => {el.innerHTML = more});
    hassub.forEach((sub, index) => {
        let item = hassub[index].nextElementSibling;
        let moreless = hassub[index].querySelector(".moreless");
        sub.onclick = (event) => {
            item.classList.contains("subopened") ? moreless.innerHTML = more : moreless.innerHTML = less;
            item.classList.contains("subopened") ? item.classList.remove("subopened") : item.classList.add("subopened");
    }});


    const slider = document.querySelector("#slider");
    const ir = document.querySelectorAll(".ir");
    function slideIr(element) {
        element.innerHTML = arrowD("right", 18, -3)
    }
    ir.forEach(slideIr);

    const scslides = document.querySelectorAll(".scslides");
    const slide = document.querySelectorAll(".slide");
    let slindex = Number(slide[0].dataset.slactive);

    function selectDot(num) {
        scslides.forEach((element) => {element.classList.remove("scselected")})
        scslides[num].classList.add("scselected")
    }

    selectDot(slindex);

    function setSlide(num) {
        slide.forEach((x) => {x.setAttribute("data-slactive", num)});
        selectDot(num);
        slindex = num;
    };

    scslides.forEach((dot, index) => {
        dot.onclick = (event) => {setSlide(index);}
    });

        
    let initialX = 0;
    let offsetX = 0;
    let slideIndex = 0;
    slider.onmousedown = dragStart;
    slider.ontouchstart = dragStart;
    slider.ontouchend = dragEnd;
    slider.ontouchmove = dragAction;

    function dragStart (e) {
        e = e || window.event;
        e.preventDefault();
        if (e.type == 'touchstart') {
            initialX = e.touches[0].clientX;
        } 
        else {
            initialX = e.clientX;
            document.onmouseup = dragEnd;
            document.onmousemove = dragAction;
        }
    }
    
    function dragAction (e) {
        e = e || window.event;    
        if (e.type == 'touchmove') {
            offsetX = e.touches[0].clientX;
        }
        else {
            offsetX = e.clientX;
        }
    }
    
    function dragEnd (e) {
        if (offsetX < initialX) {
            if (slideIndex > slide.length -1) {void(0)}
            else {
                slideIndex++;
            }
            setSlide(slideIndex -1);
        }
        else {
            if (slideIndex < slide.length -1) {void(0)}
            else {
                slideIndex--;
            }
            setSlide(slideIndex -1);
        }
        document.onmouseup = null;
        document.onmousemove = null;
    }


    let isPaused = false;
    timedSlider();

    function timedSlider() {
        slideIndex++;
        if (slideIndex > slide.length) {slideIndex = 1}  
        setSlide(slideIndex -1);
    };

    setInterval(function() {if (isPaused == false) {timedSlider()}}, 10000);
    slider.onmouseover = (elem) => {isPaused = true};
    slider.onmouseout = (elem) => {setTimeout(isPaused = false, 5000)};


    const tar = document.getElementById("tar");
    const tbtn = document.getElementById("tbtn");

    tbtn.onclick = () => {
        tbtn.disabled = true;
        tar.classList.add("op0");
        let card = Math.floor(Math.random() * deck.length);
        let url = deck[card].img;
        let title = deck[card].titulo;
        let text = deck[card].texto;
        tar.ontransitionend = () => {
            tar.innerHTML = `
            <img class="tcard" alt="${card} ${title}" src="${url}">
            <h2>${title}</h2>
            <p>${text}</p>
            <a href="#nogo" class="catbtn mbr">Aprenda tarot</a>
            `
            tar.classList.replace("op0","op1");
        }        
    };

    const email = document.getElementById("email");
    const submit = document.getElementById("submit");

    email.oninput = () => {
        if (email.checkValidity()) {
            submit.disabled = false;
        }
        else {
            submit.disabled = true;
        }
    };
});
