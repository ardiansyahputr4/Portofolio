import texture from "../assets/images/texture.avif";


export default function Overview2(){


const learnings = [

{
title:"User Research",
desc:
"Memahami kebutuhan pengguna dalam mencari rekomendasi makanan serta membuat pengalaman eksplorasi kuliner yang lebih mudah."
},


{
title:"Mobile UI Design",
desc:
"Membuat tampilan interface mobile yang modern dengan fokus pada visual, typography, warna, dan kemudahan navigasi."
},


{
title:"User Experience",
desc:
"Membangun alur pengguna yang sederhana mulai dari mencari makanan hingga melihat detail informasi."
},


];





const contents=[

{
title:"Research",
desc:
"Menganalisis kebutuhan pengguna dan menentukan konsep aplikasi kuliner."
},


{
title:"Wireframe",
desc:
"Membuat struktur awal halaman untuk menentukan layout dan navigasi aplikasi."
},


{
title:"UI Design",
desc:
"Menerapkan visual design menggunakan warna, icon, typography, dan komponen yang konsisten."
},


{
title:"Food Discovery",
desc:
"Merancang fitur pencarian makanan, kategori menu, dan rekomendasi kuliner."
},


{
title:"Prototype",
desc:
"Membuat prototype interaktif untuk menggambarkan pengalaman pengguna."
},


{
title:"Final Design",
desc:
"Menghasilkan desain aplikasi mobile yang siap untuk dikembangkan."
},


];







return(


<section

className="
relative
min-h-screen
bg-[#1E3A8A]
py-28
overflow-hidden
"

>





{/* TEXTURE */}

<div

className="
absolute
inset-0
opacity-[0.22]
pointer-events-none
"

style={{

backgroundImage:`url(${texture})`,
backgroundSize:"280px",
backgroundRepeat:"repeat"

}}

></div>







{/* DECORATION */}



<div

className="
absolute
-top-32
-right-32
w-[500px]
h-[500px]
rounded-full
bg-[#F7F4ED]/10
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
"radial-gradient(#F7F4ED 2px,transparent 2px)",

backgroundSize:"18px 18px"

}}

></div>







{/* BIG NUMBER */}



<div

className="
absolute
right-10
top-0
text-[240px]
font-black
text-[#F7F4ED]/10
select-none
"

>

02

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









{/* ================= INTRODUCTION ================= */}




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

✦ UI/UX Case Study

</div>







<p

className="
mt-10
uppercase
tracking-[0.4em]
text-sm
font-semibold
text-[#F7F4ED]/60
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
text-[#F7F4ED]
"

>

Food Discovery App

</h2>








<div

className="
mt-10
bg-[#F7F4ED]
rounded-[45px]
p-10
shadow-[0_30px_70px_rgba(0,0,0,.25)]
"

>



<p

className="
text-lg
leading-8
text-gray-700
"

>

Food Discovery App merupakan personal project
UI/UX Design yang berfokus pada pengalaman
pengguna dalam menemukan berbagai rekomendasi
kuliner secara cepat dan menarik.

<br/>
<br/>

Project ini dirancang untuk memberikan
pengalaman eksplorasi makanan melalui tampilan
mobile yang modern, visual, dan mudah digunakan.

</p>



</div>





</div>









{/* ================= KEY LEARNING ================= */}



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
text-[#F7F4ED]/60
"

>

Key Learnings

</p>






<h2

className="
mt-4
text-5xl
font-black
text-[#F7F4ED]
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
bg-[#F7F4ED]
text-[#1E3A8A]
rounded-[45px]
p-8
shadow-[0_25px_60px_rgba(0,0,0,.25)]
hover:-translate-y-4
transition
duration-300
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
"

>

{item.title}

</h3>






<p

className="
mt-4
text-[#1E3A8A]/70
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
text-[#F7F4ED]/60
"

>

Content

</p>







<h2

className="
mt-4
text-5xl
font-black
text-[#F7F4ED]
"

>

Design Process

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
bg-white
rounded-[35px]
p-8
shadow-[0_20px_50px_rgba(0,0,0,.18)]
hover:-translate-y-3
hover:rotate-1
transition
duration-300
"

>




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
font-bold
text-[#1E3A8A]
"

>

{item.title}

</h3>







<p

className="
mt-3
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







</div>





</section>



)


}