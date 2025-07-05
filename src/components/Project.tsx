import Link from "next/link"
type propsType = { title: string, des: string, imgUrl: string, link: string, tags: { name: string, color: string }[] }
export default function Project({ title, des, imgUrl, link, tags }: propsType) {
    return (
        <div className="w-80 mt-3 mb-3">
            <Link href={link} target="_blank">
                <div className="flex flex-row gap-1">
                    <img className=" w-10 h-10" src={`/icons/${imgUrl}`} />
                    <div className="flex flex-col">
                        <h1 className="text-base font-bold">{title}</h1>
                        <p className="text-xs mb-1">{des} </p>
                        <div className="  ">
                            <ul className="flex items-start flex-wrap gap-2 text-xs">
                                {tags.map((tag, index) => (
                                    <li key={index} className={`${tag.color} flex w-fit p-1`}>{tag.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Link>
        </div>)
}