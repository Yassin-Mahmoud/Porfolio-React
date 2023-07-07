import profileImage from "../assets/profile.jpg";
import reactImage from "../assets/icons/physics.png";
import typescriptImage from "../assets/icons/typescript.png";
import tailwindImage from "../assets/icons/tailwind-css.svg";
import nodejsImage from "../assets/icons/nodejs.png";
import viteImage from "../assets/icons/Vite.js.png";

const skillsArray = [
    {
        id: 1,
        icon: reactImage,
        title: "ReactJS",
    },
    {
        id: 2,
        icon: typescriptImage,
        title: "TypeScript",
    },
    {
        id: 3,
        icon: tailwindImage,
        title: "TailwindCSS",
    },
    {
        id: 4,
        icon: nodejsImage,
        title: "NodeJS",
    },
    {
        id: 5,
        icon: viteImage,
        title: "ViteJS",
    },
];

const About = () => {
    return (
        <>
            {/* about bio */}
            <div className="container mx-auto">
                <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
                    <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                        <img
                            src={profileImage}
                            className="rounded-lg w-96"
                            alt=""
                        />
                    </div>

                    <div className="font-general-regular w-full sm:w-3/4 text-left my-auto">
                        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
                            Hi, I'm Yassin Mahmoud, a frontend developer
                            specializing in React, TypeScript, and Tailwind CSS.
                            As a student, I'm passionate about creating
                            beautiful and user-friendly web applications while
                            constantly learning and growing as a developer. I
                            love using React because it allows me to create
                            reusable components and build complex UIs with ease.
                            TypeScript helps me write more maintainable code,
                            while Tailwind CSS speeds up my design process. I
                            have experience working on various projects and am
                            always looking for new challenges to tackle. In my
                            free time, I work on personal projects, contribute
                            to open-source projects, and attend meetups and
                            conferences to stay up-to-date with the latest web
                            development trends.
                        </p>
                    </div>
                </div>
            </div>

            {/* technologies */}
            <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
                <div className="font-general-medium container mx-auto py-20 block">
                    <h1 className="w-full mb-9 tracking-wide uppercase font-medium text-3xl items-center text-center  text-primary-dark dark:text-primary-light">
                        technologies
                    </h1>
                    <div className="flex flex-col sm:flex-row justify-around">
                        {skillsArray.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col items-center"
                            >
                                <div className="w-24 h-24 mb-3 shadow-gray-900 shadow-2xl rounded-full flex items-center justify-center">
                                    <img
                                        className="w-14 h-14"
                                        src={item.icon}
                                        alt={item.title}
                                    />
                                </div>
                                <p className="text-primary-dark dark:text-ternary-light mb-3">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* education */}
            <div className="container mx-auto mt-10">
                <div>
                    <h1 className="text-3xl font-medium text-primary-dark dark:text-primary-light">
                        Education
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-10 justify-between">
                        {/* first card */}
                        <div className="rounded-xl mt-9 shadow-lg hover:scale-105 hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                            <div className="px-4 pt-6">
                                <h1 className="mb-2 text-xl font-medium text-secondary-dark dark:text-secondary-light">
                                    Faculty of Business
                                </h1>
                            </div>
                            <div className="px-4 pb-6">
                                <p className="text-indigo-500 mb-4">
                                    Alexandria University (Oct 2022 - Present)
                                </p>
                                <span className="text-lg text-ternary-dark dark:text-ternary-light">
                                    A student in the 2st. year in Faculty of
                                    Business, Alexandria University.
                                </span>
                            </div>
                        </div>

                        {/* second card */}
                        <div className="rounded-xl lg:mt-9 shadow-lg hover:scale-105 hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                            <div className="px-4 pt-6">
                                <h1 className="mb-2 text-xl font-medium text-secondary-dark dark:text-secondary-light">
                                    Advanced Full-Stack Web Development
                                </h1>
                            </div>
                            <div className="px-4 pb-6">
                                <p className="text-indigo-500 mb-4">
                                    Udacity Nanodegree Program (Oct 2022 - Dec
                                    2022)
                                </p>
                                <span className="text-lg text-ternary-dark dark:text-ternary-light">
                                    Scholarship from Udacity sponsored by
                                    Ministry of Communication and Information
                                    Technology of Egypt (MCIT).
                                </span>
                                <a
                                    className="text-indigo-300 underline block mt-2"
                                    href="https://graduation.udacity.com/confirm/NUXKJ6MU"
                                >
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
