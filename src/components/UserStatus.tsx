export default function UserStatus() {
    return (<>
        <div className="user-status text-white flex items-center  rounded-full"  >
            {/* Image  */}
            <div className="rounded-full  bg-contain w-11 h-11 image-profile bg-[url(/images/me.png)]"></div>
            {/* name & xp */}
            <div className="flex flex-col h-fit mr-4 ml-2 ">
                <p className="text-sm font-bold ">Numdao</p>
                <div className="w-34 h-fit  bg-gray-700 rounded-full ">
                    <div className="  user-xp w-10 rounded-full"  >
                        <p className="text-[10px] ">
                            10/2001
                        </p>


                    </div>
                </div>
            </div>


            <div className="h-fit">
                <div className="user-level">
                    <p className="text-2xl mb-0.4">23</p>
                </div>
                <div className="user-level">
                    <p className="text-[10px]  text-zinc-500">Level</p>
                </div>
            </div>

        </div >
    </>)
}