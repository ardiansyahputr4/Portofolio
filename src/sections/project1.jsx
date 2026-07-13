import texture from "../assets/images/texture.avif";
import campus from "../assets/images/campus.png";

export default function Project1() {
  const project = {
    title: "Sistem Informasi Kampus",
    category: "UI/UX Case Study",
    description:
      "Merancang antarmuka Sistem Informasi Kampus yang modern dan responsif untuk membantu mahasiswa mengakses jadwal kuliah, KRS, KHS, pengumuman, serta informasi akademik dengan pengalaman pengguna yang sederhana dan efisien.",

    role: "UI/UX Designer",
    duration: "4 Weeks",
    tools: "Figma",
    platform: "Mobile Application",

    tags: [
      "UI/UX",
      "Figma",
      "Prototype",
      "Responsive",
    ],
  };
  

  return (
    <section
      id="project"
      className="
      relative
      min-h-screen
      bg-[#F7F4ED]
      overflow-hidden
      py-28
      scroll-mt-24
      "
    >

      {/* ================= Texture ================= */}

<div
  className="absolute inset-0 opacity-[0.12]"
  style={{
    backgroundImage: `url(${texture})`,
    backgroundSize: "260px",
    backgroundRepeat: "repeat",
  }}
/>

{/* ================= Dot Pattern ================= */}

<div
  className="
  absolute
  top-32
  right-24
  w-44
  h-44
  opacity-20
  "
  style={{
    backgroundImage:
      "radial-gradient(circle,#1E3A8A 2px,transparent 2px)",
    backgroundSize: "18px 18px",
  }}
/>
<div
  className="
  absolute
  bottom-20
  left-16
  w-20
  h-20
  border-4
  border-[#1E3A8A]/20
  rotate-12
  rounded-xl
  "
/>

{/* Decorative Blob */}

<div className="absolute -left-32 top-20 w-80 h-80 rounded-full bg-[#1E3A8A]/10 blur-3xl" />

<div className="absolute right-10 bottom-20 w-52 h-52 rounded-full border-[18px] border-[#1E3A8A]/10" />

      {/* Decorative Blob */}

      <div className="absolute -left-32 top-20 w-80 h-80 rounded-full bg-[#1E3A8A]/10 blur-3xl" />

      <div className="absolute right-10 bottom-20 w-52 h-52 rounded-full border-[18px] border-[#1E3A8A]/10" />

      {/* ================= Container ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
        className="
        absolute
        top-8
        left-6
        select-none
        pointer-events-none
        "
        >
        <h1
            className="
            text-[220px]
            md:text-[280px]
            font-black
            leading-none
            text-[#1E3A8A]/20
            "
        >
            01
        </h1>
        </div>

        <div className="mb-20">

          <span
            className="
            inline-block
            bg-[#1E3A8A]
            text-[#F7F4ED]
            px-5
            py-2
            rounded-full
            text-sm
            font-semibold
            tracking-widest
            "
          >
            FEATURED PROJECT
          </span>

          <h2
            className="
            mt-6
            text-5xl
            md:text-6xl
            font-black
            text-[#1E3A8A]
            "
          >
            UI/UX Design
          </h2>

        </div>
        <div
        className="
        inline-flex
        items-center
        gap-3

        bg-[#1E3A8A]

        px-5
        py-3

        rounded-full

        shadow-lg

        mb-8
        "
        >

        <div
            className="
            w-3
            h-3
            rounded-full
            bg-green-500
            "
        />

        <span
            className="
            font-semibold
            text-[#F7F4ED]
            "
        >
            Case Study
        </span>

        </div>
        {/* ================= GRID ================= */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT ================= */}

          <div>

            <p
              className="
              uppercase
              tracking-[0.35em]
              text-[#1E3A8A]/90
              font-semibold
              text-sm
              "
            >
              {project.category}
            </p>

            <h1
            className="
            mt-6
            text-6xl
            md:text-7xl
            font-black
            leading-none
            text-[#1E3A8A]
            drop-shadow-[6px_6px_0px_rgba(30,58,138,0.18)]
            "
            >
              Sistem
              <br />
              Informasi
              <br />
              Kampus
            </h1>

            {/* Badge */}

            <div className="flex flex-wrap gap-3 mt-10">

              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                  px-5
                  py-2
                  rounded-full
                  bg-[#1E3A8A]
                  shadow-lg
                  border
                  border-[#1E3A8A]/10
                  text-[#F7F4ED]
                  font-semibold
                  "
                >
                  {tag}
                </span>
              ))}

            </div>

            {/* Description */}

            <p
              className="
              mt-10
              text-lg
              leading-8
              text-gray-700
              max-w-xl
              "
            >
              <div className="flex items-center mt-8 mb-10">

            <div
                className="
                w-140
                h-1.5
                bg-[#1E3A8A]
                rounded-full
                "
            />

            <div
                className="
                w-5
                h-3
                rounded-full
                bg-[#1E3A8A]
                ml-2
                "
            />

            </div>
            </p>

            {/* Info Card */}

            <div className="grid grid-cols-2 gap-5 mt-12">

            <div
                className="
                bg-[#1E3A8A]
                rounded-3xl
                p-6
                shadow-xl
                border
                border-[#1E3A8A]/10
                hover:-translate-y-2
                transition
                duration-300
                "
            >
                <p className="text-sm text-white/70">👤 Role</p>
                <h4 className="mt-2 text-[#F7F4ED] font-bold">
                {project.role}
                </h4>
            </div>

            <div
                className="
                bg-[#1E3A8A]
                rounded-3xl
                p-6
                shadow-xl
                border
                border-[#1E3A8A]/10
                hover:-translate-y-2
                transition
                duration-300
                "
            >
                <p className="text-sm text-white/70">⏱ Duration</p>
                <h4 className="mt-2 text-[#F7F4ED] font-bold">
                {project.duration}
                </h4>
            </div>

            <div
                className="
                bg-[#1E3A8A]
                rounded-3xl
                p-6
                shadow-xl
                border
                border-[#1E3A8A]/10
                hover:-translate-y-2
                transition
                duration-300
                "
            >
                <p className="text-sm text-white/70">💻 Platform</p>
                <h4 className="mt-2 text-[#F7F4ED] font-bold">
                {project.platform}
                </h4>
            </div>

            <div
                className="
                bg-[#1E3A8A]
                rounded-3xl
                p-6
                shadow-xl
                border
                border-[#1E3A8A]/10
                hover:-translate-y-2
                transition
                duration-300
                "
            >
                <p className="text-sm text-white/70">🎨 Tools</p>
                <h4 className="mt-2 text-[#F7F4ED] font-bold">
                {project.tools}
                </h4>
            </div>

            </div>

            {/* Button */}

            <a
            href="https://www.figma.com/proto/0YpUAkCsi3ZUM98AEo8EyE/Ardiansyah-Putra--223303030227-?node-id=176-621&p=f&viewport=446%2C588%2C0.15&t=4V79ZvSQL4qeBkBB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=73%3A14"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            gap-3

            mt-10

            bg-[#F97316]
            text-[#F7F4ED]

            px-8
            py-4

            rounded-full

            font-semibold

            shadow-xl

            hover:bg-[#EA580C]
            hover:scale-105
            hover:shadow-2xl

            transition-all
            duration-300
            "
            >
            View Case Study

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H9M17 7V15"
                />
            </svg>
            </a>

          </div>

          {/* ================= RIGHT ================= */}

        <div className="relative flex justify-center items-center">

        {/* Blob Background */}

        <div
            className="
            absolute
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#1E3A8A]/10
            blur-3xl
            "
        />

        {/* Decoration Circle */}

        <div
            className="
            absolute
            -top-8
            right-0
            w-28
            h-28
            border-[10px]
            border-[#1E3A8A]/20
            rounded-full
            "
        />

        {/* Sticker */}

        <div
            className="
            absolute
            -left-6
            top-12
            bg-[#1E3A8A]
            text-[#F7F4ED]
            px-5
            py-2
            rounded-full
            shadow-xl
            rotate-[-12deg]
            font-semibold
            z-30
            "
        >
            UI / UX ✦
        </div>
              <div
                className="
                absolute
                w-[550px]
                h-[550px]

                rounded-full

                bg-[#1E3A8A]/10

                blur-[120px]
                "
                />
        {/* Laptop */}

        <div className="relative z-20">

            {/* Laptop Screen */}

            <div
            className="
            relative
            z-20

            hover:-translate-y-3
            hover:rotate-1

            transition
            duration-500
            "
            >

            {/* Camera */}

            <div className="flex justify-center mb-3">

                <div
                className="
                w-3
                h-3
                rounded-full
                text-white/70
                "
                />

            </div>

            {/* Screen */}

            <img
                src={campus}
                alt="Campus UI"
                className="
                w-[620px]
                rounded-xl
                object-cover
                "
            />

            </div>

            {/* Laptop Base */}

            <div
            className="
            h-5
            bg-gray-300
            rounded-b-full
            mx-auto
            w-[680px]
            shadow-xl
            "
            />

        </div>

        {/* Floating Card */}

        <div
            className="
            absolute
            bottom-8
            -left-5
            bg-[#1E3A8A]
            rounded-3xl
            px-6
            py-4
            shadow-2xl
            rotate-[-6deg]
            hover:-translate-y-2
            hover:rotate-0
            transition
            duration-300
            z-30
            "
        >

            <p className="text-sm text-white/70">
            Project
            </p>

            <h4
            className="
            font-bold
            text-[#F7F4ED]
            "
            >
            Campus Information System
            </h4>

        </div>

        {/* Floating Badge */}

        <div
            className="
            absolute
            top-32
            -right-5
            bg-[#F7F4ED]
            px-6
            py-4
            rounded-3xl
            shadow-xl
            rotate-6
            hover:rotate-0
            hover:scale-105

            transition
            duration-300
            z-30
            "
        >

            <h3
            className="
            text-[#1E3A8A]
            font-bold
            text-xl
            "
            >
            2026
            </h3>

        </div>

        </div>

          <div></div>

        </div>

      </div>

    </section>
  );
}