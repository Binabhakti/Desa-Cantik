/* ==================================================
   STATISTIK DESA BINA BHAKTI
   DESA CANTIK 2025
================================================== */



// ==========================
// SETTING DEFAULT CHART
// ==========================


Chart.defaults.font.family = "Poppins";
Chart.defaults.color = "#334155";



const animasi = {

    duration:1800,

    easing:"easeOutQuart"

};






// ==========================
// 1. STATISTIK PENDUDUK
// ==========================


new Chart(
document.getElementById("chartPenduduk"),
{

type:"doughnut",


data:{

labels:[

"Laki-laki",
"Perempuan"

],


datasets:[{

data:[

738,
738

],

borderWidth:0

}]

},



options:{


animation:animasi,


plugins:{


legend:{

position:"bottom"

}


}


}


});









// ==========================
// 2. PENDIDIKAN
// ==========================


new Chart(
document.getElementById("chartPendidikan"),
{


type:"bar",


data:{


labels:[

"SD",
"SLTP",
"SLTA",
"D1",
"S1",
"S2"

],



datasets:[{


label:"Jumlah Penduduk",


data:[

354,
183,
225,
3,
39,
2

],


borderRadius:15


}]


},




options:{


animation:animasi,


responsive:true,


plugins:{


legend:{

display:false

}


}


}


});










// ==========================
// 3. MATA PENCAHARIAN
// ==========================



new Chart(
document.getElementById("chartPekerjaan"),
{


type:"bar",



data:{


labels:[

"Perkebunan",
"Industri",
"Pertanian",
"Peternakan",
"Perikanan",
"Kerajinan"

],




datasets:[{


label:"Jumlah Orang",



data:[

486,
276,
100,
65,
58,
6

],


borderRadius:15


}]


},





options:{


indexAxis:"y",


animation:animasi,


plugins:{


legend:{

display:false

}


}


}


});










// ==========================
// 4. KESEJAHTERAAN KELUARGA
// ==========================



new Chart(
document.getElementById("chartSejahtera"),
{


type:"pie",



data:{


labels:[


"Pra Sejahtera",

"Sejahtera I",

"Sejahtera II",

"Sejahtera III",

"Sejahtera III Plus"


],




datasets:[{


data:[

14,
52,
47,
264,
45

],


borderWidth:0


}]


},




options:{


animation:animasi,


plugins:{


legend:{

position:"bottom"

}


}



}


});









// ==========================
// 5. INFRASTRUKTUR DESA
// ==========================



new Chart(
document.getElementById("chartInfrastruktur"),
{


type:"bar",



data:{


labels:[


"Jalan Aspal",

"Jalan Tanah",

"Jalan Sirtu",

"Sumur",

"Sanitasi"


],



datasets:[{


label:"Jumlah",



data:[

3035,
8789,
1599,
155,
422

],



borderRadius:15



}]


},




options:{



animation:animasi,



plugins:{


legend:{

display:false

}


}


}


});










// ==========================
// 6. CAPAIAN PEMBANGUNAN 2025
// ==========================



new Chart(
document.getElementById("chartCapaian"),
{


type:"bar",



data:{


labels:[


"Realisasi PBB %",

"BPJS KK",

"Pupuk Ton",

"Petani"


],



datasets:[{


label:"Capaian 2025",



data:[

86,
149,
280,
23

],



borderRadius:15


}]


},




options:{


animation:animasi,


plugins:{


legend:{

display:false

}


}



}


});











// ==========================
// 7. PENDAPATAN MASYARAKAT
// ==========================


new Chart(
document.getElementById("chartPendapatan"),
{


type:"line",



data:{


labels:[


"Pendapatan KK",

"Anggota Keluarga"


],




datasets:[{


label:"Rupiah",



data:[


1708000000,

213500000


],




tension:.4,


fill:true



}]



},




options:{


animation:animasi,


plugins:{


legend:{

display:false

}


},




scales:{


y:{


ticks:{


callback:function(value){


return value / 1000000 + " jt";


}


}


}


}



}



});










// ==========================
// 8. POTENSI DESA
// ==========================


new Chart(
document.getElementById("chartPotensi"),
{


type:"polarArea",



data:{



labels:[


"UMKM",

"Ayam Broiler",

"Perkebunan",

"Pertanian",

"Wisata"



],




datasets:[{



data:[


92,

6000,

486,

100,

1



],



borderWidth:0



}]



},




options:{



animation:animasi,



plugins:{


legend:{


position:"bottom"



}


}



}



});