import kucing from "../assets/images/kucing.png";
import texture from "../assets/images/texture.avif";

export default function Hero() {
  return (

    <section
      id="home"
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#1E3A8A]
      overflow-hidden
      pt-20
      "
    >


      {/* Texture */}

      <div
        className="
        absolute
        inset-0
        opacity-10
        pointer-events-none
        "
        style={{
          backgroundImage:`url(${texture})`,
          backgroundSize:"300px",
          backgroundRepeat:"repeat",
        }}
      />





      {/* Circle Decoration */}

      <div
        className="
        absolute
        -top-40
        -left-40
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#F7F4ED]/10
        blur-3xl
        "
      />



      <div
        className="
        absolute
        bottom-20
        right-20
        w-40
        h-40
        opacity-30
        "
        style={{
          backgroundImage:
          "radial-gradient(#F7F4ED 2px,transparent 2px)",
          backgroundSize:"18px 18px"
        }}
      />







      {/* Content */}

      <div
        className="
        relative
        z-10
        flex
        flex-col
        items-center
        "
      >




        {/* Small Label */}

        <div
          className="
          mb-8
          bg-[#F97316]
          text-white
          px-6
          py-3
          rounded-full
          shadow-xl
          rotate-[-4deg]
          font-satoshi
          font-bold
          "
        >

          ✦ Portfolio 2026

        </div>







        {/* Image */}

        <img
          src={kucing}
          alt="Kucing"
          className="
          w-[1100px]
          max-w-[90%]
          drop-shadow-[0_40px_80px_rgba(0,0,0,.35)]
          animate-[float_5s_ease-in-out_infinite]
          "
        />





      </div>






      {/* Bottom Scroll */}

      <div
        className="
        absolute
        bottom-10
        text-[#F7F4ED]/70
        font-satoshi
        text-sm
        tracking-[0.4em]
        uppercase
        "
      >

        Scroll

      </div>




    </section>

  );
}