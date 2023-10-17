import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="md:px-40 px-10 py-4 md:py-8 flex justify-between items-center  ">
      <Image
        src={"/logo.svg"}
        width={56}
        height={56}
        alt="logo"
        className="self-center md:self-start"
      />
      <div className="md:flex gap-8 items-center hidden">
        <Link href={"#"} className="text-lg font-light">
          FAQs
        </Link>
        <Link href={"#"} className="text-lg font-light">
          Reviews
        </Link>
        <button className="bg-orange-400 text-white px-6 py-3 text-center  rounded-sm">
          Log in/ Sign up
        </button>
      </div>
      <div className="cursor-pointer flex md:hidden ">
        <Image src={"/hamburger-icon.png"} width={32} height={32} alt="menu" />
      </div>
    </nav>
  );
}

export default Navbar;
