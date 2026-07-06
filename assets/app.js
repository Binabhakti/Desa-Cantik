/* ==========================================================
   DESA CANTIK
   APP.JS
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    loadPage("home");

    initMenu();

    initBackToTop();

    hideLoading();

});


/* ==========================================================
   LOAD PAGE
========================================================== */

function loadPage(page){

    fetch("pages/" + page + ".html")

    .then(function(response){

        if(!response.ok){

            throw new Error("Halaman tidak ditemukan");

        }

        return response.text();

    })

    .then(function(html){

        document.getElementById("content").innerHTML = html;

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    })

    .catch(function(error){

        document.getElementById("content").innerHTML =

        "<div class='container'><h2>Halaman Tidak Ditemukan</h2></div>";

        console.error(error);

    });

}


/* ==========================================================
   MENU
========================================================== */

function initMenu(){

    document.addEventListener("click",function(e){

        const menu=e.target.closest("[data-page]");

        if(!menu) return;


        // kalau link punya href asli biarkan jalan

        if(menu.getAttribute("href") !== "#"){

            return;

        }


        e.preventDefault();


        const page=menu.dataset.page;


        loadPage(page);


        closeSidebar();

    });

}


/* ==========================================================
   SIDEBAR
========================================================== */

function openSidebar(){

    document.getElementById("sidebar").classList.add("active");

    document.getElementById("overlay").classList.add("show");

}

function closeSidebar(){

    document.getElementById("sidebar").classList.remove("active");

    document.getElementById("overlay").classList.remove("show");

}

function toggleSidebar(){

    document.getElementById("sidebar").classList.toggle("active");

    document.getElementById("overlay").classList.toggle("show");

}


/* ==========================================================
   LOADING
========================================================== */

function hideLoading(){

    const loading=document.getElementById("loading");

    setTimeout(function(){

        loading.style.display="none";

    },500);

}


/* ==========================================================
   BACK TO TOP
========================================================== */

function initBackToTop(){

    const btn=document.getElementById("backToTop");

    window.addEventListener("scroll",function(){

        if(window.scrollY>300){

            btn.style.display="block";

        }else{

            btn.style.display="none";

        }

    });

    btn.addEventListener("click",function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/* ==========================================================
   AUDIO
========================================================== */

const audio=new Audio();

function playAudio(file){

    audio.src="audio/"+file;

    audio.play();

}

function pauseAudio(){

    audio.pause();

}


/* ==========================================================
   MODAL VIDEO
========================================================== */

function openModal(){

    const modal = document.getElementById("modal");

    const video = document.getElementById("videoSejarah");

    modal.style.display = "flex";

    video.currentTime = 0;

    video.play();

}

function closeModal(){

    const modal = document.getElementById("modal");

    const video = document.getElementById("videoSejarah");

    video.pause();

    video.currentTime = 0;

    modal.style.display = "none";

}

/* ==========================================================
   MARS DESA
========================================================== */

let marsStatus=false;


function playMars(){

    const audio =
    document.getElementById("marsAudio");


    const btn =
    document.getElementById("marsBtn");


    if(!marsStatus){

        audio.play();

        btn.innerHTML =
        '<i class="fa-solid fa-pause"></i> Sedang Diputar';

        marsStatus=true;

    }else{

        audio.pause();

        btn.innerHTML =
        '<i class="fa-solid fa-music"></i> Putar Mars Desa';

        marsStatus=false;

    }

}

/* ==========================================================
   CERITA DESA
========================================================== */


let ceritaStatus = false;


function playCerita(){


    const audio =
    document.getElementById("ceritaAudio");


    const btn =
    document.getElementById("ceritaBtn");



    if(!ceritaStatus){


        audio.play();


        btn.innerHTML =
        "⏸ Cerita Diputar";


        ceritaStatus = true;


    }else{


        audio.pause();


        btn.innerHTML =
        "🎧 Cerita Desa";


        ceritaStatus = false;


    }


}

/* ==========================================================
   FAKTA SINGKAT SCROLL COUNTER
========================================================== */


document.addEventListener("DOMContentLoaded",()=>{


let sudahJalan=false;


const fakta =
document.querySelector(".fakta-grid");


const counters =
document.querySelectorAll(".counter");



function jalanCounter(){


counters.forEach(counter=>{


    let target =
    Number(counter.dataset.target);


    let angka = 0;


    let tambah =
    target / 120;



    function update(){


        if(angka < target){


            angka += tambah;


            counter.innerText =
            Math.ceil(angka)
            .toLocaleString("id-ID");


            requestAnimationFrame(update);


        }else{


            counter.innerText =
            target.toLocaleString("id-ID");


        }


    }


    update();


});


}




if(fakta){


const observer =
new IntersectionObserver((entries)=>{


if(entries[0].isIntersecting && !sudahJalan){


    jalanCounter();


    sudahJalan=true;


}


},{


threshold:0.3


});


observer.observe(fakta);


}



});

/* ==========================================================
   JELAJAH PROFIL DESA
========================================================== */
function slideJelajah(jarak){

    document
        .getElementById("jelajahSlider")
        .scrollBy({

            left:jarak,

            behavior:"smooth"

        });

}
