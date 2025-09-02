"use client"
import IconProject from "./IconProject";
import axios from "axios";
import { Suspense, useEffect, useState } from "react"
import Loading from "./Loading";

type Project = {
    _id: string;
    title: string;
    des: string;
    imgUrl: string;
    link: string;
    tags: { name: string; color: string }[];
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const fetchProjects = async () => {
        const res = await axios.get("/api/projects");
        setProjects(res.data.projects);
    };
    useEffect(() => {
        fetchProjects();
    }, []);

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
                        {!projects.length ? <Loading /> : (
                            <div className="grid grid-cols-2 gap-2  place-items-center">
                                {projects.map((p) => (
                                    <IconProject
                                        key={p._id}
                                        title={p.title}
                                        des={p.des}
                                        imgUrl={p.imgUrl}
                                        link={p.link}
                                        tags={p.tags}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div ></div >)
}
