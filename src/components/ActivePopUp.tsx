"use client";
import { Data } from "@/lib/db"
import PopUp from "@/components/PopUp";
import React, { useState } from "react";
import ButtonIcon from "@/components/ButtonIcon";
import Resume from "./Resume";
import Contact from "./Contact";
import Projects from "./Projects";

export default function ActiveWindows() {

    const [activePopUp, setActivePopUp] = useState<string[]>([]);


    // const handleOpen = (key: string) => {
    //     setActivePopUp((prev) => (prev.includes(key) ? prev : [...prev, key]));
    // }

    // const handleClose = (key: string) => {
    //     setActivePopUp((prev) => (prev.filter((k) => k !== key)));
    // }
    // return (<>
    //     {
    //         Data.map((button) => (
    //             <ButtonIcon
    //                 key={button.key}
    //                 src={button.src}
    //                 title={button.title}
    //                 onActive={() => handleOpen(button.key)}
    //             />))
    //     }


    //     {activePopUp.map((key) => {
    //         const popUp = Data.find((d) => d.key === key);
    //         const Component = componentMap[key];

    //         if (!popUp || !Component) return null;

    //         return (
    //             <PopUp
    //                 key={key}
    //                 title={popUp.title}
    //                 src={popUp.src}
    //                 onClose={() => handleClose(key)}
    //             >
    //                 <Component />
    //             </PopUp>
    //         );
    //     })}
    // </>)




    const handleActive = (key: string) => {
        // ถ้า activeWindows ยังไม่มีการเพิ่ม key ให้เพิ่มต่อจากของเดิม
        // includes ตรวจสอบว่าใน array มีค่าที่ตรงกับ key หรือไม่ ถ้ามี true
        if (!activePopUp.includes(key)) {
            // key = ["resume", "work", "contact"];
            setActivePopUp([...activePopUp, key]);
        }
    }
    const handleClose = (key: string) => {
        setActivePopUp(activePopUp.filter(window => window !== key));
    };
    return (<>

        {
            Data.map((button) => (
                <ButtonIcon
                    key={button.key}
                    src={button.src}
                    title={button.title}
                    onActive={() => handleActive(button.key)}

                />))
        }

        {
            activePopUp.includes("resume") && (() => {
                const popUp = Data.find(data => data.key === "resume");
                if (!popUp) return null;
                return (
                    <PopUp
                        src={popUp.src}
                        title={popUp.title}
                        onClose={() => handleClose("resume")}
                    >
                        <Resume />
                    </PopUp>
                );
            })()
        }
        {
            activePopUp.includes("project") && (() => {
                const popUp = Data.find(data => data.key === "project");
                if (!popUp) return null;
                return (
                    <PopUp
                        src={popUp.src}
                        title={popUp.title}
                        onClose={() => handleClose("project")}
                    >
                        <Projects />
                    </PopUp>
                );
            })()
        }
        {
            activePopUp.includes("contact") && (() => {
                const popUp = Data.find(data => data.key === "contact");
                if (!popUp) return null;
                return (
                    <PopUp
                        src={popUp.src}
                        title={popUp.title}
                        onClose={() => handleClose("contact")}
                    > <Contact />
                    </PopUp>
                );
            })()
        }
    </>)

}