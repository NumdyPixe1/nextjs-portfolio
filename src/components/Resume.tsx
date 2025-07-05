"use client";

import Link from "next/link";
import { ResumeData } from "@/lib/db";

export default function Resume() {
    return (
        <div className="w-200 h-121 bg-blue-600">
            <div className="mr-1 ml-1 mb-1 h-120 bg-white overflow-y-scroll">

                <div className="text-black">
                    <div style={{ backgroundColor: "#ebe8d7", }} className="flex flex-row gap-5 text-sm pl-3 pt-0.5 pb-0.5 border-b border-gray-500"><p>File</p>
                        <p>Edit</p>
                        <p>Format</p>
                        <p>View</p>
                        <p>Help</p>
                    </div>
                    <div className=" p-3 ">
                        <h1 className="text-2xl font-bold">{ResumeData.name}</h1>
                        <div className="flex flex-row gap-5 text-sm mb-2">
                            <div className="flex flex-row  gap-1 items-center">
                                <img className="w-4 h-4 object-cover" src="/icons/icons8-telephone-receiver-96.png" alt="" />
                                <p>{ResumeData.tel}</p>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                                <img className="w-4 h-4 object-cover" src="/icons/icons8-email-96.png" alt="" />
                                <Link href={ResumeData.email[0].link} target="_blank"><u>{ResumeData.email[0].name}</u></Link></div>
                            <p>GitHub: <Link href={ResumeData.github[0].link} target="_blank" ><u>{ResumeData.github[0].name}</u></Link></p>
                            <p>LinkedIn: <Link href={ResumeData.linkedIn[0].link} target="_blank" ><u>{ResumeData.linkedIn[0].name}</u></Link></p>
                        </div>
                        <div className="flex flex-row gap-5 mb-6 ">
                            {ResumeData.role.map((d) => (
                                <div key={d.key} className={`flex flex-row gap-2 items-center p-1 ${d.color} text-sm`}>
                                    <img className="w-4 h-4 object-cover" src={`/icons/${d.imgUrl}`} alt="" />
                                    <p>{d.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mb-6">
                            <div className="flex flex-row gap-1  mb-3 pb-1  items-center border-b border-gray-500">
                                <img className="w-6 h-6 object-cover" src="/icons/icons8-grinning-face-96.png" alt="" />
                                <h1 className="text-lg font-bold">About me</h1>
                            </div>
                            <p className="text-sm">{ResumeData.about}</p>
                        </div>

                        <div className="mb-6">
                            <div className="flex flex-row  mb-3 pb-1 gap-1   items-center border-b border-gray-500">
                                <img className="w-6 h-6 object-cover" src="/icons/icons8-briefcase-96.png" alt="" />
                                <h1 className="text-lg font-bold">Experience</h1>
                            </div>
                            {ResumeData.exp.map((d) => (
                                <div key={d.key} className="mb-4">
                                    <p className="text-sm font-bold">{d.loca}</p>
                                    <p className="text-sm">{d.role}</p>
                                    <p className="text-xs text-gray-500">{d.date}</p>
                                    <ul className="text-sm">
                                        {d.todo.map((item, index) => (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="mb-6">
                            <div className="flex flex-row gap-1  mb-3 pb-1  items-center border-b border-gray-500">
                                <img className="w-6 h-6 object-cover" src="/icons/icons8-graduation-cap-96.png" alt="" />
                                <h1 className="text-lg font-bold">Education</h1>
                            </div>
                            {ResumeData.educat.map((d) => (
                                <div key={d.key} className="mb-4">
                                    <p className="text-sm font-bold">{d.uni}</p>
                                    <p className="text-xs text-gray-500">{d.date}</p>
                                    <p className="text-sm">{d.fac}</p>
                                    <p className="text-sm">{d.gpa}</p>
                                </div>
                            ))}
                            <div className="mb-6">
                                <div className="flex flex-row  mb-3 pb-1 gap-1   items-center border-b border-gray-500">
                                    <img className="w-6 h-6 object-cover" src="/icons/icons8-desktop-computer-96.png" alt="" />
                                    <h1 className="text-lg font-bold">Skills</h1>
                                </div>
                                {ResumeData.skill.map((d) => (
                                    <div key={d.key} className="text-sm mb-2 flex flex-row gap-1 items-center">
                                        <img className="w-4 h-4 object-cover" src={`/icons/${d.imgUrl}`} />
                                        <span className="font-bold">{d.title}</span>
                                        {d.item}
                                    </div>
                                ))}
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </div>
    )
}