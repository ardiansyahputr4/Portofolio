import texture from "../assets/images/texture.avif";

import laravel from "../assets/tools/laravel.png";
import github from "../assets/tools/github.png";
import mysql from "../assets/tools/laragon.png";


export default function Overview3(){


const learnings=[


{
title:"Backend Development",
desc:
"Membangun sistem backend menggunakan Laravel dengan konsep MVC, routing, controller, dan pengelolaan data yang terstruktur."
},


{
title:"Database Management",
desc:
"Mengelola database MySQL untuk menyimpan data karyawan, pengajuan lembur, serta informasi persetujuan secara efisien."
},


{
title:"System Workflow",
desc:
"Memahami alur bisnis pengajuan lembur mulai dari pengajuan karyawan hingga proses monitoring dan pengelolaan admin."
},


];







const contents=[


{
title:"Requirement Analysis",
desc:
"Menganalisis kebutuhan sistem untuk menentukan fitur utama dalam proses pengajuan lembur karyawan."
},


{
title:"Database Design",
desc:
"Merancang struktur database MySQL dengan tabel yang saling berhubungan untuk mendukung sistem."
},


{
title:"Backend Development",
desc:
"Mengembangkan fitur menggunakan Laravel seperti routing, controller, model, dan autentikasi."
},


{
title:"CRUD System",
desc:
"Membuat proses tambah, tampil, ubah, dan hapus data pengajuan lembur."
},


{
title:"User Management",
desc:
"Mengelola hak akses pengguna agar setiap pengguna memiliki fungsi sesuai kebutuhan sistem."
},


{
title:"Testing",
desc:
"Melakukan pengujian fitur untuk memastikan sistem berjalan sesuai kebutuhan."
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






{/* TEXTURE */}


<div

className="
absolute
inset-0
opacity-[0.15]
pointer-events-none
"

style={{

backgroundImage:`url(${texture})`,
backgroundSize:"280px",
backgroundRepeat:"repeat"

}}

>

</div>







{/* DECORATION */}



<div

className="
absolute
-top-40
-right-40
w-[600px]
h-[600px]
rounded-full
bg-[#1E3A8A]/10
blur-3xl
"

>

</div>







<div

className="
absolute
left-20
bottom-20
w-56
h-56
opacity-20
"

style={{

backgroundImage:
"radial-gradient(#1E3A8A 2px,transparent 2px)",

backgroundSize:"18px 18px"

}}

>

</div>







{/* NUMBER */}


<div

className="
absolute
right-10
top-0
text-[260px]
font-black
text-[#1E3A8A]/10
select-none
"

>

03

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

✦ Development Case Study

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







<h2

className="
mt-4
text-5xl
md:text-6xl
font-black
text-[#1E3A8A]
"

>

Employee Overtime Request System

</h2>







<div

className="
mt-10
bg-white
rounded-[45px]
p-10
shadow-[0_25px_60px_rgba(0,0,0,.15)]
"

>



<p

className="
text-lg
leading-8
text-gray-700
"

>

Employee Overtime Request System merupakan
aplikasi berbasis web yang dibuat untuk membantu
proses pengajuan lembur karyawan secara digital.

<br/>
<br/>

Sistem ini membantu perusahaan dalam melakukan
pencatatan, monitoring, serta pengelolaan data
lembur menggunakan framework Laravel dan
database MySQL.

</p>


</div>






</div>









{/* KEY LEARNING */}



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
bg-white
rounded-[40px]
p-8
shadow-xl
hover:-translate-y-4
transition
"

>


<span

className="
text-5xl
font-black
text-[#1E3A8A]/20
"

>

0{index+1}

</span>





<h3

className="
mt-5
text-2xl
font-bold
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
bg-white
rounded-[40px]
p-8
shadow-[0_25px_60px_rgba(0,0,0,.15)]
hover:-translate-y-4
hover:rotate-1
transition
duration-300
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

Technology Stack

</p>







<h2

className="
mt-4
text-5xl
font-black
text-[#1E3A8A]
"

>

Tools Used

</h2>









<div

className="
grid
md:grid-cols-3
gap-8
mt-10
"

>









{/* LARAVEL */}



<div

className="
bg-white
rounded-[40px]
p-8
shadow-[0_25px_60px_rgba(0,0,0,.15)]
hover:-translate-y-4
transition
"

>



<div

className="
w-24
h-24
rounded-3xl
bg-white
shadow-lg
p-5
flex
items-center
justify-center
"

>


<img

src={laravel}

alt="Laravel"

className="
w-full
h-full
object-contain
"

/>


</div>






<h3

className="
mt-6
text-2xl
font-black
text-[#1E3A8A]
"

>

Laravel

</h3>







<p

className="
mt-3
text-gray-600
leading-7
"

>

Framework PHP yang digunakan untuk membangun backend system dengan konsep MVC.

</p>




</div>









{/* MYSQL */}



<div

className="
bg-white
rounded-[40px]
p-8
shadow-[0_25px_60px_rgba(0,0,0,.15)]
hover:-translate-y-4
transition
"

>



<div

className="
w-24
h-24
rounded-3xl
bg-white
shadow-lg
p-5
flex
items-center
justify-center
"

>


<img

src={mysql}

alt="MySQL"

className="
w-full
h-full
object-contain
"

/>


</div>







<h3

className="
mt-6
text-2xl
font-black
text-[#1E3A8A]
"

>

MySQL

</h3>







<p

className="
mt-3
text-gray-600
leading-7
"

>

Database relational yang digunakan untuk menyimpan dan mengelola data sistem.

</p>




</div>









{/* GITHUB */}



<div

className="
bg-white
rounded-[40px]
p-8
shadow-[0_25px_60px_rgba(0,0,0,.15)]
hover:-translate-y-4
transition
"

>



<div

className="
w-24
h-24
rounded-3xl
bg-white
shadow-lg
p-5
flex
items-center
justify-center
"

>


<img

src={github}

alt="GitHub"

className="
w-full
h-full
object-contain
"

/>


</div>







<h3

className="
mt-6
text-2xl
font-black
text-[#1E3A8A]
"

>

GitHub

</h3>







<p

className="
mt-3
text-gray-600
leading-7
"

>

Repository digunakan untuk version control dan dokumentasi source code project.

</p>




</div>







</div>






</div>


</div>









</section>


);


}