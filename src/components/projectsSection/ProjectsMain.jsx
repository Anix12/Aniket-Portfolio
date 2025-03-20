import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "TradeVista (Trading Platform)",
    desc:"A responsive stock trading platform built using React, replicating Zerodha's core features and user interface.",
    year: "Nov’2024 – Jan’2025",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "WanderLust (Listing Platform)",
    desc:"A dynamic property listing and booking platform using EJS templating, mimicking Airbnb's functionality.",
    year: "Aug’2024-Oct’2024",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "FreeLancer Hub (Group Project)",
    desc:"A collaborative project connecting freelancers with clients, featuring profile management and project bidding. (Team Project)",
    year: "Jan2025",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Hospital Management System",
    desc:"The (HMS) is a desktop application developed using Java Swing (JFrame) that streamlines and automates core hospital operations. It allows hospital staff to manage patient records, schedule doctor appointments, and generate bills efficiently. The application provides an intuitive graphical user interface (GUI) for seamless interaction between users and the system.",
    year: "Jan2025",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  }
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              desc={project.desc}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
