"use client";

import Link from "next/link";

export default function Resume() {
    return (
        <div className="w-200 h-121 bg-blue-600">
            <div className="mr-1 ml-1 mb-1 h-120 overflow-y-scroll">

                <div className="text-black">
                    <div style={{ backgroundColor: "#ebe8d7", }} className="flex flex-row gap-5 text-sm pl-3 pt-0.5 pb-0.5"><p>File</p>
                        <p>Edit</p>
                        <p>Format</p>
                        <p>View</p>
                        <p>Help</p>
                    </div>
                    <div className=" p-3 bg-white">
                        <h1 className="text-2xl font-bold">Numdao Ratchamueangfang</h1>
                        <div className="flex flex-row gap-5 text-sm mb-2">
                            <div className="flex flex-row  gap-1 items-center">
                                <img className="w-4 h-4 object-cover" src="/icons/icons8-telephone-receiver-96.png" alt="" />
                                <p>0616502287</p>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                                <img className="w-4 h-4 object-cover" src="/icons/icons8-email-96.png" alt="" />
                                <Link href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=numdao123@gmail.com" target="_blank"><u>numdao123@gmail.com</u></Link></div>
                            <p>GitHub: <Link href="https://github.com/NumdyPixe1" target="_blank" ><u>NumdyPixe1</u></Link></p>
                            <p>LinkedIn: <Link href="https://www.linkedin.com/in/numdao/" target="_blank" ><u>numdao</u></Link></p>
                        </div>
                        <div className="flex flex-row gap-5 mb-6 ">
                            <div className="flex flex-row gap-2 items-center bg-rose-300 text-sm">
                                <img className="w-4 h-4 object-cover" src="/icons/icons8-video-game-96.png" alt="" />
                                <p>Game developer</p>
                            </div>
                            <div className="flex flex-row gap-2 items-center bg-amber-300 text-sm">
                                <img className="w-4 h-4 object-cover" src="/icons/icons8-desktop-computer-96.png" alt="" />
                                <p>Frontend</p>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="flex flex-row gap-1  mb-3 pb-1  items-center border-b border-gray-500">
                                <img className="w-6 h-6 object-cover" src="/icons/icons8-grinning-face-96.png" alt="" />
                                <h1 className="text-lg font-bold   ">About me</h1>
                            </div>
                            <p className="text-sm">I'm recent graduate with a major in Interactive Design and Game Development. I have a strong passion for playing, learning and developing games
                                I'm looking for a game development job.</p>
                        </div>
                        <div className="mb-6">
                            <div className="flex flex-row gap-1  mb-3 pb-1  items-center border-b border-gray-500">
                                <img className="w-6 h-6 object-cover" src="/icons/icons8-graduation-cap-96.png" alt="" />
                                <h1 className="text-lg font-bold  ">Education</h1>
                            </div>

                            <div className="mb-4">
                                <p className="text-sm font-bold">Dhurakij Pundit University</p>
                                <p className="text-xs text-gray-500">(2024 - Present)</p>
                                <p className="text-sm">Master of Science, Program in Web Engineering and Mobile Application Development</p>
                                <p className="text-sm">Grade: 4.00</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-sm font-bold">Dhurakij Pundit University</p>
                                <p className="text-xs text-gray-500">(2020 - 2024)</p>
                                <p className="text-sm">Bachelor of Science, Interactive Design and Game Development</p>
                                <p className="text-sm">Grade: 3.79</p></div>

                        </div>

                        <div className="mb-6">
                            <div className="flex flex-row  mb-3 pb-1 gap-1   items-center border-b border-gray-500">
                                <img className="w-6 h-6 object-cover" src="/icons/icons8-desktop-computer-96.png" alt="" />
                                <h1 className="text-lg font-bold">Skills</h1>
                            </div>
                            <div className="text-sm mb-2 flex flex-row gap-1 items-center">
                                <img className="w-4 h-4 object-cover" src="/icons/icons8-desktop-computer-96.png" alt="" />
                                <span className="font-bold">Frontend: </span>React.js, Next.js, Tailwind CSS, HTML, CSS</div>
                            <div className="text-sm mb-2 flex flex-row gap-1 items-center">
                                <img className="w-4 h-4 object-cover" src="/icons/icons8-gear-96.png" alt="" />
                                <span className="font-bold">Backend: </span>Node.js(Learning)</div>
                            <div className="text-sm mb-2 flex flex-row gap-1 items-center">
                                <img className="w-4 h-4 object-cover" src="/icons/icons8-video-game-96.png" alt="" />
                                <span className="font-bold">Game Engine / 3D Engine: </span>Unity, Roblox Studio, Blender</div>
                            <div className="text-sm mb-2 flex flex-row gap-1 items-center">
                                <img className="w-4 h-4 object-cover" src="/icons/icons8-keyboard-96.png" alt="" />
                                <span className="font-bold">Programming Languages: </span>C#, Lua, SQL, Typescript, Javascript</div>
                            <div className="text-sm mb-2 flex flex-row gap-1 items-center">
                                <img className="w-4 h-4 object-cover" src="/icons/icons8-save-96.png" alt="" />
                                <span className="font-bold">Version Control: </span>Sourcetree, Git</div>
                            <div className="text-sm mb-2 flex flex-row gap-1 items-center">
                                <img className="w-4 h-4 object-cover" src="/icons/icons8-speech-balloon-96.png" alt="" />
                                <span className="font-bold">Languages: </span>Thai (Native), English (A2 Level)</div>
                        </div>
                    </div ></div></div>
        </div>
    )
}
//flex justify-center  items-center