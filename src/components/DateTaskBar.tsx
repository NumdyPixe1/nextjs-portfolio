"use client";
import { useState, useEffect } from "react";

useState
export default function DateTaskBar() {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        //เรียกคำสั่งทุก ๆ 1 วินาที
        const interval = setInterval(() => {
            const now = new Date();
            setDate(now.toLocaleDateString("en-US")); // <<-- รูปแบบ MM/DD/YYYY
            setTime(now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            }));

        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (<>
        <button
            className="     
  bg-transparent w-30 h-12 hover:bg-white/20  transition-all duration-150 active:bg-white/30  ">
            <div className=" flex flex-row justify-center ">
                <p className="text-sm ">{time}</p>
            </div>
            <p className="text-sm ">{date}</p>
        </button></>)
}