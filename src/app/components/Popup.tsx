import Image from "next/image";
import React from "react";
import Carousel from "./Carousel";

function Popup() {
  return (
    <div className="z-20 rounded-2xl w-4/5 ">
      <div className="bg-orange-50 w-full flex relative flex-col lg:flex-row justify-between p-20 items-center ">
        <button className="border-black border-2 w-10 hover:bg-slate-100 flex items-center justify-center h-10 rounded-full absolute right-2 top-2">
          X
        </button>
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h1 className="text-xl font-bold">Ghana e-SIM</h1>
          <div className="rounded-xl relative aspect-video overflow-hidden w-full">
            <Image
              src={"/image.jpg"}
              alt="img"
              fill={true}
              className="absolute"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/3">
          <div className="flex w-full justify-between">
            <div className="flex gap-2 items-center">
              <Image
                width={32}
                height={32}
                src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/external-globe-achievements-and-badges-flatart-icons-solid-flatarticons.png"
                alt="external-globe-achievements-and-badges-flatart-icons-solid-flatarticons"
              />
              Coverage
            </div>
            <p className="font-bold text-lg">Ghana</p>
          </div>
          <div className="bg-gray-200 w-full h-[1px] rounded-lg"></div>
          <div className="flex w-full justify-between">
            <div className="flex gap-2 items-center">
              <Image
                width={32}
                height={32}
                src="https://img.icons8.com/ios/50/data-in-both-directions.png"
                alt="data-in-both-directions"
              />
              Data
            </div>
            <p className="font-bold text-lg">10GB</p>
          </div>
          <div className="bg-gray-200 w-full h-[1px] rounded-lg"></div>
          <div className="flex w-full justify-between">
            <div className="flex gap-2 items-center">
              <Image
                width={32}
                height={32}
                src="https://img.icons8.com/ios-filled/50/calendar--v1.png"
                alt="calendar--v1"
              />
              Validity
            </div>
            <p className="font-bold text-lg">30 days</p>
          </div>
        </div>
      </div>
      <div className=" bg-white w-full flex flex-col gap-8">
        <h1 className="ml-20 mt-20 text-lg font-medium">
          Available Top-up packages
        </h1>
        {/* Carousel */}
        <Carousel />
        <div className="p-20 flex w-full gap-8 justify-between">
          <div className="flex-col flex w-1/2 ">
            <h1 className="font-bold text-lg">Supported Countries</h1>
            <div className="w-full shadow-md p-2 h-full"></div>
          </div>
          <div className="flex-col flex w-1/2">
            <h1 className="font-bold text-lg">Additional Page</h1>
            <div className="w-full flex flex-col gap-2 shadow-md p-2 overflow-scroll">
              <div className="flex gap-1  ">
                <span className="w-2 h-2 rounded-full bg-orange-400 mt-2"></span>
                <div className="flex flex-col ">
                  <p className="uppercase text-sm text-gray-500">Network</p>
                  <p className="text-lg">Ghana eSIM</p>
                </div>
              </div>
              <div className="bg-gray-200 w-3/4 h-[1px] rounded-lg"></div>
              <div className="flex gap-1  ">
                <span className="w-2 h-2 rounded-full bg-orange-400 mt-2"></span>
                <div className="flex flex-col ">
                  <p className="uppercase text-sm text-gray-500">Network</p>
                  <p className="text-lg">Ghana eSIM</p>
                </div>
              </div>
              <div className="bg-gray-200 w-3/4 h-[1px] rounded-lg"></div>
              <div className="flex gap-1  ">
                <span className="w-2 h-2 rounded-full bg-orange-400 mt-2"></span>
                <div className="flex flex-col ">
                  <p className="uppercase text-sm text-gray-500">Network</p>
                  <p className="text-lg">Ghana eSIM</p>
                </div>
              </div>
              <div className="bg-gray-200 w-3/4 h-[1px] rounded-lg"></div>
              <div className="flex gap-1 ">
                <span className="w-2 h-2 rounded-full bg-orange-400 mt-2"></span>
                <div className="flex flex-col ">
                  <p className="uppercase text-sm text-gray-500">Network</p>
                  <p className="text-lg">Ghana eSIM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
