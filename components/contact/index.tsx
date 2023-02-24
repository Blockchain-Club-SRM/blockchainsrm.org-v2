import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //     Backend Logic
    console.log(form);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    let temp: any = { ...form };
    temp[e.currentTarget.name] = e.currentTarget.value;
    setForm(temp);
  };

  return (
    <div className="my-14 flex justify-center flex-col gap-8 text-white md:max-w-[80%] mx-auto relative">
      <h1 className="font-bold self-center">Contact Us</h1>
      <form
        onSubmit={submitForm}
        className={"flex flex-col relative self-center rounded-xl "}
      >
        <input
          name={"name"}
          placeholder={"name"}
          required={true}
          type={"text"}
          value={form.name}
          onChange={handleChange}
          className={
            "bg-transparent border border-[#AD1AAF] px-4 rounded text-2xl py-2 m-2 focus:border-[#AD1AAF] outline-0 focus:outline-0 active:outline-0 text-[#AD1AAF]"
          }
        />
        <input
          name={"email"}
          placeholder={"info@gmail.com"}
          required={true}
          type={"email"}
          value={form.email}
          onChange={handleChange}
          className={
            "bg-transparent border border-[#AD1AAF] px-4 py-2 rounded text-2xl m-2 focus:border-[#AD1AAF] outline-0 focus:outline-0 active:outline-0 text-[#AD1AAF]"
          }
        />
        <input
          name={"phone"}
          placeholder={"phone"}
          required={true}
          type={"phone"}
          value={form.phone}
          onChange={handleChange}
          className={
            "bg-transparent border border-[#AD1AAF] px-4 py-2 rounded text-2xl m-2 focus:border-[#AD1AAF] outline-0 focus:outline-0 active:outline-0 text-[#AD1AAF]"
          }
        />
        <button
          type={"submit"}
          className={"w-12 h-12 self-center bg-[#AD1AAF] rounded-lg px-2"}
        >
          <div className={"h-3 bg-white newsletterSubmit"}></div>
        </button>
      </form>
    </div>
  );
};

export default Contact;
