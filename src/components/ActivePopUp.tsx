"use client";
import { Data } from "@/lib/db"
import PopUp from "@/components/PopUp";
import React, { useState } from "react";
import ButtonIcon from "@/components/ButtonIcon";
import Resume from "./Resume";
// import Contact from "./Contact";
import Projects from "./Projects";

export default function ActiveWindows() {
    type PopUpKey = "resume" | "project";
    const componentMap: Record<PopUpKey, React.FC> = { "resume": Resume, "project": Projects };

    const [activePopUp, setActivePopUp] = useState<PopUpKey[]>([]);

    const handleOpen = (key: PopUpKey) => {
        setActivePopUp((prev) => (prev.includes(key) ? prev : [...prev, key]));
    }

    const handleClose = (key: PopUpKey) => {
        setActivePopUp((prev) => (prev.filter((k) => k !== key)));
    }
    return (<>
        {
            Data.map((button) => (
                <ButtonIcon
                    key={button.key}
                    src={button.src}
                    title={button.title}
                    onActive={() => handleOpen(button.key as PopUpKey)}
                />))
        }

        {activePopUp.map((key) => {
            const popUp = Data.find((d) => d.key === key);
            const Component = componentMap[key];

            if (!popUp || !Component) return null;

            return (
                <PopUp
                    key={key}
                    title={popUp.title}
                    src={popUp.src}
                    onClose={() => handleClose(key)}
                >

                    <Component />

                </PopUp>
            );
        })}
    </>)
}
