
"use client";

type propsType = { src: string; title: string; onActive: any; }

export default function ButtonIcon({ src, title, onActive }: propsType,) {


    const handleOnClick = () => {
        onActive();
    }
    //Open Pop up
    return (

        < button onClick={handleOnClick} className="p-2 rounded-sm  hover:bg-white/20 transition-all duration-150 active:bg-white/30 flex flex-col items-center justify-center  w-20 h-20" >
            <img className="w-10 h-10 object-cover" src={src} alt="" />
            <p className="text-shadow-lg text-base">{title}</p>
        </button>

    )
}
