"use client";
import { Space_Grotesk } from "next/font/google";
import PaymentForm from "./components/PaymentForm";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Popup from "./components/Popup";
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });
export default function Home() {
  const [popup, setPopup] = useState(true);
  const handleClick = () => {
    setPopup(false);
  };
  return (
    <main className="m-0 p-0">
      <Navbar />
      <div
        className={`lg:px-40 lg:py-20 md:px-20 px-5 py-5 ${
          popup && "blur-xl"
        } md:py-10 m-0 w-full bg-main min-h-[80vh] flex-col flex items-center gap-12`}
      >
        <h1
          className={`text-4xl font-bold text-center ${space_grotesk.className}`}
        >
          Your plan is one tap away!
        </h1>
        <PaymentForm />
      </div>
      {popup && (
        <div className="flex justify-center w-full absolute top-0 left-0 p-40">
          <Popup />
        </div>
      )}
    </main>
  );
}
