"use client";
import Header from "./components/Header";
import Continue from "./components/Continue";
import Firstpage from "./components/Firstpage";

export default function Home() {
  return (
    <div className="bg-[#F4F4F4] h-[100vh] flex">
      <div className=" w-[480px] h-[655px] bg-[#Ffffff] m-auto ">
        <div className="w-[416px] h-[385px]       ">
          <Header />
          <Firstpage />
        </div>
        <Continue />
      </div>
    </div>
  );
}
