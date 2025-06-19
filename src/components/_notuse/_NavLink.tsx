import Link from "next/link"

export default function NavLink() {
    return (<>

        <Link href={"/"} className="content-center  hover:bg-sky-700 p-2 bg-black">
            <div className="flex-col">
                <img src="/images/comment-dots.png" alt="comment-dots" />
                <span className=" ">Contact</span></div></Link>

    </>)
}
