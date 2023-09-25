import { Layout } from "../components/shared";
import emailjs from "@emailjs/browser";
import { useRef, FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef<any>();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { currentTarget } = e;
    const { name, value } = currentTarget;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_84gosm6",
        "template_6pfobbg",
        {
          from_name: form.name,
          to_name: "Blockchain club SRM",
          from_email: form.email,
          to_email: "karanpargal007@gmail.com",
          message: form.message,
          subject: form.subject,
        },
        "xsfIq7zhaHV0G_Xji"
      )
      .then(
        () => {
          toast.success(
            "Thank you. We will get back to you as soon as possible.",
            {
              position: "top-right",
              autoClose: 3000,
            }
          );

          setForm({
            name: "",
            email: "",
            message: "",
            subject: "",
          });
        },
        (error) => {
          console.error(error);

          toast.error("Ahh, something went wrong. Please try again.", {
            position: "bottom-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <Layout className="w-full">
        <section className="">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white ">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">
              Reach out to us for any queries or suggestions.
            </p>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="from_name"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-white text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-white "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-white text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="johndoe@xyz.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-lg font-medium text-white "
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="block p-3 w-full text-lg text-white bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg font-medium text-white "
                >
                  Your message
                </label>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  id="message"
                  className="block p-2.5 w-full text-lg text-white bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-lg border-2 hover:bg-white hover:text-black font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
