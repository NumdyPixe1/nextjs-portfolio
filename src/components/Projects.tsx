"use client"
import Project from "./Project";
import { ProjectData } from "@/lib/db";


export default function Projects() {
    const sortedProjects = [...ProjectData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return (
        <div className={`w-200 h-121 bg-blue-600`}>
            <div className={` mr-1 ml-1 mb-1 bg-white h-120 overflow-y-scroll`}>

                <div className="text-black">
                    <div style={{ backgroundColor: "#ebe8d7", }} className="text-sm border-b border-gray-500">
                        <div className="flex flex-row gap-5 pl-3  pt-0.5 pb-0.5 border-b border-gray-500">
                            <p>File</p>
                            <p>Edit</p>
                            <p>View</p>
                            <p>Favorites</p>
                            <p>Tools</p>
                            <p>Help</p>
                        </div>
                        <div className="flex flex-row pl-2 ">
                            <div className="pr-3 text-gray-500"> Address</div>
                            <div className="bg-white w-200 ">
                                <p className="ml-1">Desktop</p>
                            </div>
                        </div>
                    </div>
                    <div className=" p-3">
                        <div className="grid grid-cols-2 gap-2  place-items-center">
                            {sortedProjects.map((p, index) => (
                                <Project
                                    key={index}
                                    title={p.title}
                                    des={p.des}
                                    imgUrl={p.imgUrl}
                                    link={p.link}
                                    tags={p.tags}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div ></div >)
}

{/* <Project link="https://github.com/NumdyPixe1/nextjs-portfolio" title="Portfolio" imgUrl="icons8-page-facing-up-96.png" des="Portfolio website inspired from Window XP theme."
                                tags={[
                                    { name: "Next.js", color: "bg-gray-300" },
                                    { name: "Tailwind CSS", color: "bg-blue-300" },
                                ]} />
                            <Project link="https://github.com/NumdyPixe1/deadline" title="Deadline" imgUrl="icons8-page-facing-up-96.png" des="The website calculates the duration from start to end."
                                tags={[{ name: "React.js", color: "bg-amber-300" },
                                { name: "Tailwind CSS", color: "bg-blue-300" },
                                ]}
                            /> */}
