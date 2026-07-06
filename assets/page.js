/* ==========================================================
   BAB 03 - DEMOGRAFIS DESA CANTIK
========================================================== */



/* ==========================================================
   COUNTER ANGKA SAAT TERLIHAT
========================================================== */


const counters =
document.querySelectorAll(".counter");


let counterAktif = false;



function jalankanCounter(){


    counters.forEach(counter=>{


        let target =
        Number(counter.dataset.target);


        let nilai = 0;


        let speed =
        target / 120;



        function update(){


            if(nilai < target){


                nilai += speed;


                counter.innerText =
                Math.ceil(nilai)
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







/* DETEKSI SAAT SCROLL */


const statistik =
document.querySelector(".stat-penduduk");



if(statistik){



const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting && !counterAktif){


        jalankanCounter();


        counterAktif = true;


    }


});


},{


threshold:0.4


});



observer.observe(statistik);



}

/* ==========================
   CHART JS
========================== */


if(typeof Chart !== "undefined"){





/* =====================================================
   GRAFIK STATISTIK PENDUDUK
===================================================== */


const pendudukChart =
document.getElementById("pendudukChart");


if(pendudukChart){


new Chart(pendudukChart,{


type:"bar",


data:{


labels:[

"Jumlah Penduduk",
"Laki-Laki",
"Perempuan",
"Kepala Keluarga"

],



datasets:[{


data:[

1364,
738,
626,
437

],


borderRadius:15


}]


},



options:{


animation:{

duration:2500

},



plugins:{


legend:{

display:false

}


},



scales:{


y:{


beginAtZero:true


}


}


}



});


}










/* =====================================================
   GRAFIK JENIS KELAMIN
===================================================== */


const genderChart =
document.getElementById("genderChart");


if(genderChart){


new Chart(genderChart,{


type:"doughnut",



data:{


labels:[

"Laki-Laki",
"Perempuan"

],



datasets:[{


data:[738,626],


borderWidth:2


}]


},



options:{


animation:{


animateRotate:true,

duration:2500


}


}


});


}









/* =====================================================
   GRAFIK KEPALA KELUARGA
===================================================== */


const kkChart =
document.getElementById("kkChart");



if(kkChart){


new Chart(kkChart,{


type:"doughnut",



data:{


labels:[

"KK Laki-Laki",
"KK Perempuan"

],



datasets:[{


data:[408,29],


borderWidth:2


}]


},



options:{


animation:{


animateRotate:true,

duration:2500


}


}


});


}









/* =====================================================
   GRAFIK PENDIDIKAN
===================================================== */


const pendidikanChart =
document.getElementById("pendidikanChart");



if(pendidikanChart){


new Chart(pendidikanChart,{


type:"bar",



data:{


labels:[

"SD / Sederajat",
"SLTP",
"SLTA",
"Perguruan Tinggi"

],



datasets:[{


data:[586,243,331,67],


borderRadius:15


}]


},




options:{


indexAxis:"y",



animation:{


duration:2500


},



plugins:{


legend:{


display:false


}


},



scales:{


x:{


beginAtZero:true


}


}


}


});


}











/* =====================================================
   GRAFIK PENDIDIKAN ANAK
===================================================== */


const sekolahChart =
document.getElementById("sekolahChart");



if(sekolahChart){


new Chart(sekolahChart,{



type:"bar",



data:{


labels:[

"Guru PAUD",
"Siswa PAUD",
"Guru SD",
"Siswa SD"

],




datasets:[{


data:[7,41,9,95],


borderRadius:15


}]


},




options:{


animation:{


duration:2500


},



plugins:{


legend:{

display:false

}


},



scales:{


y:{


beginAtZero:true


}


}


}


});


}





}

/* ==========================================================
   BAB 04 - PENDAPATAN
========================================================== */

/* =====================================================
   COUNTER ANGKA SCROLL
===================================================== */


const counterAngka =
document.querySelectorAll(".counter");



const counterObserver =
new IntersectionObserver(entries => {


entries.forEach(entry => {


if(entry.isIntersecting){


let angka =
entry.target;



let target =
parseInt(angka.dataset.target);



let mulai = 0;



let durasi = 1500;


let step =
target / (durasi / 20);




let jalan =
setInterval(()=>{


mulai += step;



if(mulai >= target){


angka.innerText =
target.toLocaleString("id-ID");


clearInterval(jalan);


}else{


angka.innerText =
Math.floor(mulai)
.toLocaleString("id-ID");


}



},20);





counterObserver.unobserve(angka);


}



});


},{

threshold:0.5

});






counterAngka.forEach(counter=>{


counterObserver.observe(counter);


});

/* ======================================
   AUDIO NARASI PAGE
====================================== */


const audioBtn =
document.getElementById("audioBtn");


const narasiAudio =
document.getElementById("narasiAudio");



if(audioBtn && narasiAudio){



audioBtn.addEventListener("click",()=>{



if(narasiAudio.paused){


narasiAudio.play();


audioBtn.innerHTML =
'<i class="fas fa-pause"></i> Jeda Narasi';


audioBtn.classList.add("playing");


}else{


narasiAudio.pause();


audioBtn.innerHTML =
'<i class="fas fa-play"></i> Dengarkan Narasi';


audioBtn.classList.remove("playing");


}



});





narasiAudio.addEventListener("ended",()=>{


audioBtn.innerHTML =
'<i class="fas fa-play"></i> Dengarkan Narasi';


audioBtn.classList.remove("playing");


});



}