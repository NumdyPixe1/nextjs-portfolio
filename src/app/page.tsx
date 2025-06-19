"use client";

import ButtonIcon from "@/components/ButtonIcon";
import ButtonTaskBar from "@/components/ButtonTaskBar";
import DateTaskBar from "@/components/DateTaskBar";
import React, { useState } from "react";

export default function HomePage() {
  const [resume, setResume] = useState(false);
  const [work, setWork] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <div className="bg-[url(/images/wall.jpg)] w-screen h-screen bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col  pl-10 w-full h-full">
        <ButtonIcon src="/icons/icons8-page-facing-up-96.png" title="Resume" onOpen={() => setResume(true)} isClose={resume}

        />
        <ButtonIcon
          src="/icons/icons8-card-index-dividers-96.png"
          title="Work"
          onOpen={() => setWork(true)}
          isClose={work}
        />
        <ButtonIcon
          src="/icons/icons8-closed-mailbox-with-raised-flag-96.png"
          title="Contact" onOpen={() => setContact(true)} isClose={contact}
        />
      </div>
      <div className="taskbar bg-blue-600 w-screen h-12 fixed bottom-0 ">
        <div className=" flex flex-row justify-between  ">
          <div className="flex flex-row gap-2 ">

            {/* เงื่อนไขแยกตาม window ที่เปิด */}
            {resume && (<ButtonTaskBar title="Resume" onClose={() => setResume(false)} />)}
            {work && (<ButtonTaskBar title="Work" onClose={() => setWork(false)} />)}
            {contact && (<ButtonTaskBar title="Contact" onClose={() => setContact(false)} />)}

          </div>

          <DateTaskBar />
        </div>


        <div></div>
      </div>
    </div>
  );
}

// import MenuList from "@/components/_MenuList"
// import UserStatus from "@/components/_UserStatus"
// export default function HomePage() {
//   return (<>
//     <div className="content-center bg-black/60 backdrop-blur-sm bg-[url(/images/dotted_black_background.png)] bg-[length:400px_auto] bg-center w-screen h-22 fixed top-0 ">
//       <div className="px-8 ">
//         <UserStatus />
//       </div>

//     </div>
//     <div className="container">

//     </div>

//     <div className="justify-center bg-black/60 bg-[url(/images/dotted_black_background.png)] bg-[length:400px_auto] 	bg-center  w-screen h-28 fixed bottom-0 ">
//       <MenuList />
//       {/* <div className="bg-black w-screen h-14 fixed bottom-0 flex
//  ">

//       </div> */}
//     </div>
//   </>)
// }
