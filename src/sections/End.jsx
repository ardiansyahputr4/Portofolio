import texture from "../assets/images/texture.avif";
import { Mail } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function End(){


return (
  <section
    id="contact"
    className="
    relative
    min-h-screen
    scroll-mt-24
    ...
    "
  >


<style>

{`

@keyframes float{

0%,100%{
transform:translateY(0)
}

50%{
transform:translateY(-20px)
}

}


@keyframes rotateSlow{

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
opacity-[0.18]
"

style={{

backgroundImage:`url(${texture})`,
backgroundSize:"280px",
backgroundRepeat:"repeat"

}}

></div>









{/* BIG TEXT */}


<div

className="
absolute
top-0
left-10
text-[250px]
font-black
text-white/10
select-none
"

>



</div>









{/* GLOW */}



<div

className="
absolute
-right-40
top-20
w-[600px]
h-[600px]
rounded-full
bg-[#F97316]/20
blur-3xl
"

>

</div>









{/* DOT */}



<div

className="
absolute
bottom-20
left-20
w-52
h-52
opacity-30
"

style={{

backgroundImage:
"radial-gradient(#F7F4ED 2px,transparent 2px)",

backgroundSize:"18px 18px"

}}

>

</div>









<div

className="
relative
z-10
max-w-6xl
mx-auto
px-6
text-center
"

>









<div

className="
inline-flex
bg-[#F97316]
text-white
px-7
py-3
rounded-full
font-bold
shadow-xl
rotate-[-4deg]
animate-[float_3s_ease-in-out_infinite]
"

>

✦ Thank You

</div>









<h1

className="
mt-10
text-6xl
md:text-8xl
font-black
leading-none
text-[#F7F4ED]
drop-shadow-xl
"

>

Let's Create

<br/>

Something

<br/>

Amazing

</h1>









<p

className="
mt-8
max-w-3xl
mx-auto
text-lg
md:text-xl
leading-8
text-white/70
"

>

Terima kasih telah melihat portfolio saya.
Saya terus belajar, berkembang, dan menciptakan
solusi digital melalui teknologi, desain,
dan inovasi.

</p>












{/* CONTACT ICON */}

<div
className="
mt-14
flex
justify-center
flex-wrap
gap-10
"
>


{/* EMAIL */}

<div
className="
flex
items-center
gap-3
text-[#F7F4ED]
font-bold
text-lg
"
>

<Mail
size={30}
/>

<span>
ardiansyahputra10102003@gmail.com
</span>

</div>





{/* LINKEDIN */}

<div
className="
flex
items-center
gap-3
text-[#F7F4ED]
font-bold
text-lg
"
>

<FaLinkedin
size={32}
/>

<span>
linkedin.com/in/ardsyputra
</span>

</div>






{/* INSTAGRAM */}

<div
className="
flex
items-center
gap-3
text-[#F7F4ED]
font-bold
text-lg
"
>

<FaInstagram
size={32}
/>


<span>
ard_syputra
</span>

</div>



</div>









{/* ROTATING ELEMENT */}



<div

className="
absolute
right-20
bottom-20
w-28
h-28
border-[8px]
border-[#F7F4ED]/30
rounded-full
animate-[rotateSlow_15s_linear_infinite]
"

>

</div>







</div>






</section>


);


}