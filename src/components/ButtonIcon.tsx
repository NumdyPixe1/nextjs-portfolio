
"use client";
import React, { useState } from "react";
import PopUp from "./PopUp";

type propsType = { src: string; title: string; onOpen: () => void; isClose: boolean }

export default function ButtonIcon({ src, title, onOpen, isClose }: propsType,) {
    const [activePopUp, setActivePopUp] = useState(false);
    const handleOnClick = () => {
        setActivePopUp(true);
        isClose = true;
        onOpen();
    }
    console.log("is open pop" + activePopUp);
    //Open Pop up
    return (
        // activePopUp เป็น false
        <div> {activePopUp && <PopUp src={src} title={title} onClose={() => setActivePopUp(false)} />
        }
            < button onClick={handleOnClick} className="p-2 rounded-sm  hover:bg-white/20 transition-all duration-150 active:bg-white/30 flex flex-col items-center justify-center  w-20 h-20" >
                <img className="w-10 h-10 object-cover" src={src} alt="" />
                <p className="text-shadow-lg text-base">{title}</p>
            </button>
        </div >
    )
}
