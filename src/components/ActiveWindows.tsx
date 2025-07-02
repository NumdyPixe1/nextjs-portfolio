"use client";
import { Data } from "@/lib/db"
import PopUp from "@/components/PopUp";
import React, { useState } from "react";
import ButtonIcon from "@/components/ButtonIcon";
import Resume from "./Resume";
import Work from "./Work";
import Contact from "./Contact";


export default function ActiveWindows() {

    const [activeWindows, setActiveWindows] = useState<string[]>([]);

    const handleActive = async (key: string) => {
        // ถ้า activeWindows ยังไม่มีการเพิ่ม key ให้เพิ่มต่อจากของเดิม
        // includes ตรวจสอบว่าใน array มีค่าที่ตรงกับ key หรือไม่ ถ้ามี true
        if (!activeWindows.includes(key)) {
            // key = ["resume", "work", "contact"];
            setActiveWindows([...activeWindows, key]);
        }
    }
    const handleClose = (key: string) => {
        setActiveWindows(activeWindows.filter(window => window !== key));
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
            activeWindows.includes("resume") && (() => {
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
            activeWindows.includes("work") && (() => {
                const popUp = Data.find(data => data.key === "work");
                if (!popUp) return null;
                return (
                    <PopUp
                        src={popUp.src}
                        title={popUp.title}
                        onClose={() => handleClose("work")}
                    >
                        <Work />
                    </PopUp>
                );
            })()
        }
        {
            activeWindows.includes("contact") && (() => {
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