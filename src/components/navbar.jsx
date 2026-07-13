import "../assets/fonts/fonts.css";

export default function Navbar() {

  const menus = [
    {
      name: "Home",
      link: "#home"
    },
    {
      name: "About",
      link: "#about"
    },
    {
      name: "Skill",
      link: "#skill"
    },
    {
      name: "Project",
      link: "#project"
    },
    {
      name: "Contact",
      link: "#contact"
    }
  ];


  return (

    <nav
      className="
      fixed
      top-6
      left-1/2
      -translate-x-1/2

      z-50

      bg-white/20
      backdrop-blur-xl

      border
      border-white/30

      rounded-full

      px-8
      py-4

      shadow-[0_15px_40px_rgba(0,0,0,.15)]
      "
    >


      <ul
        className="
        flex
        items-center
        gap-8
        md:gap-10
        "
      >


        {
          menus.map((item)=>(

            <li
              key={item.name}
            >

              <a
                href={item.link}

                onClick={(e)=>{

                    e.preventDefault();

                    const target = document.querySelector(item.link);

                    target?.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                    });

                }}

                className="
                relative
                text-[#1E3A8A]
                font-satoshi
                font-bold
                text-sm
                md:text-base
                tracking-wide

                transition
                duration-300

                hover:text-[#F97316]

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-[#F97316]

                hover:after:w-full
                after:transition-all
                after:duration-300
                "
                >
                {item.name}
                </a>

            </li>

          ))
        }


      </ul>


    </nav>

  );
}