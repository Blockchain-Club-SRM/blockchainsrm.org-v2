import React, {useState} from "react";

const Newsletter = () => {

    const [email, setEmail] = useState("");

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value);

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    //     Backend Logic

        setEmail("");
    }

    return(
        <div id={'newletter'} className={"py-28 flex justify-center flex-wrap"}>
            <h1 className={"w-full text-center mb-16 text-white"}>Register for our newsletter</h1>
            <form onSubmit={submitForm} className={"flex relative border border-[#AD1AAF] rounded-xl px-2 py-2"}>
                <input placeholder={"info@gmail.com"} required={true} type={"email"} value={email} onChange={handleChange} className={"bg-transparent px-4 border-0 active:border-0 focus:border-0 outline-0 focus:outline-0 active:outline-0 text-2xl text-[#AD1AAF]"}/>
                <button type={"submit"} className={"w-12 h-12 bg-[#AD1AAF] rounded-lg px-2"}><div className={"h-3 bg-white newsletterSubmit"}></div></button>
            </form>
        </div>
    )
}

export {
    Newsletter,
}