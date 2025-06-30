
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
          <button className="  bg-green-600  w-30 h-12 hover:bg-white/20  transition-all duration-150 active:bg-white/30  mr-2"></button>
          {/* {activeWindows.includes("resume") && (() => {
            const popUp = Data.find(data => data.key === "resume");
            if (!popUp) return null;
            return (
              <ButtonTaskBar
                src={popUp.src}
                title={popUp.title}
                onClose={() => handleClose("resume")}
              />
            );
          })()}
          {activeWindows.includes("work") && (() => {
            const popUp = Data.find(data => data.key === "work");
            if (!popUp) return null;
            return (
              <ButtonTaskBar
                src={popUp.src}
                title={popUp.title}
                onClose={() => handleClose("work")}
              />
            );
          })()}

          {activeWindows.includes("contact") && (() => {
            const popUp = Data.find(data => data.key === "contact");
            if (!popUp) return null;
            return (
              <ButtonTaskBar
                src={popUp.src}
                title={popUp.title}
                onClose={() => handleClose("contact")}
              />
            );
          })()} */}

          <DateTaskBar />
        </div>


        <div></div>
      </div>
    </div>
  );
}
