
import ButtonTaskBar from "@/components/ButtonTaskBar";
import DateTaskBar from "@/components/DateTaskBar";
import ActiveWindows from "@/components/ActiveWindows";
export default function HomePage() {


  return (
    <div className="bg-[url(/images/wall.jpg)] w-screen h-screen bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col  pl-10 w-full h-full">
        <ActiveWindows />
      </div>
      <div className="taskbar bg-blue-600 w-screen h-12 fixed bottom-0 ">
        <div className=" flex flex-row">
          <button className="  bg-green-600  w-30 h-12 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]  transition-all duration-150 active:shadow-[inset_-12px_-8px_40px_#46464620]  mr-2"></button>

          <DateTaskBar />
        </div>


        <div></div>
      </div>
    </div>
  );
}
