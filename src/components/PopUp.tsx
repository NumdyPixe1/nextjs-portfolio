"use client";
import React, { useState, useRef } from "react";
type propsType = { children: React.ReactNode, src: string; title: string; onClose: () => void; }

export default function PopUp({ children, src, title, onClose }: propsType) {

    //Move Pop up
    const popUpRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [isDragging, setIsDragging] = useState(false);
    const offset = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        const temp = popUpRef.current?.getBoundingClientRect();
        offset.current = {
            x: e.clientX - (temp?.left || 0),
            y: e.clientY - (temp?.top || 0),
        }
    }
    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        // คำนวณตำแหน่งใหม่
        let newX = e.clientX - offset.current.x;
        let newY = e.clientY - offset.current.y;

        // ขนาดจอ
        const winW = window.innerWidth;
        const winH = window.innerHeight;

        // ขนาด popup 
        const popup = popUpRef.current;         //ตำแหน่ง
        const popupW = popup?.offsetWidth || 200; //กว้าง
        const popupH = popup?.offsetHeight || 200; //ยาว

        // จำกัดไม่ให้ออกนอกหน้าจอ
        newX = Math.max(0, Math.min(newX, winW - popupW));
        newY = Math.max(0, Math.min(newY, winH - popupH));

        // ตำแหน่งที่เลื่อนได้ (ตำแหน่งในหน้าจอเท่านั้น)
        setPosition({ x: newX, y: newY });
    }

    const handleMouseUp = () => {
        setIsDragging(false);
    }

    React.useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div ref={popUpRef} style={{ position: "absolute", left: `${position.x}px`, top: `${position.y}px`, userSelect: "none" }} >
            <div className="rounded-sm w-full   bg-blue-600 ">
                <div onMouseDown={handleMouseDown} className="pl-1 pr-1 h-6   items-center flex flex-row justify-between cursor-move">
                    <div className="flex flex-row ">
                        <img className="w-4 h-4 object-cover" src={src} alt="" />
                        <p className="pl-3 text-sm">{title}</p>
                    </div>

                    {/* Close pop up */}
                    <button onClick={onClose} className=" active:bg-white/30 transition-all duration-150 cursor-pointer"><img className=" w-6 h-full object-cover" src="/icons/icons8-cross-mark-button-96.png" alt="" /></button>
                </div>
                {children}
            </div>


        </div >
    );
}
