import texture from "../assets/images/texture.avif";


export default function Overview1() {


  const learnings = [
    {
      title: "User Experience",
      desc:
        "Memahami kebutuhan pengguna dan membuat alur sistem yang lebih mudah digunakan oleh mahasiswa."
    },

    {
      title: "UI Design",
      desc:
        "Membuat tampilan antarmuka yang modern, konsisten, dan memiliki visual yang menarik."
    },

    {
      title: "Prototype",
      desc:
        "Membangun prototype interaktif menggunakan Figma untuk menggambarkan pengalaman pengguna."
    },
  ];



  const contents = [
    {
      title: "User Research",
      desc:
        "Menganalisis kebutuhan pengguna untuk menentukan fitur dan solusi desain."
    },

    {
      title: "Wireframe",
      desc:
        "Membuat rancangan awal layout dan struktur halaman aplikasi."
    },

    {
      title: "UI Design",
      desc:
        "Menerapkan visual design dengan warna, typography, dan komponen yang konsisten."
    },

    {
      title: "Prototype",
      desc:
        "Membuat prototype interaktif sebagai simulasi penggunaan sistem."
    },

    {
      title: "Dashboard",
      desc:
        "Merancang tampilan dashboard akademik untuk menampilkan informasi utama."
    },

    {
      title: "Academic Feature",
      desc:
        "Mendesain fitur jadwal kuliah, KRS, KHS, dan informasi kampus."
    },
  ];



  return (

    <section
      className="
      relative
      min-h-screen
      bg-[#F7F4ED]
      py-28
      overflow-hidden
      "
    >


      {/* ================= TEXTURE ================= */}

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
          backgroundRepeat:"repeat",
        }}
      />




      {/* ================= DECORATION ================= */}


      <div
        className="
        absolute
        -top-32
        -left-32
        w-[450px]
        h-[450px]
        rounded-full
        bg-[#1E3A8A]/10
        blur-3xl
        "
      />



      <div
        className="
        absolute
        right-[-150px]
        bottom-20
        w-[400px]
        h-[400px]
        rounded-full
        bg-[#F97316]/10
        blur-3xl
        "
      />



      {/* Dot Pattern */}

      <div
        className="
        absolute
        right-20
        top-40
        w-40
        h-40
        opacity-20
        "
        style={{
          backgroundImage:
          "radial-gradient(#1E3A8A 2px, transparent 2px)",
          backgroundSize:"18px 18px",
        }}
      />




      {/* Big Number */}

      <div
        className="
        absolute
        right-10
        top-10
        text-[220px]
        font-black
        text-[#1E3A8A]/5
        select-none
        "
      >
        01
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
            items-center
            gap-2

            bg-[#F97316]

            text-white

            px-5
            py-2

            rounded-full

            shadow-lg

            rotate-[-3deg]
            "
          >

            <span>
              ✦
            </span>


            <span
              className="
              font-bold
              "
            >
              UI/UX Case Study
            </span>


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
            Sistem Informasi Kampus
          </h2>






          <div
            className="
            mt-10

            bg-white/90

            backdrop-blur-xl

            rounded-[45px]

            p-10

            shadow-[0_30px_70px_rgba(0,0,0,.12)]

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

              Sistem Informasi Kampus merupakan project
              UI/UX Design untuk merancang platform
              akademik berbasis web yang membantu
              mahasiswa dalam mengakses informasi
              perkuliahan.

              <br/>
              <br/>

              Project ini berfokus pada pembuatan
              interface yang sederhana, modern,
              dan mudah digunakan dengan fitur utama
              seperti jadwal kuliah, KRS, KHS,
              serta informasi akademik.

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
                bg-[#1E3A8A]

                rounded-[45px]

                p-8

                text-[#F7F4ED]

                shadow-[0_25px_60px_rgba(30,58,138,.35)]

                hover:-translate-y-4

                transition-all

                duration-300
                "
              >


                <span
                  className="
                  text-5xl
                  font-black
                  text-white/20
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
                  text-white/80
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
            Project Process
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

                shadow-[0_20px_50px_rgba(0,0,0,.12)]

                hover:-translate-y-3

                hover:rotate-1

                transition-all

                duration-300
                "
              >


                <span
                  className="
                  text-[#F97316]
                  font-black
                  text-3xl
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

  );

}