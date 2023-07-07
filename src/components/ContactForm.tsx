import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_esiejd2",
                "template_9lrnbuc",
                e.currentTarget,
                "Y--GYvcwfWpC7XPxp"
            )
            .then(
                (result) => {
                    const inputs = Array.from(
                        form.current?.getElementsByTagName("input") || []
                    );
                    const textArea = Array.from(
                        form.current?.getElementsByTagName("textarea") || []
                    );

                    [...inputs, ...textArea].forEach((element) => {
                        element.value = "";
                    });

                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    // lg:w-1/2
    return (
        <div className="w-full xl:w-1/2">
            <div className="leading-loose">
                {/* form card */}
                <Card
                    className="max-w-lg m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
                    color="transparent"
                    shadow={false}
                >
                    <Typography
                        className="mx-auto text-secondary-dark dark:text-secondary-light"
                        variant="h4"
                    >
                        Contact me
                    </Typography>

                    {/* form */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="mt-8 mb-2 w-72 max-w-screen-lg sm:w-96 mx-auto"
                    >
                        <div className="mb-4 flex flex-col gap-6">
                            <Input
                                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                                size="lg"
                                label="Full Name"
                                name="name"
                                color="indigo"
                            />
                            <Input
                                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                                size="lg"
                                label="Email"
                                name="email"
                                color="indigo"
                            />
                            <Input
                                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                                size="lg"
                                label="Subject"
                                name="subject"
                                color="indigo"
                            />
                            <div className="w-auto">
                                <Textarea
                                    className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                                    label="Message"
                                    name="message"
                                    color="indigo"
                                />
                            </div>
                        </div>
                        <Button
                            className="mt-6 bg-indigo-400 hover:bg-indigo-500"
                            fullWidth
                            type="submit"
                        >
                            Send Message
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default ContactForm;
