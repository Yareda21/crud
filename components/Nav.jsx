import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div
      className="flex justify-between bg-white/5 w-full 
    mt-[30px] px-10 py-3"
    >
      <Link className="flex text-white/80 font-extrabold text-xl" href={"/"}>
        Home
      </Link>
      <Link
        className="flex text-black/75 font-extrabold bg-slate-300 px-5 py-2"
        href={"/addTopic"}
      >
        Add Topic
      </Link>
    </div>
  );
};

export default Nav;
