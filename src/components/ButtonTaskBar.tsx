"use client";
type propsType = { title: string; onClose: () => void; }

export default function ButtonTaskBar({ title, onClose }: propsType) {
    return (<>
        <button
            className="startmenu mr-5    
  bg-transparent w-30 h-12 hover:bg-white/20  transition-all duration-150 active:bg-white/30  ">
            <div className=" flex flex-row justify-center ">
                <img className=" w-5 h-5 mr-2 object-cover" src="/icons/icons8-closed-mailbox-with-raised-flag-96.png" alt="" />
                <p className="text-sm">{title}</p></div>

        </button>
    </>)
}
