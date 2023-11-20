import { FaGithub, FaRocket } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

import logo from "./assets/clipsync.png";
import pcVideo from "./assets/pc.mp4";
import mobileVideo from "./assets/mobile.mp4";

import "./App.css";
import Card from "./UI/Card";
import Dropdown from "./components/Dropdown";

function App() {
  const iconClass =
    "rounded-md w-8 aspect-square text-lg flex items-center justify-center float-left mr-2 mt-1.5";
  const navLinkClasses = "hidden sm:block";
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full p-6 py-4 flex items-center justify-between bg-opacity-50 backdrop-blur-lg drop-shadow-sm z-40">
        <img src={logo} alt="" className="h-10" />

        <div className="flex items-center gap-6">
          <a href="#getStarted" className={`${navLinkClasses}`}>
            Get Started
          </a>
          <a href="#about" className={`${navLinkClasses}`}>
            About
          </a>
          <a href="https://github.com/0xUgochukwu/clipSync" target="_blank">
            <FaGithub />
          </a>
        </div>
      </nav>

      <main className="p-8 mt-14 max-w-[55rem] m-auto">
        {/* SECTION WITH VIDEOS */}
        <div className="bg-white flex flex-col  justify-center relative z-30">
          <h1 className="font-black md:text-6xl sm:text-5xl text-4xl capitalize lg:pb-6">
            Multiple devices, <br />
            One Clipboard.
          </h1>
          <div className="h-full flex gap-10 py-10 justify-center items-center flex-col sm:flex-row">
            {/* MOBILE VIDEO */}
            <video
              className="h-[20rem] scale-[1.1] overflow relative z-30"
              autoPlay
              muted
              loop
            >
              <source src={mobileVideo} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>

            {/* PC VIDEO */}
            <div className="relative lg:scale-[1.1]">
              <video autoPlay muted loop>
                <source src={pcVideo} type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>

              {/* MAC WINDOW BAR*/}
              <div class="bg-[#101010] pl-1 py-[.15rem] w-[71.8%] flex justify-start items-center space-x-1.5 lg:space-x-2 absolute top-[7.7%] left-1/2 translate-x-[-50.2%]">
                <div class="bg-green-500 w-1.5 aspect-square rounded-full"></div>
                <div class="bg-yellow-500 w-1.5 aspect-square rounded-full"></div>
                <div class="bg-red-500 w-1.5 aspect-square rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* GET STARTED  SECTION */}
        <div id="getStarted" className="pb-10">
          <h2 className="py-14 text-center relative font-bold text-4xl bg-white z-30 pb-8 relative">
            Installation / get started
          </h2>

          {/* GET STARTED  DROPWDOWNS */}
          <div className="flex gap-4 flex-wrap justify-center bg-white relative z-20">
            <Dropdown
              buttonText={"Mobile"}
              className={"bg-black text-white self-start"}
            >
              <hr className="" />
              <p className="px-4 py-2">Click here to download the app</p>
            </Dropdown>
            <Dropdown
              buttonText={"PC"}
              className={"bg-[#e5e5e5] text-black self-start"}
            >
              <hr className="border-black" />
              <p className="px-4 py-2">copy the folowwing</p>
            </Dropdown>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div id="about" className={`flex flex-col gap-5`}>
          <h2 className="font-bold text-4xl text-center">About</h2>
          <p>
            clipSync is a universal clipboard tool that enables you 
            to copy on one device and instantly paste on another, 
            regardless of the platform or operating system. 
            <br />
            
            It offers cross-platform compatibility and real-time synchronization. 
            Say goodbye to the hassles of email drafts and manual link sharing 
            – clipSync simplifies and enhances your digital workflow.
          </p>

          {/* ABOUT SECTION CARDS */}
          <div className={`flex gap-4 flex-wrap justify-center`}>
            <Card>
              <p className={`bg-black ${iconClass}`}>
                <FaLink className="text-white" />
              </p>
              <p>
                Copy on one device, paste on another seamlessly, facilitating
                easy collaboration and information sharing.
              </p>
            </Card>
            <Card>
              <p className={`bg-green-800 ${iconClass}`}>
                <FaRocket className="text-white" />
              </p>
              <p>
                Boost your productivity by copying on one device and pasting in
                real-time on another, ensuring immediate access to clipboard
                content.
              </p>
            </Card>
            <Card>
              <p className={`bg-blue-800 ${iconClass}`}>
                <BsGlobe className="text-white" />
              </p>
              <p>
                clipSync works seamlessly across various platforms, including
                Windows, macOS, Linux, iOS, and Android, providing a unified
                clipboard experience across all your devices.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <footer className="p-6 font-semibold bg-[#e5e5e5]">
        <p className="w-max m-auto">
          &copy; {new Date().getFullYear()} Clipsync. Built by 
          <a href='https://github.com/0xugochukwu'
          className="pl-1 text-blue-600 hover:text-blue-800">
             Ugochukwu
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
