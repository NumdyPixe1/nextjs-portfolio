import MenuList from "@/components/MenuList"
import UserStatus from "@/components/UserStatus"
export default function HomePage() {
  return (<>
    <div className="content-center bg-black/60 backdrop-blur-sm bg-[url(/images/dotted_black_background.png)] bg-[length:400px_auto] bg-center w-screen h-22 fixed top-0 ">
      <div className="px-8 ">
        <UserStatus />
      </div>

    </div>
    <div className="container">








    </div>

    <div className="bg-black/60 bg-[url(/images/dotted_black_background.png)] bg-[length:400px_auto] 	bg-center  w-screen h-28 fixed bottom-0 ">
      <div className="bg-black w-screen h-14 fixed bottom-0 flex  justify-center">
        <MenuList />
      </div>
    </div>
  </>)
}