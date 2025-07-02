"use client";

import { getAllData } from "@/lib/db";

export default function Resume() {
    return (
        <div className={`w-200 h-121 bg-blue-600`}>
            <div className={` mr-1 ml-1 mb-1 h-120 overflow-y-scroll`}>

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
                            <div className="bg-white w-200">
                                <p className="ml-1">Desktop</p>
                            </div>
                        </div>
                    </div>

                    <div className=" p-3 bg-white">



                        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </a>


                    </div>

                </div>
            </div ></div >)
}
