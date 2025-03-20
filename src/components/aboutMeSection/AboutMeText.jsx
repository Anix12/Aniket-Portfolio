import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-7xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Aniket Adhav, a passionate Full-Stack Developer with expertise in building dynamic and scalable web applications. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have successfully built projects like a Zerodha Clone, Airbnb Clone, and Freelancer Hub.
        I'm driven by a desire to craft impactful digital solutions while continuously learning and exploring new technologies. When I'm not coding, I enjoy sharing knowledge, exploring emerging tech trends, and staying motivated by solving complex challenges.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
