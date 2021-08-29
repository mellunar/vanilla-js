const plusicon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 -3 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
`;
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
const chevd = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 -2 16 16">
    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
`;
const chevu = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-up" viewBox="0 -2 16 16">
    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
    </svg>
`;
const chevl = `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
`;
const chevr = `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
`;
const playico = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
    </svg>
`;

document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body"),
    mainnav = document.querySelector("#mainnav"),
    mobmenu = document.querySelector("#mobmenu"),
    chevron = document.querySelector("#chevron"),
    loginbox = document.querySelector("#loginbox"),
    userbox = document.querySelector("#userbox"),
    ctrbtnl = document.querySelectorAll(".ctrbtnl"),
    ctrbtnr = document.querySelectorAll(".ctrbtnr");
    mobmenu.innerHTML = ihamb;
    chevron.innerHTML = chevd;

    ctrbtnl.forEach((e)=>{e.innerHTML=chevl});
    ctrbtnr.forEach((e)=>{e.innerHTML=chevr});

    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            mainnav.setAttribute("data-scroll","up");
        } else {
            mainnav.setAttribute("data-scroll","down");
        }
        prevScrollpos = currentScrollPos;
    } 

    function bgoc() {
        if (navlist.dataset.menu == "opened" || loginbox.dataset.login == "opened") {
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
        bgoc();
    };

    mobmenu.onclick = () => {
        if (navlist.dataset.menu == "closed") {
            if(loginbox.dataset.login == "opened"){closeLoginMenu()};
            navlist.setAttribute("data-menu", "opened");
            mobmenu.innerHTML = iclose;
            bgoc();
        }
        else {
            closeMobMenu();
        }
    }

    function closeLoginMenu() {
        loginbox.setAttribute("data-login", "closed");
        chevron.innerHTML = chevd;
        bgoc();
    };

    userbox.onclick = () => {
        if(loginbox.dataset.login == "closed") {
            if(navlist.dataset.menu == "opened"){closeMobMenu()};
            loginbox.setAttribute("data-login", "opened");
            chevron.innerHTML = chevu;
            bgoc();
        }
        else {
            closeLoginMenu();
        }
    }

    function clbomo(event) {
        e = event.toElement || event.relatedTarget;
        if (e.parentNode == this || e == this) {
            return;
        };
        setTimeout(()=>{closeLoginMenu()}, 3000)
    }

    loginbox.onmouseout = clbomo;


    menuopened.onclick = () => {closeMobMenu(); closeLoginMenu()};
    window.onresize = () => {if(window.innerWidth > 1023){closeMobMenu()}};

    const slider = document.querySelector(".slidercont");

    for(let i=0; i<mainS.length; i++){
        let node = document.createElement("article");
        node.classList.add("slide");
        node.classList.add("swiper-slide");
        node.innerHTML = `
        <div class="txtslider">
            <h2>${mainS[i].titulo}</h2>
            <p class="pconly">${mainS[i].desc}</p>
            <div class="slidebtn">
                <a class="foxbtn" href="#">Assistir</a>
                <a class="addfav pconly" href="#">${plusicon} Favoritos</a>
            </div>
            <a href="#nogo" class="linkfill"></a>
        </div>
        <div class="imgcont">
            <div class="imgpad"></div>
                <img class="pconly" alt="${mainS[i].titulo}" src="${mainS[i].imgpc}"/>
                <img class="mobonly tablet" alt="${mainS[i].titulo}" src="${mainS[i].imgmob}"/>
                <a href="#nogo" class="linkfill"></a>
            </div>
            
        </div>
        `
        slider.appendChild(node);
    };

    new Swiper("#slider", {
        loop: true,
        navigation: {
            nextEl: ".ctrbtnr",
            prevEl: ".ctrbtnl"
          },
        pagination: {
            el: "#pagination",
            type: "bullets",
            bulletClass: "barra",
            bulletActiveClass: "batv",
            clickable: true,
            hideOnClick: false
        },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false/*,
            pauseOnMouseEnter: true*/
        }
    });

    const carcont = document.querySelectorAll(".carcont");

    for(let i=0; i<canais.length; i++){
        let node = document.createElement("article");
        node.classList.add("channel");
        node.classList.add("swiper-slide");
        node.innerHTML = `
            <img alt="${canais[i].alt}" src="${canais[i].img}">
            <a href="#nogo" class="linkfill"></a>
        `
        carcont[0].appendChild(node);
    }

    new Swiper("#carchannel", {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 14,
        navigation: {
            nextEl: ".ctrbtnr",
            prevEl: ".ctrbtnl",
            disabledClass: "hidden"
        },
        breakpoints: {
            1024: {
                spaceBetween: 20,
                slidesPerView: 6,
                slidesPerGroup: 6
            }
        }
    });

    for(let i=0; i<live.length; i++){
        let node = document.createElement("article");
        node.classList.add("swiper-slide");
        node.classList.add("livechan");
        node.innerHTML = `
            <div class="livetit"><h5>${live[i].canal}</h5></div>
            <div class="livedesc">
                <div class="liveimg">
                    <img alt="${live[i].titulo}" src="${live[i].img}">
                </div>
                <div>
                    <h6>${live[i].titulo}</h6>
                    <div class="livetime"><time>${live[i].hori}</time> - <time>${live[i].horf}</time></div>
                </div>                            
            </div>
            <div class="liveprog"><div class="lpbar" style="width: ${live[i].prog}%"></div></div>
            <div class="livenext">
                <div class="ltc"><div>A seguir</div><div class="nextime"><time>${live[i].nhi}</time> - <time>${live[i].nhf}</time></div></div>
                <div class="nexttit"><h6>${live[i].next}</h6></div>
            </div>
            <a href="#nogo" class="linkfill"></a>
        `;
        carcont[1].appendChild(node);
    };

    new Swiper("#carlive", {
        slidesPerView: 1,
        spaceBetween: 14,
        navigation: {
            nextEl: ".ctrbtnr",
            prevEl: ".ctrbtnl",
            disabledClass: "hidden"
        },
        breakpoints: {
            600: {
                spaceBetween: 20,
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            1024: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1440: {
                slidesPerView: 5,
                slidesPerGroup: 5
            }
        }
    });

    for(let i=0; i<novseries.length; i++){
        let node = document.createElement("article");
        node.classList.add("swiper-slide");
        node.classList.add("poster");
        node.innerHTML = `
            <img alt="${novseries[i].titulo}" src="${novseries[i].img}">
            <div class="posterbox pconly">
                <div class="postertxt">
                    <h5>${novseries[i].titulo}</h5>
                    <div class="showinfo">
                        <h6>${novseries[i].ano}</h6><h6>${novseries[i].tamanho}</h6><div class="cetaria ce${novseries[i].idade}">${novseries[i].idade}</div>
                    </div>
                    <p class="showdesc">${novseries[i].desc}</p>
                </div>
            </div>
            <a href="#nogo" class="linkfill"></a>
        `;
        carcont[2].appendChild(node);
    };

    new Swiper("#carnovserie", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 14,
        navigation: {
            nextEl: ".ctrbtnr",
            prevEl: ".ctrbtnl",
            disabledClass: "hidden"
        },
        breakpoints: {
            600: {
                spaceBetween: 20,
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1280: {
                slidesPerView: 5,
                slidesPerGroup: 5
            },
            1600: {
                slidesPerView: 6,
                slidesPerGroup: 6
            }
        },
        pagination: {
            el: ".pagination",
            type: "bullets",
            bulletClass: "barra",
            bulletActiveClass: "batv",
            clickable: true,
            hideOnClick: false
        }
    });

    for(let i=0; i<novfilmes.length; i++){
        let node = document.createElement("article");
        node.classList.add("swiper-slide");
        node.classList.add("poster");
        node.innerHTML = `
            <img alt="${novfilmes[i].titulo}" src="${novfilmes[i].img}">
            <div class="posterbox pconly">
                <div class="postertxt">
                    <h5>${novfilmes[i].titulo}</h5>
                    <div class="showinfo">
                        <h6>${novfilmes[i].ano}</h6><h6>${novfilmes[i].tamanho}</h6><div class="cetaria ce${novfilmes[i].idade}">${novfilmes[i].idade}</div>
                    </div>
                    <p class="showdesc">${novfilmes[i].desc}</p>
                </div>
            </div>
            <a href="#nogo" class="linkfill"></a>
        `;
        carcont[3].appendChild(node);
    };

    new Swiper("#carnovfilme", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 14,
        navigation: {
            nextEl: ".ctrbtnr",
            prevEl: ".ctrbtnl",
            disabledClass: "hidden"
        },
        breakpoints: {
            600: {
                spaceBetween: 20,
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1280: {
                slidesPerView: 5,
                slidesPerGroup: 5
            },
            1600: {
                slidesPerView: 6,
                slidesPerGroup: 6
            }
        },
        pagination: {
            el: ".pagination",
            type: "bullets",
            bulletClass: "barra",
            bulletActiveClass: "batv",
            clickable: true,
            hideOnClick: false
        }
    });

    for(let i=0; i<ultepis.length; i++){
        let node = document.createElement("article");
        node.classList.add("swiper-slide");
        node.classList.add("episode");
        node.innerHTML = `
            <div class="epsic">
                <img alt="${ultepis[i].titulo} ${ultepis[i].ep}" src="${ultepis[i].img}">
                <div class="epdur">${ultepis[i].dur}</div>
                <div class="pconly epshover" aria-hidden="true"></div>
            </div>                        
            <div class="epsdesc">
                <h5>${ultepis[i].titulo}</h5>
                <h6>${ultepis[i].ep}</h6>
            </div>
            <a href="#nogo" class="linkfill"></a>
        `;
        carcont[4].appendChild(node);
    };

    for(let i=0; i<episdest.length; i++){
        let node = document.createElement("article");
        node.classList.add("swiper-slide");
        node.classList.add("episode");
        node.innerHTML = `
            <div class="epsic">
                <img alt="${episdest[i].titulo} ${episdest[i].ep}" src="${episdest[i].img}">
                <div class="epdur">${episdest[i].dur}</div>
                <div class="pconly epshover" aria-hidden="true"></div>
            </div>                        
            <div class="epsdesc">
                <h5>${episdest[i].titulo}</h5>
                <h6>${episdest[i].ep}</h6>
            </div>
            <a href="#nogo" class="linkfill"></a>
        `;
        carcont[6].appendChild(node);
    };

    const epsic = document.querySelectorAll(".epsic");
    function createHover(tabela, n) {
        function chkepst(){
            if(tabela[n].stat !== ""){
                return epstatus()
            }
        };
        function epstatus(){
            let edvst = document.createElement("div");
            edvst.classList.add("epstat")
            if(tabela[n].stat == "Estreia" || tabela[n].stat == "Nova Temporada"){
                edvst.classList.add("epstatvd");
                edvst.textContent = tabela[n].stat
            }
            else if(tabela[n].stat == "Fim de Série" || tabela[n].stat == "Fim de Temporada"){
                edvst.classList.add("epstatvm");
                edvst.textContent = tabela[n].stat
            }
            else {void(0)}
            epsic[n].appendChild(edvst)
        };
        chkepst();
    }
    for(let i=0; i<ultepis.length; i++){
        createHover(ultepis, i);
    }
    for(let i=0; i<episdest.length; i++){
        createHover(episdest, i);
    }

    const epshover = document.querySelectorAll(".epshover");
    epshover.forEach((e)=>{e.innerHTML=playico});

    new Swiper("#carnoveps", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 14,
        navigation: {
            nextEl: ".ctrbtnr",
            prevEl: ".ctrbtnl",
            disabledClass: "hidden"
        },
        breakpoints: {
            600: {
                spaceBetween: 20,
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1280: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1600: {
                slidesPerView: 5,
                slidesPerGroup: 5
            }
        }
    });

    for(let i=0; i<startrek.length; i++){
        let node = document.createElement("article");
        node.classList.add("swiper-slide");
        node.classList.add("poster");
        node.innerHTML = `
            <img alt="${startrek[i].titulo}" src="${startrek[i].img}">
            <div class="posterbox pconly">
                <div class="postertxt">
                    <h5>${startrek[i].titulo}</h5>
                    <div class="showinfo">
                        <h6>${startrek[i].ano}</h6><h6>${startrek[i].tamanho}</h6><div class="cetaria ce${startrek[i].idade}">${startrek[i].idade}</div>
                    </div>
                    <p class="showdesc">${startrek[i].desc}</p>
                </div>
            </div>
            <a href="#nogo" class="linkfill"></a>
        `;
        carcont[5].appendChild(node);
    };

    new Swiper("#carstartrek", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 14,
        navigation: {
            nextEl: ".ctrbtnr",
            prevEl: ".ctrbtnl",
            disabledClass: "hidden"
        },
        breakpoints: {
            600: {
                spaceBetween: 20,
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1280: {
                slidesPerView: 5,
                slidesPerGroup: 5
            },
            1600: {
                slidesPerView: 6,
                slidesPerGroup: 6
            }
        },
        pagination: {
            el: ".pagination",
            type: "bullets",
            bulletClass: "barra",
            bulletActiveClass: "batv",
            clickable: true,
            hideOnClick: false
        }
    });

    new Swiper("#carepisdest", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 14,
        navigation: {
            nextEl: ".ctrbtnr",
            prevEl: ".ctrbtnl",
            disabledClass: "hidden"
        },
        breakpoints: {
            600: {
                spaceBetween: 20,
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1280: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1600: {
                slidesPerView: 5,
                slidesPerGroup: 5
            }
        }
    });

    for(let i=0; i<destfilmes.length; i++){
        let node = document.createElement("article");
        node.classList.add("swiper-slide");
        node.classList.add("poster");
        node.innerHTML = `
            <img alt="${destfilmes[i].titulo}" src="${destfilmes[i].img}">
            <div class="posterbox pconly">
                <div class="postertxt">
                    <h5>${destfilmes[i].titulo}</h5>
                    <div class="showinfo">
                        <h6>${destfilmes[i].ano}</h6><h6>${destfilmes[i].tamanho}</h6><div class="cetaria ce${destfilmes[i].idade}">${destfilmes[i].idade}</div>
                    </div>
                    <p class="showdesc">${destfilmes[i].desc}</p>
                </div>
            </div>
            <a href="#nogo" class="linkfill"></a>
        `;
        carcont[7].appendChild(node);
    };

    new Swiper("#cardestfilme", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 14,
        navigation: {
            nextEl: ".ctrbtnr",
            prevEl: ".ctrbtnl",
            disabledClass: "hidden"
        },
        breakpoints: {
            600: {
                spaceBetween: 20,
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1280: {
                slidesPerView: 5,
                slidesPerGroup: 5
            },
            1600: {
                slidesPerView: 6,
                slidesPerGroup: 6
            }
        },
        pagination: {
            el: ".pagination",
            type: "bullets",
            bulletClass: "barra",
            bulletActiveClass: "batv",
            clickable: true,
            hideOnClick: false
        }
    });
    /*7*/
})