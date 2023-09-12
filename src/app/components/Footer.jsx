import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 pl-1 flex justify-between">
        <div className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] relative">
          <Link href={"/"}>
            <Image
              src="/images/logo2.png"
              alt="logo"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
