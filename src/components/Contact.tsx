"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const formData = { name, email, message };


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await res.json();
            console.log(result);
        }
        catch { }

    }

    return (
        <div className={`w-100 h-121 bg-blue-600 `}>
            <div style={{ backgroundColor: "#ebe8d7", }} className={` mr-1 ml-1 mb-1 h-120`}>
                <div className="text-black">
                    <div className=" text-sm flex flex-col items-center">
                        <form onSubmit={handleSubmit} className="flex flex-col pt-10 items-center ">
                            <div className="flex flex-row">
                                <div className="flex flex-col gap-4 mr-4 ">
                                    <label htmlFor="form-name">Name:</label>
                                    <label htmlFor="form-email">Email:</label>
                                    <label htmlFor="form-message">Message:</label>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <input value={name} onChange={(e) => setName(e.target.value)} id="form-name" autoComplete="name" name="name" type="text" className="bg-white  px-1 " />
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} id="form-email" autoComplete="email" name="email" type="email" className="bg-white   px-1" />
                                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="form-message" required name="message" className="bg-white h-50  px-1" />
                                </div>
                            </div>
                            <button disabled={loading} type="submit" className="rounded-sm border-2 cursor-pointer bg-white px-4 py-1 mt-4">Send Message</button>

                        </form>

                    </div>
                </div>
            </div>
        </div>)
}
