import ContactForm from "../components/ContactForm";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const contacts = [
    {
        id: 1,
        name: "Kafr Abdu, Alexandria, Egypt",
        icon: <FiMapPin />,
    },
    {
        id: 2,
        name: "yassinmahmoud1024@gmail.com",
        icon: <FiMail />,
    },
    {
        id: 3,
        name: "+201556085335",
        icon: <FiPhone />,
    },
];

const Contact = () => {
    return (
        <div className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10">
            <ContactForm />

            {/* contact info */}
            <div className="w-full lg:w-1/2">
                <div className="text-left max-w-xl px-6">
                    <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
                        Contact details
                    </h2>
                    <ul className="font-general-regular">
                        {contacts.map((contact) => (
                            <li className="flex " key={contact.id}>
                                <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                                    {contact.icon}
                                </i>
                                <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                                    {contact.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
