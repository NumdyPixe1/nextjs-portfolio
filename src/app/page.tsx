"use client";
import { Data } from "@/lib/db"
import ButtonIcon from "@/components/ButtonIcon";
import PopUp from "@/components/PopUp";
import ButtonTaskBar from "@/components/ButtonTaskBar";
import DateTaskBar from "@/components/DateTaskBar";
import React, { useState } from "react";

export default function HomePage() {
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

  console.log(activeWindows);
  return (
    <div className="bg-[url(/images/wall.jpg)] w-screen h-screen bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col  pl-10 w-full h-full">
        {Data.map((button) => (
          <ButtonIcon
            key={button.key}
            src={button.src}
            title={button.title}
            onActive={() => handleActive(button.key)}
            isClose={false}
          />))}

        {activeWindows.includes("resume") && (() => {
          const popUp = Data.find(data => data.key === "resume");
          if (!popUp) return null;
          return (
            <PopUp
              src={popUp.src}
              title={popUp.title}
              onClose={() => handleClose("resume")}
            />
          );
        })()}
        {activeWindows.includes("work") && (() => {
          const popUp = Data.find(data => data.key === "work");
          if (!popUp) return null;
          return (
            <PopUp
              src={popUp.src}
              title={popUp.title}
              onClose={() => handleClose("work")}
            />
          );
        })()}
        {activeWindows.includes("contact") && (() => {
          const popUp = Data.find(data => data.key === "contact");
          if (!popUp) return null;
          return (
            <PopUp
              src={popUp.src}
              title={popUp.title}
              onClose={() => handleClose("contact")}
            />
          );
        })()}

      </div>
      <div className="taskbar bg-blue-600 w-screen h-12 fixed bottom-0 ">
        <div className=" flex flex-row">
          <button className="  bg-transparent w-30 h-12 hover:bg-white/20  transition-all duration-150 active:bg-white/30  mr-2"></button>
          {activeWindows.includes("resume") && (() => {
            const popUp = Data.find(data => data.key === "resume");
            if (!popUp) return null;
            return (
              <ButtonTaskBar
                src={popUp.src}
                title={popUp.title}
                onClose={() => handleClose("resume")}
              />
            );
          })()}
          {activeWindows.includes("work") && (() => {
            const popUp = Data.find(data => data.key === "work");
            if (!popUp) return null;
            return (
              <ButtonTaskBar
                src={popUp.src}
                title={popUp.title}
                onClose={() => handleClose("work")}
              />
            );
          })()}

          {activeWindows.includes("contact") && (() => {
            const popUp = Data.find(data => data.key === "contact");
            if (!popUp) return null;
            return (
              <ButtonTaskBar
                src={popUp.src}
                title={popUp.title}
                onClose={() => handleClose("contact")}
              />
            );
          })()}

          <DateTaskBar />
        </div>


        <div></div>
      </div>
    </div>
  );
}
