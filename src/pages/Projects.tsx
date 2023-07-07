import { IconButton } from "@material-tailwind/react";
import { projectsData } from "../data/projectsData";
import { BsGithub } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";

const Projects = () => {
    return (
        <div className="container mx-auto">
            <section className="py-5 sm:py-10 mt-5 sm:mt-10">
                {/* title */}
                <h1 className="text-4xl uppercase mb-11 tracking-wide flex mx-auto justify-around dark:text-primary-light">
                    Projects
                </h1>

                <p className="text-lg uppercase tracking-wide flex mx-auto justify-around dark:text-ternary-light">
                    discover my modern react projects
                </p>

                {/* projects */}
                <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 sm:gap-10 items-center justify-between pt-10 mt-14 border-t-2 border-primary-light dark:border-secondary-dark">
                    {projectsData.map((item) => (
                        <div className="rounded-xl hover:scale-105 shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                            <div>
                                <img
                                    src={item.img}
                                    className="rounded-t-xl border-none w-full"
                                    alt="Single Project"
                                />
                            </div>
                            <div className="text-center px-4 py-6">
                                <p className="font-general-medium text-2xl font-medium md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                                    {item.title}
                                </p>
                                <span className="text-lg text-ternary-dark dark:text-ternary-light">
                                    {item.tech}
                                </span>
                                <div className="mt-3 flex items-center justify-center">
                                    <a href={item.github} target="_blank">
                                        <IconButton className="bg-[#333333] mx-2 rounded-full hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                                            <BsGithub className="text-xl" />
                                        </IconButton>
                                    </a>
                                    <a href={item.demo} target="_blank">
                                        <IconButton className="bg-[#333333] mx-2 rounded-full hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                                            <FiGlobe className="text-xl" />
                                        </IconButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
