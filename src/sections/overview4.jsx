import texture from "../assets/images/texture.avif";


export default function Overview4(){


const learnings=[


{
title:"Blockchain Security",

desc:
"Mempelajari konsep blockchain dalam menjaga integritas data melalui mekanisme hashing dan validasi data."
},



{
title:"SHA-256 Hashing",

desc:
"Mengimplementasikan algoritma SHA-256 untuk menghasilkan fingerprint unik pada setiap data pengiriman."
},



{
title:"Data Validation",

desc:
"Membangun sistem validasi untuk mendeteksi perubahan data dan memastikan keaslian informasi."
},



];





const contents=[


{
title:"Dataset Processing",

desc:
"Melakukan pengolahan data pengiriman barang sebagai sumber data blockchain simulation."
},



{
title:"Hash Generation",

desc:
"Membuat proses hashing menggunakan SHA-256 untuk setiap blok data."
},



{
title:"Proof of Reserve",

desc:
"Menerapkan metode Proof of Reserve untuk melakukan pengecekan keberadaan dan validitas data."
},



{
title:"Merkle Tree",

desc:
"Menggunakan struktur Merkle Tree untuk melakukan verifikasi kumpulan data."
},



{
title:"CouchDB Integration",

desc:
"Menggunakan CouchDB sebagai database terdistribusi untuk menyimpan data node."
},



{
title:"Validation System",

desc:
"Membangun sistem validasi integritas data menggunakan Python Notebook."
},



];







return(


<section

className="
relative
min-h-screen
bg-[#F7F4ED]
py-28
overflow-hidden
"

>


<style>

{`

@keyframes float{

0%,100%{
transform:translateY(0)
}

50%{
transform:translateY(-15px)
}

}


@keyframes rotate{

from{
transform:rotate(0deg)
}

to{
transform:rotate(360deg)
}

}

`}

</style>







{/* TEXTURE */}


<div

className="
absolute
inset-0
opacity-[0.15]
"

style={{

backgroundImage:`url(${texture})`,
backgroundSize:"260px",
backgroundRepeat:"repeat"

}}

></div>









{/* DECORATION */}


<div

className="
absolute
-top-40
-right-40
w-[500px]
h-[500px]
rounded-full
bg-[#1E3A8A]/10
blur-3xl
"

></div>






<div

className="
absolute
bottom-20
left-20
w-48
h-48
opacity-30
"

style={{

backgroundImage:
"radial-gradient(#1E3A8A 2px,transparent 2px)",

backgroundSize:"18px 18px"

}}

></div>









{/* NUMBER */}


<div

className="
absolute
right-10
top-0
text-[240px]
font-black
text-[#1E3A8A]/10
"

>

04

</div>









<div

className="
relative
z-10
max-w-6xl
mx-auto
px-6
"

>









{/* INTRODUCTION */}



<div

className="
mb-28
"

>



<div

className="
inline-flex
bg-[#F97316]
text-white
px-6
py-3
rounded-full
font-bold
shadow-xl
rotate-[-4deg]
"

>

✦ Blockchain Case Study

</div>







<p

className="
mt-10
uppercase
tracking-[0.4em]
text-sm
font-semibold
text-[#1E3A8A]/60
"

>

Introduction

</p>







<h1

className="
mt-4
text-5xl
md:text-6xl
font-black
text-[#1E3A8A]
"

>

Blockchain Shipment

<br/>

Data Integrity System

</h1>






<div

className="
mt-10
bg-white
rounded-[45px]
p-10
shadow-[0_30px_70px_rgba(0,0,0,.15)]
border
border-[#1E3A8A]/10
"

>



<p

className="
text-lg
leading-8
text-gray-700
"

>

Project ini merupakan penelitian dan implementasi
sistem keamanan data pengiriman barang menggunakan
konsep blockchain simulation.

<br/><br/>

Sistem dirancang untuk menjaga integritas data
melalui Proof of Reserve, hashing SHA-256,
dan validasi antar node database sehingga perubahan
data dapat terdeteksi.

</p>




</div>




</div>









{/* ================= KEY LEARNINGS ================= */}



<div

className="
mb-28
"

>



<p

className="
uppercase
tracking-[0.4em]
text-sm
font-semibold
text-[#1E3A8A]/60
"

>

Key Learnings

</p>








<h2

className="
mt-4
text-5xl
font-black
text-[#1E3A8A]
"

>

What I Learned

</h2>









<div

className="
grid
md:grid-cols-3
gap-8
mt-10
"

>


{

learnings.map((item,index)=>(



<div

key={item.title}

className="
relative
bg-white
rounded-[40px]
p-8
shadow-[0_25px_60px_rgba(0,0,0,.15)]
hover:-translate-y-4
transition
duration-500
overflow-hidden
"

>


<div

className="
absolute
right-5
top-3
text-7xl
font-black
text-[#1E3A8A]/10
"

>

0{index+1}

</div>






<h3

className="
text-2xl
font-black
text-[#1E3A8A]
"

>

{item.title}

</h3>






<p

className="
mt-4
text-gray-600
leading-7
"

>

{item.desc}

</p>






</div>


))


}



</div>





</div>









{/* ================= CONTENT ================= */}




<div>




<p

className="
uppercase
tracking-[0.4em]
text-sm
font-semibold
text-[#1E3A8A]/60
"

>

Content

</p>







<h2

className="
mt-4
text-5xl
font-black
text-[#1E3A8A]
"

>

Development Process

</h2>







<div

className="
grid
md:grid-cols-3
gap-8
mt-10
"

>


{

contents.map((item,index)=>(


<div


key={item.title}


className="
relative
bg-[#1E3A8A]
rounded-[40px]
p-8
shadow-[0_30px_70px_rgba(0,0,0,.25)]
hover:-translate-y-4
transition
duration-500
overflow-hidden
"


>



<div

className="
absolute
right-5
top-3
text-7xl
font-black
text-white/10
"

>

0{index+1}

</div>







<span

className="
text-[#F97316]
text-3xl
font-black
"

>

0{index+1}

</span>







<h3

className="
mt-5
text-xl
font-black
text-white
"

>

{item.title}

</h3>







<p

className="
mt-4
text-white/70
leading-7
"

>

{item.desc}

</p>






</div>



))


}



</div>






</div>









{/* ================= TECHNOLOGY ================= */}




<div

className="
mt-32
"

>





<p

className="
uppercase
tracking-[0.4em]
text-sm
font-semibold
text-[#1E3A8A]/60
"

>

Technology

</p>






<h2

className="
mt-4
text-5xl
font-black
text-[#1E3A8A]
"

>

Tools & Stack

</h2>









<div

className="
grid
md:grid-cols-4
gap-6
mt-10
"

>







{

[

"Python",

"Jupyter Notebook",

"CouchDB",

"SHA-256"

].map((item)=>(


<div

key={item}

className="
bg-white
rounded-[30px]
p-6
shadow-xl
text-center
font-black
text-[#1E3A8A]
hover:-translate-y-3
transition
"

>


{item}


</div>


))


}



</div>







</div>









{/* ================= FINAL ================= */}













</div>








</section>


);


}