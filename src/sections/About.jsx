import "../assets/fonts/fonts.css";

import profile from "../assets/images/profile.png";
import texture from "../assets/images/texture.avif";

export default function About() {
  return (
    <section
      id="about"
      className="
      relative
      min-h-screen
      flex
      items-center
      bg-[#F7F4ED]
      overflow-hidden
      py-28
      "
    >
      <div
      className="
      flex
      items-center
      gap-3
      mb-6
      "
      >

      <div
      className="
      w-12
      h-[2px]
      bg-[#F97316]
      "
      />

      <p
      className="
      font-satoshi
      text-sm
      tracking-[0.4em]
      text-[#1E3A8A]/60
      uppercase
      "
      >
      About Me
      </p>

      </div>

      {/* ================= BACKGROUND TEXTURE ================= */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.16]
        pointer-events-none
        "
        style={{
          backgroundImage: `url(${texture})`,
          backgroundRepeat: "repeat",
          backgroundSize: "280px",
        }}
      />



      {/* ================= BLUR ================= */}

      <div
        className="
        absolute
        -top-40
        -left-32
        w-[520px]
        h-[520px]
        rounded-full
        bg-[#1E3A8A]/10
        blur-3xl
        animate-pulse
        "
      />

      <div
        className="
        absolute
        bottom-0
        -right-24
        w-[450px]
        h-[450px]
        rounded-full
        bg-[#F97316]/10
        blur-3xl
        "
      />



      {/* ================= DOTS ================= */}

      <div
        className="
        absolute
        top-20
        left-16
        w-36
        h-36
        opacity-20
        "
        style={{
          backgroundImage:
            "radial-gradient(#1E3A8A 2px,transparent 2px)",
          backgroundSize: "18px 18px",
        }}
      />



      <div
        className="
        absolute
        bottom-20
        right-20
        w-40
        h-40
        opacity-20
        "
        style={{
          backgroundImage:
            "radial-gradient(#F97316 2px,transparent 2px)",
          backgroundSize: "18px 18px",
        }}
      />



      {/* ================= BIG TYPO ================= */}

      <h1
        className="
        absolute
        top-0
        left-0
        text-[220px]
        leading-none
        text-[#1E3A8A]/5
        font-bold
        select-none
        font-clash
        "
      >
        ABOUT
      </h1>



      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        w-full
        grid
        lg:grid-cols-2
        gap-24
        items-center
        "
      >




        {/* ================= PROFILE ================= */}

        <div
          className="
          relative
          flex
          justify-center
          items-center
          "
        >



          {/* Glow */}

          <div
            className="
            absolute
            w-[520px]
            h-[520px]
            rounded-full
            bg-[#1E3A8A]/10
            blur-3xl
            "
          />



          {/* Circle */}

          <div
            className="
            absolute
            w-[370px]
            h-[470px]
            rounded-[70px]
            border-[3px]
            border-dashed
            border-[#1E3A8A]/20
            rotate-[-8deg]
            "
          />



          {/* Blob */}

          <div
            className="
            absolute
            w-[430px]
            h-[430px]
            rounded-[40%_60%_55%_45%]
            bg-[#1E3A8A]/10
            rotate-12
            animate-[float_6s_ease-in-out_infinite]
            "
          />



          {/* Orange Ring */}

          <div
            className="
            absolute
            top-6
            left-10
            w-24
            h-24
            rounded-full
            border-[8px]
            border-[#F97316]/30
            "
          />



          {/* Small Circle */}

          <div
            className="
            absolute
            top-24
            right-14
            w-6
            h-6
            rounded-full
            bg-[#F97316]
            shadow-xl
            "
          />



          <div
            className="
            absolute
            bottom-20
            left-8
            w-10
            h-10
            rounded-full
            bg-[#1E3A8A]/20
            "
          />



          {/* Sticker */}

          <div
            className="
            absolute
            top-6
            right-8
            px-7
            py-3
            rounded-full
            bg-[#F97316]
            text-white
            shadow-2xl
            rotate-12
            font-clash
            text-sm
            tracking-wide
            "
          >
            CREATIVE ✦
          </div>



          <div
            className="
            absolute
            bottom-20
            left-2
            px-7
            py-3
            rounded-full
            bg-white
            text-[#1E3A8A]
            shadow-2xl
            -rotate-12
            font-clash
            text-sm
            "
          >
            UI / UX DESIGN
          </div>



          {/* IMAGE */}

          <img
            src={profile}
            alt="Profile"
            className="
            relative
            z-10
            w-[440px]
            md:w-[520px]
            object-contain
            drop-shadow-[0_35px_80px_rgba(0,0,0,.28)]
            hover:scale-105
            transition-all
            duration-500
            animate-[float_5s_ease-in-out_infinite]
            "
          />

        </div>



        {/* ================= RIGHT ================= */}

<div>


  {/* LABEL */}

  <div
    className="
    inline-flex
    bg-[#F97316]
    text-white
    px-6
    py-3
    rounded-full
    shadow-xl
    rotate-[-4deg]
    font-clash
    "
  >
    ✦ ABOUT ME
  </div>




  {/* TITLE */}

  <h2
  style={{
    fontFamily: "soulrise"
  }}
    className="
    mt-8
    text-6xl
    md:text-7xl
    font-bold
    leading-none
    text-[#1E3A8A]
    font-soulrise
    "
  >
    Creative
    <br/>
    Developer
  </h2>





  {/* ================= ABOUT BOX ================= */}

<div
  className="
  relative
  mt-10
  bg-[#1E3A8A]
  rounded-[45px]
  p-10
  shadow-[0_30px_80px_rgba(30,58,138,.35)]
  overflow-hidden
  "
>


  {/* Decoration */}

  <div
    className="
    absolute
    -top-20
    -right-20
    w-64
    h-64
    rounded-full
    bg-white/10
    "
  />


  <div
    className="
    absolute
    bottom-8
    left-8
    w-16
    h-16
    border-4
    border-[#F7F4ED]/20
    rounded-full
    "
  />



  <div
    className="
    absolute
    top-10
    right-10
    w-5
    h-5
    bg-[#F97316]
    rounded-full
    "
  />





  {/* CONTENT */}

  <div
    className="
    relative
    z-10
    "
  >


    <h3
      className="
      text-4xl
      font-bold
      text-[#F7F4ED]
      font-soulrise
      "
    >
      About Me
    </h3>




    <div
      className="
      mt-6
      w-20
      h-1
      bg-[#F97316]
      rounded-full
      "
    />




    <p
    
      className="
      mt-7
      text-lg
      leading-8
      text-[#F7F4ED]/90
      font-satoshi
      "
    >
      Saya mahasiswa Teknik Informatika yang memiliki ketertarikan
      pada UI/UX Design, Web Development, Backend Development,
      dan Blockchain.
    </p>



    <p
      className="
      mt-5
      text-lg
      leading-8
      text-[#F7F4ED]/80
      font-satoshi
      "
    >
      Saya menggabungkan kreativitas desain dan kemampuan
      pemrograman untuk membangun solusi digital yang modern,
      interaktif, dan berorientasi pada pengalaman pengguna.
    </p>



    {/* MINI TAG */}

    <div
      className="
      mt-8
      flex
      flex-wrap
      gap-3
      "
    >

      <span
        className="
        bg-[#F7F4ED]
        text-[#1E3A8A]
        px-5
        py-2
        rounded-full
        font-clash
        "
      >
        UI/UX
      </span>


      <span
        className="
        bg-[#F97316]
        text-white
        px-5
        py-2
        rounded-full
        font-clash
        "
      >
        Developer
      </span>


      <span
        className="
        bg-white/20
        text-[#F7F4ED]
        px-5
        py-2
        rounded-full
        font-clash
        "
      >
        Blockchain
      </span>


    </div>


  </div>


</div>





  {/* SMALL INFO */}


  <div
    className="
    mt-8
    grid
    grid-cols-3
    gap-4
    "
  >


    <div
      className="
      bg-white
      rounded-3xl
      p-5
      shadow-xl
      "
    >

      <h4
        className="
        text-3xl
        font-bold
        text-[#F97316]
        font-clash
        "
      >
        04
      </h4>

      <p className="font-satoshi text-[#1E3A8A]">
        Projects
      </p>

    </div>



    <div
      className="
      bg-white
      rounded-3xl
      p-5
      shadow-xl
      "
    >

      <h4
        className="
        text-3xl
        font-bold
        text-[#F97316]
        font-clash
        "
      >
        10+
      </h4>

      <p className="font-satoshi text-[#1E3A8A]">
        Tools
      </p>

    </div>




    <div
      className="
      bg-white
      rounded-3xl
      p-5
      shadow-xl
      "
    >

      <h4
        className="
        text-3xl
        font-bold
        text-[#F97316]
        font-clash
        "
      >
        2026
      </h4>

      <p className="font-satoshi text-[#1E3A8A]">
        Portfolio
      </p>

    </div>


  </div>

          
          {/* ================= SKILL TAGS ================= */}

          <div
            className="
            mt-10
            flex
            flex-wrap
            gap-4
            "
          >


            <div
              className="
              bg-[#1E3A8A]
              text-[#F7F4ED]
              px-6
              py-3
              rounded-full
              shadow-xl
              font-clash
              rotate-[-5deg]
              hover:-translate-y-2
              hover:rotate-0
              transition
              duration-300
              "
            >
              UI / UX ✦
            </div>



            <div
              className="
              bg-white
              text-[#1E3A8A]
              px-6
              py-3
              rounded-full
              shadow-xl
              font-clash
              rotate-3
              hover:-translate-y-2
              hover:rotate-0
              transition
              duration-300
              "
            >
              React
            </div>



            <div
              className="
              bg-[#F97316]
              text-white
              px-6
              py-3
              rounded-full
              shadow-xl
              font-clash
              rotate-[-3deg]
              hover:-translate-y-2
              hover:rotate-0
              transition
              duration-300
              "
            >
              Laravel
            </div>



            <div
              className="
              bg-white
              text-[#1E3A8A]
              px-6
              py-3
              rounded-full
              shadow-xl
              font-clash
              rotate-2
              hover:-translate-y-2
              hover:rotate-0
              transition
              duration-300
              "
            >
              Backend
            </div>



            <div
              className="
              bg-[#1E3A8A]
              text-white
              px-6
              py-3
              rounded-full
              shadow-xl
              font-clash
              rotate-[-2deg]
              hover:-translate-y-2
              hover:rotate-0
              transition
              duration-300
              "
            >
              Blockchain
            </div>


          </div>


        </div>



      </div>





      {/* ================= FLOATING ELEMENT ================= */}


      <div
        className="
        absolute
        bottom-20
        left-10
        bg-[#1E3A8A]
        text-white
        px-6
        py-3
        rounded-full
        shadow-2xl
        rotate-[-12deg]
        font-clash
        animate-bounce
        "
      >
        Creative Developer ✦
      </div>



      <div
        className="
        absolute
        top-32
        right-20
        bg-white
        text-[#1E3A8A]
        px-6
        py-3
        rounded-full
        shadow-xl
        rotate-12
        font-clash
        "
      >
        2026 Portfolio
      </div>




    </section>
  );
}