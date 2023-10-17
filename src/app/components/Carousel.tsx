import Image from "next/image";
import React from "react";

function Carousel() {
  return (
    <div className="w-full flex-col flex items-center gap-8">
      <div className="flex px-8 gap-6 w-full justify-between items-center">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ios/50/circled-left-2.png"
          alt="circled-left-2"
          className="cursor-pointer"
        />
        <div
          className="p-8 bg-orange-50 
      flex flex-col w-1/2 rounded-xl items-center gap-6"
        >
          <h1 className="font-bold text-lg">1GB - 14Days</h1>
          <div className="flex w-full justify-between">
            <div className="flex gap-2 items-center">
              <Image
                width={32}
                height={32}
                src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/external-globe-achievements-and-badges-flatart-icons-solid-flatarticons.png"
                alt="external-globe-achievements-and-badges-flatart-icons-solid-flatarticons"
              />
              Data
            </div>
            <p className=" text-lg">Ghana</p>
          </div>
          <div className="bg-gray-800 w-full h-[1px] rounded-lg"></div>
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
            <p className=" text-lg">10GB</p>
          </div>
          <div className="bg-gray-800 w-full h-[1px] rounded-lg"></div>
          <div className="flex w-full justify-between">
            <div className="flex gap-2 items-center">
              <Image
                width={32}
                height={32}
                src="https://img.icons8.com/ios/50/card-exchange.png"
                alt="card-exchange"
              />
              Price
            </div>
            <p className=" text-lg">30 days</p>
          </div>
        </div>
        <div
          className="p-8 bg-violet-50 
      flex flex-col w-1/2 rounded-xl items-center justify-center gap-6"
        >
          <h1 className="font-bold text-lg">1GB - 14Days</h1>
          <div className="flex w-full justify-between">
            <div className="flex gap-2 items-center">
              <Image
                width={32}
                height={32}
                src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/external-globe-achievements-and-badges-flatart-icons-solid-flatarticons.png"
                alt="external-globe-achievements-and-badges-flatart-icons-solid-flatarticons"
              />
              Data
            </div>
            <p className=" text-lg">Ghana</p>
          </div>
          <div className="bg-gray-800 w-full h-[1px] rounded-lg"></div>
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
            <p className=" text-lg">10GB</p>
          </div>
          <div className="bg-gray-800 w-full h-[1px] rounded-lg"></div>
          <div className="flex w-full justify-between">
            <div className="flex gap-2 items-center">
              <Image
                width={32}
                height={32}
                src="https://img.icons8.com/ios/50/card-exchange.png"
                alt="card-exchange"
              />
              Price
            </div>
            <p className=" text-lg">30 days</p>
          </div>
        </div>
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ios/50/circled-right-2.png"
          alt="circled-right-2"
          className="cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-4 h-4 bg-orange-400 rounded-full"></span>
        <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
        <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
        <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
        <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
      </div>
    </div>
  );
}

export default Carousel;
